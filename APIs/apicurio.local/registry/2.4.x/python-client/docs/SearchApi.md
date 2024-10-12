# openapi_client.SearchApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_artifacts**](SearchApi.md#search_artifacts) | **GET** /search/artifacts | Search for artifacts
[**search_artifacts_by_content**](SearchApi.md#search_artifacts_by_content) | **POST** /search/artifacts | Search for artifacts by content


# **search_artifacts**
> ArtifactSearchResults search_artifacts(name=name, offset=offset, limit=limit, order=order, orderby=orderby, labels=labels, properties=properties, description=description, group=group, global_id=global_id, content_id=content_id)

Search for artifacts

Returns a paginated list of all artifacts that match the provided filter criteria. 

### Example


```python
import openapi_client
from openapi_client.models.artifact_search_results import ArtifactSearchResults
from openapi_client.models.sort_by import SortBy
from openapi_client.models.sort_order import SortOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    name = 'name_example' # str | Filter by artifact name. (optional)
    offset = 0 # int | The number of artifacts to skip before starting to collect the result set.  Defaults to 0. (optional) (default to 0)
    limit = 20 # int | The number of artifacts to return.  Defaults to 20. (optional) (default to 20)
    order = openapi_client.SortOrder() # SortOrder | Sort order, ascending (`asc`) or descending (`desc`). (optional)
    orderby = openapi_client.SortBy() # SortBy | The field to sort by.  Can be one of:  * `name` * `createdOn`  (optional)
    labels = ['labels_example'] # List[str] | Filter by label.  Include one or more label to only return artifacts containing all of the specified labels. (optional)
    properties = ['properties_example'] # List[str] | Filter by one or more name/value property.  Separate each name/value pair using a colon.  For example `properties=foo:bar` will return only artifacts with a custom property named `foo` and value `bar`. (optional)
    description = 'description_example' # str | Filter by description. (optional)
    group = 'group_example' # str | Filter by artifact group. (optional)
    global_id = 56 # int | Filter by globalId. (optional)
    content_id = 56 # int | Filter by contentId. (optional)

    try:
        # Search for artifacts
        api_response = api_instance.search_artifacts(name=name, offset=offset, limit=limit, order=order, orderby=orderby, labels=labels, properties=properties, description=description, group=group, global_id=global_id, content_id=content_id)
        print("The response of SearchApi->search_artifacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_artifacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Filter by artifact name. | [optional] 
 **offset** | **int**| The number of artifacts to skip before starting to collect the result set.  Defaults to 0. | [optional] [default to 0]
 **limit** | **int**| The number of artifacts to return.  Defaults to 20. | [optional] [default to 20]
 **order** | [**SortOrder**](.md)| Sort order, ascending (&#x60;asc&#x60;) or descending (&#x60;desc&#x60;). | [optional] 
 **orderby** | [**SortBy**](.md)| The field to sort by.  Can be one of:  * &#x60;name&#x60; * &#x60;createdOn&#x60;  | [optional] 
 **labels** | [**List[str]**](str.md)| Filter by label.  Include one or more label to only return artifacts containing all of the specified labels. | [optional] 
 **properties** | [**List[str]**](str.md)| Filter by one or more name/value property.  Separate each name/value pair using a colon.  For example &#x60;properties&#x3D;foo:bar&#x60; will return only artifacts with a custom property named &#x60;foo&#x60; and value &#x60;bar&#x60;. | [optional] 
 **description** | **str**| Filter by description. | [optional] 
 **group** | **str**| Filter by artifact group. | [optional] 
 **global_id** | **int**| Filter by globalId. | [optional] 
 **content_id** | **int**| Filter by contentId. | [optional] 

### Return type

[**ArtifactSearchResults**](ArtifactSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a result set of artifacts - one for each artifact in the registry that matches the criteria. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_artifacts_by_content**
> ArtifactSearchResults search_artifacts_by_content(body, canonical=canonical, artifact_type=artifact_type, offset=offset, limit=limit, order=order, orderby=orderby)

Search for artifacts by content

Returns a paginated list of all artifacts with at least one version that matches the posted content. 

### Example


```python
import openapi_client
from openapi_client.models.artifact_search_results import ArtifactSearchResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    body = None # bytearray | The content to search for.
    canonical = True # bool | Parameter that can be set to `true` to indicate that the server should \"canonicalize\" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter. (optional)
    artifact_type = 'artifact_type_example' # str | Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts. (optional)
    offset = 0 # int | The number of artifacts to skip before starting to collect the result set.  Defaults to 0. (optional) (default to 0)
    limit = 20 # int | The number of artifacts to return.  Defaults to 20. (optional) (default to 20)
    order = 'order_example' # str | Sort order, ascending (`asc`) or descending (`desc`). (optional)
    orderby = 'orderby_example' # str | The field to sort by.  Can be one of:  * `name` * `createdOn`  (optional)

    try:
        # Search for artifacts by content
        api_response = api_instance.search_artifacts_by_content(body, canonical=canonical, artifact_type=artifact_type, offset=offset, limit=limit, order=order, orderby=orderby)
        print("The response of SearchApi->search_artifacts_by_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_artifacts_by_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **bytearray**| The content to search for. | 
 **canonical** | **bool**| Parameter that can be set to &#x60;true&#x60; to indicate that the server should \&quot;canonicalize\&quot; the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the &#x60;artifactType&#x60; query parameter. | [optional] 
 **artifact_type** | **str**| Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the &#x60;canonical&#x60; query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts. | [optional] 
 **offset** | **int**| The number of artifacts to skip before starting to collect the result set.  Defaults to 0. | [optional] [default to 0]
 **limit** | **int**| The number of artifacts to return.  Defaults to 20. | [optional] [default to 20]
 **order** | **str**| Sort order, ascending (&#x60;asc&#x60;) or descending (&#x60;desc&#x60;). | [optional] 
 **orderby** | **str**| The field to sort by.  Can be one of:  * &#x60;name&#x60; * &#x60;createdOn&#x60;  | [optional] 

### Return type

[**ArtifactSearchResults**](ArtifactSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a result set of artifacts - one for each artifact in the registry that matches the criteria. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


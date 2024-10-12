# openapi_client.SearchApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_artifacts**](SearchApi.md#search_artifacts) | **GET** /search/artifacts | Search for artifacts
[**search_versions**](SearchApi.md#search_versions) | **GET** /search/artifacts/{artifactId}/versions | Search artifact versions


# **search_artifacts**
> ArtifactSearchResults search_artifacts(offset, limit, search=search, over=over, order=order)

Search for artifacts

Returns a paginated list of all artifacts that match the provided search criteria. 

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
    offset = 0 # int | The number of artifacts to skip before starting to collect the result set. (default to 0)
    limit = 20 # int | The number of artifacts to return. (default to 20)
    search = 'search_example' # str | The text to search. (optional)
    over = 'over_example' # str | What fields to search. (optional)
    order = 'order_example' # str | Sort order, ascending or descending. (optional)

    try:
        # Search for artifacts
        api_response = api_instance.search_artifacts(offset, limit, search=search, over=over, order=order)
        print("The response of SearchApi->search_artifacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_artifacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| The number of artifacts to skip before starting to collect the result set. | [default to 0]
 **limit** | **int**| The number of artifacts to return. | [default to 20]
 **search** | **str**| The text to search. | [optional] 
 **over** | **str**| What fields to search. | [optional] 
 **order** | **str**| Sort order, ascending or descending. | [optional] 

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

# **search_versions**
> VersionSearchResults search_versions(artifact_id, offset, limit)

Search artifact versions

Searches for versions of a specific artifact.  This is typically used to get a listing of all versions of an artifact (for example, in a user interface).

### Example


```python
import openapi_client
from openapi_client.models.version_search_results import VersionSearchResults
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
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    offset = 56 # int | The number of versions to skip before starting to collect the result set.
    limit = 56 # int | The number of versions to return.

    try:
        # Search artifact versions
        api_response = api_instance.search_versions(artifact_id, offset, limit)
        print("The response of SearchApi->search_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 
 **offset** | **int**| The number of versions to skip before starting to collect the result set. | 
 **limit** | **int**| The number of versions to return. | 

### Return type

[**VersionSearchResults**](VersionSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a result set of versions - one for each version of the artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


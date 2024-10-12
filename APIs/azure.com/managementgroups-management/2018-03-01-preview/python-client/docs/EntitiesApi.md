# openapi_client.EntitiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entities_list**](EntitiesApi.md#entities_list) | **POST** /providers/Microsoft.Management/getEntities | 


# **entities_list**
> EntityListResult entities_list(api_version, skiptoken=skiptoken, skip=skip, top=top, select=select, search=search, filter=filter, view=view, group_name=group_name, cache_control=cache_control)



List all entities (Management Groups, Subscriptions, etc.) for the authenticated user.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.entity_list_result import EntityListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntitiesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-01-01-preview.
    skiptoken = 'skiptoken_example' # str | Page continuation token is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls. (optional)
    skip = 56 # int | Number of entities to skip over when retrieving results. Passing this in will override $skipToken. (optional)
    top = 56 # int | Number of elements to return when retrieving results. Passing this in will override $skipToken. (optional)
    select = 'select_example' # str | This parameter specifies the fields to include in the response. Can include any combination of Name,DisplayName,Type,ParentDisplayNameChain,ParentChain, e.g. '$select=Name,DisplayName,Type,ParentDisplayNameChain,ParentNameChain'. When specified the $select parameter can override select in $skipToken. (optional)
    search = 'search_example' # str | The $search parameter is used in conjunction with the $filter parameter to return three different outputs depending on the parameter passed in. With $search=AllowedParents the API will return the entity info of all groups that the requested entity will be able to reparent to as determined by the user's permissions. With $search=AllowedChildren the API will return the entity info of all entities that can be added as children of the requested entity. With $search=ParentAndFirstLevelChildren the API will return the parent and  first level of children that the user has either direct access to or indirect access via one of their descendants. (optional)
    filter = 'filter_example' # str | The filter parameter allows you to filter on the name or display name fields. You can check for equality on the name field (e.g. name eq '{entityName}')  and you can check for substrings on either the name or display name fields(e.g. contains(name, '{substringToSearch}'), contains(displayName, '{substringToSearch')). Note that the '{entityName}' and '{substringToSearch}' fields are checked case insensitively. (optional)
    view = 'view_example' # str | The view parameter allows clients to filter the type of data that is returned by the getEntities call. (optional)
    group_name = 'group_name_example' # str | A filter which allows the get entities call to focus on a particular group (i.e. \"$filter=name eq 'groupName'\") (optional)
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_response = api_instance.entities_list(api_version, skiptoken=skiptoken, skip=skip, top=top, select=select, search=search, filter=filter, view=view, group_name=group_name, cache_control=cache_control)
        print("The response of EntitiesApi->entities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntitiesApi->entities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-01-01-preview. | 
 **skiptoken** | **str**| Page continuation token is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **skip** | **int**| Number of entities to skip over when retrieving results. Passing this in will override $skipToken. | [optional] 
 **top** | **int**| Number of elements to return when retrieving results. Passing this in will override $skipToken. | [optional] 
 **select** | **str**| This parameter specifies the fields to include in the response. Can include any combination of Name,DisplayName,Type,ParentDisplayNameChain,ParentChain, e.g. &#39;$select&#x3D;Name,DisplayName,Type,ParentDisplayNameChain,ParentNameChain&#39;. When specified the $select parameter can override select in $skipToken. | [optional] 
 **search** | **str**| The $search parameter is used in conjunction with the $filter parameter to return three different outputs depending on the parameter passed in. With $search&#x3D;AllowedParents the API will return the entity info of all groups that the requested entity will be able to reparent to as determined by the user&#39;s permissions. With $search&#x3D;AllowedChildren the API will return the entity info of all entities that can be added as children of the requested entity. With $search&#x3D;ParentAndFirstLevelChildren the API will return the parent and  first level of children that the user has either direct access to or indirect access via one of their descendants. | [optional] 
 **filter** | **str**| The filter parameter allows you to filter on the name or display name fields. You can check for equality on the name field (e.g. name eq &#39;{entityName}&#39;)  and you can check for substrings on either the name or display name fields(e.g. contains(name, &#39;{substringToSearch}&#39;), contains(displayName, &#39;{substringToSearch&#39;)). Note that the &#39;{entityName}&#39; and &#39;{substringToSearch}&#39; fields are checked case insensitively. | [optional] 
 **view** | **str**| The view parameter allows clients to filter the type of data that is returned by the getEntities call. | [optional] 
 **group_name** | **str**| A filter which allows the get entities call to focus on a particular group (i.e. \&quot;$filter&#x3D;name eq &#39;groupName&#39;\&quot;) | [optional] 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

### Return type

[**EntityListResult**](EntityListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


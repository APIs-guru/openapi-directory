# openapi_client.ManagementGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**management_groups_get**](ManagementGroupsApi.md#management_groups_get) | **GET** /providers/Microsoft.Management/managementGroups/{groupId} | 
[**management_groups_list**](ManagementGroupsApi.md#management_groups_list) | **GET** /providers/Microsoft.Management/managementGroups | 


# **management_groups_get**
> ManagementGroupWithHierarchy management_groups_get(group_id, api_version, expand=expand, recurse=recurse)



Get the details of the management group. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_group_with_hierarchy import ManagementGroupWithHierarchy
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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-08-31-preview.
    expand = 'expand_example' # str | The $expand=children query string parameter allows clients to request inclusion of children in the response payload. (optional)
    recurse = True # bool | The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. (optional)

    try:
        api_response = api_instance.management_groups_get(group_id, api_version, expand=expand, recurse=recurse)
        print("The response of ManagementGroupsApi->management_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-08-31-preview. | 
 **expand** | **str**| The $expand&#x3D;children query string parameter allows clients to request inclusion of children in the response payload. | [optional] 
 **recurse** | **bool**| The $recurse&#x3D;true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. | [optional] 

### Return type

[**ManagementGroupWithHierarchy**](ManagementGroupWithHierarchy.md)

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

# **management_groups_list**
> ManagementGroupListResult management_groups_list(api_version, skiptoken=skiptoken)



List management groups for the authenticated user. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_group_list_result import ManagementGroupListResult
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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-08-31-preview.
    skiptoken = 'skiptoken_example' # str | Page continuation token is only used if a previous operation returned a partial result.  If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.  (optional)

    try:
        api_response = api_instance.management_groups_list(api_version, skiptoken=skiptoken)
        print("The response of ManagementGroupsApi->management_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-08-31-preview. | 
 **skiptoken** | **str**| Page continuation token is only used if a previous operation returned a partial result.  If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.  | [optional] 

### Return type

[**ManagementGroupListResult**](ManagementGroupListResult.md)

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


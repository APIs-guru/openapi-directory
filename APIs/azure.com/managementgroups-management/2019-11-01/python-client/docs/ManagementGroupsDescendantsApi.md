# openapi_client.ManagementGroupsDescendantsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**management_groups_get_descendants**](ManagementGroupsDescendantsApi.md#management_groups_get_descendants) | **GET** /providers/Microsoft.Management/managementGroups/{groupId}/descendants | 


# **management_groups_get_descendants**
> DescendantListResult management_groups_get_descendants(group_id, api_version, skiptoken=skiptoken, top=top)



List all entities that descend from a management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.descendant_list_result import DescendantListResult
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
    api_instance = openapi_client.ManagementGroupsDescendantsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-01-01-preview.
    skiptoken = 'skiptoken_example' # str | Page continuation token is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | Number of elements to return when retrieving results. Passing this in will override $skipToken. (optional)

    try:
        api_response = api_instance.management_groups_get_descendants(group_id, api_version, skiptoken=skiptoken, top=top)
        print("The response of ManagementGroupsDescendantsApi->management_groups_get_descendants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementGroupsDescendantsApi->management_groups_get_descendants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-01-01-preview. | 
 **skiptoken** | **str**| Page continuation token is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| Number of elements to return when retrieving results. Passing this in will override $skipToken. | [optional] 

### Return type

[**DescendantListResult**](DescendantListResult.md)

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


# openapi_client.ApisByTagApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_list_by_tags**](ApisByTagApi.md#api_list_by_tags) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apisByTags | 


# **api_list_by_tags**
> ApiListByTags200Response api_list_by_tags(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip, include_not_tagged_apis=include_not_tagged_apis)



Lists a collection of apis associated with tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_list_by_tags200_response import ApiListByTags200Response
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
    api_instance = openapi_client.ApisByTagApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------|   |name | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |displayName | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |apiRevision | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |path | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |serviceUrl | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |isCurrent | eq |    |  (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)
    include_not_tagged_apis = True # bool | Include not tagged APIs. (optional)

    try:
        api_response = api_instance.api_list_by_tags(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip, include_not_tagged_apis=include_not_tagged_apis)
        print("The response of ApisByTagApi->api_list_by_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApisByTagApi->api_list_by_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------|   |name | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |displayName | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |apiRevision | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |path | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |serviceUrl | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith| |isCurrent | eq |    |  | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 
 **include_not_tagged_apis** | **bool**| Include not tagged APIs. | [optional] 

### Return type

[**ApiListByTags200Response**](ApiListByTags200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of TagResource entities. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


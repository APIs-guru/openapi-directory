# openapi_client.RevisionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_revisions_list**](RevisionsApi.md#api_revisions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/revisions | 


# **api_revisions_list**
> ApiRevisionCollection api_revisions_list(resource_group_name, service_name, api_version, subscription_id, api_id, filter=filter, top=top, skip=skip)



Lists all revisions of an API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_revision_collection import ApiRevisionCollection
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
    api_instance = openapi_client.RevisionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    filter = 'filter_example' # str | | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------|   |apiRevision | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith|  (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.api_revisions_list(resource_group_name, service_name, api_version, subscription_id, api_id, filter=filter, top=top, skip=skip)
        print("The response of RevisionsApi->api_revisions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RevisionsApi->api_revisions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **filter** | **str**| | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------|   |apiRevision | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith|  | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ApiRevisionCollection**](ApiRevisionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation returns a list of revision details. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.ProductSubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_subscriptions_list**](ProductSubscriptionsApi.md#product_subscriptions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/subscriptions | 


# **product_subscriptions_list**
> ProductSubscriptionsList200Response product_subscriptions_list(resource_group_name, service_name, product_id, api_version, subscription_id, filter=filter, top=top, skip=skip)



Lists the collection of subscriptions to the specified product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_subscriptions_list200_response import ProductSubscriptionsList200Response
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
    api_instance = openapi_client.ProductSubscriptionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | | Field        | Supported operators    | Supported functions                         | |--------------|------------------------|---------------------------------------------| | id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state        | eq                     |                                             | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.product_subscriptions_list(resource_group_name, service_name, product_id, api_version, subscription_id, filter=filter, top=top, skip=skip)
        print("The response of ProductSubscriptionsApi->product_subscriptions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductSubscriptionsApi->product_subscriptions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| | Field        | Supported operators    | Supported functions                         | |--------------|------------------------|---------------------------------------------| | id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state        | eq                     |                                             | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ProductSubscriptionsList200Response**](ProductSubscriptionsList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of subscription entities. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.ProductSubscriptionsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_subscriptions_list**](ProductSubscriptionsApi.md#product_subscriptions_list) | **GET** /products/{productId}/subscriptions | 


# **product_subscriptions_list**
> ProductSubscriptionsList200Response product_subscriptions_list(product_id, api_version, filter=filter, top=top, skip=skip)



Lists the collection of subscriptions to the specified product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_subscriptions_list200_response import ProductSubscriptionsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductSubscriptionsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | | Field        | Supported operators    | Supported functions                         | |--------------|------------------------|---------------------------------------------| | id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state        | eq                     |                                             | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.product_subscriptions_list(product_id, api_version, filter=filter, top=top, skip=skip)
        print("The response of ProductSubscriptionsApi->product_subscriptions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductSubscriptionsApi->product_subscriptions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| | Field        | Supported operators    | Supported functions                         | |--------------|------------------------|---------------------------------------------| | id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state        | eq                     |                                             | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ProductSubscriptionsList200Response**](ProductSubscriptionsList200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of subscription entities. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


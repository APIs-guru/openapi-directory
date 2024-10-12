# openapi_client.OrdersApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orders**](OrdersApi.md#orders) | **GET** /orders/orders/{orderID}/{name} | Orders


# **orders**
> str orders(order_id, accept, name)

Orders

Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | Unique order identifier
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    name = 'name_example' # str | Surname of traveller

    try:
        # Orders
        api_response = api_instance.orders(order_id, accept, name)
        print("The response of OrdersApi->orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| Unique order identifier | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **name** | **str**| Surname of traveller | 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


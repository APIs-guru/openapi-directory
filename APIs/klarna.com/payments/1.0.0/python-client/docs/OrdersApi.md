# openapi_client.OrdersApi

All URIs are relative to *https://api.klarna.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_authorization**](OrdersApi.md#cancel_authorization) | **DELETE** /payments/v1/authorizations/{authorizationToken} | Cancel an existing authorization
[**create_order**](OrdersApi.md#create_order) | **POST** /payments/v1/authorizations/{authorizationToken}/order | Create a new order
[**purchase_token**](OrdersApi.md#purchase_token) | **POST** /payments/v1/authorizations/{authorizationToken}/customer-token | Generate a consumer token


# **cancel_authorization**
> cancel_authorization(authorization_token)

Cancel an existing authorization

Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization. Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.klarna.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.klarna.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    authorization_token = 'authorization_token_example' # str | 

    try:
        # Cancel an existing authorization
        api_instance.cancel_authorization(authorization_token)
    except Exception as e:
        print("Exception when calling OrdersApi->cancel_authorization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The authorization was cancelled successfully. |  -  |
**403** | You were not authorized to execute this operation. |  -  |
**404** | The authorization does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_order**
> Order create_order(authorization_token, create_order_request=create_order_request)

Create a new order

Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api). Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.

### Example


```python
import openapi_client
from openapi_client.models.create_order_request import CreateOrderRequest
from openapi_client.models.order import Order
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.klarna.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.klarna.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    authorization_token = 'authorization_token_example' # str | 
    create_order_request = openapi_client.CreateOrderRequest() # CreateOrderRequest |  (optional)

    try:
        # Create a new order
        api_response = api_instance.create_order(authorization_token, create_order_request=create_order_request)
        print("The response of OrdersApi->create_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_token** | **str**|  | 
 **create_order_request** | [**CreateOrderRequest**](CreateOrderRequest.md)|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Order was successfully created. |  -  |
**400** | We were unable to create an order with the provided data. Some field constraint was violated. |  -  |
**403** | You were not authorized to execute this operation. |  -  |
**404** | The authorization does not exist. |  -  |
**409** | The data in the request does not match the session for the authorization. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchase_token**
> CustomerTokenCreationResponse purchase_token(authorization_token, customer_token_creation_request=customer_token_creation_request)

Generate a consumer token

Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details. Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.

### Example


```python
import openapi_client
from openapi_client.models.customer_token_creation_request import CustomerTokenCreationRequest
from openapi_client.models.customer_token_creation_response import CustomerTokenCreationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.klarna.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.klarna.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrdersApi(api_client)
    authorization_token = 'authorization_token_example' # str | 
    customer_token_creation_request = openapi_client.CustomerTokenCreationRequest() # CustomerTokenCreationRequest |  (optional)

    try:
        # Generate a consumer token
        api_response = api_instance.purchase_token(authorization_token, customer_token_creation_request=customer_token_creation_request)
        print("The response of OrdersApi->purchase_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->purchase_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_token** | **str**|  | 
 **customer_token_creation_request** | [**CustomerTokenCreationRequest**](CustomerTokenCreationRequest.md)|  | [optional] 

### Return type

[**CustomerTokenCreationResponse**](CustomerTokenCreationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token was successfully created. |  -  |
**400** | We were unable to create a customer token with the provided data. Some field constraint was violated. |  -  |
**403** | You were not authorized to execute this operation. |  -  |
**404** | The authorization does not exist. |  -  |
**409** | The data in the request does not match the session for the authorization. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.GlobalCertificateOrderApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_certificate_order_get_all_certificate_orders**](GlobalCertificateOrderApi.md#global_certificate_order_get_all_certificate_orders) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/certificateOrders | Lists all domains in a subscription
[**global_certificate_order_validate_certificate_purchase_information**](GlobalCertificateOrderApi.md#global_certificate_order_validate_certificate_purchase_information) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/validateCertificateRegistrationInformation | Validate certificate purchase information


# **global_certificate_order_get_all_certificate_orders**
> CertificateOrderCollection global_certificate_order_get_all_certificate_orders(subscription_id, api_version)

Lists all domains in a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order_collection import CertificateOrderCollection
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
    api_instance = openapi_client.GlobalCertificateOrderApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists all domains in a subscription
        api_response = api_instance.global_certificate_order_get_all_certificate_orders(subscription_id, api_version)
        print("The response of GlobalCertificateOrderApi->global_certificate_order_get_all_certificate_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalCertificateOrderApi->global_certificate_order_get_all_certificate_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**CertificateOrderCollection**](CertificateOrderCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_certificate_order_validate_certificate_purchase_information**
> object global_certificate_order_validate_certificate_purchase_information(subscription_id, api_version, certificate_order)

Validate certificate purchase information

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order import CertificateOrder
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
    api_instance = openapi_client.GlobalCertificateOrderApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    certificate_order = openapi_client.CertificateOrder() # CertificateOrder | Certificate order

    try:
        # Validate certificate purchase information
        api_response = api_instance.global_certificate_order_validate_certificate_purchase_information(subscription_id, api_version, certificate_order)
        print("The response of GlobalCertificateOrderApi->global_certificate_order_validate_certificate_purchase_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalCertificateOrderApi->global_certificate_order_validate_certificate_purchase_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **certificate_order** | [**CertificateOrder**](CertificateOrder.md)| Certificate order | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


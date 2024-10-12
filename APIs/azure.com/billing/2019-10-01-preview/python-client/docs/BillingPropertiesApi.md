# openapi_client.BillingPropertiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_property_get**](BillingPropertiesApi.md#billing_property_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingProperty/default | 


# **billing_property_get**
> BillingProperty billing_property_get(subscription_id, api_version)



Get billing property by subscription Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_property import BillingProperty
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
    api_instance = openapi_client.BillingPropertiesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.billing_property_get(subscription_id, api_version)
        print("The response of BillingPropertiesApi->billing_property_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingPropertiesApi->billing_property_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

### Return type

[**BillingProperty**](BillingProperty.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


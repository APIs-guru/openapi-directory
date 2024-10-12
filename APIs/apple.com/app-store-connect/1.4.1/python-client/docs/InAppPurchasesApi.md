# openapi_client.InAppPurchasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**in_app_purchases_get_instance**](InAppPurchasesApi.md#in_app_purchases_get_instance) | **GET** /v1/inAppPurchases/{id} | 


# **in_app_purchases_get_instance**
> InAppPurchaseResponse in_app_purchases_get_instance(id, fields_in_app_purchases=fields_in_app_purchases, include=include, limit_apps=limit_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.in_app_purchase_response import InAppPurchaseResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InAppPurchasesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_in_app_purchases = ['fields_in_app_purchases_example'] # List[str] | the fields to include for returned resources of type inAppPurchases (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    limit_apps = 56 # int | maximum number of related apps returned (when they are included) (optional)

    try:
        api_response = api_instance.in_app_purchases_get_instance(id, fields_in_app_purchases=fields_in_app_purchases, include=include, limit_apps=limit_apps)
        print("The response of InAppPurchasesApi->in_app_purchases_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InAppPurchasesApi->in_app_purchases_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_in_app_purchases** | [**List[str]**](str.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **limit_apps** | **int**| maximum number of related apps returned (when they are included) | [optional] 

### Return type

[**InAppPurchaseResponse**](InAppPurchaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single InAppPurchase |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


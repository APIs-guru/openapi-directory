# openapi_client.BillingDetailsApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_billing_details**](BillingDetailsApi.md#get_billing_details) | **GET** /restv2/game/{apiKey}/admin/billingDetails | Retrieves the Billing Details
[**put_billing_details**](BillingDetailsApi.md#put_billing_details) | **PUT** /restv2/game/{apiKey}/admin/billingDetails | Updates the Billing Details


# **get_billing_details**
> BillingDetailsModel get_billing_details(api_key)

Retrieves the Billing Details

Retrieves the Billing Details.

### Example


```python
import openapi_client
from openapi_client.models.billing_details_model import BillingDetailsModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BillingDetailsApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # Retrieves the Billing Details
        api_response = api_instance.get_billing_details(api_key)
        print("The response of BillingDetailsApi->get_billing_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingDetailsApi->get_billing_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

[**BillingDetailsModel**](BillingDetailsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_billing_details**
> BillingDetailsModel put_billing_details(api_key, billing_details_model)

Updates the Billing Details

Updates the Billing Details.

### Example


```python
import openapi_client
from openapi_client.models.billing_details_model import BillingDetailsModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BillingDetailsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    billing_details_model = openapi_client.BillingDetailsModel() # BillingDetailsModel | billingDetails

    try:
        # Updates the Billing Details
        api_response = api_instance.put_billing_details(api_key, billing_details_model)
        print("The response of BillingDetailsApi->put_billing_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingDetailsApi->put_billing_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **billing_details_model** | [**BillingDetailsModel**](BillingDetailsModel.md)| billingDetails | 

### Return type

[**BillingDetailsModel**](BillingDetailsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


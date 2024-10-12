# openapi_client.WhatsAppApi

All URIs are relative to *https://api.nexmo.com/beta/chatapp-accounts*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_wa_account**](WhatsAppApi.md#get_wa_account) | **GET** /whatsapp/{external_id} | Retrieve a Whatsapp account


# **get_wa_account**
> WAAccountResponse get_wa_account(external_id)

Retrieve a Whatsapp account

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.wa_account_response import WAAccountResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/beta/chatapp-accounts
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/beta/chatapp-accounts"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WhatsAppApi(api_client)
    external_id = 'external_id_example' # str | External id of the account you want to retrieve. In this case it will be the WhatsApp number.

    try:
        # Retrieve a Whatsapp account
        api_response = api_instance.get_wa_account(external_id)
        print("The response of WhatsAppApi->get_wa_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WhatsAppApi->get_wa_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| External id of the account you want to retrieve. In this case it will be the WhatsApp number. | 

### Return type

[**WAAccountResponse**](WAAccountResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


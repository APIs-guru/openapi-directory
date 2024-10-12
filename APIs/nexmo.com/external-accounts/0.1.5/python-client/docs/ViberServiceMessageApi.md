# openapi_client.ViberServiceMessageApi

All URIs are relative to *https://api.nexmo.com/beta/chatapp-accounts*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_vsm_account**](ViberServiceMessageApi.md#get_vsm_account) | **GET** /viber_service_msg/{external_id} | Retrieve a Viber Service Message account


# **get_vsm_account**
> VSMAccountResponse get_vsm_account(external_id)

Retrieve a Viber Service Message account

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.vsm_account_response import VSMAccountResponse
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
    api_instance = openapi_client.ViberServiceMessageApi(api_client)
    external_id = 'external_id_example' # str | External id of the account you want to retrieve. In this case it will be your Viber Service Message ID.

    try:
        # Retrieve a Viber Service Message account
        api_response = api_instance.get_vsm_account(external_id)
        print("The response of ViberServiceMessageApi->get_vsm_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViberServiceMessageApi->get_vsm_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| External id of the account you want to retrieve. In this case it will be your Viber Service Message ID. | 

### Return type

[**VSMAccountResponse**](VSMAccountResponse.md)

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


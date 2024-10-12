# openapi_client.ApplicationApi

All URIs are relative to *https://api.nexmo.com/beta/chatapp-accounts*

Method | HTTP request | Description
------------- | ------------- | -------------
[**link_application**](ApplicationApi.md#link_application) | **POST** /{provider}/{external_id}/applications | Link application to an account
[**unli_without_applicationnk_application**](ApplicationApi.md#unli_without_applicationnk_application) | **DELETE** /{provider}/{external_id}/applications/{application_id} | Unlink application from an account


# **link_application**
> AccountResponse link_application(provider, external_id, link_application_request)

Link application to an account

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.account_response import AccountResponse
from openapi_client.models.link_application_request import LinkApplicationRequest
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
    api_instance = openapi_client.ApplicationApi(api_client)
    provider = 'provider_example' # str | Provider of the account you want to assign an application to
    external_id = 'external_id_example' # str | External id of the account you want to assign an application to. This is channel dependent. For Facebook it will be your Facebook Page ID, for Viber your Viber Service Message ID and for WhatsApp your WhatsApp number.
    link_application_request = openapi_client.LinkApplicationRequest() # LinkApplicationRequest | Request body can contain any of the following. Please note, the only one application can be linked to the account.

    try:
        # Link application to an account
        api_response = api_instance.link_application(provider, external_id, link_application_request)
        print("The response of ApplicationApi->link_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->link_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**| Provider of the account you want to assign an application to | 
 **external_id** | **str**| External id of the account you want to assign an application to. This is channel dependent. For Facebook it will be your Facebook Page ID, for Viber your Viber Service Message ID and for WhatsApp your WhatsApp number. | 
 **link_application_request** | [**LinkApplicationRequest**](LinkApplicationRequest.md)| Request body can contain any of the following. Please note, the only one application can be linked to the account. | 

### Return type

[**AccountResponse**](AccountResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unli_without_applicationnk_application**
> unli_without_applicationnk_application(provider, external_id, application_id)

Unlink application from an account

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
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
    api_instance = openapi_client.ApplicationApi(api_client)
    provider = 'provider_example' # str | Provider of the account you want to unlink an application from
    external_id = 'external_id_example' # str | External id of the account you want to unlink an application from
    application_id = 'application_id_example' # str | Id of the application you want to unlink

    try:
        # Unlink application from an account
        api_instance.unli_without_applicationnk_application(provider, external_id, application_id)
    except Exception as e:
        print("Exception when calling ApplicationApi->unli_without_applicationnk_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**| Provider of the account you want to unlink an application from | 
 **external_id** | **str**| External id of the account you want to unlink an application from | 
 **application_id** | **str**| Id of the application you want to unlink | 

### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


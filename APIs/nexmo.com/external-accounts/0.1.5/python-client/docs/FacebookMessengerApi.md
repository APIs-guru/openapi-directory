# openapi_client.FacebookMessengerApi

All URIs are relative to *https://api.nexmo.com/beta/chatapp-accounts*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_messenger_account**](FacebookMessengerApi.md#create_messenger_account) | **POST** /messenger | Create a Messenger account
[**delete_messenger_account**](FacebookMessengerApi.md#delete_messenger_account) | **DELETE** /messenger/{external_id} | Delete a Messenger account
[**get_messenger_account**](FacebookMessengerApi.md#get_messenger_account) | **GET** /messenger/{external_id} | Retrieve a Messenger account
[**update_messenger_account**](FacebookMessengerApi.md#update_messenger_account) | **PATCH** /messenger/{external_id} | Update a Messenger account


# **create_messenger_account**
> MessengerAccountResponse create_messenger_account(create_messenger_account_request)

Create a Messenger account

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_messenger_account_request import CreateMessengerAccountRequest
from openapi_client.models.messenger_account_response import MessengerAccountResponse
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
    api_instance = openapi_client.FacebookMessengerApi(api_client)
    create_messenger_account_request = openapi_client.CreateMessengerAccountRequest() # CreateMessengerAccountRequest | 

    try:
        # Create a Messenger account
        api_response = api_instance.create_messenger_account(create_messenger_account_request)
        print("The response of FacebookMessengerApi->create_messenger_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FacebookMessengerApi->create_messenger_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_messenger_account_request** | [**CreateMessengerAccountRequest**](CreateMessengerAccountRequest.md)|  | 

### Return type

[**MessengerAccountResponse**](MessengerAccountResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created. |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_messenger_account**
> delete_messenger_account(external_id)

Delete a Messenger account

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
    api_instance = openapi_client.FacebookMessengerApi(api_client)
    external_id = 'external_id_example' # str | External id of the account you want to delete. In this case it is the Facebook Page ID.

    try:
        # Delete a Messenger account
        api_instance.delete_messenger_account(external_id)
    except Exception as e:
        print("Exception when calling FacebookMessengerApi->delete_messenger_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| External id of the account you want to delete. In this case it is the Facebook Page ID. | 

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
**404** | Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_messenger_account**
> MessengerAccountResponse get_messenger_account(external_id)

Retrieve a Messenger account

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.messenger_account_response import MessengerAccountResponse
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
    api_instance = openapi_client.FacebookMessengerApi(api_client)
    external_id = 'external_id_example' # str | External id of the account you want to retrieve. In this case it is the Facebook Page ID.

    try:
        # Retrieve a Messenger account
        api_response = api_instance.get_messenger_account(external_id)
        print("The response of FacebookMessengerApi->get_messenger_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FacebookMessengerApi->get_messenger_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| External id of the account you want to retrieve. In this case it is the Facebook Page ID. | 

### Return type

[**MessengerAccountResponse**](MessengerAccountResponse.md)

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

# **update_messenger_account**
> UpdateMessengerAccount200Response update_messenger_account(external_id, update_messenger_account_request)

Update a Messenger account

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.update_messenger_account200_response import UpdateMessengerAccount200Response
from openapi_client.models.update_messenger_account_request import UpdateMessengerAccountRequest
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
    api_instance = openapi_client.FacebookMessengerApi(api_client)
    external_id = 'external_id_example' # str | External id of the account you want to update. In this case it is the Facebook Page ID.
    update_messenger_account_request = openapi_client.UpdateMessengerAccountRequest() # UpdateMessengerAccountRequest | Request body can contain any of the following

    try:
        # Update a Messenger account
        api_response = api_instance.update_messenger_account(external_id, update_messenger_account_request)
        print("The response of FacebookMessengerApi->update_messenger_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FacebookMessengerApi->update_messenger_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| External id of the account you want to update. In this case it is the Facebook Page ID. | 
 **update_messenger_account_request** | [**UpdateMessengerAccountRequest**](UpdateMessengerAccountRequest.md)| Request body can contain any of the following | 

### Return type

[**UpdateMessengerAccount200Response**](UpdateMessengerAccount200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


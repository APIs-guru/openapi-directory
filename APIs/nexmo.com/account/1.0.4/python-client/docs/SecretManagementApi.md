# openapi_client.SecretManagementApi

All URIs are relative to *https://api.nexmo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_api_secret**](SecretManagementApi.md#create_api_secret) | **POST** /accounts/{api_key}/secrets | Create API Secret
[**retrieve_api_secret**](SecretManagementApi.md#retrieve_api_secret) | **GET** /accounts/{api_key}/secrets/{secret_id} | Retrieve one API Secret
[**retrieve_api_secrets**](SecretManagementApi.md#retrieve_api_secrets) | **GET** /accounts/{api_key}/secrets | Retrieve API Secrets
[**revoke_api_secret**](SecretManagementApi.md#revoke_api_secret) | **DELETE** /accounts/{api_key}/secrets/{secret_id} | Revoke an API Secret


# **create_api_secret**
> SecretInfo create_api_secret(api_key, create_secret_request)

Create API Secret

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_secret_request import CreateSecretRequest
from openapi_client.models.secret_info import SecretInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
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

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecretManagementApi(api_client)
    api_key = 'abcd1234' # str | The API key to manage secrets for
    create_secret_request = openapi_client.CreateSecretRequest() # CreateSecretRequest | 

    try:
        # Create API Secret
        api_response = api_instance.create_api_secret(api_key, create_secret_request)
        print("The response of SecretManagementApi->create_api_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretManagementApi->create_api_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API key to manage secrets for | 
 **create_secret_request** | [**CreateSecretRequest**](CreateSecretRequest.md)|  | 

### Return type

[**SecretInfo**](SecretInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Secret created |  -  |
**400** | Bad request. This usually indicates valid data but can also occur when a user has exceeded the allowed number of secrets on their account. |  -  |
**401** | Credentials are missing or invalid |  -  |
**404** | Item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_api_secret**
> SecretInfo retrieve_api_secret(api_key, secret_id)

Retrieve one API Secret

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.secret_info import SecretInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
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

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecretManagementApi(api_client)
    api_key = 'abcd1234' # str | The API key to manage secrets for
    secret_id = '01234567-aaaa-bbbb-cccc-defdefdefdef' # str | ID of the API Secret

    try:
        # Retrieve one API Secret
        api_response = api_instance.retrieve_api_secret(api_key, secret_id)
        print("The response of SecretManagementApi->retrieve_api_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretManagementApi->retrieve_api_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API key to manage secrets for | 
 **secret_id** | **str**| ID of the API Secret | 

### Return type

[**SecretInfo**](SecretInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API secret response |  -  |
**401** | Credentials are missing or invalid |  -  |
**404** | Item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_api_secrets**
> RetrieveAPISecrets200Response retrieve_api_secrets(api_key)

Retrieve API Secrets

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.retrieve_api_secrets200_response import RetrieveAPISecrets200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
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

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecretManagementApi(api_client)
    api_key = 'abcd1234' # str | The API key to manage secrets for

    try:
        # Retrieve API Secrets
        api_response = api_instance.retrieve_api_secrets(api_key)
        print("The response of SecretManagementApi->retrieve_api_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretManagementApi->retrieve_api_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API key to manage secrets for | 

### Return type

[**RetrieveAPISecrets200Response**](RetrieveAPISecrets200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of your current API secrets |  -  |
**401** | Credentials are missing or invalid |  -  |
**404** | Item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_api_secret**
> revoke_api_secret(api_key, secret_id)

Revoke an API Secret

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
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

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecretManagementApi(api_client)
    api_key = 'abcd1234' # str | The API key to manage secrets for
    secret_id = '01234567-aaaa-bbbb-cccc-defdefdefdef' # str | ID of the API Secret

    try:
        # Revoke an API Secret
        api_instance.revoke_api_secret(api_key, secret_id)
    except Exception as e:
        print("Exception when calling SecretManagementApi->revoke_api_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API key to manage secrets for | 
 **secret_id** | **str**| ID of the API Secret | 

### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Revoked secret response (without body content) |  -  |
**401** | Credentials are missing or invalid |  -  |
**403** | Operation forbidden by permissions or because this is the only API secret and you are required to have at least one. |  -  |
**404** | Item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


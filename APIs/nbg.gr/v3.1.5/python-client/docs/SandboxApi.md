# openapi_client.SandboxApi

All URIs are relative to *https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sandbox_post**](SandboxApi.md#sandbox_post) | **POST** /sandbox | Create Sandbox
[**sandbox_put**](SandboxApi.md#sandbox_put) | **PUT** /sandbox | Import Sandbox
[**sandbox_sandbox_id_delete**](SandboxApi.md#sandbox_sandbox_id_delete) | **DELETE** /sandbox/{sandboxId} | Delete Sandbox
[**sandbox_sandbox_id_get**](SandboxApi.md#sandbox_sandbox_id_get) | **GET** /sandbox/{sandboxId} | Export Sandbox


# **sandbox_post**
> Sandbox sandbox_post(sandbox_request=sandbox_request)

Create Sandbox

Create Sandbox

### Example

* OAuth Authentication (Authorization-Code-Token):
* Api Key Authentication (Client-Id):

```python
import openapi_client
from openapi_client.models.sandbox import Sandbox
from openapi_client.models.sandbox_request import SandboxRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure API key authorization: Client-Id
configuration.api_key['Client-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SandboxApi(api_client)
    sandbox_request = openapi_client.SandboxRequest() # SandboxRequest | SandboxRequest (optional)

    try:
        # Create Sandbox
        api_response = api_instance.sandbox_post(sandbox_request=sandbox_request)
        print("The response of SandboxApi->sandbox_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->sandbox_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandbox_request** | [**SandboxRequest**](SandboxRequest.md)| SandboxRequest | [optional] 

### Return type

[**Sandbox**](Sandbox.md)

### Authorization

[Authorization-Code-Token](../README.md#Authorization-Code-Token), [Client-Id](../README.md#Client-Id)

### HTTP request headers

 - **Content-Type**: application/json, application/json; charset=utf-8
 - **Accept**: application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**404** | Not Found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**415** | Unsupported Media Type |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sandbox_put**
> sandbox_put(sandbox=sandbox)

Import Sandbox

Import Sandbox

### Example

* OAuth Authentication (Authorization-Code-Token):
* Api Key Authentication (Client-Id):

```python
import openapi_client
from openapi_client.models.sandbox import Sandbox
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure API key authorization: Client-Id
configuration.api_key['Client-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SandboxApi(api_client)
    sandbox = openapi_client.Sandbox() # Sandbox | Sandbox (optional)

    try:
        # Import Sandbox
        api_instance.sandbox_put(sandbox=sandbox)
    except Exception as e:
        print("Exception when calling SandboxApi->sandbox_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandbox** | [**Sandbox**](Sandbox.md)| Sandbox | [optional] 

### Return type

void (empty response body)

### Authorization

[Authorization-Code-Token](../README.md#Authorization-Code-Token), [Client-Id](../README.md#Client-Id)

### HTTP request headers

 - **Content-Type**: application/json, application/json; charset=utf-8
 - **Accept**: application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**404** | Not Found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**415** | Unsupported Media Type |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sandbox_sandbox_id_delete**
> sandbox_sandbox_id_delete(sandbox_id)

Delete Sandbox

Delete Sandbox

### Example

* OAuth Authentication (Authorization-Code-Token):
* Api Key Authentication (Client-Id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure API key authorization: Client-Id
configuration.api_key['Client-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SandboxApi(api_client)
    sandbox_id = 'sandbox_id_example' # str | Sandbox Id

    try:
        # Delete Sandbox
        api_instance.sandbox_sandbox_id_delete(sandbox_id)
    except Exception as e:
        print("Exception when calling SandboxApi->sandbox_sandbox_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandbox_id** | **str**| Sandbox Id | 

### Return type

void (empty response body)

### Authorization

[Authorization-Code-Token](../README.md#Authorization-Code-Token), [Client-Id](../README.md#Client-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**404** | Not Found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sandbox_sandbox_id_get**
> Sandbox sandbox_sandbox_id_get(sandbox_id)

Export Sandbox

Export Sandbox

### Example

* OAuth Authentication (Authorization-Code-Token):
* Api Key Authentication (Client-Id):

```python
import openapi_client
from openapi_client.models.sandbox import Sandbox
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure API key authorization: Client-Id
configuration.api_key['Client-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SandboxApi(api_client)
    sandbox_id = 'sandbox_id_example' # str | Sandbox Id

    try:
        # Export Sandbox
        api_response = api_instance.sandbox_sandbox_id_get(sandbox_id)
        print("The response of SandboxApi->sandbox_sandbox_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->sandbox_sandbox_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandbox_id** | **str**| Sandbox Id | 

### Return type

[**Sandbox**](Sandbox.md)

### Authorization

[Authorization-Code-Token](../README.md#Authorization-Code-Token), [Client-Id](../README.md#Client-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**400** | Bad request |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**401** | Unauthorized |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**403** | Forbidden |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**404** | Not Found |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**405** | Method Not Allowed |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**406** | Not Acceptable |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |
**500** | Internal Server Error |  * x-fapi-interaction-id - An RFC4122 UID used as a correlation id <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


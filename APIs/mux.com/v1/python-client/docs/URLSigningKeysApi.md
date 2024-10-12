# openapi_client.URLSigningKeysApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_url_signing_key**](URLSigningKeysApi.md#create_url_signing_key) | **POST** /video/v1/signing-keys | Create a URL signing key
[**delete_url_signing_key**](URLSigningKeysApi.md#delete_url_signing_key) | **DELETE** /video/v1/signing-keys/{SIGNING_KEY_ID} | Delete a URL signing key
[**get_url_signing_key**](URLSigningKeysApi.md#get_url_signing_key) | **GET** /video/v1/signing-keys/{SIGNING_KEY_ID} | Retrieve a URL signing key
[**list_url_signing_keys**](URLSigningKeysApi.md#list_url_signing_keys) | **GET** /video/v1/signing-keys | List URL signing keys


# **create_url_signing_key**
> SigningKeyResponse create_url_signing_key()

Create a URL signing key

This route is now deprecated, please use the `Signing Keys` API. Creates a new signing key pair. When creating a new signing key, the API will generate a 2048-bit RSA key-pair and return the private key and a generated key-id; the public key will be stored at Mux to validate signed tokens.  Note: Any new access tokens authenticating this route will be required to have `System` level permissions. 

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.signing_key_response import SigningKeyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.URLSigningKeysApi(api_client)

    try:
        # Create a URL signing key
        api_response = api_instance.create_url_signing_key()
        print("The response of URLSigningKeysApi->create_url_signing_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling URLSigningKeysApi->create_url_signing_key: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SigningKeyResponse**](SigningKeyResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_url_signing_key**
> delete_url_signing_key(signing_key_id)

Delete a URL signing key

This route is now deprecated, please use the `Signing Keys` API. Deletes an existing signing key. Use with caution, as this will invalidate any existing signatures and no URLs can be signed using the key again.  Note: Any new access tokens authenticating this route will be required to have `System` level permissions. 

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.URLSigningKeysApi(api_client)
    signing_key_id = 'signing_key_id_example' # str | The ID of the signing key.

    try:
        # Delete a URL signing key
        api_instance.delete_url_signing_key(signing_key_id)
    except Exception as e:
        print("Exception when calling URLSigningKeysApi->delete_url_signing_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signing_key_id** | **str**| The ID of the signing key. | 

### Return type

void (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_url_signing_key**
> SigningKeyResponse get_url_signing_key(signing_key_id)

Retrieve a URL signing key

This route is now deprecated, please use the `Signing Keys` API. Retrieves the details of a URL signing key that has previously been created. Supply the unique signing key ID that was returned from your previous request, and Mux will return the corresponding signing key information. **The private key is not returned in this response.**  Note: Any new access tokens authenticating this route will be required to have `System` level permissions. 

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.signing_key_response import SigningKeyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.URLSigningKeysApi(api_client)
    signing_key_id = 'signing_key_id_example' # str | The ID of the signing key.

    try:
        # Retrieve a URL signing key
        api_response = api_instance.get_url_signing_key(signing_key_id)
        print("The response of URLSigningKeysApi->get_url_signing_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling URLSigningKeysApi->get_url_signing_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signing_key_id** | **str**| The ID of the signing key. | 

### Return type

[**SigningKeyResponse**](SigningKeyResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_url_signing_keys**
> ListSigningKeysResponse list_url_signing_keys(limit=limit, page=page)

List URL signing keys

This route is now deprecated, please use the `Signing Keys` API. Returns a list of URL signing keys.  Note: Any new access tokens authenticating this route will be required to have `System` level permissions. 

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_signing_keys_response import ListSigningKeysResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.URLSigningKeysApi(api_client)
    limit = 25 # int | Number of items to include in the response (optional) (default to 25)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)

    try:
        # List URL signing keys
        api_response = api_instance.list_url_signing_keys(limit=limit, page=page)
        print("The response of URLSigningKeysApi->list_url_signing_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling URLSigningKeysApi->list_url_signing_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items to include in the response | [optional] [default to 25]
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]

### Return type

[**ListSigningKeysResponse**](ListSigningKeysResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


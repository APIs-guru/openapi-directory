# openapi_client.FirmwareApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_accounts**](FirmwareApi.md#get_accounts) | **GET** /firmware/{firmware_hash}/accounts | Get default accounts and password hashes of a firmware
[**get_config_issues**](FirmwareApi.md#get_config_issues) | **GET** /firmware/{firmware_hash}/config-issues | Get default OS configuration issues of a device firmware
[**get_expired_certs**](FirmwareApi.md#get_expired_certs) | **GET** /firmware/{firmware_hash}/expired-certs | Get expired digital certificates embedded in a device firmware
[**get_private_keys**](FirmwareApi.md#get_private_keys) | **GET** /firmware/{firmware_hash}/private-keys | Get private crypto keys embedded in a device firmware
[**get_risk**](FirmwareApi.md#get_risk) | **GET** /firmware/{firmware_hash}/risk | Get iot device firmware risk analysis
[**get_weak_certs**](FirmwareApi.md#get_weak_certs) | **GET** /firmware/{firmware_hash}/weak-certs | Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
[**get_weak_keys**](FirmwareApi.md#get_weak_keys) | **GET** /firmware/{firmware_hash}/weak-keys | Get weak crypto keys with short length


# **get_accounts**
> List[DefaultAccount] get_accounts(firmware_hash)

Get default accounts and password hashes of a firmware

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.default_account import DefaultAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirmwareApi(api_client)
    firmware_hash = 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175' # str | SHA2 hash of device firmware

    try:
        # Get default accounts and password hashes of a firmware
        api_response = api_instance.get_accounts(firmware_hash)
        print("The response of FirmwareApi->get_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareApi->get_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firmware_hash** | **str**| SHA2 hash of device firmware | 

### Return type

[**List[DefaultAccount]**](DefaultAccount.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_config_issues**
> List[ConfigIssue] get_config_issues(firmware_hash)

Get default OS configuration issues of a device firmware

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.config_issue import ConfigIssue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirmwareApi(api_client)
    firmware_hash = 'aa96e4d41a4b0ceb3f1ae4d94f3cb445621b9501e3a9c69e6b9eb37c5888a03c' # str | SHA2 hash of device firmware

    try:
        # Get default OS configuration issues of a device firmware
        api_response = api_instance.get_config_issues(firmware_hash)
        print("The response of FirmwareApi->get_config_issues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareApi->get_config_issues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firmware_hash** | **str**| SHA2 hash of device firmware | 

### Return type

[**List[ConfigIssue]**](ConfigIssue.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_expired_certs**
> List[ExpiredCert] get_expired_certs(firmware_hash)

Get expired digital certificates embedded in a device firmware

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.expired_cert import ExpiredCert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirmwareApi(api_client)
    firmware_hash = 'ac7c090c34338ea6a3b335004755e24578e7e4eee739c5c33736f0822b64907e' # str | SHA2 hash of device firmware

    try:
        # Get expired digital certificates embedded in a device firmware
        api_response = api_instance.get_expired_certs(firmware_hash)
        print("The response of FirmwareApi->get_expired_certs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareApi->get_expired_certs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firmware_hash** | **str**| SHA2 hash of device firmware | 

### Return type

[**List[ExpiredCert]**](ExpiredCert.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_private_keys**
> List[CryptoKey] get_private_keys(firmware_hash)

Get private crypto keys embedded in a device firmware

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.crypto_key import CryptoKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirmwareApi(api_client)
    firmware_hash = '90e3e68e1c61850f20c50e551816d47d484d7feb46890f5bc0a0e0dab3e3ba0b' # str | SHA2 hash of device firmware

    try:
        # Get private crypto keys embedded in a device firmware
        api_response = api_instance.get_private_keys(firmware_hash)
        print("The response of FirmwareApi->get_private_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareApi->get_private_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firmware_hash** | **str**| SHA2 hash of device firmware | 

### Return type

[**List[CryptoKey]**](CryptoKey.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_risk**
> FirmwareRisk get_risk(firmware_hash)

Get iot device firmware risk analysis

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.firmware_risk import FirmwareRisk
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirmwareApi(api_client)
    firmware_hash = 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175' # str | SHA2 hash of device firmware

    try:
        # Get iot device firmware risk analysis
        api_response = api_instance.get_risk(firmware_hash)
        print("The response of FirmwareApi->get_risk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareApi->get_risk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firmware_hash** | **str**| SHA2 hash of device firmware | 

### Return type

[**FirmwareRisk**](FirmwareRisk.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_weak_certs**
> List[WeakCert] get_weak_certs(firmware_hash)

Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.weak_cert import WeakCert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirmwareApi(api_client)
    firmware_hash = '52841661d61e00649451cc471e9b56d169df8041926b1252bb3fd0710c27b12c' # str | SHA2 hash of device firmware

    try:
        # Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
        api_response = api_instance.get_weak_certs(firmware_hash)
        print("The response of FirmwareApi->get_weak_certs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareApi->get_weak_certs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firmware_hash** | **str**| SHA2 hash of device firmware | 

### Return type

[**List[WeakCert]**](WeakCert.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_weak_keys**
> List[CryptoKey] get_weak_keys(firmware_hash)

Get weak crypto keys with short length

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.crypto_key import CryptoKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirmwareApi(api_client)
    firmware_hash = '852031776c09f8152c90496f2c3fac85b46a938d20612d7fc03eea8aab46f23e' # str | SHA2 hash of device firmware

    try:
        # Get weak crypto keys with short length
        api_response = api_instance.get_weak_keys(firmware_hash)
        print("The response of FirmwareApi->get_weak_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareApi->get_weak_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firmware_hash** | **str**| SHA2 hash of device firmware | 

### Return type

[**List[CryptoKey]**](CryptoKey.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


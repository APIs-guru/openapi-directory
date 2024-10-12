# openapi_client.BypassActivationLockAttemptsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_sm_bypass_activation_lock_attempt_1**](BypassActivationLockAttemptsApi.md#create_network_sm_bypass_activation_lock_attempt_1) | **POST** /networks/{networkId}/sm/bypassActivationLockAttempts | Bypass activation lock attempt
[**get_network_sm_bypass_activation_lock_attempt_1**](BypassActivationLockAttemptsApi.md#get_network_sm_bypass_activation_lock_attempt_1) | **GET** /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId} | Bypass activation lock attempt status


# **create_network_sm_bypass_activation_lock_attempt_1**
> object create_network_sm_bypass_activation_lock_attempt_1(network_id, create_network_sm_bypass_activation_lock_attempt_request)

Bypass activation lock attempt

Bypass activation lock attempt

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sm_bypass_activation_lock_attempt_request import CreateNetworkSmBypassActivationLockAttemptRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BypassActivationLockAttemptsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_sm_bypass_activation_lock_attempt_request = openapi_client.CreateNetworkSmBypassActivationLockAttemptRequest() # CreateNetworkSmBypassActivationLockAttemptRequest | 

    try:
        # Bypass activation lock attempt
        api_response = api_instance.create_network_sm_bypass_activation_lock_attempt_1(network_id, create_network_sm_bypass_activation_lock_attempt_request)
        print("The response of BypassActivationLockAttemptsApi->create_network_sm_bypass_activation_lock_attempt_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BypassActivationLockAttemptsApi->create_network_sm_bypass_activation_lock_attempt_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_sm_bypass_activation_lock_attempt_request** | [**CreateNetworkSmBypassActivationLockAttemptRequest**](CreateNetworkSmBypassActivationLockAttemptRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_bypass_activation_lock_attempt_1**
> object get_network_sm_bypass_activation_lock_attempt_1(network_id, attempt_id)

Bypass activation lock attempt status

Bypass activation lock attempt status

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BypassActivationLockAttemptsApi(api_client)
    network_id = 'network_id_example' # str | 
    attempt_id = 'attempt_id_example' # str | 

    try:
        # Bypass activation lock attempt status
        api_response = api_instance.get_network_sm_bypass_activation_lock_attempt_1(network_id, attempt_id)
        print("The response of BypassActivationLockAttemptsApi->get_network_sm_bypass_activation_lock_attempt_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BypassActivationLockAttemptsApi->get_network_sm_bypass_activation_lock_attempt_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **attempt_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


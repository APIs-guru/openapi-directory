# openapi_client.SplashLoginAttemptsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_splash_login_attempts**](SplashLoginAttemptsApi.md#get_network_splash_login_attempts) | **GET** /networks/{networkId}/splashLoginAttempts | List the splash login attempts for a network


# **get_network_splash_login_attempts**
> List[object] get_network_splash_login_attempts(network_id, ssid_number=ssid_number, login_identifier=login_identifier, timespan=timespan)

List the splash login attempts for a network

List the splash login attempts for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.SplashLoginAttemptsApi(api_client)
    network_id = 'network_id_example' # str | 
    ssid_number = 56 # int | Only return the login attempts for the specified SSID (optional)
    login_identifier = 'login_identifier_example' # str | The username, email, or phone number used during login (optional)
    timespan = 56 # int | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months (optional)

    try:
        # List the splash login attempts for a network
        api_response = api_instance.get_network_splash_login_attempts(network_id, ssid_number=ssid_number, login_identifier=login_identifier, timespan=timespan)
        print("The response of SplashLoginAttemptsApi->get_network_splash_login_attempts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplashLoginAttemptsApi->get_network_splash_login_attempts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **ssid_number** | **int**| Only return the login attempts for the specified SSID | [optional] 
 **login_identifier** | **str**| The username, email, or phone number used during login | [optional] 
 **timespan** | **int**| The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months | [optional] 

### Return type

**List[object]**

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


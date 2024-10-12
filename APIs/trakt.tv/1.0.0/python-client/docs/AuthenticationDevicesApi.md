# openapi_client.AuthenticationDevicesApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_new_device_codes**](AuthenticationDevicesApi.md#generate_new_device_codes) | **POST** /oauth/device/code | Generate new device codes
[**poll_for_the_access_token**](AuthenticationDevicesApi.md#poll_for_the_access_token) | **POST** /oauth/device/token | Poll for the access_token


# **generate_new_device_codes**
> generate_new_device_codes(generate_new_device_codes_request=generate_new_device_codes_request)

Generate new device codes

Generate new codes to start the device authentication process. The `device_code` and `interval` will be used later to poll for the `access_token`. The `user_code` and `verification_url` should be presented to the user as mentioned in the flow steps above.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |

### Example


```python
import openapi_client
from openapi_client.models.generate_new_device_codes_request import GenerateNewDeviceCodesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationDevicesApi(api_client)
    generate_new_device_codes_request = openapi_client.GenerateNewDeviceCodesRequest() # GenerateNewDeviceCodesRequest |  (optional)

    try:
        # Generate new device codes
        api_instance.generate_new_device_codes(generate_new_device_codes_request=generate_new_device_codes_request)
    except Exception as e:
        print("Exception when calling AuthenticationDevicesApi->generate_new_device_codes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_new_device_codes_request** | [**GenerateNewDeviceCodesRequest**](GenerateNewDeviceCodesRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **poll_for_the_access_token**
> poll_for_the_access_token(poll_for_the_access_token_request=poll_for_the_access_token_request)

Poll for the access_token

Use the `device_code` and poll at the `interval` (in seconds) to check if the user has authorized you app. Use `expires_in` to stop polling after that many seconds, and gracefully instruct the user to restart the process. **It is important to poll at the correct interval and also stop polling when expired.**  When you receive a `200` success response, save the `access_token` so your app can authenticate the user in methods that require it. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. Check below for all the error codes that you should handle.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `code` <span style=\"color:red;\">*</a> | string | `device_code` from the initial method. | | `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. | | `client_secret` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |  ####  Status Codes  This method will send various HTTP status codes that you should handle accordingly.  | Code | Description | |---|---| | `200` | Success - *save the `access_token`* | `400` | Pending - *waiting for the user to authorize your app* | `404` | Not Found - *invalid `device_code`* | `409` | Already Used - *user already approved this code* | `410` | Expired - *the tokens have expired, restart the process* | `418` | Denied - *user explicitly denied this code* | `429` | Slow Down - *your app is polling too quickly*

### Example


```python
import openapi_client
from openapi_client.models.poll_for_the_access_token_request import PollForTheAccessTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationDevicesApi(api_client)
    poll_for_the_access_token_request = openapi_client.PollForTheAccessTokenRequest() # PollForTheAccessTokenRequest |  (optional)

    try:
        # Poll for the access_token
        api_instance.poll_for_the_access_token(poll_for_the_access_token_request=poll_for_the_access_token_request)
    except Exception as e:
        print("Exception when calling AuthenticationDevicesApi->poll_for_the_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_for_the_access_token_request** | [**PollForTheAccessTokenRequest**](PollForTheAccessTokenRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


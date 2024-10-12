# openapi_client.TelephonyApi

All URIs are relative to *https://neutrinoapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**h_lr_lookup**](TelephonyApi.md#h_lr_lookup) | **GET** /hlr-lookup | HLR Lookup
[**phone_playback**](TelephonyApi.md#phone_playback) | **POST** /phone-playback | Phone Playback
[**phone_verify**](TelephonyApi.md#phone_verify) | **POST** /phone-verify | Phone Verify
[**s_ms_verify**](TelephonyApi.md#s_ms_verify) | **POST** /sms-verify | SMS Verify
[**verify_security_code**](TelephonyApi.md#verify_security_code) | **GET** /verify-security-code | Verify Security Code


# **h_lr_lookup**
> HLRLookupResponse h_lr_lookup(number, country_code=country_code)

HLR Lookup

Connect to the global mobile cellular network and retrieve the status of a mobile device

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.hlr_lookup_response import HLRLookupResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)
    number = 'number_example' # str | A phone number
    country_code = 'country_code_example' # str | ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign) (optional)

    try:
        # HLR Lookup
        api_response = api_instance.h_lr_lookup(number, country_code=country_code)
        print("The response of TelephonyApi->h_lr_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelephonyApi->h_lr_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | **str**| A phone number | 
 **country_code** | **str**| ISO 2-letter country code, assume numbers are based in this country. &lt;br&gt;If not set numbers are assumed to be in international format (with or without the leading + sign) | [optional] 

### Return type

[**HLRLookupResponse**](HLRLookupResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_playback**
> PhonePlaybackResponse phone_playback(audio_url, number, limit=limit, limit_ttl=limit_ttl)

Phone Playback

Make an automated call to any valid phone number and playback an audio message

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.phone_playback_response import PhonePlaybackResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)
    audio_url = 'audio_url_example' # str | A URL to a valid audio file. Accepted audio formats are: <ul> <li>MP3</li> <li>WAV</li> <li>OGG</li> </ul>You can use the following MP3 URL for testing: <br>https://www.neutrinoapi.com/test-files/test1.mp3
    number = 'number_example' # str | The phone number to call. Must be in valid international format
    limit = 3 # int | Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned (optional) (default to 3)
    limit_ttl = 1 # int | Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days) (optional) (default to 1)

    try:
        # Phone Playback
        api_response = api_instance.phone_playback(audio_url, number, limit=limit, limit_ttl=limit_ttl)
        print("The response of TelephonyApi->phone_playback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelephonyApi->phone_playback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audio_url** | **str**| A URL to a valid audio file. Accepted audio formats are: &lt;ul&gt; &lt;li&gt;MP3&lt;/li&gt; &lt;li&gt;WAV&lt;/li&gt; &lt;li&gt;OGG&lt;/li&gt; &lt;/ul&gt;You can use the following MP3 URL for testing: &lt;br&gt;https://www.neutrinoapi.com/test-files/test1.mp3 | 
 **number** | **str**| The phone number to call. Must be in valid international format | 
 **limit** | **int**| Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned | [optional] [default to 3]
 **limit_ttl** | **int**| Set the TTL in number of days that the &#39;limit&#39; option will remember a phone number (the default is 1 day and the maximum is 365 days) | [optional] [default to 1]

### Return type

[**PhonePlaybackResponse**](PhonePlaybackResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_verify**
> PhoneVerifyResponse phone_verify(number, code_length=code_length, country_code=country_code, language_code=language_code, limit=limit, limit_ttl=limit_ttl, playback_delay=playback_delay, security_code=security_code)

Phone Verify

Make an automated call to any valid phone number and playback a unique security code

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.phone_verify_response import PhoneVerifyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)
    number = 'number_example' # str | The phone number to send the verification code to
    code_length = 6 # int | The number of digits to use in the security code (between 4 and 12) (optional) (default to 6)
    country_code = 'country_code_example' # str | ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign) (optional)
    language_code = 'en' # str | The language to playback the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul> (optional) (default to 'en')
    limit = 3 # int | Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned (optional) (default to 3)
    limit_ttl = 1 # int | Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days) (optional) (default to 1)
    playback_delay = 800 # int | The delay in milliseconds between the playback of each security code (optional) (default to 800)
    security_code = 56 # int | Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (optional)

    try:
        # Phone Verify
        api_response = api_instance.phone_verify(number, code_length=code_length, country_code=country_code, language_code=language_code, limit=limit, limit_ttl=limit_ttl, playback_delay=playback_delay, security_code=security_code)
        print("The response of TelephonyApi->phone_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelephonyApi->phone_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | **str**| The phone number to send the verification code to | 
 **code_length** | **int**| The number of digits to use in the security code (between 4 and 12) | [optional] [default to 6]
 **country_code** | **str**| ISO 2-letter country code, assume numbers are based in this country. &lt;br&gt;If not set numbers are assumed to be in international format (with or without the leading + sign) | [optional] 
 **language_code** | **str**| The language to playback the verification code in, available languages are: &lt;ul&gt; &lt;li&gt;de - German&lt;/li&gt; &lt;li&gt;en - English&lt;/li&gt; &lt;li&gt;es - Spanish&lt;/li&gt; &lt;li&gt;fr - French&lt;/li&gt; &lt;li&gt;it - Italian&lt;/li&gt; &lt;li&gt;pt - Portuguese&lt;/li&gt; &lt;li&gt;ru - Russian&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;en&#39;]
 **limit** | **int**| Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned | [optional] [default to 3]
 **limit_ttl** | **int**| Set the TTL in number of days that the &#39;limit&#39; option will remember a phone number (the default is 1 day and the maximum is 365 days) | [optional] [default to 1]
 **playback_delay** | **int**| The delay in milliseconds between the playback of each security code | [optional] [default to 800]
 **security_code** | **int**| Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code | [optional] 

### Return type

[**PhoneVerifyResponse**](PhoneVerifyResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **s_ms_verify**
> SMSVerifyResponse s_ms_verify(number, code_length=code_length, country_code=country_code, language_code=language_code, limit=limit, limit_ttl=limit_ttl, security_code=security_code)

SMS Verify

Send a unique security code to any mobile device via SMS

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.sms_verify_response import SMSVerifyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)
    number = 'number_example' # str | The phone number to send a verification code to
    code_length = 5 # int | The number of digits to use in the security code (must be between 4 and 12) (optional) (default to 5)
    country_code = 'country_code_example' # str | ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign) (optional)
    language_code = 'en' # str | The language to send the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul> (optional) (default to 'en')
    limit = 10 # int | Limit the total number of SMS allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned (optional) (default to 10)
    limit_ttl = 1 # int | Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days) (optional) (default to 1)
    security_code = 56 # int | Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (optional)

    try:
        # SMS Verify
        api_response = api_instance.s_ms_verify(number, code_length=code_length, country_code=country_code, language_code=language_code, limit=limit, limit_ttl=limit_ttl, security_code=security_code)
        print("The response of TelephonyApi->s_ms_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelephonyApi->s_ms_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | **str**| The phone number to send a verification code to | 
 **code_length** | **int**| The number of digits to use in the security code (must be between 4 and 12) | [optional] [default to 5]
 **country_code** | **str**| ISO 2-letter country code, assume numbers are based in this country. &lt;br&gt;If not set numbers are assumed to be in international format (with or without the leading + sign) | [optional] 
 **language_code** | **str**| The language to send the verification code in, available languages are: &lt;ul&gt; &lt;li&gt;de - German&lt;/li&gt; &lt;li&gt;en - English&lt;/li&gt; &lt;li&gt;es - Spanish&lt;/li&gt; &lt;li&gt;fr - French&lt;/li&gt; &lt;li&gt;it - Italian&lt;/li&gt; &lt;li&gt;pt - Portuguese&lt;/li&gt; &lt;li&gt;ru - Russian&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;en&#39;]
 **limit** | **int**| Limit the total number of SMS allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned | [optional] [default to 10]
 **limit_ttl** | **int**| Set the TTL in number of days that the &#39;limit&#39; option will remember a phone number (the default is 1 day and the maximum is 365 days) | [optional] [default to 1]
 **security_code** | **int**| Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code | [optional] 

### Return type

[**SMSVerifyResponse**](SMSVerifyResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_security_code**
> VerifySecurityCodeResponse verify_security_code(security_code, limit_by=limit_by)

Verify Security Code

Check if a security code sent via SMS Verify or Phone Verify is valid

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.verify_security_code_response import VerifySecurityCodeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)
    security_code = 'security_code_example' # str | The security code to verify
    limit_by = 'limit_by_example' # str | If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts (optional)

    try:
        # Verify Security Code
        api_response = api_instance.verify_security_code(security_code, limit_by=limit_by)
        print("The response of TelephonyApi->verify_security_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelephonyApi->verify_security_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **security_code** | **str**| The security code to verify | 
 **limit_by** | **str**| If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts | [optional] 

### Return type

[**VerifySecurityCodeResponse**](VerifySecurityCodeResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


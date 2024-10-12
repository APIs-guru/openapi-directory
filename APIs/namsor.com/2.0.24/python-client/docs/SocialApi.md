# openapi_client.SocialApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phone_code**](SocialApi.md#phone_code) | **GET** /api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber} | [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
[**phone_code_batch**](SocialApi.md#phone_code_batch) | **POST** /api2/json/phoneCodeBatch | [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
[**phone_code_geo**](SocialApi.md#phone_code_geo) | **GET** /api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2} | [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
[**phone_code_geo_batch**](SocialApi.md#phone_code_geo_batch) | **POST** /api2/json/phoneCodeGeoBatch | [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
[**phone_code_geo_feedback_loop**](SocialApi.md#phone_code_geo_feedback_loop) | **GET** /api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2} | [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).


# **phone_code**
> FirstLastNamePhoneCodedOut phone_code(first_name, last_name, phone_number)

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_phone_coded_out import FirstLastNamePhoneCodedOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SocialApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 
    phone_number = 'phone_number_example' # str | 

    try:
        # [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
        api_response = api_instance.phone_code(first_name, last_name, phone_number)
        print("The response of SocialApi->phone_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->phone_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 
 **phone_number** | **str**|  | 

### Return type

[**FirstLastNamePhoneCodedOut**](FirstLastNamePhoneCodedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A name with country and phone code. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_code_batch**
> BatchFirstLastNamePhoneCodedOut phone_code_batch(batch_first_last_name_phone_number_in=batch_first_last_name_phone_number_in)

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_phone_coded_out import BatchFirstLastNamePhoneCodedOut
from openapi_client.models.batch_first_last_name_phone_number_in import BatchFirstLastNamePhoneNumberIn
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SocialApi(api_client)
    batch_first_last_name_phone_number_in = openapi_client.BatchFirstLastNamePhoneNumberIn() # BatchFirstLastNamePhoneNumberIn | A list of personal names (optional)

    try:
        # [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
        api_response = api_instance.phone_code_batch(batch_first_last_name_phone_number_in=batch_first_last_name_phone_number_in)
        print("The response of SocialApi->phone_code_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->phone_code_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_phone_number_in** | [**BatchFirstLastNamePhoneNumberIn**](BatchFirstLastNamePhoneNumberIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNamePhoneCodedOut**](BatchFirstLastNamePhoneCodedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of genderized names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_code_geo**
> FirstLastNamePhoneCodedOut phone_code_geo(first_name, last_name, phone_number, country_iso2)

[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_phone_coded_out import FirstLastNamePhoneCodedOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SocialApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 
    phone_number = 'phone_number_example' # str | 
    country_iso2 = 'country_iso2_example' # str | 

    try:
        # [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
        api_response = api_instance.phone_code_geo(first_name, last_name, phone_number, country_iso2)
        print("The response of SocialApi->phone_code_geo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->phone_code_geo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 
 **phone_number** | **str**|  | 
 **country_iso2** | **str**|  | 

### Return type

[**FirstLastNamePhoneCodedOut**](FirstLastNamePhoneCodedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A name with country and phone code. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_code_geo_batch**
> BatchFirstLastNamePhoneCodedOut phone_code_geo_batch(batch_first_last_name_phone_number_geo_in=batch_first_last_name_phone_number_geo_in)

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_phone_coded_out import BatchFirstLastNamePhoneCodedOut
from openapi_client.models.batch_first_last_name_phone_number_geo_in import BatchFirstLastNamePhoneNumberGeoIn
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SocialApi(api_client)
    batch_first_last_name_phone_number_geo_in = openapi_client.BatchFirstLastNamePhoneNumberGeoIn() # BatchFirstLastNamePhoneNumberGeoIn | A list of personal names (optional)

    try:
        # [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
        api_response = api_instance.phone_code_geo_batch(batch_first_last_name_phone_number_geo_in=batch_first_last_name_phone_number_geo_in)
        print("The response of SocialApi->phone_code_geo_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->phone_code_geo_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_phone_number_geo_in** | [**BatchFirstLastNamePhoneNumberGeoIn**](BatchFirstLastNamePhoneNumberGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNamePhoneCodedOut**](BatchFirstLastNamePhoneCodedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of genderized names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_code_geo_feedback_loop**
> FirstLastNamePhoneCodedOut phone_code_geo_feedback_loop(first_name, last_name, phone_number, phone_number_e164, country_iso2)

[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_phone_coded_out import FirstLastNamePhoneCodedOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2.namsor.com/NamSorAPIv2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2.namsor.com/NamSorAPIv2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SocialApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 
    phone_number = 'phone_number_example' # str | 
    phone_number_e164 = 'phone_number_e164_example' # str | 
    country_iso2 = 'country_iso2_example' # str | 

    try:
        # [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
        api_response = api_instance.phone_code_geo_feedback_loop(first_name, last_name, phone_number, phone_number_e164, country_iso2)
        print("The response of SocialApi->phone_code_geo_feedback_loop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->phone_code_geo_feedback_loop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 
 **phone_number** | **str**|  | 
 **phone_number_e164** | **str**|  | 
 **country_iso2** | **str**|  | 

### Return type

[**FirstLastNamePhoneCodedOut**](FirstLastNamePhoneCodedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A name with country and phone code. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


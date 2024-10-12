# openapi_client.DateTimeApi

All URIs are relative to *https://connect.apptigent.com/api/utilities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**date_time_difference**](DateTimeApi.md#date_time_difference) | **POST** /DateTimeDifference | DateTime - DateTime difference
[**date_time_info**](DateTimeApi.md#date_time_info) | **POST** /DateTimeInfo | DateTime - Get date and time information
[**format_date_time**](DateTimeApi.md#format_date_time) | **POST** /FormatDateTime | DateTime - Format date and time
[**world_time**](DateTimeApi.md#world_time) | **POST** /WorldTime | DateTime - Get world time


# **date_time_difference**
> OutputDateDifference date_time_difference(date_time_difference=date_time_difference)

DateTime - DateTime difference

Calculate the difference between two dates

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_date_time_difference import InputDateTimeDifference
from openapi_client.models.output_date_difference import OutputDateDifference
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DateTimeApi(api_client)
    date_time_difference = openapi_client.InputDateTimeDifference() # InputDateTimeDifference |  (optional)

    try:
        # DateTime - DateTime difference
        api_response = api_instance.date_time_difference(date_time_difference=date_time_difference)
        print("The response of DateTimeApi->date_time_difference:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DateTimeApi->date_time_difference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_time_difference** | [**InputDateTimeDifference**](InputDateTimeDifference.md)|  | [optional] 

### Return type

[**OutputDateDifference**](OutputDateDifference.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **date_time_info**
> OutputDateInfo date_time_info(date_time_info=date_time_info)

DateTime - Get date and time information

Retrieve useful date and time information, such as day of year, total seconds and ticks

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_date_time_info import InputDateTimeInfo
from openapi_client.models.output_date_info import OutputDateInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DateTimeApi(api_client)
    date_time_info = openapi_client.InputDateTimeInfo() # InputDateTimeInfo |  (optional)

    try:
        # DateTime - Get date and time information
        api_response = api_instance.date_time_info(date_time_info=date_time_info)
        print("The response of DateTimeApi->date_time_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DateTimeApi->date_time_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_time_info** | [**InputDateTimeInfo**](InputDateTimeInfo.md)|  | [optional] 

### Return type

[**OutputDateInfo**](OutputDateInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **format_date_time**
> OutputString format_date_time(date_time_format=date_time_format)

DateTime - Format date and time

Create a date/time string in a specific format

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_date_time_format import InputDateTimeFormat
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DateTimeApi(api_client)
    date_time_format = openapi_client.InputDateTimeFormat() # InputDateTimeFormat |  (optional)

    try:
        # DateTime - Format date and time
        api_response = api_instance.format_date_time(date_time_format=date_time_format)
        print("The response of DateTimeApi->format_date_time:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DateTimeApi->format_date_time: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_time_format** | [**InputDateTimeFormat**](InputDateTimeFormat.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **world_time**
> OutputString world_time(date_time_conversion=date_time_conversion)

DateTime - Get world time

Convert date and time from one time zone to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_date_time_conversion import InputDateTimeConversion
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DateTimeApi(api_client)
    date_time_conversion = openapi_client.InputDateTimeConversion() # InputDateTimeConversion |  (optional)

    try:
        # DateTime - Get world time
        api_response = api_instance.world_time(date_time_conversion=date_time_conversion)
        print("The response of DateTimeApi->world_time:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DateTimeApi->world_time: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_time_conversion** | [**InputDateTimeConversion**](InputDateTimeConversion.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


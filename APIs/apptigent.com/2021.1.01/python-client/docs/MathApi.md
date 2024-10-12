# openapi_client.MathApi

All URIs are relative to *https://connect.apptigent.com/api/utilities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculate_absolute**](MathApi.md#calculate_absolute) | **POST** /CalculateAbsolute | Math - Calculate Absolute
[**calculate_addition**](MathApi.md#calculate_addition) | **POST** /CalculateAddition | Math - Calculate Addition
[**calculate_average**](MathApi.md#calculate_average) | **POST** /CalculateAverage | Math - Calculate average
[**calculate_cosine**](MathApi.md#calculate_cosine) | **POST** /CalculateCosine | Math - Calculate Cosine
[**calculate_division**](MathApi.md#calculate_division) | **POST** /CalculateDivision | Math - Calculate Division
[**calculate_logarithm**](MathApi.md#calculate_logarithm) | **POST** /CalculateLogarithm | Math - Calculate Logarithm
[**calculate_median**](MathApi.md#calculate_median) | **POST** /CalculateMedian | Math - Calculate median
[**calculate_min_max**](MathApi.md#calculate_min_max) | **POST** /CalculateMinMax | Math - Calculate minimum or maximum
[**calculate_modulo**](MathApi.md#calculate_modulo) | **POST** /CalculateModulo | Math - Calculate Modulo
[**calculate_multiplication**](MathApi.md#calculate_multiplication) | **POST** /CalculateMultiplication | Math - Calculate Multiplication
[**calculate_nth_root**](MathApi.md#calculate_nth_root) | **POST** /CalculateNthRoot | Math - Calculate Nth Root
[**calculate_power**](MathApi.md#calculate_power) | **POST** /CalculatePower | Math - Calculate power
[**calculate_sine**](MathApi.md#calculate_sine) | **POST** /CalculateSine | Math - Calculate Sine
[**calculate_square_root**](MathApi.md#calculate_square_root) | **POST** /CalculateSquareRoot | Math - Calculate Square Root
[**calculate_subtraction**](MathApi.md#calculate_subtraction) | **POST** /CalculateSubtraction | Math - Calculate Subtraction
[**calculate_sum**](MathApi.md#calculate_sum) | **POST** /CalculateSum | Math - Calculate sum
[**calculate_tangent**](MathApi.md#calculate_tangent) | **POST** /CalculateTangent | Math - Calculate Tangent
[**calculate_variance**](MathApi.md#calculate_variance) | **POST** /CalculateVariance | Math - Calculate variance
[**convert_angle**](MathApi.md#convert_angle) | **POST** /ConvertAngle | Math - Convert angle
[**convert_area**](MathApi.md#convert_area) | **POST** /ConvertArea | Math - Convert area
[**convert_distance**](MathApi.md#convert_distance) | **POST** /ConvertDistance | Math - Convert distance
[**convert_duration**](MathApi.md#convert_duration) | **POST** /ConvertDuration | Math - Convert duration
[**convert_energy**](MathApi.md#convert_energy) | **POST** /ConvertEnergy | Math - Convert energy
[**convert_power**](MathApi.md#convert_power) | **POST** /ConvertPower | Math - Convert power
[**convert_speed**](MathApi.md#convert_speed) | **POST** /ConvertSpeed | Math - Convert speed
[**convert_temperature**](MathApi.md#convert_temperature) | **POST** /ConvertTemperature | Math - Convert temperature
[**convert_volume**](MathApi.md#convert_volume) | **POST** /ConvertVolume | Math - Convert volume
[**convert_weight**](MathApi.md#convert_weight) | **POST** /ConvertWeight | Math - Convert weight
[**random_number**](MathApi.md#random_number) | **POST** /RandomNumber | Math - Random number
[**round_number**](MathApi.md#round_number) | **POST** /RoundNumber | Math - Round number
[**standard_deviation**](MathApi.md#standard_deviation) | **POST** /StandardDeviation | Math - Calculate standard deviation


# **calculate_absolute**
> OutputNumber calculate_absolute(calculate_number=calculate_number)

Math - Calculate Absolute

Calculate the absolute value of a number

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_number import InputCalculateNumber
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_number = openapi_client.InputCalculateNumber() # InputCalculateNumber | Number calculation parameters (optional)

    try:
        # Math - Calculate Absolute
        api_response = api_instance.calculate_absolute(calculate_number=calculate_number)
        print("The response of MathApi->calculate_absolute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_absolute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_number** | [**InputCalculateNumber**](InputCalculateNumber.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_addition**
> OutputNumber calculate_addition(calculate_numbers=calculate_numbers)

Math - Calculate Addition

Calculate the sum of two numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_numbers import InputCalculateNumbers
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_numbers = openapi_client.InputCalculateNumbers() # InputCalculateNumbers | Number calculation parameters (optional)

    try:
        # Math - Calculate Addition
        api_response = api_instance.calculate_addition(calculate_numbers=calculate_numbers)
        print("The response of MathApi->calculate_addition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_addition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_numbers** | [**InputCalculateNumbers**](InputCalculateNumbers.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_average**
> OutputNumber calculate_average(calculate_series=calculate_series)

Math - Calculate average

Calculate the average of two or more numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_series import InputCalculateSeries
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_series = openapi_client.InputCalculateSeries() # InputCalculateSeries | Series calculation parameters (optional)

    try:
        # Math - Calculate average
        api_response = api_instance.calculate_average(calculate_series=calculate_series)
        print("The response of MathApi->calculate_average:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_average: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_series** | [**InputCalculateSeries**](InputCalculateSeries.md)| Series calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_cosine**
> OutputNumber calculate_cosine(calculate_number=calculate_number)

Math - Calculate Cosine

Calculate the cosine value of an angle

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_number import InputCalculateNumber
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_number = openapi_client.InputCalculateNumber() # InputCalculateNumber | Number calculation parameters (optional)

    try:
        # Math - Calculate Cosine
        api_response = api_instance.calculate_cosine(calculate_number=calculate_number)
        print("The response of MathApi->calculate_cosine:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_cosine: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_number** | [**InputCalculateNumber**](InputCalculateNumber.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_division**
> OutputNumber calculate_division(calculate_numbers=calculate_numbers)

Math - Calculate Division

Calculate the quotient of two numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_numbers import InputCalculateNumbers
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_numbers = openapi_client.InputCalculateNumbers() # InputCalculateNumbers | Number calculation parameters (optional)

    try:
        # Math - Calculate Division
        api_response = api_instance.calculate_division(calculate_numbers=calculate_numbers)
        print("The response of MathApi->calculate_division:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_division: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_numbers** | [**InputCalculateNumbers**](InputCalculateNumbers.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_logarithm**
> OutputNumber calculate_logarithm(calculate_number=calculate_number)

Math - Calculate Logarithm

Calculate the logarithm of a number

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_number import InputCalculateNumber
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_number = openapi_client.InputCalculateNumber() # InputCalculateNumber | Number calculation parameters (optional)

    try:
        # Math - Calculate Logarithm
        api_response = api_instance.calculate_logarithm(calculate_number=calculate_number)
        print("The response of MathApi->calculate_logarithm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_logarithm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_number** | [**InputCalculateNumber**](InputCalculateNumber.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_median**
> OutputNumber calculate_median(calculate_series=calculate_series)

Math - Calculate median

Calculate the median of two or more numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_series import InputCalculateSeries
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_series = openapi_client.InputCalculateSeries() # InputCalculateSeries | Series calculation parameters (optional)

    try:
        # Math - Calculate median
        api_response = api_instance.calculate_median(calculate_series=calculate_series)
        print("The response of MathApi->calculate_median:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_median: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_series** | [**InputCalculateSeries**](InputCalculateSeries.md)| Series calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_min_max**
> OutputNumber calculate_min_max(calculate_series=calculate_series)

Math - Calculate minimum or maximum

Calculate the minimum or maximum value in a sequence of numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_min_max import InputCalculateMinMax
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_series = openapi_client.InputCalculateMinMax() # InputCalculateMinMax | Series calculation parameters (optional)

    try:
        # Math - Calculate minimum or maximum
        api_response = api_instance.calculate_min_max(calculate_series=calculate_series)
        print("The response of MathApi->calculate_min_max:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_min_max: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_series** | [**InputCalculateMinMax**](InputCalculateMinMax.md)| Series calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_modulo**
> OutputNumber calculate_modulo(calculate_numbers=calculate_numbers)

Math - Calculate Modulo

Calculate the remainder of dividing two numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_numbers import InputCalculateNumbers
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_numbers = openapi_client.InputCalculateNumbers() # InputCalculateNumbers | Number calculation parameters (optional)

    try:
        # Math - Calculate Modulo
        api_response = api_instance.calculate_modulo(calculate_numbers=calculate_numbers)
        print("The response of MathApi->calculate_modulo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_modulo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_numbers** | [**InputCalculateNumbers**](InputCalculateNumbers.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_multiplication**
> OutputNumber calculate_multiplication(calculate_numbers=calculate_numbers)

Math - Calculate Multiplication

Calculate the product of two numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_numbers import InputCalculateNumbers
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_numbers = openapi_client.InputCalculateNumbers() # InputCalculateNumbers | Number calculation parameters (optional)

    try:
        # Math - Calculate Multiplication
        api_response = api_instance.calculate_multiplication(calculate_numbers=calculate_numbers)
        print("The response of MathApi->calculate_multiplication:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_multiplication: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_numbers** | [**InputCalculateNumbers**](InputCalculateNumbers.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_nth_root**
> OutputNumber calculate_nth_root(calculate_numbers=calculate_numbers)

Math - Calculate Nth Root

Calculate the n-th root of a number

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_numbers import InputCalculateNumbers
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_numbers = openapi_client.InputCalculateNumbers() # InputCalculateNumbers | Number calculation parameters (optional)

    try:
        # Math - Calculate Nth Root
        api_response = api_instance.calculate_nth_root(calculate_numbers=calculate_numbers)
        print("The response of MathApi->calculate_nth_root:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_nth_root: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_numbers** | [**InputCalculateNumbers**](InputCalculateNumbers.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_power**
> OutputNumber calculate_power(calculate_power=calculate_power)

Math - Calculate power

Raise number to a specified power

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_power import InputCalculatePower
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_power = openapi_client.InputCalculatePower() # InputCalculatePower | Power calculation parameters (optional)

    try:
        # Math - Calculate power
        api_response = api_instance.calculate_power(calculate_power=calculate_power)
        print("The response of MathApi->calculate_power:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_power: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_power** | [**InputCalculatePower**](InputCalculatePower.md)| Power calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_sine**
> OutputNumber calculate_sine(calculate_number=calculate_number)

Math - Calculate Sine

Calculate the sine value of an angle

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_number import InputCalculateNumber
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_number = openapi_client.InputCalculateNumber() # InputCalculateNumber | Number calculation parameters (optional)

    try:
        # Math - Calculate Sine
        api_response = api_instance.calculate_sine(calculate_number=calculate_number)
        print("The response of MathApi->calculate_sine:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_sine: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_number** | [**InputCalculateNumber**](InputCalculateNumber.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_square_root**
> OutputNumber calculate_square_root(calculate_number=calculate_number)

Math - Calculate Square Root

Calculate the square root of a number

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_number import InputCalculateNumber
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_number = openapi_client.InputCalculateNumber() # InputCalculateNumber | Number calculation parameters (optional)

    try:
        # Math - Calculate Square Root
        api_response = api_instance.calculate_square_root(calculate_number=calculate_number)
        print("The response of MathApi->calculate_square_root:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_square_root: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_number** | [**InputCalculateNumber**](InputCalculateNumber.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_subtraction**
> OutputNumber calculate_subtraction(calculate_numbers=calculate_numbers)

Math - Calculate Subtraction

Calculate the difference between two numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_numbers import InputCalculateNumbers
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_numbers = openapi_client.InputCalculateNumbers() # InputCalculateNumbers | Number calculation parameters (optional)

    try:
        # Math - Calculate Subtraction
        api_response = api_instance.calculate_subtraction(calculate_numbers=calculate_numbers)
        print("The response of MathApi->calculate_subtraction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_subtraction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_numbers** | [**InputCalculateNumbers**](InputCalculateNumbers.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_sum**
> OutputNumber calculate_sum(calculate_series=calculate_series)

Math - Calculate sum

Calculate the sum of two or more numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_series import InputCalculateSeries
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_series = openapi_client.InputCalculateSeries() # InputCalculateSeries | Series calculation parameters (optional)

    try:
        # Math - Calculate sum
        api_response = api_instance.calculate_sum(calculate_series=calculate_series)
        print("The response of MathApi->calculate_sum:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_sum: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_series** | [**InputCalculateSeries**](InputCalculateSeries.md)| Series calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_tangent**
> OutputNumber calculate_tangent(calculate_number=calculate_number)

Math - Calculate Tangent

Calculate the tangent value of an angle

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_number import InputCalculateNumber
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_number = openapi_client.InputCalculateNumber() # InputCalculateNumber | Number calculation parameters (optional)

    try:
        # Math - Calculate Tangent
        api_response = api_instance.calculate_tangent(calculate_number=calculate_number)
        print("The response of MathApi->calculate_tangent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_tangent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_number** | [**InputCalculateNumber**](InputCalculateNumber.md)| Number calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **calculate_variance**
> OutputNumber calculate_variance(calculate_series=calculate_series)

Math - Calculate variance

Calculate the statistical variance of two or more numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_series import InputCalculateSeries
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_series = openapi_client.InputCalculateSeries() # InputCalculateSeries | Series calculation parameters (optional)

    try:
        # Math - Calculate variance
        api_response = api_instance.calculate_variance(calculate_series=calculate_series)
        print("The response of MathApi->calculate_variance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->calculate_variance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_series** | [**InputCalculateSeries**](InputCalculateSeries.md)| Series calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_angle**
> OutputNumber convert_angle(convert_angle=convert_angle)

Math - Convert angle

Convert value from one angle measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_angle import InputConvertAngle
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_angle = openapi_client.InputConvertAngle() # InputConvertAngle |  (optional)

    try:
        # Math - Convert angle
        api_response = api_instance.convert_angle(convert_angle=convert_angle)
        print("The response of MathApi->convert_angle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_angle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_angle** | [**InputConvertAngle**](InputConvertAngle.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_area**
> OutputNumber convert_area(convert_area=convert_area)

Math - Convert area

Convert value from one area measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_area import InputConvertArea
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_area = openapi_client.InputConvertArea() # InputConvertArea |  (optional)

    try:
        # Math - Convert area
        api_response = api_instance.convert_area(convert_area=convert_area)
        print("The response of MathApi->convert_area:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_area: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_area** | [**InputConvertArea**](InputConvertArea.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_distance**
> OutputNumber convert_distance(convert_distance=convert_distance)

Math - Convert distance

Convert value from one distance measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_distance import InputConvertDistance
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_distance = openapi_client.InputConvertDistance() # InputConvertDistance |  (optional)

    try:
        # Math - Convert distance
        api_response = api_instance.convert_distance(convert_distance=convert_distance)
        print("The response of MathApi->convert_distance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_distance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_distance** | [**InputConvertDistance**](InputConvertDistance.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_duration**
> OutputNumber convert_duration(convert_duration=convert_duration)

Math - Convert duration

Convert value from one duration measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_duration import InputConvertDuration
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_duration = openapi_client.InputConvertDuration() # InputConvertDuration |  (optional)

    try:
        # Math - Convert duration
        api_response = api_instance.convert_duration(convert_duration=convert_duration)
        print("The response of MathApi->convert_duration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_duration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_duration** | [**InputConvertDuration**](InputConvertDuration.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_energy**
> OutputNumber convert_energy(convert_energy=convert_energy)

Math - Convert energy

Convert value from one energy measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_energy import InputConvertEnergy
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_energy = openapi_client.InputConvertEnergy() # InputConvertEnergy |  (optional)

    try:
        # Math - Convert energy
        api_response = api_instance.convert_energy(convert_energy=convert_energy)
        print("The response of MathApi->convert_energy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_energy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_energy** | [**InputConvertEnergy**](InputConvertEnergy.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_power**
> OutputNumber convert_power(convert_power=convert_power)

Math - Convert power

Convert value from one power measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_power import InputConvertPower
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_power = openapi_client.InputConvertPower() # InputConvertPower |  (optional)

    try:
        # Math - Convert power
        api_response = api_instance.convert_power(convert_power=convert_power)
        print("The response of MathApi->convert_power:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_power: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_power** | [**InputConvertPower**](InputConvertPower.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_speed**
> OutputNumber convert_speed(convert_speed=convert_speed)

Math - Convert speed

Convert value from one speed measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_speed import InputConvertSpeed
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_speed = openapi_client.InputConvertSpeed() # InputConvertSpeed |  (optional)

    try:
        # Math - Convert speed
        api_response = api_instance.convert_speed(convert_speed=convert_speed)
        print("The response of MathApi->convert_speed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_speed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_speed** | [**InputConvertSpeed**](InputConvertSpeed.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_temperature**
> OutputNumber convert_temperature(convert_temperature=convert_temperature)

Math - Convert temperature

Convert value from one temperature measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_temperature import InputConvertTemperature
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_temperature = openapi_client.InputConvertTemperature() # InputConvertTemperature |  (optional)

    try:
        # Math - Convert temperature
        api_response = api_instance.convert_temperature(convert_temperature=convert_temperature)
        print("The response of MathApi->convert_temperature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_temperature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_temperature** | [**InputConvertTemperature**](InputConvertTemperature.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_volume**
> OutputNumber convert_volume(convert_volume=convert_volume)

Math - Convert volume

Convert value from one volume measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_volume import InputConvertVolume
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_volume = openapi_client.InputConvertVolume() # InputConvertVolume |  (optional)

    try:
        # Math - Convert volume
        api_response = api_instance.convert_volume(convert_volume=convert_volume)
        print("The response of MathApi->convert_volume:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_volume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_volume** | [**InputConvertVolume**](InputConvertVolume.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **convert_weight**
> OutputNumber convert_weight(convert_weight=convert_weight)

Math - Convert weight

Convert value from one weight measurement to another

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_convert_weight import InputConvertWeight
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    convert_weight = openapi_client.InputConvertWeight() # InputConvertWeight |  (optional)

    try:
        # Math - Convert weight
        api_response = api_instance.convert_weight(convert_weight=convert_weight)
        print("The response of MathApi->convert_weight:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->convert_weight: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convert_weight** | [**InputConvertWeight**](InputConvertWeight.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **random_number**
> OutputNumber random_number(number_range=number_range)

Math - Random number

Generate a random number within a specified range

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_number_range import InputNumberRange
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    number_range = openapi_client.InputNumberRange() # InputNumberRange |  (optional)

    try:
        # Math - Random number
        api_response = api_instance.random_number(number_range=number_range)
        print("The response of MathApi->random_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->random_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number_range** | [**InputNumberRange**](InputNumberRange.md)|  | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **round_number**
> OutputNumber round_number(calculate_number=calculate_number)

Math - Round number

Round a numeric value up or down

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_number import InputCalculateNumber
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_number = openapi_client.InputCalculateNumber() # InputCalculateNumber | Numeric calculation parameters (optional)

    try:
        # Math - Round number
        api_response = api_instance.round_number(calculate_number=calculate_number)
        print("The response of MathApi->round_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->round_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_number** | [**InputCalculateNumber**](InputCalculateNumber.md)| Numeric calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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

# **standard_deviation**
> OutputNumber standard_deviation(calculate_series=calculate_series)

Math - Calculate standard deviation

Calculate the standard deviation of two or more numbers

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_calculate_series import InputCalculateSeries
from openapi_client.models.output_number import OutputNumber
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
    api_instance = openapi_client.MathApi(api_client)
    calculate_series = openapi_client.InputCalculateSeries() # InputCalculateSeries | Series calculation parameters (optional)

    try:
        # Math - Calculate standard deviation
        api_response = api_instance.standard_deviation(calculate_series=calculate_series)
        print("The response of MathApi->standard_deviation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MathApi->standard_deviation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_series** | [**InputCalculateSeries**](InputCalculateSeries.md)| Series calculation parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

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


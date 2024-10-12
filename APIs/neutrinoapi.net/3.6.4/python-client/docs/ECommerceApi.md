# openapi_client.ECommerceApi

All URIs are relative to *https://neutrinoapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**b_in_list_download**](ECommerceApi.md#b_in_list_download) | **GET** /bin-list-download | BIN List Download
[**b_in_lookup**](ECommerceApi.md#b_in_lookup) | **GET** /bin-lookup | BIN Lookup
[**convert**](ECommerceApi.md#convert) | **GET** /convert | Convert


# **b_in_list_download**
> bytearray b_in_list_download(include_iso3=include_iso3, include_8digit=include_8digit)

BIN List Download

Download our entire BIN database for direct use on your own systems

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
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
    api_instance = openapi_client.ECommerceApi(api_client)
    include_iso3 = False # bool | Include ISO 3-letter country codes and ISO 3-letter currency codes in the data. These will be added to columns 10 and 11 respectively (optional) (default to False)
    include_8digit = False # bool | Include 8-digit and higher BIN codes. This option includes all 6-digit BINs and all 8-digit and higher BINs (including some 9, 10 and 11 digit BINs where available) (optional) (default to False)

    try:
        # BIN List Download
        api_response = api_instance.b_in_list_download(include_iso3=include_iso3, include_8digit=include_8digit)
        print("The response of ECommerceApi->b_in_list_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ECommerceApi->b_in_list_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_iso3** | **bool**| Include ISO 3-letter country codes and ISO 3-letter currency codes in the data. These will be added to columns 10 and 11 respectively | [optional] [default to False]
 **include_8digit** | **bool**| Include 8-digit and higher BIN codes. This option includes all 6-digit BINs and all 8-digit and higher BINs (including some 9, 10 and 11 digit BINs where available) | [optional] [default to False]

### Return type

**bytearray**

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

# **b_in_lookup**
> BINLookupResponse b_in_lookup(bin_number, customer_ip=customer_ip)

BIN Lookup

Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.bin_lookup_response import BINLookupResponse
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
    api_instance = openapi_client.ECommerceApi(api_client)
    bin_number = 'bin_number_example' # str | The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy
    customer_ip = 'customer_ip_example' # str | Pass in the customers IP address and we will return some extra information about them (optional)

    try:
        # BIN Lookup
        api_response = api_instance.b_in_lookup(bin_number, customer_ip=customer_ip)
        print("The response of ECommerceApi->b_in_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ECommerceApi->b_in_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bin_number** | **str**| The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy | 
 **customer_ip** | **str**| Pass in the customers IP address and we will return some extra information about them | [optional] 

### Return type

[**BINLookupResponse**](BINLookupResponse.md)

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

# **convert**
> ConvertResponse convert(from_value, from_type, to_type)

Convert

A currency and unit conversion tool

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.convert_response import ConvertResponse
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
    api_instance = openapi_client.ECommerceApi(api_client)
    from_value = 'from_value_example' # str | The value to convert from (e.g. 10.95)
    from_type = 'from_type_example' # str | The type of the value to convert from (e.g. USD)
    to_type = 'to_type_example' # str | The type to convert to (e.g. EUR)

    try:
        # Convert
        api_response = api_instance.convert(from_value, from_type, to_type)
        print("The response of ECommerceApi->convert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ECommerceApi->convert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from_value** | **str**| The value to convert from (e.g. 10.95) | 
 **from_type** | **str**| The type of the value to convert from (e.g. USD) | 
 **to_type** | **str**| The type to convert to (e.g. EUR) | 

### Return type

[**ConvertResponse**](ConvertResponse.md)

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


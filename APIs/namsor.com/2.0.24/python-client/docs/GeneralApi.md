# openapi_client.GeneralApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**name_type**](GeneralApi.md#name_type) | **GET** /api2/json/nameType/{properNoun} | Infer the likely type of a proper noun (personal name, brand name, place name etc.)
[**name_type_batch**](GeneralApi.md#name_type_batch) | **POST** /api2/json/nameTypeBatch | Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
[**name_type_geo**](GeneralApi.md#name_type_geo) | **GET** /api2/json/nameTypeGeo/{properNoun}/{countryIso2} | Infer the likely type of a proper noun (personal name, brand name, place name etc.)
[**name_type_geo_batch**](GeneralApi.md#name_type_geo_batch) | **POST** /api2/json/nameTypeGeoBatch | Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)


# **name_type**
> ProperNounCategorizedOut name_type(proper_noun)

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.proper_noun_categorized_out import ProperNounCategorizedOut
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
    api_instance = openapi_client.GeneralApi(api_client)
    proper_noun = 'proper_noun_example' # str | 

    try:
        # Infer the likely type of a proper noun (personal name, brand name, place name etc.)
        api_response = api_instance.name_type(proper_noun)
        print("The response of GeneralApi->name_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneralApi->name_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proper_noun** | **str**|  | 

### Return type

[**ProperNounCategorizedOut**](ProperNounCategorizedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A typed name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **name_type_batch**
> BatchProperNounCategorizedOut name_type_batch(batch_name_in=batch_name_in)

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_name_in import BatchNameIn
from openapi_client.models.batch_proper_noun_categorized_out import BatchProperNounCategorizedOut
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
    api_instance = openapi_client.GeneralApi(api_client)
    batch_name_in = openapi_client.BatchNameIn() # BatchNameIn | A list of proper names (optional)

    try:
        # Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
        api_response = api_instance.name_type_batch(batch_name_in=batch_name_in)
        print("The response of GeneralApi->name_type_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneralApi->name_type_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_name_in** | [**BatchNameIn**](BatchNameIn.md)| A list of proper names | [optional] 

### Return type

[**BatchProperNounCategorizedOut**](BatchProperNounCategorizedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of commonTypeized names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **name_type_geo**
> ProperNounCategorizedOut name_type_geo(proper_noun, country_iso2)

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.proper_noun_categorized_out import ProperNounCategorizedOut
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
    api_instance = openapi_client.GeneralApi(api_client)
    proper_noun = 'proper_noun_example' # str | 
    country_iso2 = 'country_iso2_example' # str | 

    try:
        # Infer the likely type of a proper noun (personal name, brand name, place name etc.)
        api_response = api_instance.name_type_geo(proper_noun, country_iso2)
        print("The response of GeneralApi->name_type_geo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneralApi->name_type_geo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proper_noun** | **str**|  | 
 **country_iso2** | **str**|  | 

### Return type

[**ProperNounCategorizedOut**](ProperNounCategorizedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A typed name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **name_type_geo_batch**
> BatchProperNounCategorizedOut name_type_geo_batch(batch_name_geo_in=batch_name_geo_in)

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_name_geo_in import BatchNameGeoIn
from openapi_client.models.batch_proper_noun_categorized_out import BatchProperNounCategorizedOut
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
    api_instance = openapi_client.GeneralApi(api_client)
    batch_name_geo_in = openapi_client.BatchNameGeoIn() # BatchNameGeoIn | A list of proper names (optional)

    try:
        # Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
        api_response = api_instance.name_type_geo_batch(batch_name_geo_in=batch_name_geo_in)
        print("The response of GeneralApi->name_type_geo_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneralApi->name_type_geo_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_name_geo_in** | [**BatchNameGeoIn**](BatchNameGeoIn.md)| A list of proper names | [optional] 

### Return type

[**BatchProperNounCategorizedOut**](BatchProperNounCategorizedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of commonTypeized names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


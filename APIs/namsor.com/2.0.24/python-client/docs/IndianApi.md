# openapi_client.IndianApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**castegroup_indian_full**](IndianApi.md#castegroup_indian_full) | **GET** /api2/json/castegroupIndianFull/{subDivisionIso31662}/{personalNameFull} | [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
[**castegroup_indian_full_batch**](IndianApi.md#castegroup_indian_full_batch) | **POST** /api2/json/castegroupIndianFullBatch | [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 
[**religion**](IndianApi.md#religion) | **GET** /api2/json/religionIndianFull/{subDivisionIso31662}/{personalNameFull} | [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
[**religion_indian_full_batch**](IndianApi.md#religion_indian_full_batch) | **POST** /api2/json/religionIndianFullBatch | [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
[**subclassification_indian**](IndianApi.md#subclassification_indian) | **GET** /api2/json/subclassificationIndian/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
[**subclassification_indian_batch**](IndianApi.md#subclassification_indian_batch) | **POST** /api2/json/subclassificationIndianBatch | [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
[**subclassification_indian_full**](IndianApi.md#subclassification_indian_full) | **GET** /api2/json/subclassificationIndianFull/{fullName} | [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
[**subclassification_indian_full_batch**](IndianApi.md#subclassification_indian_full_batch) | **POST** /api2/json/subclassificationIndianFullBatch | [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.


# **castegroup_indian_full**
> PersonalNameCastegroupOut castegroup_indian_full(sub_division_iso31662, personal_name_full)

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_castegroup_out import PersonalNameCastegroupOut
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
    api_instance = openapi_client.IndianApi(api_client)
    sub_division_iso31662 = 'sub_division_iso31662_example' # str | 
    personal_name_full = 'personal_name_full_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
        api_response = api_instance.castegroup_indian_full(sub_division_iso31662, personal_name_full)
        print("The response of IndianApi->castegroup_indian_full:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->castegroup_indian_full: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sub_division_iso31662** | **str**|  | 
 **personal_name_full** | **str**|  | 

### Return type

[**PersonalNameCastegroupOut**](PersonalNameCastegroupOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A castegroup-coded name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **castegroup_indian_full_batch**
> BatchPersonalNameCastegroupOut castegroup_indian_full_batch(batch_personal_name_subdivision_in=batch_personal_name_subdivision_in)

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_castegroup_out import BatchPersonalNameCastegroupOut
from openapi_client.models.batch_personal_name_subdivision_in import BatchPersonalNameSubdivisionIn
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
    api_instance = openapi_client.IndianApi(api_client)
    batch_personal_name_subdivision_in = openapi_client.BatchPersonalNameSubdivisionIn() # BatchPersonalNameSubdivisionIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 
        api_response = api_instance.castegroup_indian_full_batch(batch_personal_name_subdivision_in=batch_personal_name_subdivision_in)
        print("The response of IndianApi->castegroup_indian_full_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->castegroup_indian_full_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_subdivision_in** | [**BatchPersonalNameSubdivisionIn**](BatchPersonalNameSubdivisionIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameCastegroupOut**](BatchPersonalNameCastegroupOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of castegroup-coded names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **religion**
> PersonalNameReligionedOut religion(sub_division_iso31662, personal_name_full)

[USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_religioned_out import PersonalNameReligionedOut
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
    api_instance = openapi_client.IndianApi(api_client)
    sub_division_iso31662 = 'sub_division_iso31662_example' # str | 
    personal_name_full = 'personal_name_full_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
        api_response = api_instance.religion(sub_division_iso31662, personal_name_full)
        print("The response of IndianApi->religion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->religion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sub_division_iso31662** | **str**|  | 
 **personal_name_full** | **str**|  | 

### Return type

[**PersonalNameReligionedOut**](PersonalNameReligionedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A religion-coded name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **religion_indian_full_batch**
> BatchPersonalNameReligionedOut religion_indian_full_batch(batch_personal_name_subdivision_in=batch_personal_name_subdivision_in)

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_religioned_out import BatchPersonalNameReligionedOut
from openapi_client.models.batch_personal_name_subdivision_in import BatchPersonalNameSubdivisionIn
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
    api_instance = openapi_client.IndianApi(api_client)
    batch_personal_name_subdivision_in = openapi_client.BatchPersonalNameSubdivisionIn() # BatchPersonalNameSubdivisionIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
        api_response = api_instance.religion_indian_full_batch(batch_personal_name_subdivision_in=batch_personal_name_subdivision_in)
        print("The response of IndianApi->religion_indian_full_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->religion_indian_full_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_subdivision_in** | [**BatchPersonalNameSubdivisionIn**](BatchPersonalNameSubdivisionIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameReligionedOut**](BatchPersonalNameReligionedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of religion-coded names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subclassification_indian**
> FirstLastNameGeoSubclassificationOut subclassification_indian(first_name, last_name)

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_geo_subclassification_out import FirstLastNameGeoSubclassificationOut
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
    api_instance = openapi_client.IndianApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
        api_response = api_instance.subclassification_indian(first_name, last_name)
        print("The response of IndianApi->subclassification_indian:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->subclassification_indian: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 

### Return type

[**FirstLastNameGeoSubclassificationOut**](FirstLastNameGeoSubclassificationOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A classified name at a sub-country level. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subclassification_indian_batch**
> BatchFirstLastNameGeoSubclassificationOut subclassification_indian_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_geo_in import BatchFirstLastNameGeoIn
from openapi_client.models.batch_first_last_name_geo_subclassification_out import BatchFirstLastNameGeoSubclassificationOut
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
    api_instance = openapi_client.IndianApi(api_client)
    batch_first_last_name_geo_in = openapi_client.BatchFirstLastNameGeoIn() # BatchFirstLastNameGeoIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
        api_response = api_instance.subclassification_indian_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)
        print("The response of IndianApi->subclassification_indian_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->subclassification_indian_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_geo_in** | [**BatchFirstLastNameGeoIn**](BatchFirstLastNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameGeoSubclassificationOut**](BatchFirstLastNameGeoSubclassificationOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of classified names at a subcountry level. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subclassification_indian_full**
> PersonalNameGeoSubclassificationOut subclassification_indian_full(full_name)

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_geo_subclassification_out import PersonalNameGeoSubclassificationOut
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
    api_instance = openapi_client.IndianApi(api_client)
    full_name = 'full_name_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
        api_response = api_instance.subclassification_indian_full(full_name)
        print("The response of IndianApi->subclassification_indian_full:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->subclassification_indian_full: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full_name** | **str**|  | 

### Return type

[**PersonalNameGeoSubclassificationOut**](PersonalNameGeoSubclassificationOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A classified name at a sub-country level. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subclassification_indian_full_batch**
> BatchPersonalNameGeoSubclassificationOut subclassification_indian_full_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_geo_in import BatchPersonalNameGeoIn
from openapi_client.models.batch_personal_name_geo_subclassification_out import BatchPersonalNameGeoSubclassificationOut
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
    api_instance = openapi_client.IndianApi(api_client)
    batch_personal_name_geo_in = openapi_client.BatchPersonalNameGeoIn() # BatchPersonalNameGeoIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
        api_response = api_instance.subclassification_indian_full_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)
        print("The response of IndianApi->subclassification_indian_full_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndianApi->subclassification_indian_full_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_geo_in** | [**BatchPersonalNameGeoIn**](BatchPersonalNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameGeoSubclassificationOut**](BatchPersonalNameGeoSubclassificationOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of classified names at a subcountry level. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


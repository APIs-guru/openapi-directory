# openapi_client.PersonalApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**corridor**](PersonalApi.md#corridor) | **GET** /api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo} | [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
[**corridor_batch**](PersonalApi.md#corridor_batch) | **POST** /api2/json/corridorBatch | [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
[**country**](PersonalApi.md#country) | **GET** /api2/json/country/{personalNameFull} | [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
[**country_batch**](PersonalApi.md#country_batch) | **POST** /api2/json/countryBatch | [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
[**diaspora**](PersonalApi.md#diaspora) | **GET** /api2/json/diaspora/{countryIso2}/{firstName}/{lastName} | [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
[**diaspora_batch**](PersonalApi.md#diaspora_batch) | **POST** /api2/json/diasporaBatch | [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
[**gender**](PersonalApi.md#gender) | **GET** /api2/json/gender/{firstName}/{lastName} | Infer the likely gender of a name.
[**gender1**](PersonalApi.md#gender1) | **GET** /api2/json/gender/{firstName} | Infer the likely gender of a just a fiven name, assuming default &#39;US&#39; local context. Please use preferably full names and local geographic context for better accuracy.
[**gender_batch**](PersonalApi.md#gender_batch) | **POST** /api2/json/genderBatch | Infer the likely gender of up to 100 names, detecting automatically the cultural context.
[**gender_full**](PersonalApi.md#gender_full) | **GET** /api2/json/genderFull/{fullName} | Infer the likely gender of a full name, ex. John H. Smith
[**gender_full_batch**](PersonalApi.md#gender_full_batch) | **POST** /api2/json/genderFullBatch | Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
[**gender_full_geo**](PersonalApi.md#gender_full_geo) | **GET** /api2/json/genderFullGeo/{fullName}/{countryIso2} | Infer the likely gender of a full name, given a local context (ISO2 country code).
[**gender_full_geo_batch**](PersonalApi.md#gender_full_geo_batch) | **POST** /api2/json/genderFullGeoBatch | Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
[**gender_geo**](PersonalApi.md#gender_geo) | **GET** /api2/json/genderGeo/{firstName}/{lastName}/{countryIso2} | Infer the likely gender of a name, given a local context (ISO2 country code).
[**gender_geo_batch**](PersonalApi.md#gender_geo_batch) | **POST** /api2/json/genderGeoBatch | Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
[**origin**](PersonalApi.md#origin) | **GET** /api2/json/origin/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use &#39;diaspora&#39; instead.
[**origin_batch**](PersonalApi.md#origin_batch) | **POST** /api2/json/originBatch | [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
[**parse_name**](PersonalApi.md#parse_name) | **GET** /api2/json/parseName/{nameFull} | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
[**parse_name_batch**](PersonalApi.md#parse_name_batch) | **POST** /api2/json/parseNameBatch | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
[**parse_name_geo**](PersonalApi.md#parse_name_geo) | **GET** /api2/json/parseName/{nameFull}/{countryIso2} | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
[**parse_name_geo_batch**](PersonalApi.md#parse_name_geo_batch) | **POST** /api2/json/parseNameGeoBatch | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
[**religion_full**](PersonalApi.md#religion_full) | **GET** /api2/json/religionFull/{countryIso2}/{subDivisionIso31662}/{personalNameFull} | [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
[**religion_full_batch**](PersonalApi.md#religion_full_batch) | **POST** /api2/json/religionFullBatch | [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
[**subclassification**](PersonalApi.md#subclassification) | **GET** /api2/json/subclassification/{countryIso2}/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code &#39;IN&#39;).
[**subclassification_batch**](PersonalApi.md#subclassification_batch) | **POST** /api2/json/subclassificationBatch | [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code &#39;IN&#39;).
[**subclassification_full**](PersonalApi.md#subclassification_full) | **GET** /api2/json/subclassificationFull/{countryIso2}/{fullName} | [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code &#39;IN&#39;).
[**subclassification_full_batch**](PersonalApi.md#subclassification_full_batch) | **POST** /api2/json/subclassificationFullBatch | [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code &#39;IN&#39;).
[**us_race_ethnicity**](PersonalApi.md#us_race_ethnicity) | **GET** /api2/json/usRaceEthnicity/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
[**us_race_ethnicity_batch**](PersonalApi.md#us_race_ethnicity_batch) | **POST** /api2/json/usRaceEthnicityBatch | [USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
[**us_race_ethnicity_zip5**](PersonalApi.md#us_race_ethnicity_zip5) | **GET** /api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code} | [USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
[**us_zip_race_ethnicity_batch**](PersonalApi.md#us_zip_race_ethnicity_batch) | **POST** /api2/json/usZipRaceEthnicityBatch | [USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).


# **corridor**
> CorridorOut corridor(country_iso2_from, first_name_from, last_name_from, country_iso2_to, first_name_to, last_name_to)

[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.corridor_out import CorridorOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    country_iso2_from = 'country_iso2_from_example' # str | 
    first_name_from = 'first_name_from_example' # str | 
    last_name_from = 'last_name_from_example' # str | 
    country_iso2_to = 'country_iso2_to_example' # str | 
    first_name_to = 'first_name_to_example' # str | 
    last_name_to = 'last_name_to_example' # str | 

    try:
        # [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
        api_response = api_instance.corridor(country_iso2_from, first_name_from, last_name_from, country_iso2_to, first_name_to, last_name_to)
        print("The response of PersonalApi->corridor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->corridor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_iso2_from** | **str**|  | 
 **first_name_from** | **str**|  | 
 **last_name_from** | **str**|  | 
 **country_iso2_to** | **str**|  | 
 **first_name_to** | **str**|  | 
 **last_name_to** | **str**|  | 

### Return type

[**CorridorOut**](CorridorOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Two classified names. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **corridor_batch**
> BatchCorridorOut corridor_batch(batch_corridor_in=batch_corridor_in)

[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_corridor_in import BatchCorridorIn
from openapi_client.models.batch_corridor_out import BatchCorridorOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_corridor_in = openapi_client.BatchCorridorIn() # BatchCorridorIn | A list of name pairs, with country code (nameFrom -> nameTo). (optional)

    try:
        # [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
        api_response = api_instance.corridor_batch(batch_corridor_in=batch_corridor_in)
        print("The response of PersonalApi->corridor_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->corridor_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_corridor_in** | [**BatchCorridorIn**](BatchCorridorIn.md)| A list of name pairs, with country code (nameFrom -&gt; nameTo). | [optional] 

### Return type

[**BatchCorridorOut**](BatchCorridorOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of classified name pairs. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **country**
> PersonalNameGeoOut country(personal_name_full)

[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_geo_out import PersonalNameGeoOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    personal_name_full = 'personal_name_full_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
        api_response = api_instance.country(personal_name_full)
        print("The response of PersonalApi->country:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->country: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personal_name_full** | **str**|  | 

### Return type

[**PersonalNameGeoOut**](PersonalNameGeoOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A origined name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **country_batch**
> BatchPersonalNameGeoOut country_batch(batch_personal_name_in=batch_personal_name_in)

[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_geo_out import BatchPersonalNameGeoOut
from openapi_client.models.batch_personal_name_in import BatchPersonalNameIn
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_personal_name_in = openapi_client.BatchPersonalNameIn() # BatchPersonalNameIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
        api_response = api_instance.country_batch(batch_personal_name_in=batch_personal_name_in)
        print("The response of PersonalApi->country_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->country_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_in** | [**BatchPersonalNameIn**](BatchPersonalNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameGeoOut**](BatchPersonalNameGeoOut.md)

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

# **diaspora**
> FirstLastNameDiasporaedOut diaspora(country_iso2, first_name, last_name)

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_diasporaed_out import FirstLastNameDiasporaedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    country_iso2 = 'country_iso2_example' # str | 
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 

    try:
        # [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
        api_response = api_instance.diaspora(country_iso2, first_name, last_name)
        print("The response of PersonalApi->diaspora:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->diaspora: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_iso2** | **str**|  | 
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 

### Return type

[**FirstLastNameDiasporaedOut**](FirstLastNameDiasporaedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A diaspora / ethnicity for given name and geography. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diaspora_batch**
> BatchFirstLastNameDiasporaedOut diaspora_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_diasporaed_out import BatchFirstLastNameDiasporaedOut
from openapi_client.models.batch_first_last_name_geo_in import BatchFirstLastNameGeoIn
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_first_last_name_geo_in = openapi_client.BatchFirstLastNameGeoIn() # BatchFirstLastNameGeoIn | A list of personal names (optional)

    try:
        # [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
        api_response = api_instance.diaspora_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)
        print("The response of PersonalApi->diaspora_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->diaspora_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_geo_in** | [**BatchFirstLastNameGeoIn**](BatchFirstLastNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameDiasporaedOut**](BatchFirstLastNameDiasporaedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of diaspora / ethnicity given a name and residency. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gender**
> FirstLastNameGenderedOut gender(first_name, last_name)

Infer the likely gender of a name.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_gendered_out import FirstLastNameGenderedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 

    try:
        # Infer the likely gender of a name.
        api_response = api_instance.gender(first_name, last_name)
        print("The response of PersonalApi->gender:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 

### Return type

[**FirstLastNameGenderedOut**](FirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A genderized name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gender1**
> FirstLastNameGenderedOut gender1(first_name)

Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_gendered_out import FirstLastNameGenderedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    first_name = 'first_name_example' # str | 

    try:
        # Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
        api_response = api_instance.gender1(first_name)
        print("The response of PersonalApi->gender1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 

### Return type

[**FirstLastNameGenderedOut**](FirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A genderized name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gender_batch**
> BatchFirstLastNameGenderedOut gender_batch(batch_first_last_name_in=batch_first_last_name_in)

Infer the likely gender of up to 100 names, detecting automatically the cultural context.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_gendered_out import BatchFirstLastNameGenderedOut
from openapi_client.models.batch_first_last_name_in import BatchFirstLastNameIn
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_first_last_name_in = openapi_client.BatchFirstLastNameIn() # BatchFirstLastNameIn | A list of personal names (optional)

    try:
        # Infer the likely gender of up to 100 names, detecting automatically the cultural context.
        api_response = api_instance.gender_batch(batch_first_last_name_in=batch_first_last_name_in)
        print("The response of PersonalApi->gender_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_in** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameGenderedOut**](BatchFirstLastNameGenderedOut.md)

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

# **gender_full**
> PersonalNameGenderedOut gender_full(full_name)

Infer the likely gender of a full name, ex. John H. Smith

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_gendered_out import PersonalNameGenderedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    full_name = 'full_name_example' # str | 

    try:
        # Infer the likely gender of a full name, ex. John H. Smith
        api_response = api_instance.gender_full(full_name)
        print("The response of PersonalApi->gender_full:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender_full: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full_name** | **str**|  | 

### Return type

[**PersonalNameGenderedOut**](PersonalNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A genderized name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gender_full_batch**
> BatchPersonalNameGenderedOut gender_full_batch(batch_personal_name_in=batch_personal_name_in)

Infer the likely gender of up to 100 full names, detecting automatically the cultural context.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_gendered_out import BatchPersonalNameGenderedOut
from openapi_client.models.batch_personal_name_in import BatchPersonalNameIn
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_personal_name_in = openapi_client.BatchPersonalNameIn() # BatchPersonalNameIn | A list of personal names (optional)

    try:
        # Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
        api_response = api_instance.gender_full_batch(batch_personal_name_in=batch_personal_name_in)
        print("The response of PersonalApi->gender_full_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender_full_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_in** | [**BatchPersonalNameIn**](BatchPersonalNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameGenderedOut**](BatchPersonalNameGenderedOut.md)

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

# **gender_full_geo**
> PersonalNameGenderedOut gender_full_geo(full_name, country_iso2)

Infer the likely gender of a full name, given a local context (ISO2 country code).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_gendered_out import PersonalNameGenderedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    full_name = 'full_name_example' # str | 
    country_iso2 = 'country_iso2_example' # str | 

    try:
        # Infer the likely gender of a full name, given a local context (ISO2 country code).
        api_response = api_instance.gender_full_geo(full_name, country_iso2)
        print("The response of PersonalApi->gender_full_geo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender_full_geo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full_name** | **str**|  | 
 **country_iso2** | **str**|  | 

### Return type

[**PersonalNameGenderedOut**](PersonalNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A genderized name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gender_full_geo_batch**
> BatchPersonalNameGenderedOut gender_full_geo_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)

Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_gendered_out import BatchPersonalNameGenderedOut
from openapi_client.models.batch_personal_name_geo_in import BatchPersonalNameGeoIn
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_personal_name_geo_in = openapi_client.BatchPersonalNameGeoIn() # BatchPersonalNameGeoIn | A list of personal names, with a country ISO2 code (optional)

    try:
        # Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
        api_response = api_instance.gender_full_geo_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)
        print("The response of PersonalApi->gender_full_geo_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender_full_geo_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_geo_in** | [**BatchPersonalNameGeoIn**](BatchPersonalNameGeoIn.md)| A list of personal names, with a country ISO2 code | [optional] 

### Return type

[**BatchPersonalNameGenderedOut**](BatchPersonalNameGenderedOut.md)

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

# **gender_geo**
> FirstLastNameGenderedOut gender_geo(first_name, last_name, country_iso2)

Infer the likely gender of a name, given a local context (ISO2 country code).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_gendered_out import FirstLastNameGenderedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 
    country_iso2 = 'country_iso2_example' # str | 

    try:
        # Infer the likely gender of a name, given a local context (ISO2 country code).
        api_response = api_instance.gender_geo(first_name, last_name, country_iso2)
        print("The response of PersonalApi->gender_geo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender_geo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 
 **country_iso2** | **str**|  | 

### Return type

[**FirstLastNameGenderedOut**](FirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A genderized name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gender_geo_batch**
> BatchFirstLastNameGenderedOut gender_geo_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)

Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_gendered_out import BatchFirstLastNameGenderedOut
from openapi_client.models.batch_first_last_name_geo_in import BatchFirstLastNameGeoIn
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_first_last_name_geo_in = openapi_client.BatchFirstLastNameGeoIn() # BatchFirstLastNameGeoIn | A list of names, with country code. (optional)

    try:
        # Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
        api_response = api_instance.gender_geo_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)
        print("The response of PersonalApi->gender_geo_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->gender_geo_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_geo_in** | [**BatchFirstLastNameGeoIn**](BatchFirstLastNameGeoIn.md)| A list of names, with country code. | [optional] 

### Return type

[**BatchFirstLastNameGenderedOut**](BatchFirstLastNameGenderedOut.md)

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

# **origin**
> FirstLastNameOriginedOut origin(first_name, last_name)

[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_origined_out import FirstLastNameOriginedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
        api_response = api_instance.origin(first_name, last_name)
        print("The response of PersonalApi->origin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->origin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 

### Return type

[**FirstLastNameOriginedOut**](FirstLastNameOriginedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A origined name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origin_batch**
> BatchFirstLastNameOriginedOut origin_batch(batch_first_last_name_in=batch_first_last_name_in)

[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_in import BatchFirstLastNameIn
from openapi_client.models.batch_first_last_name_origined_out import BatchFirstLastNameOriginedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_first_last_name_in = openapi_client.BatchFirstLastNameIn() # BatchFirstLastNameIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
        api_response = api_instance.origin_batch(batch_first_last_name_in=batch_first_last_name_in)
        print("The response of PersonalApi->origin_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->origin_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_in** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameOriginedOut**](BatchFirstLastNameOriginedOut.md)

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

# **parse_name**
> PersonalNameParsedOut parse_name(name_full)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_parsed_out import PersonalNameParsedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    name_full = 'name_full_example' # str | 

    try:
        # Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
        api_response = api_instance.parse_name(name_full)
        print("The response of PersonalApi->parse_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->parse_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name_full** | **str**|  | 

### Return type

[**PersonalNameParsedOut**](PersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A origined name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **parse_name_batch**
> BatchPersonalNameParsedOut parse_name_batch(batch_personal_name_in=batch_personal_name_in)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_in import BatchPersonalNameIn
from openapi_client.models.batch_personal_name_parsed_out import BatchPersonalNameParsedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_personal_name_in = openapi_client.BatchPersonalNameIn() # BatchPersonalNameIn | A list of personal names (optional)

    try:
        # Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
        api_response = api_instance.parse_name_batch(batch_personal_name_in=batch_personal_name_in)
        print("The response of PersonalApi->parse_name_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->parse_name_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_in** | [**BatchPersonalNameIn**](BatchPersonalNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameParsedOut**](BatchPersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of parsed names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **parse_name_geo**
> PersonalNameParsedOut parse_name_geo(name_full, country_iso2)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.personal_name_parsed_out import PersonalNameParsedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    name_full = 'name_full_example' # str | 
    country_iso2 = 'country_iso2_example' # str | 

    try:
        # Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
        api_response = api_instance.parse_name_geo(name_full, country_iso2)
        print("The response of PersonalApi->parse_name_geo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->parse_name_geo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name_full** | **str**|  | 
 **country_iso2** | **str**|  | 

### Return type

[**PersonalNameParsedOut**](PersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A origined name. |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **parse_name_geo_batch**
> BatchPersonalNameParsedOut parse_name_geo_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_geo_in import BatchPersonalNameGeoIn
from openapi_client.models.batch_personal_name_parsed_out import BatchPersonalNameParsedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_personal_name_geo_in = openapi_client.BatchPersonalNameGeoIn() # BatchPersonalNameGeoIn | A list of personal names (optional)

    try:
        # Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
        api_response = api_instance.parse_name_geo_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)
        print("The response of PersonalApi->parse_name_geo_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->parse_name_geo_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_geo_in** | [**BatchPersonalNameGeoIn**](BatchPersonalNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameParsedOut**](BatchPersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of parsed names. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **religion_full**
> PersonalNameReligionedOut religion_full(country_iso2, sub_division_iso31662, personal_name_full)

[USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).

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
    api_instance = openapi_client.PersonalApi(api_client)
    country_iso2 = 'country_iso2_example' # str | 
    sub_division_iso31662 = 'sub_division_iso31662_example' # str | 
    personal_name_full = 'personal_name_full_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
        api_response = api_instance.religion_full(country_iso2, sub_division_iso31662, personal_name_full)
        print("The response of PersonalApi->religion_full:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->religion_full: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_iso2** | **str**|  | 
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

# **religion_full_batch**
> BatchPersonalNameReligionedOut religion_full_batch(batch_personal_name_geo_subdivision_in=batch_personal_name_geo_subdivision_in)

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_personal_name_geo_subdivision_in import BatchPersonalNameGeoSubdivisionIn
from openapi_client.models.batch_personal_name_religioned_out import BatchPersonalNameReligionedOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_personal_name_geo_subdivision_in = openapi_client.BatchPersonalNameGeoSubdivisionIn() # BatchPersonalNameGeoSubdivisionIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
        api_response = api_instance.religion_full_batch(batch_personal_name_geo_subdivision_in=batch_personal_name_geo_subdivision_in)
        print("The response of PersonalApi->religion_full_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->religion_full_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_personal_name_geo_subdivision_in** | [**BatchPersonalNameGeoSubdivisionIn**](BatchPersonalNameGeoSubdivisionIn.md)| A list of personal names | [optional] 

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

# **subclassification**
> FirstLastNameGeoSubclassificationOut subclassification(country_iso2, first_name, last_name)

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    api_instance = openapi_client.PersonalApi(api_client)
    country_iso2 = 'country_iso2_example' # str | 
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
        api_response = api_instance.subclassification(country_iso2, first_name, last_name)
        print("The response of PersonalApi->subclassification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->subclassification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_iso2** | **str**|  | 
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

# **subclassification_batch**
> BatchFirstLastNameGeoSubclassificationOut subclassification_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_first_last_name_geo_in = openapi_client.BatchFirstLastNameGeoIn() # BatchFirstLastNameGeoIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
        api_response = api_instance.subclassification_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)
        print("The response of PersonalApi->subclassification_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->subclassification_batch: %s\n" % e)
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
**200** | A list of classified names at a sub-country level. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subclassification_full**
> FirstLastNameGeoSubclassificationOut subclassification_full(country_iso2, full_name)

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    api_instance = openapi_client.PersonalApi(api_client)
    country_iso2 = 'country_iso2_example' # str | 
    full_name = 'full_name_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
        api_response = api_instance.subclassification_full(country_iso2, full_name)
        print("The response of PersonalApi->subclassification_full:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->subclassification_full: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_iso2** | **str**|  | 
 **full_name** | **str**|  | 

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

# **subclassification_full_batch**
> BatchPersonalNameGeoSubclassificationOut subclassification_full_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_personal_name_geo_in = openapi_client.BatchPersonalNameGeoIn() # BatchPersonalNameGeoIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
        api_response = api_instance.subclassification_full_batch(batch_personal_name_geo_in=batch_personal_name_geo_in)
        print("The response of PersonalApi->subclassification_full_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->subclassification_full_batch: %s\n" % e)
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
**200** | A list of classified names at a sub-country level. |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **us_race_ethnicity**
> FirstLastNameUSRaceEthnicityOut us_race_ethnicity(first_name, last_name)

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_us_race_ethnicity_out import FirstLastNameUSRaceEthnicityOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        api_response = api_instance.us_race_ethnicity(first_name, last_name)
        print("The response of PersonalApi->us_race_ethnicity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->us_race_ethnicity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 

### Return type

[**FirstLastNameUSRaceEthnicityOut**](FirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a US resident&#39;s likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **us_race_ethnicity_batch**
> BatchFirstLastNameUSRaceEthnicityOut us_race_ethnicity_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_geo_in import BatchFirstLastNameGeoIn
from openapi_client.models.batch_first_last_name_us_race_ethnicity_out import BatchFirstLastNameUSRaceEthnicityOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_first_last_name_geo_in = openapi_client.BatchFirstLastNameGeoIn() # BatchFirstLastNameGeoIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        api_response = api_instance.us_race_ethnicity_batch(batch_first_last_name_geo_in=batch_first_last_name_geo_in)
        print("The response of PersonalApi->us_race_ethnicity_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->us_race_ethnicity_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_geo_in** | [**BatchFirstLastNameGeoIn**](BatchFirstLastNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameUSRaceEthnicityOut**](BatchFirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of US resident&#39;s likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **us_race_ethnicity_zip5**
> FirstLastNameUSRaceEthnicityOut us_race_ethnicity_zip5(first_name, last_name, zip5_code)

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.first_last_name_us_race_ethnicity_out import FirstLastNameUSRaceEthnicityOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    first_name = 'first_name_example' # str | 
    last_name = 'last_name_example' # str | 
    zip5_code = 'zip5_code_example' # str | 

    try:
        # [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        api_response = api_instance.us_race_ethnicity_zip5(first_name, last_name, zip5_code)
        print("The response of PersonalApi->us_race_ethnicity_zip5:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->us_race_ethnicity_zip5: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **first_name** | **str**|  | 
 **last_name** | **str**|  | 
 **zip5_code** | **str**|  | 

### Return type

[**FirstLastNameUSRaceEthnicityOut**](FirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a US resident&#39;s likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **us_zip_race_ethnicity_batch**
> BatchFirstLastNameUSRaceEthnicityOut us_zip_race_ethnicity_batch(batch_first_last_name_geo_zipped_in=batch_first_last_name_geo_zipped_in)

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_first_last_name_geo_zipped_in import BatchFirstLastNameGeoZippedIn
from openapi_client.models.batch_first_last_name_us_race_ethnicity_out import BatchFirstLastNameUSRaceEthnicityOut
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
    api_instance = openapi_client.PersonalApi(api_client)
    batch_first_last_name_geo_zipped_in = openapi_client.BatchFirstLastNameGeoZippedIn() # BatchFirstLastNameGeoZippedIn | A list of personal names (optional)

    try:
        # [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        api_response = api_instance.us_zip_race_ethnicity_batch(batch_first_last_name_geo_zipped_in=batch_first_last_name_geo_zipped_in)
        print("The response of PersonalApi->us_zip_race_ethnicity_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonalApi->us_zip_race_ethnicity_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_first_last_name_geo_zipped_in** | [**BatchFirstLastNameGeoZippedIn**](BatchFirstLastNameGeoZippedIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameUSRaceEthnicityOut**](BatchFirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of US resident&#39;s likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally |  -  |
**400** | Bad request (ex. too many names) |  -  |
**401** | Missing or incorrect API Key |  -  |
**403** | Email not Verified, or API Limit Reached, or API Key Disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


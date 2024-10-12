# openapi_client.CountriesApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countries_country_code_json_get**](CountriesApi.md#countries_country_code_json_get) | **GET** /countries/{country_code}.json | Retrieve a single Country information.
[**countries_country_code_regions_json_get**](CountriesApi.md#countries_country_code_regions_json_get) | **GET** /countries/{country_code}/regions.json | Retrieve all Regions from a single Country.
[**countries_country_code_regions_region_code_json_get**](CountriesApi.md#countries_country_code_regions_region_code_json_get) | **GET** /countries/{country_code}/regions/{region_code}.json | Retrieve a single Region information object.
[**countries_json_get**](CountriesApi.md#countries_json_get) | **GET** /countries.json | Retrieve all Countries.


# **countries_country_code_json_get**
> Country countries_country_code_json_get(login, authtoken, country_code)

Retrieve a single Country information.

### Example


```python
import openapi_client
from openapi_client.models.country import Country
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CountriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    country_code = 'country_code_example' # str | ISO3166 Country Code

    try:
        # Retrieve a single Country information.
        api_response = api_instance.countries_country_code_json_get(login, authtoken, country_code)
        print("The response of CountriesApi->countries_country_code_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountriesApi->countries_country_code_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **country_code** | **str**| ISO3166 Country Code | 

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Country information object |  -  |
**404** | Country Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countries_country_code_regions_json_get**
> List[Region] countries_country_code_regions_json_get(login, authtoken, country_code)

Retrieve all Regions from a single Country.

### Example


```python
import openapi_client
from openapi_client.models.region import Region
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CountriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    country_code = 'country_code_example' # str | ISO3166 Country Code

    try:
        # Retrieve all Regions from a single Country.
        api_response = api_instance.countries_country_code_regions_json_get(login, authtoken, country_code)
        print("The response of CountriesApi->countries_country_code_regions_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountriesApi->countries_country_code_regions_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **country_code** | **str**| ISO3166 Country Code | 

### Return type

[**List[Region]**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Regions from a single Country |  -  |
**404** | Country Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countries_country_code_regions_region_code_json_get**
> Region countries_country_code_regions_region_code_json_get(login, authtoken, country_code, region_code)

Retrieve a single Region information object.

### Example


```python
import openapi_client
from openapi_client.models.region import Region
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CountriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    country_code = 'country_code_example' # str | ISO3166 Country Code
    region_code = 'region_code_example' # str | Region Code

    try:
        # Retrieve a single Region information object.
        api_response = api_instance.countries_country_code_regions_region_code_json_get(login, authtoken, country_code, region_code)
        print("The response of CountriesApi->countries_country_code_regions_region_code_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountriesApi->countries_country_code_regions_region_code_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **country_code** | **str**| ISO3166 Country Code | 
 **region_code** | **str**| Region Code | 

### Return type

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Region information object |  -  |
**404** | Country or Region not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countries_json_get**
> List[Country] countries_json_get(login, authtoken)

Retrieve all Countries.

### Example


```python
import openapi_client
from openapi_client.models.country import Country
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CountriesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Retrieve all Countries.
        api_response = api_instance.countries_json_get(login, authtoken)
        print("The response of CountriesApi->countries_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountriesApi->countries_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**List[Country]**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Countries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


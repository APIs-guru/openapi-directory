# openapi_client.CountriesApi

All URIs are relative to *https://api.openfintech.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countries_get**](CountriesApi.md#countries_get) | **GET** /countries | List of countries
[**countries_id_get**](CountriesApi.md#countries_id_get) | **GET** /countries/{id} | Country by ID


# **countries_get**
> CountriesResponse countries_get(page_number=page_number, page_size=page_size, filter_region=filter_region, filter_sub_region=filter_sub_region, sort=sort)

List of countries

Returns all available countries. 

### Example


```python
import openapi_client
from openapi_client.models.countries_response import CountriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openfintech.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openfintech.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CountriesApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_region = ['filter_region_example'] # List[str] | Filtration by region. (optional)
    filter_sub_region = ['filter_sub_region_example'] # List[str] | Filtration by sub region. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | area | -area | | population | -population | | region | -region | | sub_region | -sub_region |  (optional)

    try:
        # List of countries
        api_response = api_instance.countries_get(page_number=page_number, page_size=page_size, filter_region=filter_region, filter_sub_region=filter_sub_region, sort=sort)
        print("The response of CountriesApi->countries_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountriesApi->countries_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **int**| Current page number. | [optional] 
 **page_size** | **int**| Page size.&lt;br&gt;*Default value: 100*  | [optional] 
 **filter_region** | [**List[str]**](str.md)| Filtration by region. | [optional] 
 **filter_sub_region** | [**List[str]**](str.md)| Filtration by sub region. | [optional] 
 **sort** | [**List[str]**](str.md)| Sort params:&lt;br&gt;  | ASC | DESC | |-----|------| | name | -name | | area | -area | | population | -population | | region | -region | | sub_region | -sub_region |  | [optional] 

### Return type

[**CountriesResponse**](CountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of countries. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countries_id_get**
> CountryResponse countries_id_get(id)

Country by ID

Returns country with specific ID. 

### Example


```python
import openapi_client
from openapi_client.models.country_response import CountryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openfintech.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openfintech.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CountriesApi(api_client)
    id = 'id_example' # str | Unique ID.

    try:
        # Country by ID
        api_response = api_instance.countries_id_get(id)
        print("The response of CountriesApi->countries_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountriesApi->countries_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique ID. | 

### Return type

[**CountryResponse**](CountryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Country informatiion. |  -  |
**404** | Country ID is not valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


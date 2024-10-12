# openapi_client.BranchesApi

All URIs are relative to *https://dikpeqbnwi3kx.cloudfront.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**open_banking_v22_branches_get**](BranchesApi.md#open_banking_v22_branches_get) | **GET** /open-banking/v2.2/branches | 
[**x_open_banking_v22_branches_country_country_get**](BranchesApi.md#x_open_banking_v22_branches_country_country_get) | **GET** /x-open-banking/v2.2/branches/country/{country} | 
[**x_open_banking_v22_branches_country_country_town_town_get**](BranchesApi.md#x_open_banking_v22_branches_country_country_town_town_get) | **GET** /x-open-banking/v2.2/branches/country/{country}/town/{town} | 
[**x_open_banking_v22_branches_geo_location_lat_latitude_long_longitude_get**](BranchesApi.md#x_open_banking_v22_branches_geo_location_lat_latitude_long_longitude_get) | **GET** /x-open-banking/v2.2/branches/geo-location/lat/{latitude}/long/{longitude} | 
[**x_open_banking_v22_branches_postcode_postcode_get**](BranchesApi.md#x_open_banking_v22_branches_postcode_postcode_get) | **GET** /x-open-banking/v2.2/branches/postcode/{postcode} | 
[**x_open_banking_v22_branches_sortcode_sortcode_get**](BranchesApi.md#x_open_banking_v22_branches_sortcode_sortcode_get) | **GET** /x-open-banking/v2.2/branches/sortcode/{sortcode} | 


# **open_banking_v22_branches_get**
> BranchDefinitionMeta open_banking_v22_branches_get()



This API will return the branch details for all branches and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.branch_definition_meta import BranchDefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BranchesApi(api_client)

    try:
        api_response = api_instance.open_banking_v22_branches_get()
        print("The response of BranchesApi->open_banking_v22_branches_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchesApi->open_banking_v22_branches_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BranchDefinitionMeta**](BranchDefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **x_open_banking_v22_branches_country_country_get**
> BranchDefinitionMeta x_open_banking_v22_branches_country_country_get(country)



This extended API will return the branch details for all branches in the specified country. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.branch_definition_meta import BranchDefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BranchesApi(api_client)
    country = 'country_example' # str | The ISO country code e.g. &quot;GB&quot;

    try:
        api_response = api_instance.x_open_banking_v22_branches_country_country_get(country)
        print("The response of BranchesApi->x_open_banking_v22_branches_country_country_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchesApi->x_open_banking_v22_branches_country_country_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The ISO country code e.g. &amp;quot;GB&amp;quot; | 

### Return type

[**BranchDefinitionMeta**](BranchDefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **x_open_banking_v22_branches_country_country_town_town_get**
> BranchDefinitionMeta x_open_banking_v22_branches_country_country_town_town_get(country, town)



This extended API will return the branch details for all branches in the specified town. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.branch_definition_meta import BranchDefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BranchesApi(api_client)
    country = 'country_example' # str | The ISO country code e.g. &quot;GB&quot;
    town = 'town_example' # str | Town name, not case sensitive

    try:
        api_response = api_instance.x_open_banking_v22_branches_country_country_town_town_get(country, town)
        print("The response of BranchesApi->x_open_banking_v22_branches_country_country_town_town_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchesApi->x_open_banking_v22_branches_country_country_town_town_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The ISO country code e.g. &amp;quot;GB&amp;quot; | 
 **town** | **str**| Town name, not case sensitive | 

### Return type

[**BranchDefinitionMeta**](BranchDefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **x_open_banking_v22_branches_geo_location_lat_latitude_long_longitude_get**
> BranchDefinitionMeta x_open_banking_v22_branches_geo_location_lat_latitude_long_longitude_get(latitude, longitude, radius)



This API will return the branch details for all branches within a specified radius (1 to 10 miles) of the specified latitude and longitude. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.branch_definition_meta import BranchDefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BranchesApi(api_client)
    latitude = 'latitude_example' # str | Positive or negative decimal value in degrees. eg &quot;51.50551621597067&quot;
    longitude = 'longitude_example' # str | Positive or negative decimal value in degrees. eg &quot;-0.0180120225995&quot;
    radius = 3.4 # float | Number of miles (1 to 10) as an integer. Default = 1

    try:
        api_response = api_instance.x_open_banking_v22_branches_geo_location_lat_latitude_long_longitude_get(latitude, longitude, radius)
        print("The response of BranchesApi->x_open_banking_v22_branches_geo_location_lat_latitude_long_longitude_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchesApi->x_open_banking_v22_branches_geo_location_lat_latitude_long_longitude_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **str**| Positive or negative decimal value in degrees. eg &amp;quot;51.50551621597067&amp;quot; | 
 **longitude** | **str**| Positive or negative decimal value in degrees. eg &amp;quot;-0.0180120225995&amp;quot; | 
 **radius** | **float**| Number of miles (1 to 10) as an integer. Default &#x3D; 1 | 

### Return type

[**BranchDefinitionMeta**](BranchDefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **x_open_banking_v22_branches_postcode_postcode_get**
> BranchDefinitionMeta x_open_banking_v22_branches_postcode_postcode_get(postcode)



This extended API will return the branch details for all branches within a 5 mile radius of the specified postcode. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.branch_definition_meta import BranchDefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BranchesApi(api_client)
    postcode = 'postcode_example' # str | Letters and numerals only. No spaces or special characters. eg. &quot;SW1A1AA&quot;

    try:
        api_response = api_instance.x_open_banking_v22_branches_postcode_postcode_get(postcode)
        print("The response of BranchesApi->x_open_banking_v22_branches_postcode_postcode_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchesApi->x_open_banking_v22_branches_postcode_postcode_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcode** | **str**| Letters and numerals only. No spaces or special characters. eg. &amp;quot;SW1A1AA&amp;quot; | 

### Return type

[**BranchDefinitionMeta**](BranchDefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **x_open_banking_v22_branches_sortcode_sortcode_get**
> BranchDefinitionMeta x_open_banking_v22_branches_sortcode_sortcode_get(sortcode)



This extended API will return the branch details for a branch specified by its sort code. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.branch_definition_meta import BranchDefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BranchesApi(api_client)
    sortcode = 'sortcode_example' # str | 6 digit number with no spaces or special characters. eg. &quot;400003&quot;

    try:
        api_response = api_instance.x_open_banking_v22_branches_sortcode_sortcode_get(sortcode)
        print("The response of BranchesApi->x_open_banking_v22_branches_sortcode_sortcode_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchesApi->x_open_banking_v22_branches_sortcode_sortcode_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortcode** | **str**| 6 digit number with no spaces or special characters. eg. &amp;quot;400003&amp;quot; | 

### Return type

[**BranchDefinitionMeta**](BranchDefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


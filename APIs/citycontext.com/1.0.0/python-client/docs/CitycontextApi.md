# openapi_client.CitycontextApi

All URIs are relative to *http://api.citycontext.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**by_point**](CitycontextApi.md#by_point) | **GET** /@{lat},{lon} | Query by coordinates (SRID 4326 - decimal degrees)
[**by_postcode**](CitycontextApi.md#by_postcode) | **GET** /postcodes/{postcode} | Query by postcode
[**usage**](CitycontextApi.md#usage) | **GET** /usage | Get usage in current month


# **by_point**
> PointInfo by_point(lat, lon, school_search_radius=school_search_radius, park_search_radius=park_search_radius)

Query by coordinates (SRID 4326 - decimal degrees)

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.point_info import PointInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.citycontext.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.citycontext.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CitycontextApi(api_client)
    lat = 3.4 # float | Latitude
    lon = 3.4 # float | Longitude
    school_search_radius = 56 # int | Search radius for schools, in metres, between 100 and 4000 (optional)
    park_search_radius = 56 # int | Search radius for parks, in metres, between 100 and 2000 (optional)

    try:
        # Query by coordinates (SRID 4326 - decimal degrees)
        api_response = api_instance.by_point(lat, lon, school_search_radius=school_search_radius, park_search_radius=park_search_radius)
        print("The response of CitycontextApi->by_point:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CitycontextApi->by_point: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude | 
 **lon** | **float**| Longitude | 
 **school_search_radius** | **int**| Search radius for schools, in metres, between 100 and 4000 | [optional] 
 **park_search_radius** | **int**| Search radius for parks, in metres, between 100 and 2000 | [optional] 

### Return type

[**PointInfo**](PointInfo.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **by_postcode**
> PointInfo by_postcode(postcode, school_search_radius=school_search_radius, park_search_radius=park_search_radius)

Query by postcode

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.point_info import PointInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.citycontext.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.citycontext.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CitycontextApi(api_client)
    postcode = 'postcode_example' # str | Postcode
    school_search_radius = 56 # int | Search radius for schools, in metres, between 100 and 4000 (optional)
    park_search_radius = 56 # int | Search radius for parks, in metres, between 100 and 2000 (optional)

    try:
        # Query by postcode
        api_response = api_instance.by_postcode(postcode, school_search_radius=school_search_radius, park_search_radius=park_search_radius)
        print("The response of CitycontextApi->by_postcode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CitycontextApi->by_postcode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcode** | **str**| Postcode | 
 **school_search_radius** | **int**| Search radius for schools, in metres, between 100 and 4000 | [optional] 
 **park_search_radius** | **int**| Search radius for parks, in metres, between 100 and 2000 | [optional] 

### Return type

[**PointInfo**](PointInfo.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usage**
> Usage usage()

Get usage in current month

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.usage import Usage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.citycontext.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.citycontext.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CitycontextApi(api_client)

    try:
        # Get usage in current month
        api_response = api_instance.usage()
        print("The response of CitycontextApi->usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CitycontextApi->usage: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Usage**](Usage.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.DefaultApi

All URIs are relative to *http://worldtimeapi.org/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ip_get**](DefaultApi.md#ip_get) | **GET** /ip | request the current time based on the ip of the request. note: this is a \&quot;best guess\&quot; obtained from open-source data.
[**ip_ipv4_get**](DefaultApi.md#ip_ipv4_get) | **GET** /ip/{ipv4} | request the current time based on the ip of the request. note: this is a \&quot;best guess\&quot; obtained from open-source data.
[**ip_ipv4_txt_get**](DefaultApi.md#ip_ipv4_txt_get) | **GET** /ip/{ipv4}.txt | request the current time based on the ip of the request. note: this is a \&quot;best guess\&quot; obtained from open-source data.
[**ip_txt_get**](DefaultApi.md#ip_txt_get) | **GET** /ip.txt | request the current time based on the ip of the request. note: this is a \&quot;best guess\&quot; obtained from open-source data.
[**timezone_area_get**](DefaultApi.md#timezone_area_get) | **GET** /timezone/{area} | a listing of all timezones available for that area.
[**timezone_area_location_get**](DefaultApi.md#timezone_area_location_get) | **GET** /timezone/{area}/{location} | request the current time for a timezone.
[**timezone_area_location_region_get**](DefaultApi.md#timezone_area_location_region_get) | **GET** /timezone/{area}/{location}/{region} | request the current time for a timezone.
[**timezone_area_location_region_txt_get**](DefaultApi.md#timezone_area_location_region_txt_get) | **GET** /timezone/{area}/{location}/{region}.txt | request the current time for a timezone.
[**timezone_area_location_txt_get**](DefaultApi.md#timezone_area_location_txt_get) | **GET** /timezone/{area}/{location}.txt | request the current time for a timezone.
[**timezone_area_txt_get**](DefaultApi.md#timezone_area_txt_get) | **GET** /timezone/{area}.txt | a listing of all timezones available for that area.
[**timezone_get**](DefaultApi.md#timezone_get) | **GET** /timezone | a listing of all timezones.
[**timezone_txt_get**](DefaultApi.md#timezone_txt_get) | **GET** /timezone.txt | a listing of all timezones.


# **ip_get**
> DateTimeJsonResponse ip_get()

request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.

### Example


```python
import openapi_client
from openapi_client.models.date_time_json_response import DateTimeJsonResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        api_response = api_instance.ip_get()
        print("The response of DefaultApi->ip_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ip_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DateTimeJsonResponse**](DateTimeJsonResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in JSON format |  -  |
**0** | an error response in JSON format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_ipv4_get**
> DateTimeJsonResponse ip_ipv4_get(ipv4)

request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.

### Example


```python
import openapi_client
from openapi_client.models.date_time_json_response import DateTimeJsonResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ipv4 = 'ipv4_example' # str | 

    try:
        # request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        api_response = api_instance.ip_ipv4_get(ipv4)
        print("The response of DefaultApi->ip_ipv4_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ip_ipv4_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipv4** | **str**|  | 

### Return type

[**DateTimeJsonResponse**](DateTimeJsonResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in JSON format |  -  |
**0** | an error response in JSON format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_ipv4_txt_get**
> str ip_ipv4_txt_get(ipv4)

request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ipv4 = 'ipv4_example' # str | 

    try:
        # request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        api_response = api_instance.ip_ipv4_txt_get(ipv4)
        print("The response of DefaultApi->ip_ipv4_txt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ip_ipv4_txt_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipv4** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in plain text |  -  |
**0** | an error response in plain text |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_txt_get**
> str ip_txt_get()

request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        api_response = api_instance.ip_txt_get()
        print("The response of DefaultApi->ip_txt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ip_txt_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in plain text |  -  |
**0** | an error response in plain text |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_area_get**
> List[str] timezone_area_get(area)

a listing of all timezones available for that area.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    area = 'area_example' # str | 

    try:
        # a listing of all timezones available for that area.
        api_response = api_instance.timezone_area_get(area)
        print("The response of DefaultApi->timezone_area_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_area_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the list of available timezones in JSON format |  -  |
**0** | an error response in JSON format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_area_location_get**
> DateTimeJsonResponse timezone_area_location_get(area, location)

request the current time for a timezone.

### Example


```python
import openapi_client
from openapi_client.models.date_time_json_response import DateTimeJsonResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    area = 'area_example' # str | 
    location = 'location_example' # str | 

    try:
        # request the current time for a timezone.
        api_response = api_instance.timezone_area_location_get(area, location)
        print("The response of DefaultApi->timezone_area_location_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_area_location_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **str**|  | 
 **location** | **str**|  | 

### Return type

[**DateTimeJsonResponse**](DateTimeJsonResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in JSON format |  -  |
**0** | an error response in JSON format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_area_location_region_get**
> DateTimeJsonResponse timezone_area_location_region_get(area, location, region)

request the current time for a timezone.

### Example


```python
import openapi_client
from openapi_client.models.date_time_json_response import DateTimeJsonResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    area = 'area_example' # str | 
    location = 'location_example' # str | 
    region = 'region_example' # str | 

    try:
        # request the current time for a timezone.
        api_response = api_instance.timezone_area_location_region_get(area, location, region)
        print("The response of DefaultApi->timezone_area_location_region_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_area_location_region_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **str**|  | 
 **location** | **str**|  | 
 **region** | **str**|  | 

### Return type

[**DateTimeJsonResponse**](DateTimeJsonResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in JSON format |  -  |
**0** | an error response in JSON format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_area_location_region_txt_get**
> str timezone_area_location_region_txt_get(area, location, region)

request the current time for a timezone.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    area = 'area_example' # str | 
    location = 'location_example' # str | 
    region = 'region_example' # str | 

    try:
        # request the current time for a timezone.
        api_response = api_instance.timezone_area_location_region_txt_get(area, location, region)
        print("The response of DefaultApi->timezone_area_location_region_txt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_area_location_region_txt_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **str**|  | 
 **location** | **str**|  | 
 **region** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in plain text |  -  |
**0** | an error response in plain text |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_area_location_txt_get**
> str timezone_area_location_txt_get(area, location)

request the current time for a timezone.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    area = 'area_example' # str | 
    location = 'location_example' # str | 

    try:
        # request the current time for a timezone.
        api_response = api_instance.timezone_area_location_txt_get(area, location)
        print("The response of DefaultApi->timezone_area_location_txt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_area_location_txt_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **str**|  | 
 **location** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the current time for the timezone requested in plain text |  -  |
**0** | an error response in plain text |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_area_txt_get**
> str timezone_area_txt_get(area)

a listing of all timezones available for that area.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    area = 'area_example' # str | 

    try:
        # a listing of all timezones available for that area.
        api_response = api_instance.timezone_area_txt_get(area)
        print("The response of DefaultApi->timezone_area_txt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_area_txt_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the list of available timezones in plain text |  -  |
**0** | an error response in plain text |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_get**
> List[str] timezone_get()

a listing of all timezones.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # a listing of all timezones.
        api_response = api_instance.timezone_get()
        print("The response of DefaultApi->timezone_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | the list of available timezones in JSON format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **timezone_txt_get**
> str timezone_txt_get()

a listing of all timezones.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://worldtimeapi.org/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://worldtimeapi.org/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # a listing of all timezones.
        api_response = api_instance.timezone_txt_get()
        print("The response of DefaultApi->timezone_txt_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->timezone_txt_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | the list of available timezones in plain text |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.DefaultApi

All URIs are relative to *https://daymet.ornl.gov/single-pixel*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_data_get**](DefaultApi.md#api_data_get) | **GET** /api/data | Download Daymet Data
[**preview_get**](DefaultApi.md#preview_get) | **GET** /preview | Preview Daymet Data in a web browser
[**send_save_data_get**](DefaultApi.md#send_save_data_get) | **GET** /send/saveData | Download Daymet Data
[**visualize_get**](DefaultApi.md#visualize_get) | **GET** /visualize | Visualize Daymet Data in a web browser


# **api_data_get**
> api_data_get(lat, lon, format, vars=vars, years=years, start=start, end=end)

Download Daymet Data

Returns a csv or json of the requested data to local machine

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://daymet.ornl.gov/single-pixel
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://daymet.ornl.gov/single-pixel"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    format = 'format_example' # str | Specify a format for data retrieval.
    vars = ['vars_example'] # List[str] | Daymet Daily weather estimates. (optional)
    years = ['years_example'] # List[str] | Subset on years [1980..2019]. (optional)
    start = '2013-10-20' # date | Subset on dates (start date). (optional)
    end = '2013-10-20' # date | Subset on dates (end date). (optional)

    try:
        # Download Daymet Data
        api_instance.api_data_get(lat, lon, format, vars=vars, years=years, start=start, end=end)
    except Exception as e:
        print("Exception when calling DefaultApi->api_data_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **format** | **str**| Specify a format for data retrieval. | 
 **vars** | [**List[str]**](str.md)| Daymet Daily weather estimates. | [optional] 
 **years** | [**List[str]**](str.md)| Subset on years [1980..2019]. | [optional] 
 **start** | **date**| Subset on dates (start date). | [optional] 
 **end** | **date**| Subset on dates (end date). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Execution |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **preview_get**
> preview_get(lat, lon, format, vars=vars, years=years, start=start, end=end)

Preview Daymet Data in a web browser

Returns a table to the browser displaying requested data

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://daymet.ornl.gov/single-pixel
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://daymet.ornl.gov/single-pixel"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 3.4 # float | Latitude component of location
    lon = 3.4 # float | Longitude component of location.
    format = 'format_example' # str | Specify a format for data retrieval.
    vars = ['vars_example'] # List[str] | Daymet Daily weather estimates. (optional)
    years = ['years_example'] # List[str] | Subset on years [1980..2019]. (optional)
    start = '2013-10-20' # date | Subset on dates (start date). (optional)
    end = '2013-10-20' # date | Subset on dates (end date). (optional)

    try:
        # Preview Daymet Data in a web browser
        api_instance.preview_get(lat, lon, format, vars=vars, years=years, start=start, end=end)
    except Exception as e:
        print("Exception when calling DefaultApi->preview_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location | 
 **lon** | **float**| Longitude component of location. | 
 **format** | **str**| Specify a format for data retrieval. | 
 **vars** | [**List[str]**](str.md)| Daymet Daily weather estimates. | [optional] 
 **years** | [**List[str]**](str.md)| Subset on years [1980..2019]. | [optional] 
 **start** | **date**| Subset on dates (start date). | [optional] 
 **end** | **date**| Subset on dates (end date). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Execution |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_save_data_get**
> send_save_data_get(lat, lon, format, vars=vars, years=years, start=start, end=end)

Download Daymet Data

Returns a csv or json of the requested data to local machine

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://daymet.ornl.gov/single-pixel
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://daymet.ornl.gov/single-pixel"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    format = 'format_example' # str | Specify a format for data retrieval.
    vars = ['vars_example'] # List[str] | Daymet Daily weather estimates. (optional)
    years = ['years_example'] # List[str] | Subset on years [1980..2019]. (optional)
    start = '2013-10-20' # date | Subset on dates (start date). (optional)
    end = '2013-10-20' # date | Subset on dates (end date). (optional)

    try:
        # Download Daymet Data
        api_instance.send_save_data_get(lat, lon, format, vars=vars, years=years, start=start, end=end)
    except Exception as e:
        print("Exception when calling DefaultApi->send_save_data_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **format** | **str**| Specify a format for data retrieval. | 
 **vars** | [**List[str]**](str.md)| Daymet Daily weather estimates. | [optional] 
 **years** | [**List[str]**](str.md)| Subset on years [1980..2019]. | [optional] 
 **start** | **date**| Subset on dates (start date). | [optional] 
 **end** | **date**| Subset on dates (end date). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Execution |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **visualize_get**
> visualize_get(lat, lon, format, vars=vars, years=years, start=start, end=end)

Visualize Daymet Data in a web browser

Returns plots to a web browser of requested data using Plotly

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://daymet.ornl.gov/single-pixel
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://daymet.ornl.gov/single-pixel"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    format = 'format_example' # str | Specify a format for data retrieval.
    vars = ['vars_example'] # List[str] | Daymet Daily weather estimates. (optional)
    years = ['years_example'] # List[str] | Subset on years [1980..2019]. (optional)
    start = '2013-10-20' # date | Subset on dates (start date). (optional)
    end = '2013-10-20' # date | Subset on dates (end date). (optional)

    try:
        # Visualize Daymet Data in a web browser
        api_instance.visualize_get(lat, lon, format, vars=vars, years=years, start=start, end=end)
    except Exception as e:
        print("Exception when calling DefaultApi->visualize_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **format** | **str**| Specify a format for data retrieval. | 
 **vars** | [**List[str]**](str.md)| Daymet Daily weather estimates. | [optional] 
 **years** | [**List[str]**](str.md)| Subset on years [1980..2019]. | [optional] 
 **start** | **date**| Subset on dates (start date). | [optional] 
 **end** | **date**| Subset on dates (end date). | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Execution |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


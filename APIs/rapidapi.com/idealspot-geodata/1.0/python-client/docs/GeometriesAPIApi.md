# openapi_client.GeometriesAPIApi

All URIs are relative to *https://idealspot-geodata.p.rapidapi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_administrative_regionsusing_lat_lng**](GeometriesAPIApi.md#fetch_administrative_regionsusing_lat_lng) | **GET** /geometries/regions/intersecting/{latitude}/{longitude} | Fetch Administrative Regions using Lat/Lng
[**fetch_geometries**](GeometriesAPIApi.md#fetch_geometries) | **GET** /geometries/geometry | Fetch Geometries


# **fetch_administrative_regionsusing_lat_lng**
> FetchAdministrativeRegionsusingLatLng fetch_administrative_regionsusing_lat_lng(latitude, longitude, x_rapid_api_key, x_rapid_api_host)

Fetch Administrative Regions using Lat/Lng

For given latitude and longitude, find intersecting administrative regions. Region polygons are simplified for web mapping.

### Example


```python
import openapi_client
from openapi_client.models.fetch_administrative_regionsusing_lat_lng import FetchAdministrativeRegionsusingLatLng
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://idealspot-geodata.p.rapidapi.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://idealspot-geodata.p.rapidapi.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeometriesAPIApi(api_client)
    latitude = 3.4 # float | (Required) Search coordinate latitude
    longitude = 3.4 # float | (Required) Search coordinate longitude
    x_rapid_api_key = 'x_rapid_api_key_example' # str | (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
    x_rapid_api_host = 'x_rapid_api_host_example' # str | 

    try:
        # Fetch Administrative Regions using Lat/Lng
        api_response = api_instance.fetch_administrative_regionsusing_lat_lng(latitude, longitude, x_rapid_api_key, x_rapid_api_host)
        print("The response of GeometriesAPIApi->fetch_administrative_regionsusing_lat_lng:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeometriesAPIApi->fetch_administrative_regionsusing_lat_lng: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **float**| (Required) Search coordinate latitude | 
 **longitude** | **float**| (Required) Search coordinate longitude | 
 **x_rapid_api_key** | **str**| (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata | 
 **x_rapid_api_host** | **str**|  | 

### Return type

[**FetchAdministrativeRegionsusingLatLng**](FetchAdministrativeRegionsusingLatLng.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Connection -  <br>  * Content-Encoding -  <br>  * Date -  <br>  * Server -  <br>  * Vary -  <br>  * Via -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * access-control-allow-credentials -  <br>  * access-control-allow-origin -  <br>  * access-control-expose-headers -  <br>  * cache-control -  <br>  * transfer-encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_geometries**
> Describetheregionwithin5minutedriveTimeofageographicpoint fetch_geometries(location, x_rapid_api_key, x_rapid_api_host)

Fetch Geometries

Fetch location GeoJSON

### Example


```python
import openapi_client
from openapi_client.models.describetheregionwithin5minutedrive_timeofageographicpoint import Describetheregionwithin5minutedriveTimeofageographicpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://idealspot-geodata.p.rapidapi.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://idealspot-geodata.p.rapidapi.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeometriesAPIApi(api_client)
    location = 'location_example' # str | (Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used.
    x_rapid_api_key = 'x_rapid_api_key_example' # str | (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
    x_rapid_api_host = 'x_rapid_api_host_example' # str | 

    try:
        # Fetch Geometries
        api_response = api_instance.fetch_geometries(location, x_rapid_api_key, x_rapid_api_host)
        print("The response of GeometriesAPIApi->fetch_geometries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeometriesAPIApi->fetch_geometries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| (Required) Represents a buffer, region, or custom polygon specification. Accepts the &#x60;Location&#x60; model (as a &#x60;Buffer&#x60;, &#x60;Region&#x60;, or &#x60;Custom Polygon&#x60;) formatted as a JSON string. Multiple &#x60;location&#x60; query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. &#x60;?location[]&#x3D;...&amp;location[]&#x3D;...&#x60;). If not included, only the last location will be used. | 
 **x_rapid_api_key** | **str**| (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata | 
 **x_rapid_api_host** | **str**|  | 

### Return type

[**Describetheregionwithin5minutedriveTimeofageographicpoint**](Describetheregionwithin5minutedriveTimeofageographicpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Connection -  <br>  * Content-Encoding -  <br>  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Vary -  <br>  * Via -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * access-control-allow-credentials -  <br>  * access-control-allow-origin -  <br>  * access-control-expose-headers -  <br>  * cache-control -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


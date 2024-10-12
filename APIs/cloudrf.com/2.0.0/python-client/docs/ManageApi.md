# openapi_client.ManageApi

All URIs are relative to *https://api.cloudrf.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_clutter**](ManageApi.md#add_clutter) | **POST** /clutter/add | Upload clutter data as GeoJSON
[**delete**](ManageApi.md#delete) | **GET** /archive/delete | Delete a calculation from the database.
[**delete_network**](ManageApi.md#delete_network) | **GET** /archive/delete/network | Delete an entire network
[**export**](ManageApi.md#export) | **GET** /archive/export | Export a calculation in a GIS file format
[**list**](ManageApi.md#list) | **GET** /archive/list | List calculations from your archive


# **add_clutter**
> add_clutter(add_clutter_request)

Upload clutter data as GeoJSON

Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1 Trees – 0.25,2Trees + 0.5,3 Timber – 1.0,4 Timber + 1.5,5 Brick –  1.5,6 Brick + 2.0,7 Concrete – 3.0,8 Concrete + 4.0,9 Metal 6.0

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.add_clutter_request import AddClutterRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManageApi(api_client)
    add_clutter_request = openapi_client.AddClutterRequest() # AddClutterRequest | 

    try:
        # Upload clutter data as GeoJSON
        api_instance.add_clutter(add_clutter_request)
    except Exception as e:
        print("Exception when calling ManageApi->add_clutter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_clutter_request** | [**AddClutterRequest**](AddClutterRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete**
> delete(cid)

Delete a calculation from the database.

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManageApi(api_client)
    cid = 56 # int | Unique calculation ID number

    try:
        # Delete a calculation from the database.
        api_instance.delete(cid)
    except Exception as e:
        print("Exception when calling ManageApi->delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **int**| Unique calculation ID number | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network**
> delete_network(nid)

Delete an entire network

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManageApi(api_client)
    nid = 'nid_example' # str | Network name

    try:
        # Delete an entire network
        api_instance.delete_network(nid)
    except Exception as e:
        print("Exception when calling ManageApi->delete_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nid** | **str**| Network name | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export**
> export(file, fmt)

Export a calculation in a GIS file format

Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManageApi(api_client)
    file = 'file_example' # str | Calculation file name
    fmt = 'fmt_example' # str | Raster/Vector file format: KML, KMZ, SHP, GeoTIFF

    try:
        # Export a calculation in a GIS file format
        api_instance.export(file, fmt)
    except Exception as e:
        print("Exception when calling ManageApi->export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **str**| Calculation file name | 
 **fmt** | **str**| Raster/Vector file format: KML, KMZ, SHP, GeoTIFF | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> list(n=n, e=e, s=s, w=w)

List calculations from your archive

List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cloudrf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.cloudrf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManageApi(api_client)
    n = 3.4 # float | North bounding box (optional)
    e = 3.4 # float | East bounding box (optional)
    s = 3.4 # float | South bounding box (optional)
    w = 3.4 # float | West bounding box (optional)

    try:
        # List calculations from your archive
        api_instance.list(n=n, e=e, s=s, w=w)
    except Exception as e:
        print("Exception when calling ManageApi->list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **n** | **float**| North bounding box | [optional] 
 **e** | **float**| East bounding box | [optional] 
 **s** | **float**| South bounding box | [optional] 
 **w** | **float**| West bounding box | [optional] 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.AnalyseApi

All URIs are relative to *https://api.cloudrf.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**interference**](AnalyseApi.md#interference) | **GET** /interference | Find the best server for overlapping coverage
[**mesh**](AnalyseApi.md#mesh) | **GET** /mesh | Merge sites into a super layer.
[**network**](AnalyseApi.md#network) | **GET** /network | Find the best server for somewhere


# **interference**
> interference(network, name)

Find the best server for overlapping coverage

Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.

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
    api_instance = openapi_client.AnalyseApi(api_client)
    network = 'network_example' # str | Network name eg. Overlapping broadcast stations
    name = 'name_example' # str | Interference layer name eg. QRM_map

    try:
        # Find the best server for overlapping coverage
        api_instance.interference(network, name)
    except Exception as e:
        print("Exception when calling AnalyseApi->interference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **str**| Network name eg. Overlapping broadcast stations | 
 **name** | **str**| Interference layer name eg. QRM_map | 

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

# **mesh**
> mesh(network, name)

Merge sites into a super layer.

A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.

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
    api_instance = openapi_client.AnalyseApi(api_client)
    network = 'network_example' # str | Network name eg. 100_BLUE_repeaters_nationwide
    name = 'name_example' # str | Super layer name eg. National_map

    try:
        # Merge sites into a super layer.
        api_instance.mesh(network, name)
    except Exception as e:
        print("Exception when calling AnalyseApi->mesh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **str**| Network name eg. 100_BLUE_repeaters_nationwide | 
 **name** | **str**| Super layer name eg. National_map | 

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

# **network**
> network(net, nam, lat, lon, alt, rxg=rxg)

Find the best server for somewhere

Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.

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
    api_instance = openapi_client.AnalyseApi(api_client)
    net = 'net_example' # str | Network name
    nam = 'nam_example' # str | Super layer name
    lat = 3.4 # float | Latitude in decimal degrees
    lon = 3.4 # float | Longitude in decimal degrees
    alt = 56 # int | Height above ground level in metres
    rxg = 3.4 # float | Receiver gain in dBi (optional)

    try:
        # Find the best server for somewhere
        api_instance.network(net, nam, lat, lon, alt, rxg=rxg)
    except Exception as e:
        print("Exception when calling AnalyseApi->network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **net** | **str**| Network name | 
 **nam** | **str**| Super layer name | 
 **lat** | **float**| Latitude in decimal degrees | 
 **lon** | **float**| Longitude in decimal degrees | 
 **alt** | **int**| Height above ground level in metres | 
 **rxg** | **float**| Receiver gain in dBi | [optional] 

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


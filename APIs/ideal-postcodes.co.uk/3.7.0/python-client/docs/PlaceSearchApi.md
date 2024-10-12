# openapi_client.PlaceSearchApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_place**](PlaceSearchApi.md#find_place) | **GET** /places | Find Place
[**resolve_place**](PlaceSearchApi.md#resolve_place) | **GET** /places/${place} | Resolve Place


# **find_place**
> PlaceResponse find_place(api_key, query=query, country_iso=country_iso, bias_country_iso=bias_country_iso, bias_lonlat=bias_lonlat, bias_ip=bias_ip)

Find Place

Query for geographical places across countries. Each query will return a list of place suggestions, which consists of a place name, descriptive name and id.  This API returns geographical information such as countries, capitals, administrative areas and more. It is ideal for correctly identifying a place along with any other details like geolocation.  ## Implementing Place Autocomplete  Extracting the full information of a place is a 2 step process:  1. Retrieve place suggestions via /places 2. Retrieve the entire place with the ID provided in the suggestion  ## Suggestion Format  Each place suggestion contains a descriptive name which you can provide to users to uniquely idenfity a place.  ## Rate Limiting  You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.  | Header                  | Description                                                                            | | ----------------------- | -------------------------------------------------------------------------------------- | | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           | | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            | | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |  ## Pricing  This API currently does not affect your balance. However, resolving a suggestion into a full place requires a paid request.  Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an place may be disrupted via tightened rate limits. 

### Example


```python
import openapi_client
from openapi_client.models.bias_ip_param import BiasIpParam
from openapi_client.models.place_response import PlaceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaceSearchApi(api_client)
    api_key = 'api_key_example' # str | 
    query = 'query_example' # str | Specifies the place you wish to query. Query can be shortened to `q=` (optional)
    country_iso = 'country_iso_example' # str |  (optional)
    bias_country_iso = 'bias_country_iso_example' # str |  (optional)
    bias_lonlat = 'bias_lonlat_example' # str |  (optional)
    bias_ip = openapi_client.BiasIpParam() # BiasIpParam |  (optional)

    try:
        # Find Place
        api_response = api_instance.find_place(api_key, query=query, country_iso=country_iso, bias_country_iso=bias_country_iso, bias_lonlat=bias_lonlat, bias_ip=bias_ip)
        print("The response of PlaceSearchApi->find_place:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaceSearchApi->find_place: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **query** | **str**| Specifies the place you wish to query. Query can be shortened to &#x60;q&#x3D;&#x60; | [optional] 
 **country_iso** | **str**|  | [optional] 
 **bias_country_iso** | **str**|  | [optional] 
 **bias_lonlat** | **str**|  | [optional] 
 **bias_ip** | [**BiasIpParam**](.md)|  | [optional] 

### Return type

[**PlaceResponse**](PlaceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolve_place**
> ResolvePlaceResponse resolve_place(place, api_key=api_key)

Resolve Place

Resolves a place autocompletion by its place ID. 

### Example


```python
import openapi_client
from openapi_client.models.resolve_place_response import ResolvePlaceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaceSearchApi(api_client)
    place = 'place_example' # str | ID of place suggestion
    api_key = 'api_key_example' # str |  (optional)

    try:
        # Resolve Place
        api_response = api_instance.resolve_place(place, api_key=api_key)
        print("The response of PlaceSearchApi->resolve_place:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaceSearchApi->resolve_place: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **place** | **str**| ID of place suggestion | 
 **api_key** | **str**|  | [optional] 

### Return type

[**ResolvePlaceResponse**](ResolvePlaceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


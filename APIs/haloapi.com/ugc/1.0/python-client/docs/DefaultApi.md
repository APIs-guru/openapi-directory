# openapi_client.DefaultApi

All URIs are relative to *https://www.haloapi.com/ugc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**call_58acde292109180bdcacc40c**](DefaultApi.md#call_58acde292109180bdcacc40c) | **GET** /h5/players/{player}/gamevariants/{variant} | Halo 5 - Player Game Variant
[**call_58acde292109180bdcacc40d**](DefaultApi.md#call_58acde292109180bdcacc40d) | **GET** /h5/players/{player}/gamevariants | Halo 5 - Player Game Variants
[**call_58acde292109180bdcacc40e**](DefaultApi.md#call_58acde292109180bdcacc40e) | **GET** /h5/players/{player}/mapvariants/{variant} | Halo 5 - Player Map Variant
[**call_58acde292109180bdcacc40f**](DefaultApi.md#call_58acde292109180bdcacc40f) | **GET** /h5/players/{player}/mapvariants | Halo 5 - Player Map Variants


# **call_58acde292109180bdcacc40c**
> call_58acde292109180bdcacc40c(player, variant)

Halo 5 - Player Game Variant

<p>Retrieves Metadata about a Player-created Game Variant.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Get Game Variant\" to \"Halo 5 - Player Game Variant\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>August 5, 2016:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/ugc
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/ugc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Gamertag of the Player that owns the Game Variant.
    variant = 'variant_example' # str | The ID for the Game Variant.

    try:
        # Halo 5 - Player Game Variant
        api_instance.call_58acde292109180bdcacc40c(player, variant)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58acde292109180bdcacc40c: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Gamertag of the Player that owns the Game Variant. | 
 **variant** | **str**| The ID for the Game Variant. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Metadata for the Player-created Game Variant. |  -  |
**400** | Specified Gamertag is malformed or the Game Variant ID is malformed. |  -  |
**404** | The player does not exist or the Game Variant does not exist in the provided Player&#39;s file share. |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **call_58acde292109180bdcacc40d**
> call_58acde292109180bdcacc40d(player, start=start, count=count, sort=sort, order=order)

Halo 5 - Player Game Variants

<p>Retrieves a list of Game Variants created by a Player.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"List Game Variants\" to \"Halo 5 - Player Game Variants\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>August 5, 2016:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/ugc
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/ugc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Gamertag of the Player that owns the listed Game Variants.
    start = 3.4 # float | When specified, this indicates the starting index (0-based) for which the list of results will begin at. (optional)
    count = 3.4 # float | When specified, this indicates the maximum quantity of items the caller would like returned in the response. (optional)
    sort = 3.4 # float | When specified, this indicates what field should be used to sort the results as the primary sort order. When omitted, \"modified\" (descending) is the assumed primary sort order. Allowed sort fields are: name, description, accessibility, created, modified, bookmarkCount. (optional)
    order = 3.4 # float | When specified, this indicates the ordering that will be applied. When omitted, \"desc\" is assumed. Allowed order values are: asc, desc. (optional)

    try:
        # Halo 5 - Player Game Variants
        api_instance.call_58acde292109180bdcacc40d(player, start=start, count=count, sort=sort, order=order)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58acde292109180bdcacc40d: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Gamertag of the Player that owns the listed Game Variants. | 
 **start** | **float**| When specified, this indicates the starting index (0-based) for which the list of results will begin at. | [optional] 
 **count** | **float**| When specified, this indicates the maximum quantity of items the caller would like returned in the response. | [optional] 
 **sort** | **float**| When specified, this indicates what field should be used to sort the results as the primary sort order. When omitted, \&quot;modified\&quot; (descending) is the assumed primary sort order. Allowed sort fields are: name, description, accessibility, created, modified, bookmarkCount. | [optional] 
 **order** | **float**| When specified, this indicates the ordering that will be applied. When omitted, \&quot;desc\&quot; is assumed. Allowed order values are: asc, desc. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain a list of the Player-created Game Variants. |  -  |
**400** | Specified Gamertag is malformed. |  -  |
**404** | The player does not exist. |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **call_58acde292109180bdcacc40e**
> call_58acde292109180bdcacc40e(player, variant)

Halo 5 - Player Map Variant

<p>Retrieves Metadata about a Player-created Map Variant.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Get Map Variant\" to \"Halo 5 - Player Map Variant\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>August 5, 2016:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/ugc
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/ugc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Gamertag of the Player that owns the Map Variant.
    variant = 'variant_example' # str | The ID for the Map Variant.

    try:
        # Halo 5 - Player Map Variant
        api_instance.call_58acde292109180bdcacc40e(player, variant)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58acde292109180bdcacc40e: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Gamertag of the Player that owns the Map Variant. | 
 **variant** | **str**| The ID for the Map Variant. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Metadata for the Player-created Map Variant. |  -  |
**400** | Specified Gamertag is malformed or the Map Variant ID is malformed. |  -  |
**404** | The Player does not exist or the Map Variant does not exist in the provided Player&#39;s file share. |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **call_58acde292109180bdcacc40f**
> call_58acde292109180bdcacc40f(player, start=start, count=count, sort=sort, order=order)

Halo 5 - Player Map Variants

<p>Retrieves a list Map Variants created by a Player.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"List Map Variants\" to \"Halo 5 - Player Map Variants\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>August 5, 2016:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/ugc
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/ugc"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Gamertag of the Player that owns the listed Map Variants.
    start = 3.4 # float | When specified, this indicates the starting index (0-based) for which the list of results will begin at. (optional)
    count = 3.4 # float | When specified, this indicates the maximum quantity of items the caller would like returned in the response. (optional)
    sort = 3.4 # float | When specified, this indicates what field should be used to sort the results as the primary sort order. When omitted, \"modified\" (descending) is the assumed primary sort order. Allowed sort fields are: name, description, accessibility, created, modified, bookmarkCount. (optional)
    order = 3.4 # float | When specified, this indicates the ordering that will be applied. When omitted, \"desc\" is assumed. Allowed order values are: asc, desc. (optional)

    try:
        # Halo 5 - Player Map Variants
        api_instance.call_58acde292109180bdcacc40f(player, start=start, count=count, sort=sort, order=order)
    except Exception as e:
        print("Exception when calling DefaultApi->call_58acde292109180bdcacc40f: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Gamertag of the Player that owns the listed Map Variants. | 
 **start** | **float**| When specified, this indicates the starting index (0-based) for which the list of results will begin at. | [optional] 
 **count** | **float**| When specified, this indicates the maximum quantity of items the caller would like returned in the response. | [optional] 
 **sort** | **float**| When specified, this indicates what field should be used to sort the results as the primary sort order. When omitted, \&quot;modified\&quot; (descending) is the assumed primary sort order. Allowed sort fields are: name, description, accessibility, created, modified, bookmarkCount. | [optional] 
 **order** | **float**| When specified, this indicates the ordering that will be applied. When omitted, \&quot;desc\&quot; is assumed. Allowed order values are: asc, desc. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain a list of the Player-created Map Variants. |  -  |
**400** | Specified Gamertag is malformed. |  -  |
**404** | The Player does not exist. |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


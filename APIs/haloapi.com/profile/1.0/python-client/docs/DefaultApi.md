# openapi_client.DefaultApi

All URIs are relative to *https://www.haloapi.com/profile*

Method | HTTP request | Description
------------- | ------------- | -------------
[**halo5_player_appearance**](DefaultApi.md#halo5_player_appearance) | **GET** /h5/profiles/{player}/appearance | Halo 5 - Player Appearance
[**halo5_player_emblem_image**](DefaultApi.md#halo5_player_emblem_image) | **GET** /h5/profiles/{player}/emblem | Halo 5 - Player Emblem Image
[**halo5_player_spartan_image**](DefaultApi.md#halo5_player_spartan_image) | **GET** /h5/profiles/{player}/spartan | Halo 5 - Player Spartan Image


# **halo5_player_appearance**
> halo5_player_appearance(player)

Halo 5 - Player Appearance

<p>This Endpoint retrieves appearance information for a player.</p> <p>If the player is a member of a Company, the Company's ID and Name will be provided. Additional Company information is available via the Stats API.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>July 14, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/profile
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/profile"
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
    player = 'player_example' # str | The Player's Gamertag

    try:
        # Halo 5 - Player Appearance
        api_instance.halo5_player_appearance(player)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_appearance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag | 

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
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_emblem_image**
> halo5_player_emblem_image(player, size=size)

Halo 5 - Player Emblem Image

<p>This Endpoint returns an HTTP Redirect (302 Found) response to the caller with the URL of an image of the Player's Emblem. The initial request to this API that returns the HTTP Redirect is throttled and requires a Subscription Key. However, the image itself (at hostname \"image.halocdn.com\") is not throttled and does not require a Subscription Key. Note that if the Player later changes their Emblem, the image itself is not refreshed and will need to be refreshed via a new request to this API.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>August 12, 2019:</strong></p>     <ul>         <li>Expanded documentation for the HTTP 400 response code to cover unsupported emblem component(s).</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>July 14, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Halo 5 - Emblem Image\" to \"Halo 5 - Player Emblem Image\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Emblem Image\" to \"Halo 5 - Emblem Image\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/profile
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/profile"
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
    player = 'player_example' # str | The Player's Gamertag.
    size = 3.4 # float | An optional size (specified in pixels) of the image requested. When specified, this value must be one of the following values: 95, 128, 190, 256, 512. If a value is specified that is not in this list, the API returns HTTP 400 (\"Bad Request\"). If the size is empty or missing, the API will use 256. (optional)

    try:
        # Halo 5 - Player Emblem Image
        api_instance.halo5_player_emblem_image(player, size=size)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_emblem_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 
 **size** | **float**| An optional size (specified in pixels) of the image requested. When specified, this value must be one of the following values: 95, 128, 190, 256, 512. If a value is specified that is not in this list, the API returns HTTP 400 (\&quot;Bad Request\&quot;). If the size is empty or missing, the API will use 256. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Golden Path. The Location header should point at the corresponding Emblem image. |  -  |
**400** | An unsupported value was provided for a query string parameter or the Player&#39;s Emblem contains unsupported component(s) and cannot be rendered at this time. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_spartan_image**
> halo5_player_spartan_image(player, size=size, crop=crop)

Halo 5 - Player Spartan Image

<p>This Endpoint returns an HTTP Redirect (302 Found) response to the caller with the URL of an image of the Player's Spartan's appearance. The initial request to this API that returns the HTTP Redirect is throttled and requires a Subscription Key. However, the image itself (at hostname \"image.halocdn.com\") is not throttled and does not require a Subscription Key. Note that if the Player later changes their Spartan's appearance, the image itself is not refreshed and will need to be refreshed via a new request to this API.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>August 12, 2019:</strong></p>     <ul>         <li>Expanded documentation for the HTTP 400 response code to cover unsupported armor component(s).</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>July 14, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Halo 5 - Spartan Image\" to \"Halo 5 - Player Spartan Image\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Spartan Image\" to \"Halo 5 - Spartan Image\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/profile
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/profile"
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
    player = 'player_example' # str | The Player's Gamertag.
    size = 3.4 # float | An optional size (specified in pixels) of the image requested. When specified, this value must be one of the following values: 95, 128, 190, 256, 512. If a value is specified that is not in this list, the API returns HTTP 400 (\"Bad Request\"). If the size is empty or missing, the API will use 256. (optional)
    crop = 'crop_example' # str | An optional crop that will be used to determine what portion of the Spartan is returned in the image. The value must be either \"full\" or \"portrait\". If no value is specified \"full\" is used. If an unsupported value is provided, the API returns HTTP 400 (\"Bad Request\"). (optional)

    try:
        # Halo 5 - Player Spartan Image
        api_instance.halo5_player_spartan_image(player, size=size, crop=crop)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_spartan_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 
 **size** | **float**| An optional size (specified in pixels) of the image requested. When specified, this value must be one of the following values: 95, 128, 190, 256, 512. If a value is specified that is not in this list, the API returns HTTP 400 (\&quot;Bad Request\&quot;). If the size is empty or missing, the API will use 256. | [optional] 
 **crop** | **str**| An optional crop that will be used to determine what portion of the Spartan is returned in the image. The value must be either \&quot;full\&quot; or \&quot;portrait\&quot;. If no value is specified \&quot;full\&quot; is used. If an unsupported value is provided, the API returns HTTP 400 (\&quot;Bad Request\&quot;). | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Golden Path. The Location header should point at the corresponding Spartan image. |  -  |
**400** | An unsupported value was provided for a query string parameter or the Player&#39;s Spartan is equipped with unsupported component(s) and cannot be rendered at this time. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


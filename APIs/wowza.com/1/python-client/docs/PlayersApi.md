# openapi_client.PlayersApi

All URIs are relative to *https://api-sandbox.cloud.wowza.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_player_url**](PlayersApi.md#create_player_url) | **POST** /players/{player_id}/urls | Create a player URL
[**delete_player_url**](PlayersApi.md#delete_player_url) | **DELETE** /players/{player_id}/urls/{id} | Delete a player URL
[**list_player_urls**](PlayersApi.md#list_player_urls) | **GET** /players/{player_id}/urls | Fetch all player URLs
[**list_players**](PlayersApi.md#list_players) | **GET** /players | Fetch all players
[**request_player_rebuild**](PlayersApi.md#request_player_rebuild) | **POST** /players/{id}/rebuild | Rebuild player code
[**show_player**](PlayersApi.md#show_player) | **GET** /players/{id} | Fetch a player
[**show_player_state**](PlayersApi.md#show_player_state) | **GET** /players/{id}/state | Fetch the state of a player
[**show_player_url**](PlayersApi.md#show_player_url) | **GET** /players/{player_id}/urls/{id} | Fetch a player URL
[**update_player**](PlayersApi.md#update_player) | **PATCH** /players/{id} | Update a player
[**update_player_url**](PlayersApi.md#update_player_url) | **PATCH** /players/{player_id}/urls/{id} | Update a player URL


# **create_player_url**
> CreatePlayerUrl200Response create_player_url(player_id, url)

Create a player URL

This operation creates a new player URL.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_player_url200_response import CreatePlayerUrl200Response
from openapi_client.models.url_create_input import UrlCreateInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    player_id = 'player_id_example' # str | The unique alphanumeric string that identifies the player.
    url = openapi_client.UrlCreateInput() # UrlCreateInput | Provide the details of the player URL to create in the body of the request.

    try:
        # Create a player URL
        api_response = api_instance.create_player_url(player_id, url)
        print("The response of PlayersApi->create_player_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->create_player_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player_id** | **str**| The unique alphanumeric string that identifies the player. | 
 **url** | [**UrlCreateInput**](UrlCreateInput.md)| Provide the details of the player URL to create in the body of the request. | 

### Return type

[**CreatePlayerUrl200Response**](CreatePlayerUrl200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_player_url**
> delete_player_url(player_id, id)

Delete a player URL

This operation deletes a player URL. 

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    player_id = 'player_id_example' # str | The unique alphanumeric string that identifies the player.
    id = 'id_example' # str | The unique alphanumeric string that identifies the player URL.

    try:
        # Delete a player URL
        api_instance.delete_player_url(player_id, id)
    except Exception as e:
        print("Exception when calling PlayersApi->delete_player_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player_id** | **str**| The unique alphanumeric string that identifies the player. | 
 **id** | **str**| The unique alphanumeric string that identifies the player URL. | 

### Return type

void (empty response body)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_player_urls**
> Urls list_player_urls(player_id)

Fetch all player URLs

This operation shows the details of all player URLs.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.urls import Urls
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    player_id = 'player_id_example' # str | The unique alphanumeric string that identifies the player.

    try:
        # Fetch all player URLs
        api_response = api_instance.list_player_urls(player_id)
        print("The response of PlayersApi->list_player_urls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->list_player_urls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player_id** | **str**| The unique alphanumeric string that identifies the player. | 

### Return type

[**Urls**](Urls.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_players**
> Players list_players(page=page, per_page=per_page)

Fetch all players

This operation shows the details of all of your players.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.players import Players
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    page = 56 # int | Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results. (optional)
    per_page = 56 # int | For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>. (optional)

    try:
        # Fetch all players
        api_response = api_instance.list_players(page=page, per_page=per_page)
        print("The response of PlayersApi->list_players:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->list_players: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. &lt;strong&gt;Next&lt;/strong&gt; and &lt;strong&gt;Previous&lt;/strong&gt; links allow you to navigate multiple pages of results. Omit the &lt;em&gt;page&lt;/em&gt; parameter or specify an integer that&#39;s less than or equal to &lt;strong&gt;0&lt;/strong&gt; to view all (unpaginated) results. | [optional] 
 **per_page** | **int**| For use with the &lt;em&gt;page&lt;/em&gt; parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 

### Return type

[**Players**](Players.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_player_rebuild**
> RequestPlayerRebuild200Response request_player_rebuild(id)

Rebuild player code

This operation rebuilds the player with the current configuration.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.request_player_rebuild200_response import RequestPlayerRebuild200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the player.

    try:
        # Rebuild player code
        api_response = api_instance.request_player_rebuild(id)
        print("The response of PlayersApi->request_player_rebuild:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->request_player_rebuild: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the player. | 

### Return type

[**RequestPlayerRebuild200Response**](RequestPlayerRebuild200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_player**
> ShowPlayer200Response show_player(id)

Fetch a player

This operation shows details of a specific player.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_player200_response import ShowPlayer200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the player.

    try:
        # Fetch a player
        api_response = api_instance.show_player(id)
        print("The response of PlayersApi->show_player:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->show_player: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the player. | 

### Return type

[**ShowPlayer200Response**](ShowPlayer200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_player_state**
> ShowPlayerState200Response show_player_state(id)

Fetch the state of a player

This operation shows the current state of a player.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_player_state200_response import ShowPlayerState200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the player.

    try:
        # Fetch the state of a player
        api_response = api_instance.show_player_state(id)
        print("The response of PlayersApi->show_player_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->show_player_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the player. | 

### Return type

[**ShowPlayerState200Response**](ShowPlayerState200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_player_url**
> CreatePlayerUrl200Response show_player_url(player_id, id)

Fetch a player URL

This operation shows the details of a player URL.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_player_url200_response import CreatePlayerUrl200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    player_id = 'player_id_example' # str | The unique alphanumeric string that identifies the player.
    id = 'id_example' # str | The unique alphanumeric string that identifies the player URL.

    try:
        # Fetch a player URL
        api_response = api_instance.show_player_url(player_id, id)
        print("The response of PlayersApi->show_player_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->show_player_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player_id** | **str**| The unique alphanumeric string that identifies the player. | 
 **id** | **str**| The unique alphanumeric string that identifies the player URL. | 

### Return type

[**CreatePlayerUrl200Response**](CreatePlayerUrl200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_player**
> ShowPlayer200Response update_player(id, player)

Update a player

This operation updates a player.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.player_update_input import PlayerUpdateInput
from openapi_client.models.show_player200_response import ShowPlayer200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the player.
    player = openapi_client.PlayerUpdateInput() # PlayerUpdateInput | Provide the details of the player to update in the body of the request.

    try:
        # Update a player
        api_response = api_instance.update_player(id, player)
        print("The response of PlayersApi->update_player:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->update_player: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the player. | 
 **player** | [**PlayerUpdateInput**](PlayerUpdateInput.md)| Provide the details of the player to update in the body of the request. | 

### Return type

[**ShowPlayer200Response**](ShowPlayer200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_player_url**
> CreatePlayerUrl200Response update_player_url(player_id, id, url)

Update a player URL

This operation updates a player URL.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.create_player_url200_response import CreatePlayerUrl200Response
from openapi_client.models.url_update_input import UrlUpdateInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlayersApi(api_client)
    player_id = 'player_id_example' # str | The unique alphanumeric string that identifies the player.
    id = 'id_example' # str | The unique alphanumeric string that identifies the player URL.
    url = openapi_client.UrlUpdateInput() # UrlUpdateInput | Provide the details of the player URL to update in the body of the request.

    try:
        # Update a player URL
        api_response = api_instance.update_player_url(player_id, id, url)
        print("The response of PlayersApi->update_player_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayersApi->update_player_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player_id** | **str**| The unique alphanumeric string that identifies the player. | 
 **id** | **str**| The unique alphanumeric string that identifies the player URL. | 
 **url** | [**UrlUpdateInput**](UrlUpdateInput.md)| Provide the details of the player URL to update in the body of the request. | 

### Return type

[**CreatePlayerUrl200Response**](CreatePlayerUrl200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


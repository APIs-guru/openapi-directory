# openapi_client.PiecesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_pieces_get**](PiecesApi.md#api_v2_pieces_get) | **GET** /api/v2/pieces | Returns the pieces matching the query parameters.
[**api_v2_pieces_id_delete**](PiecesApi.md#api_v2_pieces_id_delete) | **DELETE** /api/v2/pieces/{id} | Deletes the piece with the given ID.
[**api_v2_pieces_id_get**](PiecesApi.md#api_v2_pieces_id_get) | **GET** /api/v2/pieces/{id} | Returns the piece matching the given ID.
[**api_v2_pieces_post**](PiecesApi.md#api_v2_pieces_post) | **POST** /api/v2/pieces | Create a new piece.


# **api_v2_pieces_get**
> List[Piece] api_v2_pieces_get(episode_id)

Returns the pieces matching the query parameters.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.piece import Piece
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PiecesApi(api_client)
    episode_id = 56 # int | The ID of the episode that owns the piece.

    try:
        # Returns the pieces matching the query parameters.
        api_response = api_instance.api_v2_pieces_get(episode_id)
        print("The response of PiecesApi->api_v2_pieces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PiecesApi->api_v2_pieces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**| The ID of the episode that owns the piece. | 

### Return type

[**List[Piece]**](Piece.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pieces matching the query parameters |  -  |
**403** | Authorization failed, Username or password not found or incorrect. |  -  |
**404** | Either the pieces or the episode aren&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_pieces_id_delete**
> api_v2_pieces_id_delete(id)

Deletes the piece with the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PiecesApi(api_client)
    id = 56 # int | 

    try:
        # Deletes the piece with the given ID.
        api_instance.api_v2_pieces_id_delete(id)
    except Exception as e:
        print("Exception when calling PiecesApi->api_v2_pieces_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The piece was deleted. |  -  |
**403** | The user isn&#39;t permitted to delete the piece. |  -  |
**404** | The piece isn&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_pieces_id_get**
> Piece api_v2_pieces_id_get(id)

Returns the piece matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.piece import Piece
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PiecesApi(api_client)
    id = 56 # int | 

    try:
        # Returns the piece matching the given ID.
        api_response = api_instance.api_v2_pieces_id_get(id)
        print("The response of PiecesApi->api_v2_pieces_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PiecesApi->api_v2_pieces_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Piece**](Piece.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The piece with the given ID. |  -  |
**403** | Authorization failed |  -  |
**404** | The piece isn&#39;t found or the user doesn&#39;t have permission to get it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_pieces_post**
> Piece api_v2_pieces_post(piece=piece)

Create a new piece.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.piece import Piece
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PiecesApi(api_client)
    piece = openapi_client.Piece() # Piece |  (optional)

    try:
        # Create a new piece.
        api_response = api_instance.api_v2_pieces_post(piece=piece)
        print("The response of PiecesApi->api_v2_pieces_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PiecesApi->api_v2_pieces_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **piece** | [**Piece**](Piece.md)|  | [optional] 

### Return type

[**Piece**](Piece.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created piece with fields populated. |  -  |
**400** | If the request is missing required data or invalid. |  -  |
**403** | The user isn&#39;t permitted to create the piece. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


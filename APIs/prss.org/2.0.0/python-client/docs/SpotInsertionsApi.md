# openapi_client.SpotInsertionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_spotinsertions_get**](SpotInsertionsApi.md#api_v2_spotinsertions_get) | **GET** /api/v2/spotinsertions | Returns the spot insertions matching the query parameters.
[**api_v2_spotinsertions_id_delete**](SpotInsertionsApi.md#api_v2_spotinsertions_id_delete) | **DELETE** /api/v2/spotinsertions/{id} | Deletes the spot insertion with the given ID.
[**api_v2_spotinsertions_id_get**](SpotInsertionsApi.md#api_v2_spotinsertions_id_get) | **GET** /api/v2/spotinsertions/{id} | Returns the spot insertion matching the given ID.
[**api_v2_spotinsertions_post**](SpotInsertionsApi.md#api_v2_spotinsertions_post) | **POST** /api/v2/spotinsertions | Creates a new spot insertion.


# **api_v2_spotinsertions_get**
> List[SpotInsertion] api_v2_spotinsertions_get(page_start=page_start, page_size=page_size, order_by_id=order_by_id)

Returns the spot insertions matching the query parameters.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.spot_insertion import SpotInsertion
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
    api_instance = openapi_client.SpotInsertionsApi(api_client)
    page_start = 0 # int | The start page of the results to return. The first item is indexed at 0. (optional) (default to 0)
    page_size = 500 # int | The number of items to return. Must be between 0 and 500, inclusive. (optional) (default to 500)
    order_by_id = 'order_by_id_example' # str | The sort order of the list of spot insertions, based on ID. If unspecified, the spot insertions are returned in random order. If using paging to iterate through the results, sort order should be specified. (optional)

    try:
        # Returns the spot insertions matching the query parameters.
        api_response = api_instance.api_v2_spotinsertions_get(page_start=page_start, page_size=page_size, order_by_id=order_by_id)
        print("The response of SpotInsertionsApi->api_v2_spotinsertions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotInsertionsApi->api_v2_spotinsertions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_start** | **int**| The start page of the results to return. The first item is indexed at 0. | [optional] [default to 0]
 **page_size** | **int**| The number of items to return. Must be between 0 and 500, inclusive. | [optional] [default to 500]
 **order_by_id** | **str**| The sort order of the list of spot insertions, based on ID. If unspecified, the spot insertions are returned in random order. If using paging to iterate through the results, sort order should be specified. | [optional] 

### Return type

[**List[SpotInsertion]**](SpotInsertion.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The spot insertions matching the query parameters |  -  |
**403** | Authorization failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_spotinsertions_id_delete**
> api_v2_spotinsertions_id_delete(id)

Deletes the spot insertion with the given ID.

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
    api_instance = openapi_client.SpotInsertionsApi(api_client)
    id = 56 # int | 

    try:
        # Deletes the spot insertion with the given ID.
        api_instance.api_v2_spotinsertions_id_delete(id)
    except Exception as e:
        print("Exception when calling SpotInsertionsApi->api_v2_spotinsertions_id_delete: %s\n" % e)
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
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The spot insertion was deleted. |  -  |
**403** | Authorization failed, or the user is not permitted to delete the spot insertion. |  -  |
**404** | The spot insertion cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_spotinsertions_id_get**
> SpotInsertion api_v2_spotinsertions_id_get(id)

Returns the spot insertion matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.spot_insertion import SpotInsertion
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
    api_instance = openapi_client.SpotInsertionsApi(api_client)
    id = 56 # int | 

    try:
        # Returns the spot insertion matching the given ID.
        api_response = api_instance.api_v2_spotinsertions_id_get(id)
        print("The response of SpotInsertionsApi->api_v2_spotinsertions_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotInsertionsApi->api_v2_spotinsertions_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**SpotInsertion**](SpotInsertion.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The spot insertion with the given ID. |  -  |
**403** | Authorization failed, or the user is not permitted to view the spot insertion. |  -  |
**404** | The spot insertion cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_spotinsertions_post**
> SpotInsertion api_v2_spotinsertions_post(spot_insertion=spot_insertion)

Creates a new spot insertion.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.spot_insertion import SpotInsertion
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
    api_instance = openapi_client.SpotInsertionsApi(api_client)
    spot_insertion = openapi_client.SpotInsertion() # SpotInsertion |  (optional)

    try:
        # Creates a new spot insertion.
        api_response = api_instance.api_v2_spotinsertions_post(spot_insertion=spot_insertion)
        print("The response of SpotInsertionsApi->api_v2_spotinsertions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotInsertionsApi->api_v2_spotinsertions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spot_insertion** | [**SpotInsertion**](SpotInsertion.md)|  | [optional] 

### Return type

[**SpotInsertion**](SpotInsertion.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created spot insertion with fields populated. |  -  |
**400** | The request is missing required data or invalid. |  -  |
**403** | Authorization failed, or the user is not permitted to create the spot insertion. |  -  |
**500** | Creating the spot insertion failed, even though the request was valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.TokensApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_token**](TokensApi.md#delete_token) | **DELETE** /v1/tokens/{id} | 
[**get_token**](TokensApi.md#get_token) | **GET** /v1/tokens/{id} | 
[**get_tokens**](TokensApi.md#get_tokens) | **GET** /v1/tokens | 
[**patch_token**](TokensApi.md#patch_token) | **PATCH** /v1/tokens/{id} | 
[**post_tokens**](TokensApi.md#post_tokens) | **POST** /v1/tokens | 


# **delete_token**
> delete_token(id)



Use to delete a token

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokensApi(api_client)
    id = 'id_example' # str | The token id that needs to be deleted

    try:
        api_instance.delete_token(id)
    except Exception as e:
        print("Exception when calling TokensApi->delete_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The token id that needs to be deleted | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the deleted token object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_token**
> get_token(id, include_driver=include_driver, include_organization=include_organization)



Get a single token's data

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokensApi(api_client)
    id = 'id_example' # str | The token id that needs to be fetched
    include_driver = True # bool | Populate driver (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_token(id, include_driver=include_driver, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling TokensApi->get_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The token id that needs to be fetched | 
 **include_driver** | **bool**| Populate driver | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a token object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tokens**
> GetDrivers200Response get_tokens(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_driver=include_driver, include_organization=include_organization)



List tokens

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.get_drivers200_response import GetDrivers200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokensApi(api_client)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_driver = True # bool | Populate driver (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_response = api_instance.get_tokens(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_driver=include_driver, include_organization=include_organization)
        print("The response of TokensApi->get_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->get_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
 **include_driver** | **bool**| Populate driver | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 

### Return type

[**GetDrivers200Response**](GetDrivers200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of token objects |  -  |
**401** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_token**
> GetDrivers200Response patch_token(id, patch_token_request)



Update a token

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.get_drivers200_response import GetDrivers200Response
from openapi_client.models.patch_token_request import PatchTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokensApi(api_client)
    id = 'id_example' # str | ID of token that needs to be updated
    patch_token_request = openapi_client.PatchTokenRequest() # PatchTokenRequest | Include token properties to create here

    try:
        api_response = api_instance.patch_token(id, patch_token_request)
        print("The response of TokensApi->patch_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->patch_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of token that needs to be updated | 
 **patch_token_request** | [**PatchTokenRequest**](PatchTokenRequest.md)| Include token properties to create here | 

### Return type

[**GetDrivers200Response**](GetDrivers200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the updated token |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_tokens**
> GetDrivers200Response post_tokens(post_tokens_request)



Create a new token

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.get_drivers200_response import GetDrivers200Response
from openapi_client.models.post_tokens_request import PostTokensRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokensApi(api_client)
    post_tokens_request = openapi_client.PostTokensRequest() # PostTokensRequest | Include token properties to create here

    try:
        api_response = api_instance.post_tokens(post_tokens_request)
        print("The response of TokensApi->post_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->post_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_tokens_request** | [**PostTokensRequest**](PostTokensRequest.md)| Include token properties to create here | 

### Return type

[**GetDrivers200Response**](GetDrivers200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a newly created token object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


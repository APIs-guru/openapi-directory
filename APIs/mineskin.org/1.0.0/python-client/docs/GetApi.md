# openapi_client.GetApi

All URIs are relative to *https://api.mineskin.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_delay_get**](GetApi.md#get_delay_get) | **GET** /get/delay | 
[**get_id_id_get**](GetApi.md#get_id_id_get) | **GET** /get/id/{id} | 
[**get_list_page_get**](GetApi.md#get_list_page_get) | **GET** /get/list/{page} | 
[**get_uuid_uuid_get**](GetApi.md#get_uuid_uuid_get) | **GET** /get/uuid/{uuid} | 


# **get_delay_get**
> GetDelayGet200Response get_delay_get(user_agent)



### Example

* Api Key Authentication (apiKey):
* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_delay_get200_response import GetDelayGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GetApi(api_client)
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples

    try:
        api_response = api_instance.get_delay_get(user_agent)
        print("The response of GetApi->get_delay_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetApi->get_delay_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 

### Return type

[**GetDelayGet200Response**](GetDelayGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delay info for the requesting client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_id_id_get**
> SkinInfo get_id_id_get(id, user_agent)



Deprecated. Use /get/uuid instead.

### Example


```python
import openapi_client
from openapi_client.models.skin_info import SkinInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GetApi(api_client)
    id = 3.4 # float | 
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples

    try:
        api_response = api_instance.get_id_id_get(id, user_agent)
        print("The response of GetApi->get_id_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetApi->get_id_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 

### Return type

[**SkinInfo**](SkinInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Skin Info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_list_page_get**
> GetListPageGet200Response get_list_page_get(page, user_agent)



### Example


```python
import openapi_client
from openapi_client.models.get_list_page_get200_response import GetListPageGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GetApi(api_client)
    page = 3.4 # float | For reference pagination, the uuid of the last skin in the previous page. For numeric pagination (deprecated), the page number or 'start'.
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples

    try:
        api_response = api_instance.get_list_page_get(page, user_agent)
        print("The response of GetApi->get_list_page_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetApi->get_list_page_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| For reference pagination, the uuid of the last skin in the previous page. For numeric pagination (deprecated), the page number or &#39;start&#39;. | 
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 

### Return type

[**GetListPageGet200Response**](GetListPageGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Skin Info List |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_uuid_uuid_get**
> SkinInfo get_uuid_uuid_get(uuid, user_agent)



### Example


```python
import openapi_client
from openapi_client.models.skin_info import SkinInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GetApi(api_client)
    uuid = 'uuid_example' # str | 
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples

    try:
        api_response = api_instance.get_uuid_uuid_get(uuid, user_agent)
        print("The response of GetApi->get_uuid_uuid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetApi->get_uuid_uuid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  | 
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 

### Return type

[**SkinInfo**](SkinInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Skin Info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.DisplayAdsApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_display_ads_get**](DisplayAdsApi.md#api_display_ads_get) | **GET** /api/display_ads | display ads
[**api_display_ads_id_get**](DisplayAdsApi.md#api_display_ads_id_get) | **GET** /api/display_ads/{id} | display ad
[**api_display_ads_id_put**](DisplayAdsApi.md#api_display_ads_id_put) | **PUT** /api/display_ads/{id} | display ads
[**api_display_ads_id_unpublish_put**](DisplayAdsApi.md#api_display_ads_id_unpublish_put) | **PUT** /api/display_ads/{id}/unpublish | unpublish
[**api_display_ads_post**](DisplayAdsApi.md#api_display_ads_post) | **POST** /api/display_ads | display ads


# **api_display_ads_get**
> List[DisplayAd] api_display_ads_get()

display ads

This endpoint allows the client to retrieve a list of all display ads.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.display_ad import DisplayAd
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisplayAdsApi(api_client)

    try:
        # display ads
        api_response = api_instance.api_display_ads_get()
        print("The response of DisplayAdsApi->api_display_ads_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisplayAdsApi->api_display_ads_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DisplayAd]**](DisplayAd.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_display_ads_id_get**
> api_display_ads_id_get(id)

display ad

This endpoint allows the client to retrieve a single display ad, via its id.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisplayAdsApi(api_client)
    id = 123 # int | The ID of the display ad.

    try:
        # display ad
        api_instance.api_display_ads_id_get(id)
    except Exception as e:
        print("Exception when calling DisplayAdsApi->api_display_ads_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the display ad. | 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |
**404** | Unknown DisplayAd ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_display_ads_id_put**
> List[DisplayAd] api_display_ads_id_put(id, display_ad=display_ad)

display ads

This endpoint allows the client to update the attributes of a single display ad, via its id.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.display_ad import DisplayAd
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisplayAdsApi(api_client)
    id = 123 # int | The ID of the display ad.
    display_ad = [openapi_client.DisplayAd()] # List[DisplayAd] |  (optional)

    try:
        # display ads
        api_response = api_instance.api_display_ads_id_put(id, display_ad=display_ad)
        print("The response of DisplayAdsApi->api_display_ads_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisplayAdsApi->api_display_ads_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the display ad. | 
 **display_ad** | [**List[DisplayAd]**](DisplayAd.md)|  | [optional] 

### Return type

[**List[DisplayAd]**](DisplayAd.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_display_ads_id_unpublish_put**
> api_display_ads_id_unpublish_put(id)

unpublish

This endpoint allows the client to remove a display ad from rotation by un-publishing it.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisplayAdsApi(api_client)
    id = 123 # int | The ID of the display ad to unpublish.

    try:
        # unpublish
        api_instance.api_display_ads_id_unpublish_put(id)
    except Exception as e:
        print("Exception when calling DisplayAdsApi->api_display_ads_id_unpublish_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the display ad to unpublish. | 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no content |  -  |
**401** | unauthorized |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_display_ads_post**
> List[DisplayAd] api_display_ads_post(display_ad=display_ad)

display ads

This endpoint allows the client to create a new display ad.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.display_ad import DisplayAd
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisplayAdsApi(api_client)
    display_ad = [openapi_client.DisplayAd()] # List[DisplayAd] |  (optional)

    try:
        # display ads
        api_response = api_instance.api_display_ads_post(display_ad=display_ad)
        print("The response of DisplayAdsApi->api_display_ads_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisplayAdsApi->api_display_ads_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **display_ad** | [**List[DisplayAd]**](DisplayAd.md)|  | [optional] 

### Return type

[**List[DisplayAd]**](DisplayAd.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |
**422** | unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


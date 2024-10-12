# openapi_client.CarCachedImageApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_cached_image**](CarCachedImageApi.md#get_cached_image) | **GET** /image/cache/car/{listingID}/{imageID} | Fetch cached image


# **get_cached_image**
> bytearray get_cached_image(listing_id, image_id, api_key=api_key)

Fetch cached image

Fetch the cached car image

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CarCachedImageApi(api_client)
    listing_id = 'listing_id_example' # str | ID of the listing to fetch cached images for
    image_id = 'image_id_example' # str | ID of the image to fetch
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Fetch cached image
        api_response = api_instance.get_cached_image(listing_id, image_id, api_key=api_key)
        print("The response of CarCachedImageApi->get_cached_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarCachedImageApi->get_cached_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listing_id** | **str**| ID of the listing to fetch cached images for | 
 **image_id** | **str**| ID of the image to fetch | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

**bytearray**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cached image of the car |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


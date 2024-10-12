# openapi_client.ListingApi

All URIs are relative to *https://api.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listings_all**](ListingApi.md#listings_all) | **GET** /ecosystems/{ecosystem_id}/listings | List listings
[**listings_one**](ListingApi.md#listings_one) | **GET** /ecosystems/{ecosystem_id}/listings/{id} | Get listing


# **listings_all**
> GetListingsResponse listings_all(ecosystem_id, cursor=cursor, limit=limit, external_id=external_id)

List listings

List listings

### Example


```python
import openapi_client
from openapi_client.models.get_listings_response import GetListingsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListingApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 50 # int | Number of records to return (optional) (default to 50)
    external_id = 'external_id_example' # str | Filter on external_id (optional)

    try:
        # List listings
        api_response = api_instance.listings_all(ecosystem_id, cursor=cursor, limit=limit, external_id=external_id)
        print("The response of ListingApi->listings_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListingApi->listings_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of records to return | [optional] [default to 50]
 **external_id** | **str**| Filter on external_id | [optional] 

### Return type

[**GetListingsResponse**](GetListingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listings_one**
> GetListingResponse listings_one(ecosystem_id, id)

Get listing

Get listing

### Example


```python
import openapi_client
from openapi_client.models.get_listing_response import GetListingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListingApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    id = 'id_example' # str | ID of the record you are acting upon.

    try:
        # Get listing
        api_response = api_instance.listings_one(ecosystem_id, id)
        print("The response of ListingApi->listings_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListingApi->listings_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **id** | **str**| ID of the record you are acting upon. | 

### Return type

[**GetListingResponse**](GetListingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


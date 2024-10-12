# openapi_client.SubscriberApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriber_list**](SubscriberApi.md#subscriber_list) | **GET** /subscriber.list.json | 


# **subscriber_list**
> SubscriberList200Response subscriber_list(start=start, count=count, subscribed=subscribed, store_id=store_id, email=email, params=params, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, page_cursor=page_cursor, response_fields=response_fields)



Get subscribers list

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.subscriber_list200_response import SubscriberList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubscriberApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    subscribed = True # bool | Filter by subscription status (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    email = 'email_example' # str | Filter subscribers by email (optional)
    params = 'force_all' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'force_all')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.subscriber_list(start=start, count=count, subscribed=subscribed, store_id=store_id, email=email, params=params, exclude=exclude, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, page_cursor=page_cursor, response_fields=response_fields)
        print("The response of SubscriberApi->subscriber_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriberApi->subscriber_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **subscribed** | **bool**| Filter by subscription status | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **email** | **str**| Filter subscribers by email | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**SubscriberList200Response**](SubscriberList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


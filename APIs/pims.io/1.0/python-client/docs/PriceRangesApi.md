# openapi_client.PriceRangesApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_price_ranges**](PriceRangesApi.md#fetch_all_price_ranges) | **GET** /price-ranges | Find all price ranges
[**fetch_one_price_range**](PriceRangesApi.md#fetch_one_price_range) | **GET** /price-ranges/{price_range_id} | Get one price range by ID


# **fetch_all_price_ranges**
> List[PriceRangesEntity] fetch_all_price_ranges(label=label, show_ignored=show_ignored, sort=sort, page_size=page_size, accept_language=accept_language)

Find all price ranges

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.price_ranges_entity import PriceRangesEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceRangesApi(api_client)
    label = 'label_example' # str | Find only the price ranges whose label contains this value. (optional)
    show_ignored = False # bool | If set to `false`, show only the price ranges which are not ignored. If set to `true`, show all price ranges. (optional) (default to False)
    sort = label # str | Sort the price ranges in the corresponding order. (optional) (default to label)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all price ranges
        api_response = api_instance.fetch_all_price_ranges(label=label, show_ignored=show_ignored, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of PriceRangesApi->fetch_all_price_ranges:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceRangesApi->fetch_all_price_ranges: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| Find only the price ranges whose label contains this value. | [optional] 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the price ranges which are not ignored. If set to &#x60;true&#x60;, show all price ranges. | [optional] [default to False]
 **sort** | **str**| Sort the price ranges in the corresponding order. | [optional] [default to label]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[PriceRangesEntity]**](PriceRangesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of price ranges |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_price_range**
> VenuesEntity fetch_one_price_range(price_range_id, accept_language=accept_language)

Get one price range by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.venues_entity import VenuesEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceRangesApi(api_client)
    price_range_id = 56 # int | ID of the targeted price range.
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Get one price range by ID
        api_response = api_instance.fetch_one_price_range(price_range_id, accept_language=accept_language)
        print("The response of PriceRangesApi->fetch_one_price_range:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceRangesApi->fetch_one_price_range: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_range_id** | **int**| ID of the targeted price range. | 
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**VenuesEntity**](VenuesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one price range |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


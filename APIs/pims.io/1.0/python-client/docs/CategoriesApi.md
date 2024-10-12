# openapi_client.CategoriesApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_categories**](CategoriesApi.md#fetch_all_categories) | **GET** /categories | Find all categories
[**fetch_all_events_categories**](CategoriesApi.md#fetch_all_events_categories) | **GET** /events/{event_id}/categories | Find all categories for one event
[**fetch_one_category**](CategoriesApi.md#fetch_one_category) | **GET** /categories/{category_id} | Get one category by ID
[**fetch_one_event_category**](CategoriesApi.md#fetch_one_event_category) | **GET** /events/{event_id}/categories/{category_id} | Get one event category by ID


# **fetch_all_categories**
> List[CategoriesEntity] fetch_all_categories(label=label, show_ignored=show_ignored, sort=sort, page_size=page_size, accept_language=accept_language)

Find all categories

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.categories_entity import CategoriesEntity
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
    api_instance = openapi_client.CategoriesApi(api_client)
    label = 'label_example' # str | Find only the categories whose label/short label contains this value. (optional)
    show_ignored = False # bool | If set to `false`, show only the categories which are not ignored. If set to `true`, show all categories. (optional) (default to False)
    sort = order # str | Sort the categories in the corresponding order. (optional) (default to order)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all categories
        api_response = api_instance.fetch_all_categories(label=label, show_ignored=show_ignored, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of CategoriesApi->fetch_all_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->fetch_all_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| Find only the categories whose label/short label contains this value. | [optional] 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the categories which are not ignored. If set to &#x60;true&#x60;, show all categories. | [optional] [default to False]
 **sort** | **str**| Sort the categories in the corresponding order. | [optional] [default to order]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[CategoriesEntity]**](CategoriesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of categories |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_all_events_categories**
> List[EventsCategoriesEntity] fetch_all_events_categories(event_id, show_ignored=show_ignored, page_size=page_size)

Find all categories for one event

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_categories_entity import EventsCategoriesEntity
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
    api_instance = openapi_client.CategoriesApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    show_ignored = False # bool | If set to `false`, show only the [event-]categories/[event-]price ranges which are not ignored. If set to `true`, show everything. (optional) (default to False)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)

    try:
        # Find all categories for one event
        api_response = api_instance.fetch_all_events_categories(event_id, show_ignored=show_ignored, page_size=page_size)
        print("The response of CategoriesApi->fetch_all_events_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->fetch_all_events_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]categories/[event-]price ranges which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]

### Return type

[**List[EventsCategoriesEntity]**](EventsCategoriesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of events categories |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_category**
> CategoriesEntity fetch_one_category(category_id, accept_language=accept_language)

Get one category by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.categories_entity import CategoriesEntity
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
    api_instance = openapi_client.CategoriesApi(api_client)
    category_id = 56 # int | ID of the targeted category.
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Get one category by ID
        api_response = api_instance.fetch_one_category(category_id, accept_language=accept_language)
        print("The response of CategoriesApi->fetch_one_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->fetch_one_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **int**| ID of the targeted category. | 
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**CategoriesEntity**](CategoriesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one category |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_event_category**
> EventsCategoriesEntity fetch_one_event_category(event_id, category_id, show_ignored=show_ignored)

Get one event category by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_categories_entity import EventsCategoriesEntity
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
    api_instance = openapi_client.CategoriesApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    category_id = 3.4 # float | ID of the targeted event category.
    show_ignored = False # bool | If set to `false`, show only the embedded [event-]price ranges which are not ignored. If set to `true`, show everything. (optional) (default to False)

    try:
        # Get one event category by ID
        api_response = api_instance.fetch_one_event_category(event_id, category_id, show_ignored=show_ignored)
        print("The response of CategoriesApi->fetch_one_event_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->fetch_one_event_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **category_id** | **float**| ID of the targeted event category. | 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the embedded [event-]price ranges which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]

### Return type

[**EventsCategoriesEntity**](EventsCategoriesEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one event category |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


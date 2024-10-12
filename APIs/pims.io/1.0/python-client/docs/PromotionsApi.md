# openapi_client.PromotionsApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_events_promotions**](PromotionsApi.md#fetch_all_events_promotions) | **GET** /events/{event_id}/promotions | Find all promotions for one event
[**fetch_all_promotions**](PromotionsApi.md#fetch_all_promotions) | **GET** /promotions | Find all promotions
[**fetch_all_series_promotions**](PromotionsApi.md#fetch_all_series_promotions) | **GET** /series/{series_id}/promotions | Find all promotions for one series
[**fetch_one_promotion**](PromotionsApi.md#fetch_one_promotion) | **GET** /promotions/{promotion_id} | Get one promotion by ID


# **fetch_all_events_promotions**
> List[PromotionsEntity] fetch_all_events_promotions(event_id, label=label, from_date=from_date, to_date=to_date, type=type, family=family, sort=sort, page_size=page_size, accept_language=accept_language)

Find all promotions for one event

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.promotions_entity import PromotionsEntity
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
    api_instance = openapi_client.PromotionsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    label = 'label_example' # str | Find only the promotions whose label contains this value. (optional)
    from_date = '2013-10-20' # date | Find only the promotions starting after this date. (optional)
    to_date = '2013-10-20' # date | Find only the promotions ending before this date. (optional)
    type = 'type_example' # str | Find only the promotions whose type is equal to this value. (optional)
    family = 'family_example' # str | Find only the promotions whose family is equal to this value. (optional)
    sort = date # str | Sort the promotions in the corresponding order. (optional) (default to date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all promotions for one event
        api_response = api_instance.fetch_all_events_promotions(event_id, label=label, from_date=from_date, to_date=to_date, type=type, family=family, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of PromotionsApi->fetch_all_events_promotions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->fetch_all_events_promotions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **label** | **str**| Find only the promotions whose label contains this value. | [optional] 
 **from_date** | **date**| Find only the promotions starting after this date. | [optional] 
 **to_date** | **date**| Find only the promotions ending before this date. | [optional] 
 **type** | **str**| Find only the promotions whose type is equal to this value. | [optional] 
 **family** | **str**| Find only the promotions whose family is equal to this value. | [optional] 
 **sort** | **str**| Sort the promotions in the corresponding order. | [optional] [default to date]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[PromotionsEntity]**](PromotionsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of promotions |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_all_promotions**
> List[PromotionsEntity] fetch_all_promotions(label=label, from_date=from_date, to_date=to_date, type=type, family=family, sort=sort, page_size=page_size, accept_language=accept_language)

Find all promotions

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.promotions_entity import PromotionsEntity
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
    api_instance = openapi_client.PromotionsApi(api_client)
    label = 'label_example' # str | Find only the promotions whose label contains this value. (optional)
    from_date = '2013-10-20' # date | Find only the promotions starting after this date. (optional)
    to_date = '2013-10-20' # date | Find only the promotions ending before this date. (optional)
    type = 'type_example' # str | Find only the promotions whose type is equal to this value. (optional)
    family = 'family_example' # str | Find only the promotions whose family is equal to this value. (optional)
    sort = date # str | Sort the promotions in the corresponding order. (optional) (default to date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all promotions
        api_response = api_instance.fetch_all_promotions(label=label, from_date=from_date, to_date=to_date, type=type, family=family, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of PromotionsApi->fetch_all_promotions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->fetch_all_promotions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| Find only the promotions whose label contains this value. | [optional] 
 **from_date** | **date**| Find only the promotions starting after this date. | [optional] 
 **to_date** | **date**| Find only the promotions ending before this date. | [optional] 
 **type** | **str**| Find only the promotions whose type is equal to this value. | [optional] 
 **family** | **str**| Find only the promotions whose family is equal to this value. | [optional] 
 **sort** | **str**| Sort the promotions in the corresponding order. | [optional] [default to date]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[PromotionsEntity]**](PromotionsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of promotions |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_all_series_promotions**
> List[PromotionsEntity] fetch_all_series_promotions(series_id, label=label, from_date=from_date, to_date=to_date, type=type, family=family, sort=sort, page_size=page_size, accept_language=accept_language)

Find all promotions for one series

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.promotions_entity import PromotionsEntity
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
    api_instance = openapi_client.PromotionsApi(api_client)
    series_id = 56 # int | ID of the targeted series.
    label = 'label_example' # str | Find only the promotions whose label contains this value. (optional)
    from_date = '2013-10-20' # date | Find only the promotions starting after this date. (optional)
    to_date = '2013-10-20' # date | Find only the promotions ending before this date. (optional)
    type = 'type_example' # str | Find only the promotions whose type is equal to this value. (optional)
    family = 'family_example' # str | Find only the promotions whose family is equal to this value. (optional)
    sort = date # str | Sort the promotions in the corresponding order. (optional) (default to date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all promotions for one series
        api_response = api_instance.fetch_all_series_promotions(series_id, label=label, from_date=from_date, to_date=to_date, type=type, family=family, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of PromotionsApi->fetch_all_series_promotions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->fetch_all_series_promotions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **series_id** | **int**| ID of the targeted series. | 
 **label** | **str**| Find only the promotions whose label contains this value. | [optional] 
 **from_date** | **date**| Find only the promotions starting after this date. | [optional] 
 **to_date** | **date**| Find only the promotions ending before this date. | [optional] 
 **type** | **str**| Find only the promotions whose type is equal to this value. | [optional] 
 **family** | **str**| Find only the promotions whose family is equal to this value. | [optional] 
 **sort** | **str**| Sort the promotions in the corresponding order. | [optional] [default to date]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[PromotionsEntity]**](PromotionsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of promotions |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_promotion**
> PromotionsEntity fetch_one_promotion(promotion_id, accept_language=accept_language)

Get one promotion by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.promotions_entity import PromotionsEntity
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
    api_instance = openapi_client.PromotionsApi(api_client)
    promotion_id = 56 # int | ID of the targeted promotion.
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Get one promotion by ID
        api_response = api_instance.fetch_one_promotion(promotion_id, accept_language=accept_language)
        print("The response of PromotionsApi->fetch_one_promotion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionsApi->fetch_one_promotion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotion_id** | **int**| ID of the targeted promotion. | 
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**PromotionsEntity**](PromotionsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one promotion |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


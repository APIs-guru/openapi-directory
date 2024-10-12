# openapi_client.PriceBookItemApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_price_book_item_entity**](PriceBookItemApi.md#create_price_book_item_entity) | **POST** /application/entity/priceBookItem | POST for priceBookItem
[**create_price_book_item_entity_bulk**](PriceBookItemApi.md#create_price_book_item_entity_bulk) | **POST** /application/entity/priceBookItem/bulk | POST bulk  for priceBookItem
[**delete_price_book_item_collection_bulk**](PriceBookItemApi.md#delete_price_book_item_collection_bulk) | **DELETE** /application/entity/priceBookItem/bulk | DELETE bulk  for priceBookItem
[**delete_price_book_item_entity**](PriceBookItemApi.md#delete_price_book_item_entity) | **DELETE** /application/entity/priceBookItem/{priceBookItem_id} | DELETE for priceBookItem
[**get_price_book_item_aggregate**](PriceBookItemApi.md#get_price_book_item_aggregate) | **GET** /application/entity/priceBookItem/aggregate | AGGREGATE for priceBookItem
[**get_price_book_item_collection**](PriceBookItemApi.md#get_price_book_item_collection) | **GET** /application/entity/priceBookItem/list | GET for priceBookItem
[**get_price_book_item_count_collection**](PriceBookItemApi.md#get_price_book_item_count_collection) | **GET** /application/entity/priceBookItem/count | COUNT for priceBookItem
[**get_price_book_item_describe**](PriceBookItemApi.md#get_price_book_item_describe) | **GET** /application/entity/priceBookItem/describe | DESCRIBE for priceBookItem
[**get_price_book_item_entity**](PriceBookItemApi.md#get_price_book_item_entity) | **GET** /application/entity/priceBookItem/{priceBookItem_id} | GET for priceBookItem
[**update_price_book_item_entity**](PriceBookItemApi.md#update_price_book_item_entity) | **PUT** /application/entity/priceBookItem/{priceBookItem_id} | PUT for priceBookItem
[**update_price_book_item_entity_bulk**](PriceBookItemApi.md#update_price_book_item_entity_bulk) | **PUT** /application/entity/priceBookItem/bulk | PUT bulk  for priceBookItem


# **create_price_book_item_entity**
> PriceBookItemEntityRelation create_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST for priceBookItem

Add priceBookItem into the system

### Example


```python
import openapi_client
from openapi_client.models.price_book_item_entity import PriceBookItemEntity
from openapi_client.models.price_book_item_entity_relation import PriceBookItemEntityRelation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.PriceBookItemEntity() # PriceBookItemEntity | Add priceBookItem into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST for priceBookItem
        api_response = api_instance.create_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of PriceBookItemApi->create_price_book_item_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->create_price_book_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**PriceBookItemEntity**](PriceBookItemEntity.md)| Add priceBookItem into the system | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**PriceBookItemEntityRelation**](PriceBookItemEntityRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Client Error |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_price_book_item_entity_bulk**
> BulkEntityRelation create_price_book_item_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST bulk  for priceBookItem

Add priceBookItem into the system

### Example


```python
import openapi_client
from openapi_client.models.bulk_entity import BulkEntity
from openapi_client.models.bulk_entity_relation import BulkEntityRelation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | Add priceBookItem into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST bulk  for priceBookItem
        api_response = api_instance.create_price_book_item_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of PriceBookItemApi->create_price_book_item_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->create_price_book_item_entity_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**BulkEntity**](BulkEntity.md)| Add priceBookItem into the system | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**BulkEntityRelation**](BulkEntityRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Client Error |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_price_book_item_collection_bulk**
> BulkEntity delete_price_book_item_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)

DELETE bulk  for priceBookItem

### Example


```python
import openapi_client
from openapi_client.models.bulk_entity import BulkEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 

    try:
        # DELETE bulk  for priceBookItem
        api_response = api_instance.delete_price_book_item_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)
        print("The response of PriceBookItemApi->delete_price_book_item_collection_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->delete_price_book_item_collection_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**BulkEntity**](BulkEntity.md)|  | 

### Return type

[**BulkEntity**](BulkEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_price_book_item_entity**
> delete_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, price_book_item_id)

DELETE for priceBookItem

Delete priceBookItem information

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    price_book_item_id = 'price_book_item_id_example' # str | PriceBookItem Identifier

    try:
        # DELETE for priceBookItem
        api_instance.delete_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, price_book_item_id)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->delete_price_book_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **price_book_item_id** | **str**| PriceBookItem Identifier | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_price_book_item_aggregate**
> Aggregate get_price_book_item_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)

AGGREGATE for priceBookItem

Returns aggregate for priceBookItems

### Example


```python
import openapi_client
from openapi_client.models.aggregate import Aggregate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_data_enable = 'x_api2_crm_data_enable_example' # str | Data Enable (optional)
    x_api2_crm_data_build = 'x_api2_crm_data_build_example' # str | Data Build (optional)
    x_api2_crm_data_is_final = 'x_api2_crm_data_is_final_example' # str | Data Is Final (optional)
    x_api2_crm_data_strategy = 'x_api2_crm_data_strategy_example' # str | Data Strategy (optional)
    x_api2_crm_data_coherent_entities = 'x_api2_crm_data_coherent_entities_example' # str | Coherent Entities (optional)
    x_api2_crm_data_always_actual = 'x_api2_crm_data_always_actual_example' # str | Data Is Actual (optional)
    x_api2_crm_data_actual_at = '2013-10-20T19:20:30+01:00' # datetime | Data Actual At (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)
    filter = 'filter_example' # str | Filter (optional)
    pipeline = 'pipeline_example' # str | Pipeline (optional)

    try:
        # AGGREGATE for priceBookItem
        api_response = api_instance.get_price_book_item_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)
        print("The response of PriceBookItemApi->get_price_book_item_aggregate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->get_price_book_item_aggregate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_data_enable** | **str**| Data Enable | [optional] 
 **x_api2_crm_data_build** | **str**| Data Build | [optional] 
 **x_api2_crm_data_is_final** | **str**| Data Is Final | [optional] 
 **x_api2_crm_data_strategy** | **str**| Data Strategy | [optional] 
 **x_api2_crm_data_coherent_entities** | **str**| Coherent Entities | [optional] 
 **x_api2_crm_data_always_actual** | **str**| Data Is Actual | [optional] 
 **x_api2_crm_data_actual_at** | **datetime**| Data Actual At | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 
 **filter** | **str**| Filter | [optional] 
 **pipeline** | **str**| Pipeline | [optional] 

### Return type

[**Aggregate**](Aggregate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_price_book_item_collection**
> List[PriceBookItemEntity] get_price_book_item_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)

GET for priceBookItem

Returns all priceBookItems from the system

### Example


```python
import openapi_client
from openapi_client.models.price_book_item_entity import PriceBookItemEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_data_enable = 'x_api2_crm_data_enable_example' # str | Data Enable (optional)
    x_api2_crm_data_build = 'x_api2_crm_data_build_example' # str | Data Build (optional)
    x_api2_crm_data_is_final = 'x_api2_crm_data_is_final_example' # str | Data Is Final (optional)
    x_api2_crm_data_strategy = 'x_api2_crm_data_strategy_example' # str | Data Strategy (optional)
    x_api2_crm_data_coherent_entities = 'x_api2_crm_data_coherent_entities_example' # str | Coherent Entities (optional)
    x_api2_crm_data_always_actual = 'x_api2_crm_data_always_actual_example' # str | Data Is Actual (optional)
    x_api2_crm_data_actual_at = '2013-10-20T19:20:30+01:00' # datetime | Data Actual At (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)
    page_size = 56 # int | Amount of results (default: 25) (optional)
    page = 56 # int | Page to show (default: 1) (optional)
    filter = 'filter_example' # str | Filter (optional)
    expand = 'expand_example' # str | Expand relations (optional)
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)
    sort = 'sort_example' # str | Specifies ascending or descending sort on existing fields (optional)
    unique = 'unique_example' # str | Find all unique values for selected field (optional)

    try:
        # GET for priceBookItem
        api_response = api_instance.get_price_book_item_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)
        print("The response of PriceBookItemApi->get_price_book_item_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->get_price_book_item_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_data_enable** | **str**| Data Enable | [optional] 
 **x_api2_crm_data_build** | **str**| Data Build | [optional] 
 **x_api2_crm_data_is_final** | **str**| Data Is Final | [optional] 
 **x_api2_crm_data_strategy** | **str**| Data Strategy | [optional] 
 **x_api2_crm_data_coherent_entities** | **str**| Coherent Entities | [optional] 
 **x_api2_crm_data_always_actual** | **str**| Data Is Actual | [optional] 
 **x_api2_crm_data_actual_at** | **datetime**| Data Actual At | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 
 **page_size** | **int**| Amount of results (default: 25) | [optional] 
 **page** | **int**| Page to show (default: 1) | [optional] 
 **filter** | **str**| Filter | [optional] 
 **expand** | **str**| Expand relations | [optional] 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 
 **sort** | **str**| Specifies ascending or descending sort on existing fields | [optional] 
 **unique** | **str**| Find all unique values for selected field | [optional] 

### Return type

[**List[PriceBookItemEntity]**](PriceBookItemEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_price_book_item_count_collection**
> Count get_price_book_item_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)

COUNT for priceBookItem

Count all priceBookItems from the system

### Example


```python
import openapi_client
from openapi_client.models.count import Count
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    x_api2_crm_data_enable = 'x_api2_crm_data_enable_example' # str | Data Enable (optional)
    x_api2_crm_data_build = 'x_api2_crm_data_build_example' # str | Data Build (optional)
    x_api2_crm_data_is_final = 'x_api2_crm_data_is_final_example' # str | Data Is Final (optional)
    x_api2_crm_data_strategy = 'x_api2_crm_data_strategy_example' # str | Data Strategy (optional)
    x_api2_crm_data_coherent_entities = 'x_api2_crm_data_coherent_entities_example' # str | Coherent Entities (optional)
    x_api2_crm_data_always_actual = 'x_api2_crm_data_always_actual_example' # str | Data Is Actual (optional)
    x_api2_crm_data_actual_at = '2013-10-20T19:20:30+01:00' # datetime | Data Actual At (optional)
    filter = 'filter_example' # str | Filter (optional)

    try:
        # COUNT for priceBookItem
        api_response = api_instance.get_price_book_item_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)
        print("The response of PriceBookItemApi->get_price_book_item_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->get_price_book_item_count_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **x_api2_crm_data_enable** | **str**| Data Enable | [optional] 
 **x_api2_crm_data_build** | **str**| Data Build | [optional] 
 **x_api2_crm_data_is_final** | **str**| Data Is Final | [optional] 
 **x_api2_crm_data_strategy** | **str**| Data Strategy | [optional] 
 **x_api2_crm_data_coherent_entities** | **str**| Coherent Entities | [optional] 
 **x_api2_crm_data_always_actual** | **str**| Data Is Actual | [optional] 
 **x_api2_crm_data_actual_at** | **datetime**| Data Actual At | [optional] 
 **filter** | **str**| Filter | [optional] 

### Return type

[**Count**](Count.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_price_book_item_describe**
> PriceBookItemDescribe get_price_book_item_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

DESCRIBE for priceBookItem

Returns describe for priceBookItems

### Example


```python
import openapi_client
from openapi_client.models.price_book_item_describe import PriceBookItemDescribe
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    x_api2_crm_data_enable = 'x_api2_crm_data_enable_example' # str | Data Enable (optional)
    x_api2_crm_data_build = 'x_api2_crm_data_build_example' # str | Data Build (optional)
    x_api2_crm_data_is_final = 'x_api2_crm_data_is_final_example' # str | Data Is Final (optional)
    x_api2_crm_data_strategy = 'x_api2_crm_data_strategy_example' # str | Data Strategy (optional)
    x_api2_crm_data_coherent_entities = 'x_api2_crm_data_coherent_entities_example' # str | Coherent Entities (optional)
    x_api2_crm_data_always_actual = 'x_api2_crm_data_always_actual_example' # str | Data Is Actual (optional)
    x_api2_crm_data_actual_at = '2013-10-20T19:20:30+01:00' # datetime | Data Actual At (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # DESCRIBE for priceBookItem
        api_response = api_instance.get_price_book_item_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of PriceBookItemApi->get_price_book_item_describe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->get_price_book_item_describe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **x_api2_crm_data_enable** | **str**| Data Enable | [optional] 
 **x_api2_crm_data_build** | **str**| Data Build | [optional] 
 **x_api2_crm_data_is_final** | **str**| Data Is Final | [optional] 
 **x_api2_crm_data_strategy** | **str**| Data Strategy | [optional] 
 **x_api2_crm_data_coherent_entities** | **str**| Coherent Entities | [optional] 
 **x_api2_crm_data_always_actual** | **str**| Data Is Actual | [optional] 
 **x_api2_crm_data_actual_at** | **datetime**| Data Actual At | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**PriceBookItemDescribe**](PriceBookItemDescribe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_price_book_item_entity**
> PriceBookItemEntity get_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, price_book_item_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)

GET for priceBookItem

Return priceBookItem information

### Example


```python
import openapi_client
from openapi_client.models.price_book_item_entity import PriceBookItemEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    price_book_item_id = 'price_book_item_id_example' # str | PriceBookItem Identifier
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_data_enable = 'x_api2_crm_data_enable_example' # str | Data Enable (optional)
    x_api2_crm_data_build = 'x_api2_crm_data_build_example' # str | Data Build (optional)
    x_api2_crm_data_is_final = 'x_api2_crm_data_is_final_example' # str | Data Is Final (optional)
    x_api2_crm_data_strategy = 'x_api2_crm_data_strategy_example' # str | Data Strategy (optional)
    x_api2_crm_data_coherent_entities = 'x_api2_crm_data_coherent_entities_example' # str | Coherent Entities (optional)
    x_api2_crm_data_always_actual = 'x_api2_crm_data_always_actual_example' # str | Data Is Actual (optional)
    x_api2_crm_data_actual_at = '2013-10-20T19:20:30+01:00' # datetime | Data Actual At (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)
    expand = 'expand_example' # str | Expand relations (optional)
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)

    try:
        # GET for priceBookItem
        api_response = api_instance.get_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, price_book_item_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)
        print("The response of PriceBookItemApi->get_price_book_item_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->get_price_book_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **price_book_item_id** | **str**| PriceBookItem Identifier | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_data_enable** | **str**| Data Enable | [optional] 
 **x_api2_crm_data_build** | **str**| Data Build | [optional] 
 **x_api2_crm_data_is_final** | **str**| Data Is Final | [optional] 
 **x_api2_crm_data_strategy** | **str**| Data Strategy | [optional] 
 **x_api2_crm_data_coherent_entities** | **str**| Coherent Entities | [optional] 
 **x_api2_crm_data_always_actual** | **str**| Data Is Actual | [optional] 
 **x_api2_crm_data_actual_at** | **datetime**| Data Actual At | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 
 **expand** | **str**| Expand relations | [optional] 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**PriceBookItemEntity**](PriceBookItemEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_price_book_item_entity**
> PriceBookItemEntityRelation update_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, price_book_item_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT for priceBookItem

Update priceBookItem information

### Example


```python
import openapi_client
from openapi_client.models.price_book_item_entity import PriceBookItemEntity
from openapi_client.models.price_book_item_entity_relation import PriceBookItemEntityRelation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    price_book_item_id = 'price_book_item_id_example' # str | PriceBookItem Identifier
    body = openapi_client.PriceBookItemEntity() # PriceBookItemEntity | Update priceBookItem information
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT for priceBookItem
        api_response = api_instance.update_price_book_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, price_book_item_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of PriceBookItemApi->update_price_book_item_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->update_price_book_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **price_book_item_id** | **str**| PriceBookItem Identifier | 
 **body** | [**PriceBookItemEntity**](PriceBookItemEntity.md)| Update priceBookItem information | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**PriceBookItemEntityRelation**](PriceBookItemEntityRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Client Error |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_price_book_item_entity_bulk**
> BulkEntityRelation update_price_book_item_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT bulk  for priceBookItem

### Example


```python
import openapi_client
from openapi_client.models.bulk_entity import BulkEntity
from openapi_client.models.bulk_entity_relation import BulkEntityRelation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PriceBookItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT bulk  for priceBookItem
        api_response = api_instance.update_price_book_item_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of PriceBookItemApi->update_price_book_item_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceBookItemApi->update_price_book_item_entity_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**BulkEntity**](BulkEntity.md)|  | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**BulkEntityRelation**](BulkEntityRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Client Error |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


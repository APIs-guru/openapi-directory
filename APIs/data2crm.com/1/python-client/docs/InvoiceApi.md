# openapi_client.InvoiceApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_invoice_entity**](InvoiceApi.md#create_invoice_entity) | **POST** /application/entity/invoice | POST for invoice
[**create_invoice_entity_bulk**](InvoiceApi.md#create_invoice_entity_bulk) | **POST** /application/entity/invoice/bulk | POST bulk  for invoice
[**delete_invoice_collection_bulk**](InvoiceApi.md#delete_invoice_collection_bulk) | **DELETE** /application/entity/invoice/bulk | DELETE bulk  for invoice
[**delete_invoice_entity**](InvoiceApi.md#delete_invoice_entity) | **DELETE** /application/entity/invoice/{invoice_id} | DELETE for invoice
[**get_invoice_aggregate**](InvoiceApi.md#get_invoice_aggregate) | **GET** /application/entity/invoice/aggregate | AGGREGATE for invoice
[**get_invoice_collection**](InvoiceApi.md#get_invoice_collection) | **GET** /application/entity/invoice/list | GET for invoice
[**get_invoice_count_collection**](InvoiceApi.md#get_invoice_count_collection) | **GET** /application/entity/invoice/count | COUNT for invoice
[**get_invoice_describe**](InvoiceApi.md#get_invoice_describe) | **GET** /application/entity/invoice/describe | DESCRIBE for invoice
[**get_invoice_entity**](InvoiceApi.md#get_invoice_entity) | **GET** /application/entity/invoice/{invoice_id} | GET for invoice
[**update_invoice_entity**](InvoiceApi.md#update_invoice_entity) | **PUT** /application/entity/invoice/{invoice_id} | PUT for invoice
[**update_invoice_entity_bulk**](InvoiceApi.md#update_invoice_entity_bulk) | **PUT** /application/entity/invoice/bulk | PUT bulk  for invoice


# **create_invoice_entity**
> InvoiceEntityRelation create_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST for invoice

Add invoice into the system

### Example


```python
import openapi_client
from openapi_client.models.invoice_entity import InvoiceEntity
from openapi_client.models.invoice_entity_relation import InvoiceEntityRelation
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
    api_instance = openapi_client.InvoiceApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.InvoiceEntity() # InvoiceEntity | Add invoice into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST for invoice
        api_response = api_instance.create_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of InvoiceApi->create_invoice_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->create_invoice_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**InvoiceEntity**](InvoiceEntity.md)| Add invoice into the system | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**InvoiceEntityRelation**](InvoiceEntityRelation.md)

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

# **create_invoice_entity_bulk**
> BulkEntityRelation create_invoice_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST bulk  for invoice

Add invoice into the system

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
    api_instance = openapi_client.InvoiceApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | Add invoice into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST bulk  for invoice
        api_response = api_instance.create_invoice_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of InvoiceApi->create_invoice_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->create_invoice_entity_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**BulkEntity**](BulkEntity.md)| Add invoice into the system | 
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

# **delete_invoice_collection_bulk**
> BulkEntity delete_invoice_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)

DELETE bulk  for invoice

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
    api_instance = openapi_client.InvoiceApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 

    try:
        # DELETE bulk  for invoice
        api_response = api_instance.delete_invoice_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)
        print("The response of InvoiceApi->delete_invoice_collection_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->delete_invoice_collection_bulk: %s\n" % e)
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

# **delete_invoice_entity**
> delete_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, invoice_id)

DELETE for invoice

Delete invoice information

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
    api_instance = openapi_client.InvoiceApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    invoice_id = 'invoice_id_example' # str | Invoice Identifier

    try:
        # DELETE for invoice
        api_instance.delete_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, invoice_id)
    except Exception as e:
        print("Exception when calling InvoiceApi->delete_invoice_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **invoice_id** | **str**| Invoice Identifier | 

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

# **get_invoice_aggregate**
> Aggregate get_invoice_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)

AGGREGATE for invoice

Returns aggregate for invoices

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
    api_instance = openapi_client.InvoiceApi(api_client)
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
        # AGGREGATE for invoice
        api_response = api_instance.get_invoice_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)
        print("The response of InvoiceApi->get_invoice_aggregate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->get_invoice_aggregate: %s\n" % e)
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

# **get_invoice_collection**
> List[InvoiceEntity] get_invoice_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)

GET for invoice

Returns all invoices from the system

### Example


```python
import openapi_client
from openapi_client.models.invoice_entity import InvoiceEntity
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
    api_instance = openapi_client.InvoiceApi(api_client)
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
        # GET for invoice
        api_response = api_instance.get_invoice_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)
        print("The response of InvoiceApi->get_invoice_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->get_invoice_collection: %s\n" % e)
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

[**List[InvoiceEntity]**](InvoiceEntity.md)

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

# **get_invoice_count_collection**
> Count get_invoice_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)

COUNT for invoice

Count all invoices from the system

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
    api_instance = openapi_client.InvoiceApi(api_client)
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
        # COUNT for invoice
        api_response = api_instance.get_invoice_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)
        print("The response of InvoiceApi->get_invoice_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->get_invoice_count_collection: %s\n" % e)
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

# **get_invoice_describe**
> InvoiceDescribe get_invoice_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

DESCRIBE for invoice

Returns describe for invoices

### Example


```python
import openapi_client
from openapi_client.models.invoice_describe import InvoiceDescribe
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
    api_instance = openapi_client.InvoiceApi(api_client)
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
        # DESCRIBE for invoice
        api_response = api_instance.get_invoice_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of InvoiceApi->get_invoice_describe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->get_invoice_describe: %s\n" % e)
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

[**InvoiceDescribe**](InvoiceDescribe.md)

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

# **get_invoice_entity**
> InvoiceEntity get_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, invoice_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)

GET for invoice

Return invoice information

### Example


```python
import openapi_client
from openapi_client.models.invoice_entity import InvoiceEntity
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
    api_instance = openapi_client.InvoiceApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    invoice_id = 'invoice_id_example' # str | Invoice Identifier
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
        # GET for invoice
        api_response = api_instance.get_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, invoice_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)
        print("The response of InvoiceApi->get_invoice_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->get_invoice_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **invoice_id** | **str**| Invoice Identifier | 
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

[**InvoiceEntity**](InvoiceEntity.md)

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

# **update_invoice_entity**
> InvoiceEntityRelation update_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, invoice_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT for invoice

Update invoice information

### Example


```python
import openapi_client
from openapi_client.models.invoice_entity import InvoiceEntity
from openapi_client.models.invoice_entity_relation import InvoiceEntityRelation
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
    api_instance = openapi_client.InvoiceApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    invoice_id = 'invoice_id_example' # str | Invoice Identifier
    body = openapi_client.InvoiceEntity() # InvoiceEntity | Update invoice information
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT for invoice
        api_response = api_instance.update_invoice_entity(x_api2_crm_user_key, x_api2_crm_application_key, invoice_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of InvoiceApi->update_invoice_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->update_invoice_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **invoice_id** | **str**| Invoice Identifier | 
 **body** | [**InvoiceEntity**](InvoiceEntity.md)| Update invoice information | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**InvoiceEntityRelation**](InvoiceEntityRelation.md)

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

# **update_invoice_entity_bulk**
> BulkEntityRelation update_invoice_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT bulk  for invoice

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
    api_instance = openapi_client.InvoiceApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT bulk  for invoice
        api_response = api_instance.update_invoice_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of InvoiceApi->update_invoice_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->update_invoice_entity_bulk: %s\n" % e)
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


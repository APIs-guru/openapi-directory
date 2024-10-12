# openapi_client.ContactApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_contact_entity**](ContactApi.md#create_contact_entity) | **POST** /application/entity/contact | POST for contact
[**create_contact_entity_bulk**](ContactApi.md#create_contact_entity_bulk) | **POST** /application/entity/contact/bulk | POST bulk  for contact
[**delete_contact_collection_bulk**](ContactApi.md#delete_contact_collection_bulk) | **DELETE** /application/entity/contact/bulk | DELETE bulk  for contact
[**delete_contact_entity**](ContactApi.md#delete_contact_entity) | **DELETE** /application/entity/contact/{contact_id} | DELETE for contact
[**get_contact_aggregate**](ContactApi.md#get_contact_aggregate) | **GET** /application/entity/contact/aggregate | AGGREGATE for contact
[**get_contact_collection**](ContactApi.md#get_contact_collection) | **GET** /application/entity/contact/list | GET for contact
[**get_contact_count_collection**](ContactApi.md#get_contact_count_collection) | **GET** /application/entity/contact/count | COUNT for contact
[**get_contact_describe**](ContactApi.md#get_contact_describe) | **GET** /application/entity/contact/describe | DESCRIBE for contact
[**get_contact_entity**](ContactApi.md#get_contact_entity) | **GET** /application/entity/contact/{contact_id} | GET for contact
[**update_contact_entity**](ContactApi.md#update_contact_entity) | **PUT** /application/entity/contact/{contact_id} | PUT for contact
[**update_contact_entity_bulk**](ContactApi.md#update_contact_entity_bulk) | **PUT** /application/entity/contact/bulk | PUT bulk  for contact


# **create_contact_entity**
> ContactEntityRelation create_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST for contact

Add contact into the system

### Example


```python
import openapi_client
from openapi_client.models.contact_entity import ContactEntity
from openapi_client.models.contact_entity_relation import ContactEntityRelation
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
    api_instance = openapi_client.ContactApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.ContactEntity() # ContactEntity | Add contact into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST for contact
        api_response = api_instance.create_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of ContactApi->create_contact_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->create_contact_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**ContactEntity**](ContactEntity.md)| Add contact into the system | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**ContactEntityRelation**](ContactEntityRelation.md)

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

# **create_contact_entity_bulk**
> BulkEntityRelation create_contact_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST bulk  for contact

Add contact into the system

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
    api_instance = openapi_client.ContactApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | Add contact into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST bulk  for contact
        api_response = api_instance.create_contact_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of ContactApi->create_contact_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->create_contact_entity_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**BulkEntity**](BulkEntity.md)| Add contact into the system | 
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

# **delete_contact_collection_bulk**
> BulkEntity delete_contact_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)

DELETE bulk  for contact

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
    api_instance = openapi_client.ContactApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 

    try:
        # DELETE bulk  for contact
        api_response = api_instance.delete_contact_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)
        print("The response of ContactApi->delete_contact_collection_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->delete_contact_collection_bulk: %s\n" % e)
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

# **delete_contact_entity**
> delete_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, contact_id)

DELETE for contact

Delete contact information

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
    api_instance = openapi_client.ContactApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    contact_id = 'contact_id_example' # str | Contact Identifier

    try:
        # DELETE for contact
        api_instance.delete_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, contact_id)
    except Exception as e:
        print("Exception when calling ContactApi->delete_contact_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **contact_id** | **str**| Contact Identifier | 

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

# **get_contact_aggregate**
> Aggregate get_contact_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)

AGGREGATE for contact

Returns aggregate for contacts

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
    api_instance = openapi_client.ContactApi(api_client)
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
        # AGGREGATE for contact
        api_response = api_instance.get_contact_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)
        print("The response of ContactApi->get_contact_aggregate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->get_contact_aggregate: %s\n" % e)
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

# **get_contact_collection**
> List[ContactEntity] get_contact_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)

GET for contact

Returns all contacts from the system

### Example


```python
import openapi_client
from openapi_client.models.contact_entity import ContactEntity
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
    api_instance = openapi_client.ContactApi(api_client)
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
        # GET for contact
        api_response = api_instance.get_contact_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)
        print("The response of ContactApi->get_contact_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->get_contact_collection: %s\n" % e)
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

[**List[ContactEntity]**](ContactEntity.md)

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

# **get_contact_count_collection**
> Count get_contact_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)

COUNT for contact

Count all contacts from the system

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
    api_instance = openapi_client.ContactApi(api_client)
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
        # COUNT for contact
        api_response = api_instance.get_contact_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)
        print("The response of ContactApi->get_contact_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->get_contact_count_collection: %s\n" % e)
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

# **get_contact_describe**
> ContactDescribe get_contact_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

DESCRIBE for contact

Returns describe for contacts

### Example


```python
import openapi_client
from openapi_client.models.contact_describe import ContactDescribe
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
    api_instance = openapi_client.ContactApi(api_client)
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
        # DESCRIBE for contact
        api_response = api_instance.get_contact_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of ContactApi->get_contact_describe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->get_contact_describe: %s\n" % e)
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

[**ContactDescribe**](ContactDescribe.md)

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

# **get_contact_entity**
> ContactEntity get_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, contact_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)

GET for contact

Return contact information

### Example


```python
import openapi_client
from openapi_client.models.contact_entity import ContactEntity
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
    api_instance = openapi_client.ContactApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    contact_id = 'contact_id_example' # str | Contact Identifier
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
        # GET for contact
        api_response = api_instance.get_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, contact_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)
        print("The response of ContactApi->get_contact_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->get_contact_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **contact_id** | **str**| Contact Identifier | 
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

[**ContactEntity**](ContactEntity.md)

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

# **update_contact_entity**
> ContactEntityRelation update_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, contact_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT for contact

Update contact information

### Example


```python
import openapi_client
from openapi_client.models.contact_entity import ContactEntity
from openapi_client.models.contact_entity_relation import ContactEntityRelation
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
    api_instance = openapi_client.ContactApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    contact_id = 'contact_id_example' # str | Contact Identifier
    body = openapi_client.ContactEntity() # ContactEntity | Update contact information
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT for contact
        api_response = api_instance.update_contact_entity(x_api2_crm_user_key, x_api2_crm_application_key, contact_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of ContactApi->update_contact_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->update_contact_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **contact_id** | **str**| Contact Identifier | 
 **body** | [**ContactEntity**](ContactEntity.md)| Update contact information | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**ContactEntityRelation**](ContactEntityRelation.md)

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

# **update_contact_entity_bulk**
> BulkEntityRelation update_contact_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT bulk  for contact

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
    api_instance = openapi_client.ContactApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT bulk  for contact
        api_response = api_instance.update_contact_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of ContactApi->update_contact_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->update_contact_entity_bulk: %s\n" % e)
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


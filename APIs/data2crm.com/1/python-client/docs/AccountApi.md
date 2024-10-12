# openapi_client.AccountApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_account_entity**](AccountApi.md#create_account_entity) | **POST** /application/entity/account | POST for account
[**create_account_entity_bulk**](AccountApi.md#create_account_entity_bulk) | **POST** /application/entity/account/bulk | POST bulk  for account
[**delete_account_collection_bulk**](AccountApi.md#delete_account_collection_bulk) | **DELETE** /application/entity/account/bulk | DELETE bulk  for account
[**delete_account_entity**](AccountApi.md#delete_account_entity) | **DELETE** /application/entity/account/{account_id} | DELETE for account
[**get_account_aggregate**](AccountApi.md#get_account_aggregate) | **GET** /application/entity/account/aggregate | AGGREGATE for account
[**get_account_collection**](AccountApi.md#get_account_collection) | **GET** /application/entity/account/list | GET for account
[**get_account_count_collection**](AccountApi.md#get_account_count_collection) | **GET** /application/entity/account/count | COUNT for account
[**get_account_describe**](AccountApi.md#get_account_describe) | **GET** /application/entity/account/describe | DESCRIBE for account
[**get_account_entity**](AccountApi.md#get_account_entity) | **GET** /application/entity/account/{account_id} | GET for account
[**update_account_entity**](AccountApi.md#update_account_entity) | **PUT** /application/entity/account/{account_id} | PUT for account
[**update_account_entity_bulk**](AccountApi.md#update_account_entity_bulk) | **PUT** /application/entity/account/bulk | PUT bulk  for account


# **create_account_entity**
> AccountEntityRelation create_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST for account

Add account into the system

### Example


```python
import openapi_client
from openapi_client.models.account_entity import AccountEntity
from openapi_client.models.account_entity_relation import AccountEntityRelation
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
    api_instance = openapi_client.AccountApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.AccountEntity() # AccountEntity | Add account into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST for account
        api_response = api_instance.create_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of AccountApi->create_account_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->create_account_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**AccountEntity**](AccountEntity.md)| Add account into the system | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**AccountEntityRelation**](AccountEntityRelation.md)

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

# **create_account_entity_bulk**
> BulkEntityRelation create_account_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST bulk  for account

Add account into the system

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
    api_instance = openapi_client.AccountApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | Add account into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST bulk  for account
        api_response = api_instance.create_account_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of AccountApi->create_account_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->create_account_entity_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**BulkEntity**](BulkEntity.md)| Add account into the system | 
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

# **delete_account_collection_bulk**
> BulkEntity delete_account_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)

DELETE bulk  for account

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
    api_instance = openapi_client.AccountApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 

    try:
        # DELETE bulk  for account
        api_response = api_instance.delete_account_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)
        print("The response of AccountApi->delete_account_collection_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->delete_account_collection_bulk: %s\n" % e)
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

# **delete_account_entity**
> delete_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, account_id)

DELETE for account

Delete account information

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
    api_instance = openapi_client.AccountApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    account_id = 'account_id_example' # str | Account Identifier

    try:
        # DELETE for account
        api_instance.delete_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, account_id)
    except Exception as e:
        print("Exception when calling AccountApi->delete_account_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **account_id** | **str**| Account Identifier | 

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

# **get_account_aggregate**
> Aggregate get_account_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)

AGGREGATE for account

Returns aggregate for accounts

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
    api_instance = openapi_client.AccountApi(api_client)
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
        # AGGREGATE for account
        api_response = api_instance.get_account_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)
        print("The response of AccountApi->get_account_aggregate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account_aggregate: %s\n" % e)
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

# **get_account_collection**
> List[AccountEntity] get_account_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)

GET for account

Returns all accounts from the system

### Example


```python
import openapi_client
from openapi_client.models.account_entity import AccountEntity
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
    api_instance = openapi_client.AccountApi(api_client)
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
        # GET for account
        api_response = api_instance.get_account_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)
        print("The response of AccountApi->get_account_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account_collection: %s\n" % e)
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

[**List[AccountEntity]**](AccountEntity.md)

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

# **get_account_count_collection**
> Count get_account_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)

COUNT for account

Count all accounts from the system

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
    api_instance = openapi_client.AccountApi(api_client)
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
        # COUNT for account
        api_response = api_instance.get_account_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)
        print("The response of AccountApi->get_account_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account_count_collection: %s\n" % e)
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

# **get_account_describe**
> AccountDescribe get_account_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

DESCRIBE for account

Returns describe for accounts

### Example


```python
import openapi_client
from openapi_client.models.account_describe import AccountDescribe
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
    api_instance = openapi_client.AccountApi(api_client)
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
        # DESCRIBE for account
        api_response = api_instance.get_account_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of AccountApi->get_account_describe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account_describe: %s\n" % e)
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

[**AccountDescribe**](AccountDescribe.md)

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

# **get_account_entity**
> AccountEntity get_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, account_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)

GET for account

Return account information

### Example


```python
import openapi_client
from openapi_client.models.account_entity import AccountEntity
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
    api_instance = openapi_client.AccountApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    account_id = 'account_id_example' # str | Account Identifier
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
        # GET for account
        api_response = api_instance.get_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, account_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)
        print("The response of AccountApi->get_account_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **account_id** | **str**| Account Identifier | 
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

[**AccountEntity**](AccountEntity.md)

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

# **update_account_entity**
> AccountEntityRelation update_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, account_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT for account

Update account information

### Example


```python
import openapi_client
from openapi_client.models.account_entity import AccountEntity
from openapi_client.models.account_entity_relation import AccountEntityRelation
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
    api_instance = openapi_client.AccountApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    account_id = 'account_id_example' # str | Account Identifier
    body = openapi_client.AccountEntity() # AccountEntity | Update account information
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT for account
        api_response = api_instance.update_account_entity(x_api2_crm_user_key, x_api2_crm_application_key, account_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of AccountApi->update_account_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->update_account_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **account_id** | **str**| Account Identifier | 
 **body** | [**AccountEntity**](AccountEntity.md)| Update account information | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**AccountEntityRelation**](AccountEntityRelation.md)

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

# **update_account_entity_bulk**
> BulkEntityRelation update_account_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT bulk  for account

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
    api_instance = openapi_client.AccountApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT bulk  for account
        api_response = api_instance.update_account_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of AccountApi->update_account_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->update_account_entity_bulk: %s\n" % e)
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


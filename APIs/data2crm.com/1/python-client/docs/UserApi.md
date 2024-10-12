# openapi_client.UserApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_entity**](UserApi.md#create_user_entity) | **POST** /application/entity/user | POST for user
[**create_user_entity_bulk**](UserApi.md#create_user_entity_bulk) | **POST** /application/entity/user/bulk | POST bulk  for user
[**delete_user_collection_bulk**](UserApi.md#delete_user_collection_bulk) | **DELETE** /application/entity/user/bulk | DELETE bulk  for user
[**delete_user_entity**](UserApi.md#delete_user_entity) | **DELETE** /application/entity/user/{user_id} | DELETE for user
[**get_user_aggregate**](UserApi.md#get_user_aggregate) | **GET** /application/entity/user/aggregate | AGGREGATE for user
[**get_user_collection**](UserApi.md#get_user_collection) | **GET** /application/entity/user/list | GET for user
[**get_user_count_collection**](UserApi.md#get_user_count_collection) | **GET** /application/entity/user/count | COUNT for user
[**get_user_describe**](UserApi.md#get_user_describe) | **GET** /application/entity/user/describe | DESCRIBE for user
[**get_user_entity**](UserApi.md#get_user_entity) | **GET** /application/entity/user/{user_id} | GET for user
[**update_user_entity**](UserApi.md#update_user_entity) | **PUT** /application/entity/user/{user_id} | PUT for user
[**update_user_entity_bulk**](UserApi.md#update_user_entity_bulk) | **PUT** /application/entity/user/bulk | PUT bulk  for user


# **create_user_entity**
> UserEntityRelation create_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST for user

Add user into the system

### Example


```python
import openapi_client
from openapi_client.models.user_entity import UserEntity
from openapi_client.models.user_entity_relation import UserEntityRelation
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
    api_instance = openapi_client.UserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.UserEntity() # UserEntity | Add user into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST for user
        api_response = api_instance.create_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of UserApi->create_user_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->create_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**UserEntity**](UserEntity.md)| Add user into the system | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**UserEntityRelation**](UserEntityRelation.md)

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

# **create_user_entity_bulk**
> BulkEntityRelation create_user_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST bulk  for user

Add user into the system

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
    api_instance = openapi_client.UserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | Add user into the system
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST bulk  for user
        api_response = api_instance.create_user_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of UserApi->create_user_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->create_user_entity_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**BulkEntity**](BulkEntity.md)| Add user into the system | 
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

# **delete_user_collection_bulk**
> BulkEntity delete_user_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)

DELETE bulk  for user

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
    api_instance = openapi_client.UserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 

    try:
        # DELETE bulk  for user
        api_response = api_instance.delete_user_collection_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body)
        print("The response of UserApi->delete_user_collection_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->delete_user_collection_bulk: %s\n" % e)
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

# **delete_user_entity**
> delete_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, user_id)

DELETE for user

Delete user information

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
    api_instance = openapi_client.UserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    user_id = 'user_id_example' # str | User Identifier

    try:
        # DELETE for user
        api_instance.delete_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, user_id)
    except Exception as e:
        print("Exception when calling UserApi->delete_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **user_id** | **str**| User Identifier | 

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

# **get_user_aggregate**
> Aggregate get_user_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)

AGGREGATE for user

Returns aggregate for users

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
    api_instance = openapi_client.UserApi(api_client)
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
        # AGGREGATE for user
        api_response = api_instance.get_user_aggregate(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, filter=filter, pipeline=pipeline)
        print("The response of UserApi->get_user_aggregate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_aggregate: %s\n" % e)
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

# **get_user_collection**
> List[UserEntity] get_user_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)

GET for user

Returns all users from the system

### Example


```python
import openapi_client
from openapi_client.models.user_entity import UserEntity
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
    api_instance = openapi_client.UserApi(api_client)
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
        # GET for user
        api_response = api_instance.get_user_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, filter=filter, expand=expand, fields=fields, sort=sort, unique=unique)
        print("The response of UserApi->get_user_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_collection: %s\n" % e)
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

[**List[UserEntity]**](UserEntity.md)

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

# **get_user_count_collection**
> Count get_user_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)

COUNT for user

Count all users from the system

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
    api_instance = openapi_client.UserApi(api_client)
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
        # COUNT for user
        api_response = api_instance.get_user_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, filter=filter)
        print("The response of UserApi->get_user_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_count_collection: %s\n" % e)
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

# **get_user_describe**
> UserDescribe get_user_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

DESCRIBE for user

Returns describe for users

### Example


```python
import openapi_client
from openapi_client.models.user_describe import UserDescribe
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
    api_instance = openapi_client.UserApi(api_client)
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
        # DESCRIBE for user
        api_response = api_instance.get_user_describe(x_api2_crm_user_key, x_api2_crm_application_key, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of UserApi->get_user_describe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_describe: %s\n" % e)
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

[**UserDescribe**](UserDescribe.md)

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

# **get_user_entity**
> UserEntity get_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, user_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)

GET for user

Return user information

### Example


```python
import openapi_client
from openapi_client.models.user_entity import UserEntity
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
    api_instance = openapi_client.UserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    user_id = 'user_id_example' # str | User Identifier
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
        # GET for user
        api_response = api_instance.get_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, user_id, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_data_enable=x_api2_crm_data_enable, x_api2_crm_data_build=x_api2_crm_data_build, x_api2_crm_data_is_final=x_api2_crm_data_is_final, x_api2_crm_data_strategy=x_api2_crm_data_strategy, x_api2_crm_data_coherent_entities=x_api2_crm_data_coherent_entities, x_api2_crm_data_always_actual=x_api2_crm_data_always_actual, x_api2_crm_data_actual_at=x_api2_crm_data_actual_at, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, expand=expand, fields=fields)
        print("The response of UserApi->get_user_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **user_id** | **str**| User Identifier | 
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

[**UserEntity**](UserEntity.md)

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

# **update_user_entity**
> UserEntityRelation update_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, user_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT for user

Update user information

### Example


```python
import openapi_client
from openapi_client.models.user_entity import UserEntity
from openapi_client.models.user_entity_relation import UserEntityRelation
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
    api_instance = openapi_client.UserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    user_id = 'user_id_example' # str | User Identifier
    body = openapi_client.UserEntity() # UserEntity | Update user information
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT for user
        api_response = api_instance.update_user_entity(x_api2_crm_user_key, x_api2_crm_application_key, user_id, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of UserApi->update_user_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->update_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **user_id** | **str**| User Identifier | 
 **body** | [**UserEntity**](UserEntity.md)| Update user information | 
 **x_api2_crm_native_enable** | **str**| Return native response | [optional] 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**UserEntityRelation**](UserEntityRelation.md)

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

# **update_user_entity_bulk**
> BulkEntityRelation update_user_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT bulk  for user

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
    api_instance = openapi_client.UserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.BulkEntity() # BulkEntity | 
    x_api2_crm_native_enable = 'x_api2_crm_native_enable_example' # str | Return native response (optional)
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT bulk  for user
        api_response = api_instance.update_user_entity_bulk(x_api2_crm_user_key, x_api2_crm_application_key, body, x_api2_crm_native_enable=x_api2_crm_native_enable, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of UserApi->update_user_entity_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->update_user_entity_bulk: %s\n" % e)
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


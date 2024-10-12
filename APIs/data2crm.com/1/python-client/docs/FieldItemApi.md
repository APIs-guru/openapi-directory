# openapi_client.FieldItemApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_field_item_entity**](FieldItemApi.md#create_field_item_entity) | **POST** /application/field/{field_id} | POST for fieldItem
[**delete_field_item_entity**](FieldItemApi.md#delete_field_item_entity) | **DELETE** /application/field/{field_id}/{field_item_id} | DELETE for fieldItem
[**get_field_item_collection**](FieldItemApi.md#get_field_item_collection) | **GET** /application/field/{field_id}/list | GET for fieldItem
[**get_field_item_count_collection**](FieldItemApi.md#get_field_item_count_collection) | **GET** /application/field/{field_id}/count | COUNT for fieldItem
[**get_field_item_describe**](FieldItemApi.md#get_field_item_describe) | **GET** /application/field/{field_id}/describe | DESCRIBE for fieldItem
[**get_field_item_entity**](FieldItemApi.md#get_field_item_entity) | **GET** /application/field/{field_id}/{field_item_id} | GET for fieldItem
[**update_field_item_entity**](FieldItemApi.md#update_field_item_entity) | **PUT** /application/field/{field_id}/{field_item_id} | PUT for fieldItem


# **create_field_item_entity**
> FieldItemEntityRelation create_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, body, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

POST for fieldItem

Add field item into the system

### Example


```python
import openapi_client
from openapi_client.models.field_item_entity import FieldItemEntity
from openapi_client.models.field_item_entity_relation import FieldItemEntityRelation
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
    api_instance = openapi_client.FieldItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    field_id = 'field_id_example' # str | Field Identifier
    body = openapi_client.FieldItemEntity() # FieldItemEntity | Add field item into the system
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # POST for fieldItem
        api_response = api_instance.create_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, body, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of FieldItemApi->create_field_item_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FieldItemApi->create_field_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **field_id** | **str**| Field Identifier | 
 **body** | [**FieldItemEntity**](FieldItemEntity.md)| Add field item into the system | 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**FieldItemEntityRelation**](FieldItemEntityRelation.md)

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

# **delete_field_item_entity**
> delete_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, field_item_id)

DELETE for fieldItem

Delete field item information

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
    api_instance = openapi_client.FieldItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    field_id = 'field_id_example' # str | Field Identifier
    field_item_id = 'field_item_id_example' # str | Field Item Identifier

    try:
        # DELETE for fieldItem
        api_instance.delete_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, field_item_id)
    except Exception as e:
        print("Exception when calling FieldItemApi->delete_field_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **field_id** | **str**| Field Identifier | 
 **field_item_id** | **str**| Field Item Identifier | 

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

# **get_field_item_collection**
> List[FieldItemEntity] get_field_item_collection(x_api2_crm_user_key, x_api2_crm_application_key, field_id, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, fields=fields)

GET for fieldItem

Returns all fields from the system items

### Example


```python
import openapi_client
from openapi_client.models.field_item_entity import FieldItemEntity
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
    api_instance = openapi_client.FieldItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    field_id = 'field_id_example' # str | Field Identifier
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)
    page_size = 56 # int | Amount of results (default: 25) (optional)
    page = 56 # int | Page to show (default: 1) (optional)
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)

    try:
        # GET for fieldItem
        api_response = api_instance.get_field_item_collection(x_api2_crm_user_key, x_api2_crm_application_key, field_id, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, page_size=page_size, page=page, fields=fields)
        print("The response of FieldItemApi->get_field_item_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FieldItemApi->get_field_item_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **field_id** | **str**| Field Identifier | 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 
 **page_size** | **int**| Amount of results (default: 25) | [optional] 
 **page** | **int**| Page to show (default: 1) | [optional] 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**List[FieldItemEntity]**](FieldItemEntity.md)

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

# **get_field_item_count_collection**
> Count get_field_item_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, field_id)

COUNT for fieldItem

Count all field items from the system

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
    api_instance = openapi_client.FieldItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    field_id = 'field_id_example' # str | Field Identifier

    try:
        # COUNT for fieldItem
        api_response = api_instance.get_field_item_count_collection(x_api2_crm_user_key, x_api2_crm_application_key, field_id)
        print("The response of FieldItemApi->get_field_item_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FieldItemApi->get_field_item_count_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **field_id** | **str**| Field Identifier | 

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

# **get_field_item_describe**
> FieldItemDescribe get_field_item_describe(x_api2_crm_user_key, x_api2_crm_application_key, field_id, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

DESCRIBE for fieldItem

Returns describe for field items

### Example


```python
import openapi_client
from openapi_client.models.field_item_describe import FieldItemDescribe
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
    api_instance = openapi_client.FieldItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    field_id = 'field_id_example' # str | Field Identifier
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # DESCRIBE for fieldItem
        api_response = api_instance.get_field_item_describe(x_api2_crm_user_key, x_api2_crm_application_key, field_id, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of FieldItemApi->get_field_item_describe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FieldItemApi->get_field_item_describe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **field_id** | **str**| Field Identifier | 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**FieldItemDescribe**](FieldItemDescribe.md)

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

# **get_field_item_entity**
> FieldItemEntity get_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, field_item_id, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, fields=fields)

GET for fieldItem

Return field item information

### Example


```python
import openapi_client
from openapi_client.models.field_item_entity import FieldItemEntity
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
    api_instance = openapi_client.FieldItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    field_id = 'field_id_example' # str | Field Identifier
    field_item_id = 'field_item_id_example' # str | Field Item Identifier
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)

    try:
        # GET for fieldItem
        api_response = api_instance.get_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, field_item_id, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime, fields=fields)
        print("The response of FieldItemApi->get_field_item_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FieldItemApi->get_field_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **field_id** | **str**| Field Identifier | 
 **field_item_id** | **str**| Field Item Identifier | 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**FieldItemEntity**](FieldItemEntity.md)

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

# **update_field_item_entity**
> FieldItemEntityRelation update_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, field_item_id, body, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)

PUT for fieldItem

Update field item information

### Example


```python
import openapi_client
from openapi_client.models.field_item_entity import FieldItemEntity
from openapi_client.models.field_item_entity_relation import FieldItemEntityRelation
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
    api_instance = openapi_client.FieldItemApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    field_id = 'field_id_example' # str | Field Identifier
    field_item_id = 'field_item_id_example' # str | Field Item Identifier
    body = openapi_client.FieldItemEntity() # FieldItemEntity | Update field item information
    x_api2_crm_describe_lifetime = 'x_api2_crm_describe_lifetime_example' # str | Describe lifetime (optional)

    try:
        # PUT for fieldItem
        api_response = api_instance.update_field_item_entity(x_api2_crm_user_key, x_api2_crm_application_key, field_id, field_item_id, body, x_api2_crm_describe_lifetime=x_api2_crm_describe_lifetime)
        print("The response of FieldItemApi->update_field_item_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FieldItemApi->update_field_item_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **field_id** | **str**| Field Identifier | 
 **field_item_id** | **str**| Field Item Identifier | 
 **body** | [**FieldItemEntity**](FieldItemEntity.md)| Update field item information | 
 **x_api2_crm_describe_lifetime** | **str**| Describe lifetime | [optional] 

### Return type

[**FieldItemEntityRelation**](FieldItemEntityRelation.md)

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


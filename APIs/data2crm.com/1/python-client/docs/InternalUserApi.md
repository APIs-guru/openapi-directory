# openapi_client.InternalUserApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_internal_user_entity**](InternalUserApi.md#create_internal_user_entity) | **POST** /user | POST for internalUser
[**delete_internal_user_entity**](InternalUserApi.md#delete_internal_user_entity) | **DELETE** /user/{internal_user_id} | DELETE for internalUser
[**get_internal_user_collection**](InternalUserApi.md#get_internal_user_collection) | **GET** /user/list | GET for internalUser
[**get_internal_user_count_collection**](InternalUserApi.md#get_internal_user_count_collection) | **GET** /user/count | COUNT for internalUser
[**get_internal_user_entity**](InternalUserApi.md#get_internal_user_entity) | **GET** /user/{internal_user_id} | GET for internalUser
[**update_internal_user_entity**](InternalUserApi.md#update_internal_user_entity) | **PUT** /user/{internal_user_id} | PUT for internalUser


# **create_internal_user_entity**
> InternalUserEntityRelation create_internal_user_entity(x_api2_crm_user_key, body)

POST for internalUser

### Example


```python
import openapi_client
from openapi_client.models.internal_user_entity import InternalUserEntity
from openapi_client.models.internal_user_entity_relation import InternalUserEntityRelation
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
    api_instance = openapi_client.InternalUserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    body = openapi_client.InternalUserEntity() # InternalUserEntity | 

    try:
        # POST for internalUser
        api_response = api_instance.create_internal_user_entity(x_api2_crm_user_key, body)
        print("The response of InternalUserApi->create_internal_user_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalUserApi->create_internal_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **body** | [**InternalUserEntity**](InternalUserEntity.md)|  | 

### Return type

[**InternalUserEntityRelation**](InternalUserEntityRelation.md)

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

# **delete_internal_user_entity**
> delete_internal_user_entity(x_api2_crm_user_key, internal_user_id)

DELETE for internalUser

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
    api_instance = openapi_client.InternalUserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    internal_user_id = 'internal_user_id_example' # str | Internal User Key

    try:
        # DELETE for internalUser
        api_instance.delete_internal_user_entity(x_api2_crm_user_key, internal_user_id)
    except Exception as e:
        print("Exception when calling InternalUserApi->delete_internal_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **internal_user_id** | **str**| Internal User Key | 

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

# **get_internal_user_collection**
> List[InternalUserEntity] get_internal_user_collection(x_api2_crm_user_key, page_size=page_size, page=page, filter=filter, fields=fields, sort=sort, application_request_start=application_request_start, application_request_end=application_request_end)

GET for internalUser

Returns all internal users from the system

### Example


```python
import openapi_client
from openapi_client.models.internal_user_entity import InternalUserEntity
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
    api_instance = openapi_client.InternalUserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    page_size = 56 # int | Amount of results (default: 25) (optional)
    page = 56 # int | Page to show (default: 1) (optional)
    filter = 'filter_example' # str | Filter (optional)
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)
    sort = 'sort_example' # str | Specifies ascending or descending sort on existing fields (optional)
    application_request_start = '2013-10-20' # date | All Application Requests from this date (optional)
    application_request_end = '2013-10-20' # date | All Application Requests until this date (optional)

    try:
        # GET for internalUser
        api_response = api_instance.get_internal_user_collection(x_api2_crm_user_key, page_size=page_size, page=page, filter=filter, fields=fields, sort=sort, application_request_start=application_request_start, application_request_end=application_request_end)
        print("The response of InternalUserApi->get_internal_user_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalUserApi->get_internal_user_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **page_size** | **int**| Amount of results (default: 25) | [optional] 
 **page** | **int**| Page to show (default: 1) | [optional] 
 **filter** | **str**| Filter | [optional] 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 
 **sort** | **str**| Specifies ascending or descending sort on existing fields | [optional] 
 **application_request_start** | **date**| All Application Requests from this date | [optional] 
 **application_request_end** | **date**| All Application Requests until this date | [optional] 

### Return type

[**List[InternalUserEntity]**](InternalUserEntity.md)

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

# **get_internal_user_count_collection**
> Count get_internal_user_count_collection(x_api2_crm_user_key, filter=filter)

COUNT for internalUser

Count all internal users from the system

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
    api_instance = openapi_client.InternalUserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    filter = 'filter_example' # str | Filter (optional)

    try:
        # COUNT for internalUser
        api_response = api_instance.get_internal_user_count_collection(x_api2_crm_user_key, filter=filter)
        print("The response of InternalUserApi->get_internal_user_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalUserApi->get_internal_user_count_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
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

# **get_internal_user_entity**
> InternalUserEntity get_internal_user_entity(x_api2_crm_user_key, internal_user_id, fields=fields, application_request_start=application_request_start, application_request_end=application_request_end)

GET for internalUser

Return internal user information

### Example


```python
import openapi_client
from openapi_client.models.internal_user_entity import InternalUserEntity
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
    api_instance = openapi_client.InternalUserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    internal_user_id = 'internal_user_id_example' # str | Internal User Key
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)
    application_request_start = '2013-10-20' # date | All Application Requests from this date (optional)
    application_request_end = '2013-10-20' # date | All Application Requests until this date (optional)

    try:
        # GET for internalUser
        api_response = api_instance.get_internal_user_entity(x_api2_crm_user_key, internal_user_id, fields=fields, application_request_start=application_request_start, application_request_end=application_request_end)
        print("The response of InternalUserApi->get_internal_user_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalUserApi->get_internal_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **internal_user_id** | **str**| Internal User Key | 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 
 **application_request_start** | **date**| All Application Requests from this date | [optional] 
 **application_request_end** | **date**| All Application Requests until this date | [optional] 

### Return type

[**InternalUserEntity**](InternalUserEntity.md)

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

# **update_internal_user_entity**
> InternalUserEntityRelation update_internal_user_entity(x_api2_crm_user_key, internal_user_id, body)

PUT for internalUser

### Example


```python
import openapi_client
from openapi_client.models.internal_user_entity import InternalUserEntity
from openapi_client.models.internal_user_entity_relation import InternalUserEntityRelation
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
    api_instance = openapi_client.InternalUserApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    internal_user_id = 'internal_user_id_example' # str | Internal User Key
    body = openapi_client.InternalUserEntity() # InternalUserEntity | 

    try:
        # PUT for internalUser
        api_response = api_instance.update_internal_user_entity(x_api2_crm_user_key, internal_user_id, body)
        print("The response of InternalUserApi->update_internal_user_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalUserApi->update_internal_user_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **internal_user_id** | **str**| Internal User Key | 
 **body** | [**InternalUserEntity**](InternalUserEntity.md)|  | 

### Return type

[**InternalUserEntityRelation**](InternalUserEntityRelation.md)

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


# openapi_client.ApplicationApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_application_entity**](ApplicationApi.md#create_application_entity) | **POST** /application | POST for application
[**delete_application_entity**](ApplicationApi.md#delete_application_entity) | **DELETE** /application/{key} | DELETE for application
[**get_application_collection**](ApplicationApi.md#get_application_collection) | **GET** /application/list | GET for application
[**get_application_count_collection**](ApplicationApi.md#get_application_count_collection) | **GET** /application/count | COUNT for application
[**get_application_entity**](ApplicationApi.md#get_application_entity) | **GET** /application/{key} | GET for application
[**update_application_entity**](ApplicationApi.md#update_application_entity) | **PUT** /application/{key} | PUT for application


# **create_application_entity**
> ApplicationEntityRelation create_application_entity(x_api2_crm_user_key, body)

POST for application

Add application into the system

### Example


```python
import openapi_client
from openapi_client.models.application_entity_relation import ApplicationEntityRelation
from openapi_client.models.application_entity_write import ApplicationEntityWrite
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
    api_instance = openapi_client.ApplicationApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    body = openapi_client.ApplicationEntityWrite() # ApplicationEntityWrite | Add application into the system

    try:
        # POST for application
        api_response = api_instance.create_application_entity(x_api2_crm_user_key, body)
        print("The response of ApplicationApi->create_application_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->create_application_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **body** | [**ApplicationEntityWrite**](ApplicationEntityWrite.md)| Add application into the system | 

### Return type

[**ApplicationEntityRelation**](ApplicationEntityRelation.md)

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

# **delete_application_entity**
> delete_application_entity(x_api2_crm_user_key, key)

DELETE for application

Delete application information

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
    api_instance = openapi_client.ApplicationApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    key = 'key_example' # str | Application key

    try:
        # DELETE for application
        api_instance.delete_application_entity(x_api2_crm_user_key, key)
    except Exception as e:
        print("Exception when calling ApplicationApi->delete_application_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **key** | **str**| Application key | 

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

# **get_application_collection**
> List[ApplicationEntityList] get_application_collection(x_api2_crm_user_key, page_size=page_size, page=page, filter=filter, fields=fields, sort=sort)

GET for application

Returns all applications from the system

### Example


```python
import openapi_client
from openapi_client.models.application_entity_list import ApplicationEntityList
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
    api_instance = openapi_client.ApplicationApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    page_size = 56 # int | Amount of results (default: 25) (optional)
    page = 56 # int | Page to show (default: 1) (optional)
    filter = 'filter_example' # str | Filter (optional)
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)
    sort = 'sort_example' # str | Specifies ascending or descending sort on existing fields (optional)

    try:
        # GET for application
        api_response = api_instance.get_application_collection(x_api2_crm_user_key, page_size=page_size, page=page, filter=filter, fields=fields, sort=sort)
        print("The response of ApplicationApi->get_application_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->get_application_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **page_size** | **int**| Amount of results (default: 25) | [optional] 
 **page** | **int**| Page to show (default: 1) | [optional] 
 **filter** | **str**| Filter | [optional] 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 
 **sort** | **str**| Specifies ascending or descending sort on existing fields | [optional] 

### Return type

[**List[ApplicationEntityList]**](ApplicationEntityList.md)

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

# **get_application_count_collection**
> Count get_application_count_collection(x_api2_crm_user_key, filter=filter)

COUNT for application

Count all applications from the system

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
    api_instance = openapi_client.ApplicationApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    filter = 'filter_example' # str | Filter (optional)

    try:
        # COUNT for application
        api_response = api_instance.get_application_count_collection(x_api2_crm_user_key, filter=filter)
        print("The response of ApplicationApi->get_application_count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->get_application_count_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
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

# **get_application_entity**
> ApplicationEntity get_application_entity(x_api2_crm_user_key, key, fields=fields)

GET for application

Return application information

### Example


```python
import openapi_client
from openapi_client.models.application_entity import ApplicationEntity
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
    api_instance = openapi_client.ApplicationApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    key = 'key_example' # str | Application key
    fields = 'fields_example' # str | Comma-separated list of fields to include in the response (optional)

    try:
        # GET for application
        api_response = api_instance.get_application_entity(x_api2_crm_user_key, key, fields=fields)
        print("The response of ApplicationApi->get_application_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->get_application_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **key** | **str**| Application key | 
 **fields** | **str**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**ApplicationEntity**](ApplicationEntity.md)

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

# **update_application_entity**
> ApplicationEntityRelation update_application_entity(x_api2_crm_user_key, key, body)

PUT for application

Update application information

### Example


```python
import openapi_client
from openapi_client.models.application_entity_relation import ApplicationEntityRelation
from openapi_client.models.application_entity_write import ApplicationEntityWrite
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
    api_instance = openapi_client.ApplicationApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | API2CRM user key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    key = 'key_example' # str | Application key
    body = openapi_client.ApplicationEntityWrite() # ApplicationEntityWrite | Update application information

    try:
        # PUT for application
        api_response = api_instance.update_application_entity(x_api2_crm_user_key, key, body)
        print("The response of ApplicationApi->update_application_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->update_application_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| API2CRM user key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **key** | **str**| Application key | 
 **body** | [**ApplicationEntityWrite**](ApplicationEntityWrite.md)| Update application information | 

### Return type

[**ApplicationEntityRelation**](ApplicationEntityRelation.md)

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


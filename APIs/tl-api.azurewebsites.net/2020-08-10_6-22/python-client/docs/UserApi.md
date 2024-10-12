# openapi_client.UserApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_get**](UserApi.md#user_get) | **GET** /api/User | Get all Users detail This will return all properties related to User entity             
[**user_register_user**](UserApi.md#user_register_user) | **POST** /api/User/registerUser | Register a new User             
[**user_update_user**](UserApi.md#user_update_user) | **PUT** /api/User/updateuser | Update an exsisting User             


# **user_get**
> UserDTO user_get()

Get all Users detail This will return all properties related to User entity             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.user_dto import UserDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # Get all Users detail This will return all properties related to User entity             
        api_response = api_instance.user_get()
        print("The response of UserApi->user_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->user_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response with User entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_register_user**
> user_register_user(user_id=user_id, account_number=account_number, gym_number=gym_number, external_entity_number=external_entity_number, name=name, number=number, introduce_by=introduce_by, guardian=guardian, type_id=type_id)

Register a new User             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    user_id = 56 # int | Indentity number(primary key) for user object. Generated in DB table when inserting a record.              (optional)
    account_number = 'account_number_example' # str | Account number of the user.It can be any stakeholder of the application.even can be a gym.              (optional)
    gym_number = 'gym_number_example' # str | If this user is a gym, then the gym number.              (optional)
    external_entity_number = 'external_entity_number_example' # str | Entity number that make a relationship with BOX API DB.              (optional)
    name = 'name_example' # str | Name of the user.              (optional)
    number = 'number_example' # str | Unique number maintain by application to idenify user.              (optional)
    introduce_by = 56 # int | If Someone introduced this user to the system, then that user's UserId.              (optional)
    guardian = 56 # int | Gaurdian of the this user if he/she is under 18 years old.              (optional)
    type_id = 56 # int | Type of the user.              (optional)

    try:
        # Register a new User             
        api_instance.user_register_user(user_id=user_id, account_number=account_number, gym_number=gym_number, external_entity_number=external_entity_number, name=name, number=number, introduce_by=introduce_by, guardian=guardian, type_id=type_id)
    except Exception as e:
        print("Exception when calling UserApi->user_register_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| Indentity number(primary key) for user object. Generated in DB table when inserting a record.              | [optional] 
 **account_number** | **str**| Account number of the user.It can be any stakeholder of the application.even can be a gym.              | [optional] 
 **gym_number** | **str**| If this user is a gym, then the gym number.              | [optional] 
 **external_entity_number** | **str**| Entity number that make a relationship with BOX API DB.              | [optional] 
 **name** | **str**| Name of the user.              | [optional] 
 **number** | **str**| Unique number maintain by application to idenify user.              | [optional] 
 **introduce_by** | **int**| If Someone introduced this user to the system, then that user&#39;s UserId.              | [optional] 
 **guardian** | **int**| Gaurdian of the this user if he/she is under 18 years old.              | [optional] 
 **type_id** | **int**| Type of the user.              | [optional] 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_update_user**
> user_update_user(user_id=user_id, account_number=account_number, gym_number=gym_number, external_entity_number=external_entity_number, name=name, number=number, introduce_by=introduce_by, guardian=guardian, type_id=type_id)

Update an exsisting User             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    user_id = 56 # int | Indentity number(primary key) for user object. Generated in DB table when inserting a record.              (optional)
    account_number = 'account_number_example' # str | Account number of the user.It can be any stakeholder of the application.even can be a gym.              (optional)
    gym_number = 'gym_number_example' # str | If this user is a gym, then the gym number.              (optional)
    external_entity_number = 'external_entity_number_example' # str | Entity number that make a relationship with BOX API DB.              (optional)
    name = 'name_example' # str | Name of the user.              (optional)
    number = 'number_example' # str | Unique number maintain by application to idenify user.              (optional)
    introduce_by = 56 # int | If Someone introduced this user to the system, then that user's UserId.              (optional)
    guardian = 56 # int | Gaurdian of the this user if he/she is under 18 years old.              (optional)
    type_id = 56 # int | Type of the user.              (optional)

    try:
        # Update an exsisting User             
        api_instance.user_update_user(user_id=user_id, account_number=account_number, gym_number=gym_number, external_entity_number=external_entity_number, name=name, number=number, introduce_by=introduce_by, guardian=guardian, type_id=type_id)
    except Exception as e:
        print("Exception when calling UserApi->user_update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| Indentity number(primary key) for user object. Generated in DB table when inserting a record.              | [optional] 
 **account_number** | **str**| Account number of the user.It can be any stakeholder of the application.even can be a gym.              | [optional] 
 **gym_number** | **str**| If this user is a gym, then the gym number.              | [optional] 
 **external_entity_number** | **str**| Entity number that make a relationship with BOX API DB.              | [optional] 
 **name** | **str**| Name of the user.              | [optional] 
 **number** | **str**| Unique number maintain by application to idenify user.              | [optional] 
 **introduce_by** | **int**| If Someone introduced this user to the system, then that user&#39;s UserId.              | [optional] 
 **guardian** | **int**| Gaurdian of the this user if he/she is under 18 years old.              | [optional] 
 **type_id** | **int**| Type of the user.              | [optional] 

### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response true or false |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


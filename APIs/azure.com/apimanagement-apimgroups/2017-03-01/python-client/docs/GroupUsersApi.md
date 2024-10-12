# openapi_client.GroupUsersApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**group_user_create**](GroupUsersApi.md#group_user_create) | **PUT** /groups/{groupId}/users/{uid} | 
[**group_user_delete**](GroupUsersApi.md#group_user_delete) | **DELETE** /groups/{groupId}/users/{uid} | 
[**group_user_list**](GroupUsersApi.md#group_user_list) | **GET** /groups/{groupId}/users | 


# **group_user_create**
> GroupUserCreate200Response group_user_create(group_id, uid, api_version)



Adds a user to the specified group.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.group_user_create200_response import GroupUserCreate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupUsersApi(api_client)
    group_id = 'group_id_example' # str | Group identifier. Must be unique in the current API Management service instance.
    uid = 'uid_example' # str | User identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.group_user_create(group_id, uid, api_version)
        print("The response of GroupUsersApi->group_user_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupUsersApi->group_user_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Group identifier. Must be unique in the current API Management service instance. | 
 **uid** | **str**| User identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**GroupUserCreate200Response**](GroupUserCreate200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified user is already a member of the specified group. |  -  |
**201** | The user was successfully added to the group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_user_delete**
> group_user_delete(group_id, uid, api_version)



Remove existing user from existing group.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupUsersApi(api_client)
    group_id = 'group_id_example' # str | Group identifier. Must be unique in the current API Management service instance.
    uid = 'uid_example' # str | User identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.group_user_delete(group_id, uid, api_version)
    except Exception as e:
        print("Exception when calling GroupUsersApi->group_user_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Group identifier. Must be unique in the current API Management service instance. | 
 **uid** | **str**| User identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The user was successfully removed from the group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_user_list**
> GroupUserList200Response group_user_list(group_id, api_version, filter=filter, top=top, skip=skip)



Lists a collection of the members of the group, specified by its identifier.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.group_user_list200_response import GroupUserList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupUsersApi(api_client)
    group_id = 'group_id_example' # str | Group identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | | Field            | Supported operators    | Supported functions               | |------------------|------------------------|-----------------------------------| | id               | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | firstName        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | lastName         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | email            | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state            | eq                     | N/A                               | | registrationDate | ge, le, eq, ne, gt, lt | N/A                               | | note             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.group_user_list(group_id, api_version, filter=filter, top=top, skip=skip)
        print("The response of GroupUsersApi->group_user_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupUsersApi->group_user_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Group identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| | Field            | Supported operators    | Supported functions               | |------------------|------------------------|-----------------------------------| | id               | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | firstName        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | lastName         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | email            | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state            | eq                     | N/A                               | | registrationDate | ge, le, eq, ne, gt, lt | N/A                               | | note             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**GroupUserList200Response**](GroupUserList200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of user entities associated with the group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


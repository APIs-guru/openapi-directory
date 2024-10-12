# openapi_client.RolesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roles_list**](RolesApi.md#roles_list) | **GET** /roles | 
[**roles_read**](RolesApi.md#roles_read) | **GET** /roles/{id} | 


# **roles_list**
> List[Role] roles_list(id=id, name=name, contact=contact)



List all roles available.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.role import Role
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RolesApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    name = 'name_example' # str | Filter by name (optional)
    contact = 'contact_example' # str | Filter by contact (optional)

    try:
        api_response = api_instance.roles_list(id=id, name=name, contact=contact)
        print("The response of RolesApi->roles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->roles_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **contact** | **str**| Filter by contact | [optional] 

### Return type

[**List[Role]**](Role.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: A role for a contact |  -  |
**401** | Authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_read**
> Role roles_read(id, id2=id2, name=name)



Get a single `Role`.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.role import Role
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RolesApi(api_client)
    id = 'id_example' # str | Get by id
    id2 = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    name = 'name_example' # str | Filter by name (optional)

    try:
        api_response = api_instance.roles_read(id, id2=id2, name=name)
        print("The response of RolesApi->roles_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->roles_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **id2** | [**List[str]**](str.md)| Filter by id | [optional] 
 **name** | **str**| Filter by name | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A role for a contact |  -  |
**401** | Authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


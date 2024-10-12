# openapi_client.UsersApi

All URIs are relative to *https://demo.netbox.dev/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_config_list**](UsersApi.md#users_config_list) | **GET** /users/config/ | 
[**users_groups_bulk_delete**](UsersApi.md#users_groups_bulk_delete) | **DELETE** /users/groups/ | 
[**users_groups_bulk_partial_update**](UsersApi.md#users_groups_bulk_partial_update) | **PATCH** /users/groups/ | 
[**users_groups_bulk_update**](UsersApi.md#users_groups_bulk_update) | **PUT** /users/groups/ | 
[**users_groups_create**](UsersApi.md#users_groups_create) | **POST** /users/groups/ | 
[**users_groups_delete**](UsersApi.md#users_groups_delete) | **DELETE** /users/groups/{id}/ | 
[**users_groups_list**](UsersApi.md#users_groups_list) | **GET** /users/groups/ | 
[**users_groups_partial_update**](UsersApi.md#users_groups_partial_update) | **PATCH** /users/groups/{id}/ | 
[**users_groups_read**](UsersApi.md#users_groups_read) | **GET** /users/groups/{id}/ | 
[**users_groups_update**](UsersApi.md#users_groups_update) | **PUT** /users/groups/{id}/ | 
[**users_permissions_bulk_delete**](UsersApi.md#users_permissions_bulk_delete) | **DELETE** /users/permissions/ | 
[**users_permissions_bulk_partial_update**](UsersApi.md#users_permissions_bulk_partial_update) | **PATCH** /users/permissions/ | 
[**users_permissions_bulk_update**](UsersApi.md#users_permissions_bulk_update) | **PUT** /users/permissions/ | 
[**users_permissions_create**](UsersApi.md#users_permissions_create) | **POST** /users/permissions/ | 
[**users_permissions_delete**](UsersApi.md#users_permissions_delete) | **DELETE** /users/permissions/{id}/ | 
[**users_permissions_list**](UsersApi.md#users_permissions_list) | **GET** /users/permissions/ | 
[**users_permissions_partial_update**](UsersApi.md#users_permissions_partial_update) | **PATCH** /users/permissions/{id}/ | 
[**users_permissions_read**](UsersApi.md#users_permissions_read) | **GET** /users/permissions/{id}/ | 
[**users_permissions_update**](UsersApi.md#users_permissions_update) | **PUT** /users/permissions/{id}/ | 
[**users_tokens_bulk_delete**](UsersApi.md#users_tokens_bulk_delete) | **DELETE** /users/tokens/ | 
[**users_tokens_bulk_partial_update**](UsersApi.md#users_tokens_bulk_partial_update) | **PATCH** /users/tokens/ | 
[**users_tokens_bulk_update**](UsersApi.md#users_tokens_bulk_update) | **PUT** /users/tokens/ | 
[**users_tokens_create**](UsersApi.md#users_tokens_create) | **POST** /users/tokens/ | 
[**users_tokens_delete**](UsersApi.md#users_tokens_delete) | **DELETE** /users/tokens/{id}/ | 
[**users_tokens_list**](UsersApi.md#users_tokens_list) | **GET** /users/tokens/ | 
[**users_tokens_partial_update**](UsersApi.md#users_tokens_partial_update) | **PATCH** /users/tokens/{id}/ | 
[**users_tokens_provision_create**](UsersApi.md#users_tokens_provision_create) | **POST** /users/tokens/provision/ | 
[**users_tokens_read**](UsersApi.md#users_tokens_read) | **GET** /users/tokens/{id}/ | 
[**users_tokens_update**](UsersApi.md#users_tokens_update) | **PUT** /users/tokens/{id}/ | 
[**users_users_bulk_delete**](UsersApi.md#users_users_bulk_delete) | **DELETE** /users/users/ | 
[**users_users_bulk_partial_update**](UsersApi.md#users_users_bulk_partial_update) | **PATCH** /users/users/ | 
[**users_users_bulk_update**](UsersApi.md#users_users_bulk_update) | **PUT** /users/users/ | 
[**users_users_create**](UsersApi.md#users_users_create) | **POST** /users/users/ | 
[**users_users_delete**](UsersApi.md#users_users_delete) | **DELETE** /users/users/{id}/ | 
[**users_users_list**](UsersApi.md#users_users_list) | **GET** /users/users/ | 
[**users_users_partial_update**](UsersApi.md#users_users_partial_update) | **PATCH** /users/users/{id}/ | 
[**users_users_read**](UsersApi.md#users_users_read) | **GET** /users/users/{id}/ | 
[**users_users_update**](UsersApi.md#users_users_update) | **PUT** /users/users/{id}/ | 


# **users_config_list**
> users_config_list()



Return the UserConfig for the currently authenticated User.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        api_instance.users_config_list()
    except Exception as e:
        print("Exception when calling UsersApi->users_config_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_bulk_delete**
> users_groups_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        api_instance.users_groups_bulk_delete()
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_bulk_partial_update**
> Group users_groups_bulk_partial_update(group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    group = openapi_client.Group() # Group | 

    try:
        api_response = api_instance.users_groups_bulk_partial_update(group)
        print("The response of UsersApi->users_groups_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_bulk_update**
> Group users_groups_bulk_update(group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    group = openapi_client.Group() # Group | 

    try:
        api_response = api_instance.users_groups_bulk_update(group)
        print("The response of UsersApi->users_groups_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_create**
> Group users_groups_create(group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    group = openapi_client.Group() # Group | 

    try:
        api_response = api_instance.users_groups_create(group)
        print("The response of UsersApi->users_groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_delete**
> users_groups_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this group.

    try:
        api_instance.users_groups_delete(id)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this group. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_list**
> UsersGroupsList200Response users_groups_list(id=id, name=name, q=q, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.users_groups_list200_response import UsersGroupsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    name__n = 'name__n_example' # str |  (optional)
    name__ic = 'name__ic_example' # str |  (optional)
    name__nic = 'name__nic_example' # str |  (optional)
    name__iew = 'name__iew_example' # str |  (optional)
    name__niew = 'name__niew_example' # str |  (optional)
    name__isw = 'name__isw_example' # str |  (optional)
    name__nisw = 'name__nisw_example' # str |  (optional)
    name__ie = 'name__ie_example' # str |  (optional)
    name__nie = 'name__nie_example' # str |  (optional)
    name__empty = 'name__empty_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.users_groups_list(id=id, name=name, q=q, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, ordering=ordering, limit=limit, offset=offset)
        print("The response of UsersApi->users_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **name__n** | **str**|  | [optional] 
 **name__ic** | **str**|  | [optional] 
 **name__nic** | **str**|  | [optional] 
 **name__iew** | **str**|  | [optional] 
 **name__niew** | **str**|  | [optional] 
 **name__isw** | **str**|  | [optional] 
 **name__nisw** | **str**|  | [optional] 
 **name__ie** | **str**|  | [optional] 
 **name__nie** | **str**|  | [optional] 
 **name__empty** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**UsersGroupsList200Response**](UsersGroupsList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_partial_update**
> Group users_groups_partial_update(id, group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this group.
    group = openapi_client.Group() # Group | 

    try:
        api_response = api_instance.users_groups_partial_update(id, group)
        print("The response of UsersApi->users_groups_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this group. | 
 **group** | [**Group**](Group.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_read**
> Group users_groups_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this group.

    try:
        api_response = api_instance.users_groups_read(id)
        print("The response of UsersApi->users_groups_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this group. | 

### Return type

[**Group**](Group.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_groups_update**
> Group users_groups_update(id, group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this group.
    group = openapi_client.Group() # Group | 

    try:
        api_response = api_instance.users_groups_update(id, group)
        print("The response of UsersApi->users_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this group. | 
 **group** | [**Group**](Group.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_bulk_delete**
> users_permissions_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        api_instance.users_permissions_bulk_delete()
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_bulk_partial_update**
> ObjectPermission users_permissions_bulk_partial_update(writable_object_permission)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.object_permission import ObjectPermission
from openapi_client.models.writable_object_permission import WritableObjectPermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_object_permission = openapi_client.WritableObjectPermission() # WritableObjectPermission | 

    try:
        api_response = api_instance.users_permissions_bulk_partial_update(writable_object_permission)
        print("The response of UsersApi->users_permissions_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_object_permission** | [**WritableObjectPermission**](WritableObjectPermission.md)|  | 

### Return type

[**ObjectPermission**](ObjectPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_bulk_update**
> ObjectPermission users_permissions_bulk_update(writable_object_permission)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.object_permission import ObjectPermission
from openapi_client.models.writable_object_permission import WritableObjectPermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_object_permission = openapi_client.WritableObjectPermission() # WritableObjectPermission | 

    try:
        api_response = api_instance.users_permissions_bulk_update(writable_object_permission)
        print("The response of UsersApi->users_permissions_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_object_permission** | [**WritableObjectPermission**](WritableObjectPermission.md)|  | 

### Return type

[**ObjectPermission**](ObjectPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_create**
> ObjectPermission users_permissions_create(writable_object_permission)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.object_permission import ObjectPermission
from openapi_client.models.writable_object_permission import WritableObjectPermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_object_permission = openapi_client.WritableObjectPermission() # WritableObjectPermission | 

    try:
        api_response = api_instance.users_permissions_create(writable_object_permission)
        print("The response of UsersApi->users_permissions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_object_permission** | [**WritableObjectPermission**](WritableObjectPermission.md)|  | 

### Return type

[**ObjectPermission**](ObjectPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_delete**
> users_permissions_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this permission.

    try:
        api_instance.users_permissions_delete(id)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this permission. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_list**
> UsersPermissionsList200Response users_permissions_list(id=id, name=name, enabled=enabled, object_types=object_types, description=description, q=q, user_id=user_id, user=user, group_id=group_id, group=group, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, object_types__n=object_types__n, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, user_id__n=user_id__n, user__n=user__n, group_id__n=group_id__n, group__n=group__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.users_permissions_list200_response import UsersPermissionsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    enabled = 'enabled_example' # str |  (optional)
    object_types = 'object_types_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    user_id = 'user_id_example' # str |  (optional)
    user = 'user_example' # str |  (optional)
    group_id = 'group_id_example' # str |  (optional)
    group = 'group_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    name__n = 'name__n_example' # str |  (optional)
    name__ic = 'name__ic_example' # str |  (optional)
    name__nic = 'name__nic_example' # str |  (optional)
    name__iew = 'name__iew_example' # str |  (optional)
    name__niew = 'name__niew_example' # str |  (optional)
    name__isw = 'name__isw_example' # str |  (optional)
    name__nisw = 'name__nisw_example' # str |  (optional)
    name__ie = 'name__ie_example' # str |  (optional)
    name__nie = 'name__nie_example' # str |  (optional)
    name__empty = 'name__empty_example' # str |  (optional)
    object_types__n = 'object_types__n_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    user_id__n = 'user_id__n_example' # str |  (optional)
    user__n = 'user__n_example' # str |  (optional)
    group_id__n = 'group_id__n_example' # str |  (optional)
    group__n = 'group__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.users_permissions_list(id=id, name=name, enabled=enabled, object_types=object_types, description=description, q=q, user_id=user_id, user=user, group_id=group_id, group=group, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, object_types__n=object_types__n, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, user_id__n=user_id__n, user__n=user__n, group_id__n=group_id__n, group__n=group__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of UsersApi->users_permissions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **enabled** | **str**|  | [optional] 
 **object_types** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **user_id** | **str**|  | [optional] 
 **user** | **str**|  | [optional] 
 **group_id** | **str**|  | [optional] 
 **group** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **name__n** | **str**|  | [optional] 
 **name__ic** | **str**|  | [optional] 
 **name__nic** | **str**|  | [optional] 
 **name__iew** | **str**|  | [optional] 
 **name__niew** | **str**|  | [optional] 
 **name__isw** | **str**|  | [optional] 
 **name__nisw** | **str**|  | [optional] 
 **name__ie** | **str**|  | [optional] 
 **name__nie** | **str**|  | [optional] 
 **name__empty** | **str**|  | [optional] 
 **object_types__n** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **user_id__n** | **str**|  | [optional] 
 **user__n** | **str**|  | [optional] 
 **group_id__n** | **str**|  | [optional] 
 **group__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**UsersPermissionsList200Response**](UsersPermissionsList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_partial_update**
> ObjectPermission users_permissions_partial_update(id, writable_object_permission)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.object_permission import ObjectPermission
from openapi_client.models.writable_object_permission import WritableObjectPermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this permission.
    writable_object_permission = openapi_client.WritableObjectPermission() # WritableObjectPermission | 

    try:
        api_response = api_instance.users_permissions_partial_update(id, writable_object_permission)
        print("The response of UsersApi->users_permissions_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this permission. | 
 **writable_object_permission** | [**WritableObjectPermission**](WritableObjectPermission.md)|  | 

### Return type

[**ObjectPermission**](ObjectPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_read**
> ObjectPermission users_permissions_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.object_permission import ObjectPermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this permission.

    try:
        api_response = api_instance.users_permissions_read(id)
        print("The response of UsersApi->users_permissions_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this permission. | 

### Return type

[**ObjectPermission**](ObjectPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_permissions_update**
> ObjectPermission users_permissions_update(id, writable_object_permission)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.object_permission import ObjectPermission
from openapi_client.models.writable_object_permission import WritableObjectPermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this permission.
    writable_object_permission = openapi_client.WritableObjectPermission() # WritableObjectPermission | 

    try:
        api_response = api_instance.users_permissions_update(id, writable_object_permission)
        print("The response of UsersApi->users_permissions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_permissions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this permission. | 
 **writable_object_permission** | [**WritableObjectPermission**](WritableObjectPermission.md)|  | 

### Return type

[**ObjectPermission**](ObjectPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_bulk_delete**
> users_tokens_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        api_instance.users_tokens_bulk_delete()
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_bulk_partial_update**
> Token users_tokens_bulk_partial_update(writable_token)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.models.writable_token import WritableToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_token = openapi_client.WritableToken() # WritableToken | 

    try:
        api_response = api_instance.users_tokens_bulk_partial_update(writable_token)
        print("The response of UsersApi->users_tokens_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_token** | [**WritableToken**](WritableToken.md)|  | 

### Return type

[**Token**](Token.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_bulk_update**
> Token users_tokens_bulk_update(writable_token)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.models.writable_token import WritableToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_token = openapi_client.WritableToken() # WritableToken | 

    try:
        api_response = api_instance.users_tokens_bulk_update(writable_token)
        print("The response of UsersApi->users_tokens_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_token** | [**WritableToken**](WritableToken.md)|  | 

### Return type

[**Token**](Token.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_create**
> Token users_tokens_create(writable_token)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.models.writable_token import WritableToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_token = openapi_client.WritableToken() # WritableToken | 

    try:
        api_response = api_instance.users_tokens_create(writable_token)
        print("The response of UsersApi->users_tokens_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_token** | [**WritableToken**](WritableToken.md)|  | 

### Return type

[**Token**](Token.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_delete**
> users_tokens_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this token.

    try:
        api_instance.users_tokens_delete(id)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this token. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_list**
> UsersTokensList200Response users_tokens_list(id=id, key=key, write_enabled=write_enabled, description=description, q=q, user_id=user_id, user=user, created=created, created__gte=created__gte, created__lte=created__lte, expires=expires, expires__gte=expires__gte, expires__lte=expires__lte, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, key__n=key__n, key__ic=key__ic, key__nic=key__nic, key__iew=key__iew, key__niew=key__niew, key__isw=key__isw, key__nisw=key__nisw, key__ie=key__ie, key__nie=key__nie, key__empty=key__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, user_id__n=user_id__n, user__n=user__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.users_tokens_list200_response import UsersTokensList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str |  (optional)
    key = 'key_example' # str |  (optional)
    write_enabled = 'write_enabled_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    user_id = 'user_id_example' # str |  (optional)
    user = 'user_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    expires = 'expires_example' # str |  (optional)
    expires__gte = 'expires__gte_example' # str |  (optional)
    expires__lte = 'expires__lte_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    key__n = 'key__n_example' # str |  (optional)
    key__ic = 'key__ic_example' # str |  (optional)
    key__nic = 'key__nic_example' # str |  (optional)
    key__iew = 'key__iew_example' # str |  (optional)
    key__niew = 'key__niew_example' # str |  (optional)
    key__isw = 'key__isw_example' # str |  (optional)
    key__nisw = 'key__nisw_example' # str |  (optional)
    key__ie = 'key__ie_example' # str |  (optional)
    key__nie = 'key__nie_example' # str |  (optional)
    key__empty = 'key__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    user_id__n = 'user_id__n_example' # str |  (optional)
    user__n = 'user__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.users_tokens_list(id=id, key=key, write_enabled=write_enabled, description=description, q=q, user_id=user_id, user=user, created=created, created__gte=created__gte, created__lte=created__lte, expires=expires, expires__gte=expires__gte, expires__lte=expires__lte, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, key__n=key__n, key__ic=key__ic, key__nic=key__nic, key__iew=key__iew, key__niew=key__niew, key__isw=key__isw, key__nisw=key__nisw, key__ie=key__ie, key__nie=key__nie, key__empty=key__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, user_id__n=user_id__n, user__n=user__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of UsersApi->users_tokens_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **key** | **str**|  | [optional] 
 **write_enabled** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **user_id** | **str**|  | [optional] 
 **user** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **expires** | **str**|  | [optional] 
 **expires__gte** | **str**|  | [optional] 
 **expires__lte** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **key__n** | **str**|  | [optional] 
 **key__ic** | **str**|  | [optional] 
 **key__nic** | **str**|  | [optional] 
 **key__iew** | **str**|  | [optional] 
 **key__niew** | **str**|  | [optional] 
 **key__isw** | **str**|  | [optional] 
 **key__nisw** | **str**|  | [optional] 
 **key__ie** | **str**|  | [optional] 
 **key__nie** | **str**|  | [optional] 
 **key__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **user_id__n** | **str**|  | [optional] 
 **user__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**UsersTokensList200Response**](UsersTokensList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_partial_update**
> Token users_tokens_partial_update(id, writable_token)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.models.writable_token import WritableToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this token.
    writable_token = openapi_client.WritableToken() # WritableToken | 

    try:
        api_response = api_instance.users_tokens_partial_update(id, writable_token)
        print("The response of UsersApi->users_tokens_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this token. | 
 **writable_token** | [**WritableToken**](WritableToken.md)|  | 

### Return type

[**Token**](Token.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_provision_create**
> users_tokens_provision_create()



Non-authenticated REST API endpoint via which a user may create a Token.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        api_instance.users_tokens_provision_create()
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_provision_create: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_read**
> Token users_tokens_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this token.

    try:
        api_response = api_instance.users_tokens_read(id)
        print("The response of UsersApi->users_tokens_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this token. | 

### Return type

[**Token**](Token.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_tokens_update**
> Token users_tokens_update(id, writable_token)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.models.writable_token import WritableToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this token.
    writable_token = openapi_client.WritableToken() # WritableToken | 

    try:
        api_response = api_instance.users_tokens_update(id, writable_token)
        print("The response of UsersApi->users_tokens_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_tokens_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this token. | 
 **writable_token** | [**WritableToken**](WritableToken.md)|  | 

### Return type

[**Token**](Token.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_bulk_delete**
> users_users_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        api_instance.users_users_bulk_delete()
    except Exception as e:
        print("Exception when calling UsersApi->users_users_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_bulk_partial_update**
> User users_users_bulk_partial_update(writable_user)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.writable_user import WritableUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_user = openapi_client.WritableUser() # WritableUser | 

    try:
        api_response = api_instance.users_users_bulk_partial_update(writable_user)
        print("The response of UsersApi->users_users_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_user** | [**WritableUser**](WritableUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_bulk_update**
> User users_users_bulk_update(writable_user)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.writable_user import WritableUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_user = openapi_client.WritableUser() # WritableUser | 

    try:
        api_response = api_instance.users_users_bulk_update(writable_user)
        print("The response of UsersApi->users_users_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_user** | [**WritableUser**](WritableUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_create**
> User users_users_create(writable_user)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.writable_user import WritableUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    writable_user = openapi_client.WritableUser() # WritableUser | 

    try:
        api_response = api_instance.users_users_create(writable_user)
        print("The response of UsersApi->users_users_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_user** | [**WritableUser**](WritableUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_delete**
> users_users_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this user.

    try:
        api_instance.users_users_delete(id)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_list**
> UsersUsersList200Response users_users_list(id=id, username=username, first_name=first_name, last_name=last_name, email=email, is_staff=is_staff, is_active=is_active, q=q, group_id=group_id, group=group, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, username__n=username__n, username__ic=username__ic, username__nic=username__nic, username__iew=username__iew, username__niew=username__niew, username__isw=username__isw, username__nisw=username__nisw, username__ie=username__ie, username__nie=username__nie, username__empty=username__empty, first_name__n=first_name__n, first_name__ic=first_name__ic, first_name__nic=first_name__nic, first_name__iew=first_name__iew, first_name__niew=first_name__niew, first_name__isw=first_name__isw, first_name__nisw=first_name__nisw, first_name__ie=first_name__ie, first_name__nie=first_name__nie, first_name__empty=first_name__empty, last_name__n=last_name__n, last_name__ic=last_name__ic, last_name__nic=last_name__nic, last_name__iew=last_name__iew, last_name__niew=last_name__niew, last_name__isw=last_name__isw, last_name__nisw=last_name__nisw, last_name__ie=last_name__ie, last_name__nie=last_name__nie, last_name__empty=last_name__empty, email__n=email__n, email__ic=email__ic, email__nic=email__nic, email__iew=email__iew, email__niew=email__niew, email__isw=email__isw, email__nisw=email__nisw, email__ie=email__ie, email__nie=email__nie, email__empty=email__empty, group_id__n=group_id__n, group__n=group__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.users_users_list200_response import UsersUsersList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str |  (optional)
    username = 'username_example' # str |  (optional)
    first_name = 'first_name_example' # str |  (optional)
    last_name = 'last_name_example' # str |  (optional)
    email = 'email_example' # str |  (optional)
    is_staff = 'is_staff_example' # str |  (optional)
    is_active = 'is_active_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    group_id = 'group_id_example' # str |  (optional)
    group = 'group_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    username__n = 'username__n_example' # str |  (optional)
    username__ic = 'username__ic_example' # str |  (optional)
    username__nic = 'username__nic_example' # str |  (optional)
    username__iew = 'username__iew_example' # str |  (optional)
    username__niew = 'username__niew_example' # str |  (optional)
    username__isw = 'username__isw_example' # str |  (optional)
    username__nisw = 'username__nisw_example' # str |  (optional)
    username__ie = 'username__ie_example' # str |  (optional)
    username__nie = 'username__nie_example' # str |  (optional)
    username__empty = 'username__empty_example' # str |  (optional)
    first_name__n = 'first_name__n_example' # str |  (optional)
    first_name__ic = 'first_name__ic_example' # str |  (optional)
    first_name__nic = 'first_name__nic_example' # str |  (optional)
    first_name__iew = 'first_name__iew_example' # str |  (optional)
    first_name__niew = 'first_name__niew_example' # str |  (optional)
    first_name__isw = 'first_name__isw_example' # str |  (optional)
    first_name__nisw = 'first_name__nisw_example' # str |  (optional)
    first_name__ie = 'first_name__ie_example' # str |  (optional)
    first_name__nie = 'first_name__nie_example' # str |  (optional)
    first_name__empty = 'first_name__empty_example' # str |  (optional)
    last_name__n = 'last_name__n_example' # str |  (optional)
    last_name__ic = 'last_name__ic_example' # str |  (optional)
    last_name__nic = 'last_name__nic_example' # str |  (optional)
    last_name__iew = 'last_name__iew_example' # str |  (optional)
    last_name__niew = 'last_name__niew_example' # str |  (optional)
    last_name__isw = 'last_name__isw_example' # str |  (optional)
    last_name__nisw = 'last_name__nisw_example' # str |  (optional)
    last_name__ie = 'last_name__ie_example' # str |  (optional)
    last_name__nie = 'last_name__nie_example' # str |  (optional)
    last_name__empty = 'last_name__empty_example' # str |  (optional)
    email__n = 'email__n_example' # str |  (optional)
    email__ic = 'email__ic_example' # str |  (optional)
    email__nic = 'email__nic_example' # str |  (optional)
    email__iew = 'email__iew_example' # str |  (optional)
    email__niew = 'email__niew_example' # str |  (optional)
    email__isw = 'email__isw_example' # str |  (optional)
    email__nisw = 'email__nisw_example' # str |  (optional)
    email__ie = 'email__ie_example' # str |  (optional)
    email__nie = 'email__nie_example' # str |  (optional)
    email__empty = 'email__empty_example' # str |  (optional)
    group_id__n = 'group_id__n_example' # str |  (optional)
    group__n = 'group__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.users_users_list(id=id, username=username, first_name=first_name, last_name=last_name, email=email, is_staff=is_staff, is_active=is_active, q=q, group_id=group_id, group=group, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, username__n=username__n, username__ic=username__ic, username__nic=username__nic, username__iew=username__iew, username__niew=username__niew, username__isw=username__isw, username__nisw=username__nisw, username__ie=username__ie, username__nie=username__nie, username__empty=username__empty, first_name__n=first_name__n, first_name__ic=first_name__ic, first_name__nic=first_name__nic, first_name__iew=first_name__iew, first_name__niew=first_name__niew, first_name__isw=first_name__isw, first_name__nisw=first_name__nisw, first_name__ie=first_name__ie, first_name__nie=first_name__nie, first_name__empty=first_name__empty, last_name__n=last_name__n, last_name__ic=last_name__ic, last_name__nic=last_name__nic, last_name__iew=last_name__iew, last_name__niew=last_name__niew, last_name__isw=last_name__isw, last_name__nisw=last_name__nisw, last_name__ie=last_name__ie, last_name__nie=last_name__nie, last_name__empty=last_name__empty, email__n=email__n, email__ic=email__ic, email__nic=email__nic, email__iew=email__iew, email__niew=email__niew, email__isw=email__isw, email__nisw=email__nisw, email__ie=email__ie, email__nie=email__nie, email__empty=email__empty, group_id__n=group_id__n, group__n=group__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of UsersApi->users_users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **username** | **str**|  | [optional] 
 **first_name** | **str**|  | [optional] 
 **last_name** | **str**|  | [optional] 
 **email** | **str**|  | [optional] 
 **is_staff** | **str**|  | [optional] 
 **is_active** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **group_id** | **str**|  | [optional] 
 **group** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **username__n** | **str**|  | [optional] 
 **username__ic** | **str**|  | [optional] 
 **username__nic** | **str**|  | [optional] 
 **username__iew** | **str**|  | [optional] 
 **username__niew** | **str**|  | [optional] 
 **username__isw** | **str**|  | [optional] 
 **username__nisw** | **str**|  | [optional] 
 **username__ie** | **str**|  | [optional] 
 **username__nie** | **str**|  | [optional] 
 **username__empty** | **str**|  | [optional] 
 **first_name__n** | **str**|  | [optional] 
 **first_name__ic** | **str**|  | [optional] 
 **first_name__nic** | **str**|  | [optional] 
 **first_name__iew** | **str**|  | [optional] 
 **first_name__niew** | **str**|  | [optional] 
 **first_name__isw** | **str**|  | [optional] 
 **first_name__nisw** | **str**|  | [optional] 
 **first_name__ie** | **str**|  | [optional] 
 **first_name__nie** | **str**|  | [optional] 
 **first_name__empty** | **str**|  | [optional] 
 **last_name__n** | **str**|  | [optional] 
 **last_name__ic** | **str**|  | [optional] 
 **last_name__nic** | **str**|  | [optional] 
 **last_name__iew** | **str**|  | [optional] 
 **last_name__niew** | **str**|  | [optional] 
 **last_name__isw** | **str**|  | [optional] 
 **last_name__nisw** | **str**|  | [optional] 
 **last_name__ie** | **str**|  | [optional] 
 **last_name__nie** | **str**|  | [optional] 
 **last_name__empty** | **str**|  | [optional] 
 **email__n** | **str**|  | [optional] 
 **email__ic** | **str**|  | [optional] 
 **email__nic** | **str**|  | [optional] 
 **email__iew** | **str**|  | [optional] 
 **email__niew** | **str**|  | [optional] 
 **email__isw** | **str**|  | [optional] 
 **email__nisw** | **str**|  | [optional] 
 **email__ie** | **str**|  | [optional] 
 **email__nie** | **str**|  | [optional] 
 **email__empty** | **str**|  | [optional] 
 **group_id__n** | **str**|  | [optional] 
 **group__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**UsersUsersList200Response**](UsersUsersList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_partial_update**
> User users_users_partial_update(id, writable_user)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.writable_user import WritableUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this user.
    writable_user = openapi_client.WritableUser() # WritableUser | 

    try:
        api_response = api_instance.users_users_partial_update(id, writable_user)
        print("The response of UsersApi->users_users_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user. | 
 **writable_user** | [**WritableUser**](WritableUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_read**
> User users_users_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this user.

    try:
        api_response = api_instance.users_users_read(id)
        print("The response of UsersApi->users_users_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user. | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_users_update**
> User users_users_update(id, writable_user)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.writable_user import WritableUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 56 # int | A unique integer value identifying this user.
    writable_user = openapi_client.WritableUser() # WritableUser | 

    try:
        api_response = api_instance.users_users_update(id, writable_user)
        print("The response of UsersApi->users_users_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_users_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user. | 
 **writable_user** | [**WritableUser**](WritableUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


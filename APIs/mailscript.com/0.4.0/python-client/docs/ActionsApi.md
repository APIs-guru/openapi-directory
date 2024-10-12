# openapi_client.ActionsApi

All URIs are relative to *https://api.mailscript.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_action**](ActionsApi.md#add_action) | **POST** /actions | Add an action
[**delete_action**](ActionsApi.md#delete_action) | **DELETE** /actions/{action} | Delete an action
[**get_all_actions**](ActionsApi.md#get_all_actions) | **GET** /actions | Get all actions for the user
[**update_action**](ActionsApi.md#update_action) | **PUT** /actions/{action} | Update an action key


# **add_action**
> AddActionResponse add_action(add_action_request)

Add an action

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.add_action_request import AddActionRequest
from openapi_client.models.add_action_response import AddActionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionsApi(api_client)
    add_action_request = openapi_client.AddActionRequest() # AddActionRequest | Add action body

    try:
        # Add an action
        api_response = api_instance.add_action(add_action_request)
        print("The response of ActionsApi->add_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionsApi->add_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_action_request** | [**AddActionRequest**](AddActionRequest.md)| Add action body | 

### Return type

[**AddActionResponse**](AddActionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**400** | Failure |  -  |
**403** | Not authorized or bad code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_action**
> delete_action(action)

Delete an action

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionsApi(api_client)
    action = 'action_example' # str | ID of the action

    try:
        # Delete an action
        api_instance.delete_action(action)
    except Exception as e:
        print("Exception when calling ActionsApi->delete_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **str**| ID of the action | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful delete operation |  -  |
**400** | Failure |  -  |
**403** | Bad credentials |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_actions**
> GetAllActionsResponse get_all_actions()

Get all actions for the user

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_all_actions_response import GetAllActionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionsApi(api_client)

    try:
        # Get all actions for the user
        api_response = api_instance.get_all_actions()
        print("The response of ActionsApi->get_all_actions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionsApi->get_all_actions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAllActionsResponse**](GetAllActionsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Bad credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_action**
> Key update_action(action, add_action_request)

Update an action key

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.add_action_request import AddActionRequest
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionsApi(api_client)
    action = 'action_example' # str | ID of action
    add_action_request = openapi_client.AddActionRequest() # AddActionRequest | Action body

    try:
        # Update an action key
        api_response = api_instance.update_action(action, add_action_request)
        print("The response of ActionsApi->update_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionsApi->update_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **str**| ID of action | 
 **add_action_request** | [**AddActionRequest**](AddActionRequest.md)| Action body | 

### Return type

[**Key**](Key.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful update operation |  -  |
**400** | Failure |  -  |
**403** | Bad credentials |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


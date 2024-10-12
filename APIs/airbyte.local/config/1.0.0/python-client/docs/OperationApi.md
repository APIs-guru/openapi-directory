# openapi_client.OperationApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_operation**](OperationApi.md#check_operation) | **POST** /v1/operations/check | Check if an operation to be created is valid
[**create_operation**](OperationApi.md#create_operation) | **POST** /v1/operations/create | Create an operation to be applied as part of a connection pipeline
[**delete_operation**](OperationApi.md#delete_operation) | **POST** /v1/operations/delete | Delete an operation
[**get_operation**](OperationApi.md#get_operation) | **POST** /v1/operations/get | Returns an operation
[**list_operations_for_connection**](OperationApi.md#list_operations_for_connection) | **POST** /v1/operations/list | Returns all operations for a connection.
[**update_operation**](OperationApi.md#update_operation) | **POST** /v1/operations/update | Update an operation


# **check_operation**
> CheckOperationRead check_operation(operator_configuration)

Check if an operation to be created is valid

### Example


```python
import openapi_client
from openapi_client.models.check_operation_read import CheckOperationRead
from openapi_client.models.operator_configuration import OperatorConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationApi(api_client)
    operator_configuration = openapi_client.OperatorConfiguration() # OperatorConfiguration | 

    try:
        # Check if an operation to be created is valid
        api_response = api_instance.check_operation(operator_configuration)
        print("The response of OperationApi->check_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->check_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operator_configuration** | [**OperatorConfiguration**](OperatorConfiguration.md)|  | 

### Return type

[**CheckOperationRead**](CheckOperationRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_operation**
> OperationRead create_operation(operation_create)

Create an operation to be applied as part of a connection pipeline

### Example


```python
import openapi_client
from openapi_client.models.operation_create import OperationCreate
from openapi_client.models.operation_read import OperationRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationApi(api_client)
    operation_create = openapi_client.OperationCreate() # OperationCreate | 

    try:
        # Create an operation to be applied as part of a connection pipeline
        api_response = api_instance.create_operation(operation_create)
        print("The response of OperationApi->create_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->create_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_create** | [**OperationCreate**](OperationCreate.md)|  | 

### Return type

[**OperationRead**](OperationRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_operation**
> delete_operation(operation_id_request_body)

Delete an operation

### Example


```python
import openapi_client
from openapi_client.models.operation_id_request_body import OperationIdRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationApi(api_client)
    operation_id_request_body = openapi_client.OperationIdRequestBody() # OperationIdRequestBody | 

    try:
        # Delete an operation
        api_instance.delete_operation(operation_id_request_body)
    except Exception as e:
        print("Exception when calling OperationApi->delete_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id_request_body** | [**OperationIdRequestBody**](OperationIdRequestBody.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The resource was deleted successfully. |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_operation**
> OperationRead get_operation(operation_id_request_body)

Returns an operation

### Example


```python
import openapi_client
from openapi_client.models.operation_id_request_body import OperationIdRequestBody
from openapi_client.models.operation_read import OperationRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationApi(api_client)
    operation_id_request_body = openapi_client.OperationIdRequestBody() # OperationIdRequestBody | 

    try:
        # Returns an operation
        api_response = api_instance.get_operation(operation_id_request_body)
        print("The response of OperationApi->get_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->get_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id_request_body** | [**OperationIdRequestBody**](OperationIdRequestBody.md)|  | 

### Return type

[**OperationRead**](OperationRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_operations_for_connection**
> OperationReadList list_operations_for_connection(connection_id_request_body)

Returns all operations for a connection.

List operations for connection.

### Example


```python
import openapi_client
from openapi_client.models.connection_id_request_body import ConnectionIdRequestBody
from openapi_client.models.operation_read_list import OperationReadList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationApi(api_client)
    connection_id_request_body = openapi_client.ConnectionIdRequestBody() # ConnectionIdRequestBody | 

    try:
        # Returns all operations for a connection.
        api_response = api_instance.list_operations_for_connection(connection_id_request_body)
        print("The response of OperationApi->list_operations_for_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->list_operations_for_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id_request_body** | [**ConnectionIdRequestBody**](ConnectionIdRequestBody.md)|  | 

### Return type

[**OperationReadList**](OperationReadList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_operation**
> OperationRead update_operation(operation_update)

Update an operation

### Example


```python
import openapi_client
from openapi_client.models.operation_read import OperationRead
from openapi_client.models.operation_update import OperationUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationApi(api_client)
    operation_update = openapi_client.OperationUpdate() # OperationUpdate | 

    try:
        # Update an operation
        api_response = api_instance.update_operation(operation_update)
        print("The response of OperationApi->update_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->update_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_update** | [**OperationUpdate**](OperationUpdate.md)|  | 

### Return type

[**OperationRead**](OperationRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


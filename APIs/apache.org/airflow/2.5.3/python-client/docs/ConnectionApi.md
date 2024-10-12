# openapi_client.ConnectionApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_connection**](ConnectionApi.md#delete_connection) | **DELETE** /connections/{connection_id} | Delete a connection
[**get_connection**](ConnectionApi.md#get_connection) | **GET** /connections/{connection_id} | Get a connection
[**get_connections**](ConnectionApi.md#get_connections) | **GET** /connections | List connections
[**patch_connection**](ConnectionApi.md#patch_connection) | **PATCH** /connections/{connection_id} | Update a connection
[**post_connection**](ConnectionApi.md#post_connection) | **POST** /connections | Create a connection
[**test_connection**](ConnectionApi.md#test_connection) | **POST** /connections/test | Test a connection


# **delete_connection**
> delete_connection(connection_id)

Delete a connection

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionApi(api_client)
    connection_id = 'connection_id_example' # str | The connection ID.

    try:
        # Delete a connection
        api_instance.delete_connection(connection_id)
    except Exception as e:
        print("Exception when calling ConnectionApi->delete_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| The connection ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success. |  -  |
**400** | Client specified an invalid argument. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_connection**
> Connection get_connection(connection_id)

Get a connection

### Example


```python
import openapi_client
from openapi_client.models.connection import Connection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionApi(api_client)
    connection_id = 'connection_id_example' # str | The connection ID.

    try:
        # Get a connection
        api_response = api_instance.get_connection(connection_id)
        print("The response of ConnectionApi->get_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionApi->get_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| The connection ID. | 

### Return type

[**Connection**](Connection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_connections**
> ConnectionCollection get_connections(limit=limit, offset=offset, order_by=order_by)

List connections

### Example


```python
import openapi_client
from openapi_client.models.connection_collection import ConnectionCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionApi(api_client)
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)
    order_by = 'order_by_example' # str | The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0*  (optional)

    try:
        # List connections
        api_response = api_instance.get_connections(limit=limit, offset=offset, order_by=order_by)
        print("The response of ConnectionApi->get_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionApi->get_connections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 
 **order_by** | **str**| The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 

### Return type

[**ConnectionCollection**](ConnectionCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_connection**
> Connection patch_connection(connection_id, connection, update_mask=update_mask)

Update a connection

### Example


```python
import openapi_client
from openapi_client.models.connection import Connection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionApi(api_client)
    connection_id = 'connection_id_example' # str | The connection ID.
    connection = openapi_client.Connection() # Connection | 
    update_mask = ['update_mask_example'] # List[str] | The fields to update on the resource. If absent or empty, all modifiable fields are updated. A comma-separated list of fully qualified names of fields.  (optional)

    try:
        # Update a connection
        api_response = api_instance.patch_connection(connection_id, connection, update_mask=update_mask)
        print("The response of ConnectionApi->patch_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionApi->patch_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| The connection ID. | 
 **connection** | [**Connection**](Connection.md)|  | 
 **update_mask** | [**List[str]**](str.md)| The fields to update on the resource. If absent or empty, all modifiable fields are updated. A comma-separated list of fully qualified names of fields.  | [optional] 

### Return type

[**Connection**](Connection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**400** | Client specified an invalid argument. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_connection**
> Connection post_connection(connection)

Create a connection

### Example


```python
import openapi_client
from openapi_client.models.connection import Connection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionApi(api_client)
    connection = openapi_client.Connection() # Connection | 

    try:
        # Create a connection
        api_response = api_instance.post_connection(connection)
        print("The response of ConnectionApi->post_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionApi->post_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection** | [**Connection**](Connection.md)|  | 

### Return type

[**Connection**](Connection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**400** | Client specified an invalid argument. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_connection**
> ConnectionTest test_connection(connection)

Test a connection

Test a connection.  *New in version 2.2.0* 

### Example


```python
import openapi_client
from openapi_client.models.connection import Connection
from openapi_client.models.connection_test import ConnectionTest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionApi(api_client)
    connection = openapi_client.Connection() # Connection | 

    try:
        # Test a connection
        api_response = api_instance.test_connection(connection)
        print("The response of ConnectionApi->test_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionApi->test_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection** | [**Connection**](Connection.md)|  | 

### Return type

[**ConnectionTest**](ConnectionTest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**400** | Client specified an invalid argument. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


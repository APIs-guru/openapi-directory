# openapi_client.VariableApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_variable**](VariableApi.md#delete_variable) | **DELETE** /variables/{variable_key} | Delete a variable
[**get_variable**](VariableApi.md#get_variable) | **GET** /variables/{variable_key} | Get a variable
[**get_variables**](VariableApi.md#get_variables) | **GET** /variables | List variables
[**patch_variable**](VariableApi.md#patch_variable) | **PATCH** /variables/{variable_key} | Update a variable
[**post_variables**](VariableApi.md#post_variables) | **POST** /variables | Create a variable


# **delete_variable**
> delete_variable(variable_key)

Delete a variable

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
    api_instance = openapi_client.VariableApi(api_client)
    variable_key = 'variable_key_example' # str | The variable Key.

    try:
        # Delete a variable
        api_instance.delete_variable(variable_key)
    except Exception as e:
        print("Exception when calling VariableApi->delete_variable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_key** | **str**| The variable Key. | 

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

# **get_variable**
> Variable get_variable(variable_key)

Get a variable

Get a variable by key.

### Example


```python
import openapi_client
from openapi_client.models.variable import Variable
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
    api_instance = openapi_client.VariableApi(api_client)
    variable_key = 'variable_key_example' # str | The variable Key.

    try:
        # Get a variable
        api_response = api_instance.get_variable(variable_key)
        print("The response of VariableApi->get_variable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->get_variable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_key** | **str**| The variable Key. | 

### Return type

[**Variable**](Variable.md)

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

# **get_variables**
> VariableCollection get_variables(limit=limit, offset=offset, order_by=order_by)

List variables

The collection does not contain data. To get data, you must get a single entity.

### Example


```python
import openapi_client
from openapi_client.models.variable_collection import VariableCollection
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
    api_instance = openapi_client.VariableApi(api_client)
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)
    order_by = 'order_by_example' # str | The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0*  (optional)

    try:
        # List variables
        api_response = api_instance.get_variables(limit=limit, offset=offset, order_by=order_by)
        print("The response of VariableApi->get_variables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->get_variables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 
 **order_by** | **str**| The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 

### Return type

[**VariableCollection**](VariableCollection.md)

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

# **patch_variable**
> Variable patch_variable(variable_key, variable, update_mask=update_mask)

Update a variable

Update a variable by key.

### Example


```python
import openapi_client
from openapi_client.models.variable import Variable
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
    api_instance = openapi_client.VariableApi(api_client)
    variable_key = 'variable_key_example' # str | The variable Key.
    variable = openapi_client.Variable() # Variable | 
    update_mask = ['update_mask_example'] # List[str] | The fields to update on the resource. If absent or empty, all modifiable fields are updated. A comma-separated list of fully qualified names of fields.  (optional)

    try:
        # Update a variable
        api_response = api_instance.patch_variable(variable_key, variable, update_mask=update_mask)
        print("The response of VariableApi->patch_variable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->patch_variable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_key** | **str**| The variable Key. | 
 **variable** | [**Variable**](Variable.md)|  | 
 **update_mask** | [**List[str]**](str.md)| The fields to update on the resource. If absent or empty, all modifiable fields are updated. A comma-separated list of fully qualified names of fields.  | [optional] 

### Return type

[**Variable**](Variable.md)

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

# **post_variables**
> Variable post_variables(variable)

Create a variable

### Example


```python
import openapi_client
from openapi_client.models.variable import Variable
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
    api_instance = openapi_client.VariableApi(api_client)
    variable = openapi_client.Variable() # Variable | 

    try:
        # Create a variable
        api_response = api_instance.post_variables(variable)
        print("The response of VariableApi->post_variables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->post_variables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable** | [**Variable**](Variable.md)|  | 

### Return type

[**Variable**](Variable.md)

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


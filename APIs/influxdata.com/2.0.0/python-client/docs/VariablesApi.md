# openapi_client.VariablesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_variables_id**](VariablesApi.md#delete_variables_id) | **DELETE** /variables/{variableID} | Delete a variable
[**delete_variables_id_labels_id**](VariablesApi.md#delete_variables_id_labels_id) | **DELETE** /variables/{variableID}/labels/{labelID} | Delete a label from a variable
[**get_variables**](VariablesApi.md#get_variables) | **GET** /variables | List all variables
[**get_variables_id**](VariablesApi.md#get_variables_id) | **GET** /variables/{variableID} | Retrieve a variable
[**get_variables_id_labels**](VariablesApi.md#get_variables_id_labels) | **GET** /variables/{variableID}/labels | List all labels for a variable
[**patch_variables_id**](VariablesApi.md#patch_variables_id) | **PATCH** /variables/{variableID} | Update a variable
[**post_variables**](VariablesApi.md#post_variables) | **POST** /variables | Create a variable
[**post_variables_id_labels**](VariablesApi.md#post_variables_id_labels) | **POST** /variables/{variableID}/labels | Add a label to a variable
[**put_variables_id**](VariablesApi.md#put_variables_id) | **PUT** /variables/{variableID} | Replace a variable


# **delete_variables_id**
> delete_variables_id(variable_id, zap_trace_span=zap_trace_span)

Delete a variable

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable_id = 'variable_id_example' # str | The variable ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a variable
        api_instance.delete_variables_id(variable_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling VariablesApi->delete_variables_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_id** | **str**| The variable ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Variable deleted |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_variables_id_labels_id**
> delete_variables_id_labels_id(variable_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a variable

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable_id = 'variable_id_example' # str | The variable ID.
    label_id = 'label_id_example' # str | The label ID to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a variable
        api_instance.delete_variables_id_labels_id(variable_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling VariablesApi->delete_variables_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_id** | **str**| The variable ID. | 
 **label_id** | **str**| The label ID to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Delete has been accepted |  -  |
**404** | Variable not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_variables**
> Variables get_variables(zap_trace_span=zap_trace_span, org=org, org_id=org_id)

List all variables

### Example


```python
import openapi_client
from openapi_client.models.variables import Variables
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org = 'org_example' # str | The name of the organization. (optional)
    org_id = 'org_id_example' # str | The organization ID. (optional)

    try:
        # List all variables
        api_response = api_instance.get_variables(zap_trace_span=zap_trace_span, org=org, org_id=org_id)
        print("The response of VariablesApi->get_variables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariablesApi->get_variables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org** | **str**| The name of the organization. | [optional] 
 **org_id** | **str**| The organization ID. | [optional] 

### Return type

[**Variables**](Variables.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of variables for an organization |  -  |
**400** | Non 2XX error response from server. |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_variables_id**
> Variable get_variables_id(variable_id, zap_trace_span=zap_trace_span)

Retrieve a variable

### Example


```python
import openapi_client
from openapi_client.models.variable import Variable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable_id = 'variable_id_example' # str | The variable ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a variable
        api_response = api_instance.get_variables_id(variable_id, zap_trace_span=zap_trace_span)
        print("The response of VariablesApi->get_variables_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariablesApi->get_variables_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_id** | **str**| The variable ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**200** | Variable found |  -  |
**404** | Non 2XX error response from server. |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_variables_id_labels**
> LabelsResponse get_variables_id_labels(variable_id, zap_trace_span=zap_trace_span)

List all labels for a variable

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable_id = 'variable_id_example' # str | The variable ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a variable
        api_response = api_instance.get_variables_id_labels(variable_id, zap_trace_span=zap_trace_span)
        print("The response of VariablesApi->get_variables_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariablesApi->get_variables_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_id** | **str**| The variable ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a variable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_variables_id**
> Variable patch_variables_id(variable_id, variable, zap_trace_span=zap_trace_span)

Update a variable

### Example


```python
import openapi_client
from openapi_client.models.variable import Variable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable_id = 'variable_id_example' # str | The variable ID.
    variable = openapi_client.Variable() # Variable | Variable update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a variable
        api_response = api_instance.patch_variables_id(variable_id, variable, zap_trace_span=zap_trace_span)
        print("The response of VariablesApi->patch_variables_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariablesApi->patch_variables_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_id** | **str**| The variable ID. | 
 **variable** | [**Variable**](Variable.md)| Variable update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**200** | Variable updated |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_variables**
> Variable post_variables(variable, zap_trace_span=zap_trace_span)

Create a variable

### Example


```python
import openapi_client
from openapi_client.models.variable import Variable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable = openapi_client.Variable() # Variable | Variable to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a variable
        api_response = api_instance.post_variables(variable, zap_trace_span=zap_trace_span)
        print("The response of VariablesApi->post_variables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariablesApi->post_variables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable** | [**Variable**](Variable.md)| Variable to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**201** | Variable created |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_variables_id_labels**
> LabelResponse post_variables_id_labels(variable_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a variable

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable_id = 'variable_id_example' # str | The variable ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a variable
        api_response = api_instance.post_variables_id_labels(variable_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of VariablesApi->post_variables_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariablesApi->post_variables_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_id** | **str**| The variable ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The newly added label |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_variables_id**
> Variable put_variables_id(variable_id, variable, zap_trace_span=zap_trace_span)

Replace a variable

### Example


```python
import openapi_client
from openapi_client.models.variable import Variable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VariablesApi(api_client)
    variable_id = 'variable_id_example' # str | The variable ID.
    variable = openapi_client.Variable() # Variable | Variable to replace
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Replace a variable
        api_response = api_instance.put_variables_id(variable_id, variable, zap_trace_span=zap_trace_span)
        print("The response of VariablesApi->put_variables_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariablesApi->put_variables_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variable_id** | **str**| The variable ID. | 
 **variable** | [**Variable**](Variable.md)| Variable to replace | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**200** | Variable updated |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


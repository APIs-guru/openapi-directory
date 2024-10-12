# openapi_client.FunctionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**functions_create_or_replace**](FunctionsApi.md#functions_create_or_replace) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName} | 
[**functions_delete**](FunctionsApi.md#functions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName} | 
[**functions_get**](FunctionsApi.md#functions_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName} | 
[**functions_list_by_streaming_job**](FunctionsApi.md#functions_list_by_streaming_job) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions | 
[**functions_retrieve_default_definition**](FunctionsApi.md#functions_retrieve_default_definition) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/RetrieveDefaultDefinition | 
[**functions_test**](FunctionsApi.md#functions_test) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/test | 
[**functions_update**](FunctionsApi.md#functions_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName} | 


# **functions_create_or_replace**
> Function functions_create_or_replace(api_version, subscription_id, resource_group_name, job_name, function_name, function, if_match=if_match, if_none_match=if_none_match)



Creates a function or replaces an already existing function under an existing streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.function import Function
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FunctionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    function_name = 'function_name_example' # str | The name of the function.
    function = openapi_client.Function() # Function | The definition of the function that will be used to create a new function or replace the existing one under the streaming job.
    if_match = 'if_match_example' # str | The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new function to be created, but to prevent updating an existing function. Other values will result in a 412 Pre-condition Failed response. (optional)

    try:
        api_response = api_instance.functions_create_or_replace(api_version, subscription_id, resource_group_name, job_name, function_name, function, if_match=if_match, if_none_match=if_none_match)
        print("The response of FunctionsApi->functions_create_or_replace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FunctionsApi->functions_create_or_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **function_name** | **str**| The name of the function. | 
 **function** | [**Function**](Function.md)| The definition of the function that will be used to create a new function or replace the existing one under the streaming job. | 
 **if_match** | **str**| The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new function to be created, but to prevent updating an existing function. Other values will result in a 412 Pre-condition Failed response. | [optional] 

### Return type

[**Function**](Function.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The function was successfully created or replaced. |  * ETag - The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |
**201** | The function was successfully created or replaced. |  * ETag - The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **functions_delete**
> functions_delete(api_version, subscription_id, resource_group_name, job_name, function_name)



Deletes a function from the streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FunctionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    function_name = 'function_name_example' # str | The name of the function.

    try:
        api_instance.functions_delete(api_version, subscription_id, resource_group_name, job_name, function_name)
    except Exception as e:
        print("Exception when calling FunctionsApi->functions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **function_name** | **str**| The name of the function. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The function was successfully deleted. |  -  |
**204** | The function does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **functions_get**
> Function functions_get(api_version, subscription_id, resource_group_name, job_name, function_name)



Gets details about the specified function.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.function import Function
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FunctionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    function_name = 'function_name_example' # str | The name of the function.

    try:
        api_response = api_instance.functions_get(api_version, subscription_id, resource_group_name, job_name, function_name)
        print("The response of FunctionsApi->functions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FunctionsApi->functions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **function_name** | **str**| The name of the function. | 

### Return type

[**Function**](Function.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified function. |  * ETag - The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **functions_list_by_streaming_job**
> FunctionListResult functions_list_by_streaming_job(api_version, subscription_id, resource_group_name, job_name, select=select)



Lists all of the functions under the specified streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.function_list_result import FunctionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FunctionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    select = 'select_example' # str | The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or \"*\" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value. (optional)

    try:
        api_response = api_instance.functions_list_by_streaming_job(api_version, subscription_id, resource_group_name, job_name, select=select)
        print("The response of FunctionsApi->functions_list_by_streaming_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FunctionsApi->functions_list_by_streaming_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **select** | **str**| The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or \&quot;*\&quot; to include all properties. By default, all properties are returned except diagnostics. Currently only accepts &#39;*&#39; as a valid value. | [optional] 

### Return type

[**FunctionListResult**](FunctionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the functions under the specified streaming job. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **functions_retrieve_default_definition**
> Function functions_retrieve_default_definition(api_version, subscription_id, resource_group_name, job_name, function_name, function_retrieve_default_definition_parameters=function_retrieve_default_definition_parameters)



Retrieves the default definition of a function based on the parameters specified.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.function import Function
from openapi_client.models.function_retrieve_default_definition_parameters import FunctionRetrieveDefaultDefinitionParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FunctionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    function_name = 'function_name_example' # str | The name of the function.
    function_retrieve_default_definition_parameters = openapi_client.FunctionRetrieveDefaultDefinitionParameters() # FunctionRetrieveDefaultDefinitionParameters | Parameters used to specify the type of function to retrieve the default definition for. (optional)

    try:
        api_response = api_instance.functions_retrieve_default_definition(api_version, subscription_id, resource_group_name, job_name, function_name, function_retrieve_default_definition_parameters=function_retrieve_default_definition_parameters)
        print("The response of FunctionsApi->functions_retrieve_default_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FunctionsApi->functions_retrieve_default_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **function_name** | **str**| The name of the function. | 
 **function_retrieve_default_definition_parameters** | [**FunctionRetrieveDefaultDefinitionParameters**](FunctionRetrieveDefaultDefinitionParameters.md)| Parameters used to specify the type of function to retrieve the default definition for. | [optional] 

### Return type

[**Function**](Function.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the function&#39;s default definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **functions_test**
> FunctionsTest200Response functions_test(api_version, subscription_id, resource_group_name, job_name, function_name, function=function)



Tests if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.function import Function
from openapi_client.models.functions_test200_response import FunctionsTest200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FunctionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    function_name = 'function_name_example' # str | The name of the function.
    function = openapi_client.Function() # Function | If the function specified does not already exist, this parameter must contain the full function definition intended to be tested. If the function specified already exists, this parameter can be left null to test the existing function as is or if specified, the properties specified will overwrite the corresponding properties in the existing function (exactly like a PATCH operation) and the resulting function will be tested. (optional)

    try:
        api_response = api_instance.functions_test(api_version, subscription_id, resource_group_name, job_name, function_name, function=function)
        print("The response of FunctionsApi->functions_test:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FunctionsApi->functions_test: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **function_name** | **str**| The name of the function. | 
 **function** | [**Function**](Function.md)| If the function specified does not already exist, this parameter must contain the full function definition intended to be tested. If the function specified already exists, this parameter can be left null to test the existing function as is or if specified, the properties specified will overwrite the corresponding properties in the existing function (exactly like a PATCH operation) and the resulting function will be tested. | [optional] 

### Return type

[**FunctionsTest200Response**](FunctionsTest200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The test operation completed successfully. |  -  |
**202** | The test request was successfully initiated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **functions_update**
> Function functions_update(api_version, subscription_id, resource_group_name, job_name, function_name, function, if_match=if_match)



Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.function import Function
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FunctionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    function_name = 'function_name_example' # str | The name of the function.
    function = openapi_client.Function() # Function | A function object. The properties specified here will overwrite the corresponding properties in the existing function (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing function will remain the same and not change as a result of this PATCH operation.
    if_match = 'if_match_example' # str | The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)

    try:
        api_response = api_instance.functions_update(api_version, subscription_id, resource_group_name, job_name, function_name, function, if_match=if_match)
        print("The response of FunctionsApi->functions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FunctionsApi->functions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **function_name** | **str**| The name of the function. | 
 **function** | [**Function**](Function.md)| A function object. The properties specified here will overwrite the corresponding properties in the existing function (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing function will remain the same and not change as a result of this PATCH operation. | 
 **if_match** | **str**| The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 

### Return type

[**Function**](Function.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The function was successfully updated. |  * ETag - The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


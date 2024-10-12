# openapi_client.OutputsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**outputs_create_or_replace**](OutputsApi.md#outputs_create_or_replace) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName} | 
[**outputs_delete**](OutputsApi.md#outputs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName} | 
[**outputs_get**](OutputsApi.md#outputs_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName} | 
[**outputs_list_by_streaming_job**](OutputsApi.md#outputs_list_by_streaming_job) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs | 
[**outputs_test**](OutputsApi.md#outputs_test) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}/test | 
[**outputs_update**](OutputsApi.md#outputs_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName} | 


# **outputs_create_or_replace**
> Output outputs_create_or_replace(api_version, subscription_id, resource_group_name, job_name, output_name, output, if_match=if_match, if_none_match=if_none_match)



Creates an output or replaces an already existing output under an existing streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.output import Output
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
    api_instance = openapi_client.OutputsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    output_name = 'output_name_example' # str | The name of the output.
    output = openapi_client.Output() # Output | The definition of the output that will be used to create a new output or replace the existing one under the streaming job.
    if_match = 'if_match_example' # str | The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new output to be created, but to prevent updating an existing output. Other values will result in a 412 Pre-condition Failed response. (optional)

    try:
        api_response = api_instance.outputs_create_or_replace(api_version, subscription_id, resource_group_name, job_name, output_name, output, if_match=if_match, if_none_match=if_none_match)
        print("The response of OutputsApi->outputs_create_or_replace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutputsApi->outputs_create_or_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **output_name** | **str**| The name of the output. | 
 **output** | [**Output**](Output.md)| The definition of the output that will be used to create a new output or replace the existing one under the streaming job. | 
 **if_match** | **str**| The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new output to be created, but to prevent updating an existing output. Other values will result in a 412 Pre-condition Failed response. | [optional] 

### Return type

[**Output**](Output.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The output was successfully created or replaced. |  * ETag - The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |
**201** | The output was successfully created or replaced. |  * ETag - The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **outputs_delete**
> outputs_delete(api_version, subscription_id, resource_group_name, job_name, output_name)



Deletes an output from the streaming job.

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
    api_instance = openapi_client.OutputsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    output_name = 'output_name_example' # str | The name of the output.

    try:
        api_instance.outputs_delete(api_version, subscription_id, resource_group_name, job_name, output_name)
    except Exception as e:
        print("Exception when calling OutputsApi->outputs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **output_name** | **str**| The name of the output. | 

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
**200** | The output was successfully deleted. |  -  |
**204** | The output does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **outputs_get**
> Output outputs_get(api_version, subscription_id, resource_group_name, job_name, output_name)



Gets details about the specified output.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.output import Output
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
    api_instance = openapi_client.OutputsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    output_name = 'output_name_example' # str | The name of the output.

    try:
        api_response = api_instance.outputs_get(api_version, subscription_id, resource_group_name, job_name, output_name)
        print("The response of OutputsApi->outputs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutputsApi->outputs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **output_name** | **str**| The name of the output. | 

### Return type

[**Output**](Output.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified output. |  * ETag - The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **outputs_list_by_streaming_job**
> OutputListResult outputs_list_by_streaming_job(api_version, subscription_id, resource_group_name, job_name, select=select)



Lists all of the outputs under the specified streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.output_list_result import OutputListResult
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
    api_instance = openapi_client.OutputsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    select = 'select_example' # str | The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or \"*\" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value. (optional)

    try:
        api_response = api_instance.outputs_list_by_streaming_job(api_version, subscription_id, resource_group_name, job_name, select=select)
        print("The response of OutputsApi->outputs_list_by_streaming_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutputsApi->outputs_list_by_streaming_job: %s\n" % e)
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

[**OutputListResult**](OutputListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the outputs under the specified streaming job. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **outputs_test**
> OutputsTest200Response outputs_test(api_version, subscription_id, resource_group_name, job_name, output_name, output=output)



Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.output import Output
from openapi_client.models.outputs_test200_response import OutputsTest200Response
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
    api_instance = openapi_client.OutputsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    output_name = 'output_name_example' # str | The name of the output.
    output = openapi_client.Output() # Output | If the output specified does not already exist, this parameter must contain the full output definition intended to be tested. If the output specified already exists, this parameter can be left null to test the existing output as is or if specified, the properties specified will overwrite the corresponding properties in the existing output (exactly like a PATCH operation) and the resulting output will be tested. (optional)

    try:
        api_response = api_instance.outputs_test(api_version, subscription_id, resource_group_name, job_name, output_name, output=output)
        print("The response of OutputsApi->outputs_test:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutputsApi->outputs_test: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **output_name** | **str**| The name of the output. | 
 **output** | [**Output**](Output.md)| If the output specified does not already exist, this parameter must contain the full output definition intended to be tested. If the output specified already exists, this parameter can be left null to test the existing output as is or if specified, the properties specified will overwrite the corresponding properties in the existing output (exactly like a PATCH operation) and the resulting output will be tested. | [optional] 

### Return type

[**OutputsTest200Response**](OutputsTest200Response.md)

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

# **outputs_update**
> Output outputs_update(api_version, subscription_id, resource_group_name, job_name, output_name, output, if_match=if_match)



Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.output import Output
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
    api_instance = openapi_client.OutputsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    output_name = 'output_name_example' # str | The name of the output.
    output = openapi_client.Output() # Output | An Output object. The properties specified here will overwrite the corresponding properties in the existing output (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing output will remain the same and not change as a result of this PATCH operation.
    if_match = 'if_match_example' # str | The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)

    try:
        api_response = api_instance.outputs_update(api_version, subscription_id, resource_group_name, job_name, output_name, output, if_match=if_match)
        print("The response of OutputsApi->outputs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutputsApi->outputs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **output_name** | **str**| The name of the output. | 
 **output** | [**Output**](Output.md)| An Output object. The properties specified here will overwrite the corresponding properties in the existing output (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing output will remain the same and not change as a result of this PATCH operation. | 
 **if_match** | **str**| The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 

### Return type

[**Output**](Output.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The output was successfully updated. |  * ETag - The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


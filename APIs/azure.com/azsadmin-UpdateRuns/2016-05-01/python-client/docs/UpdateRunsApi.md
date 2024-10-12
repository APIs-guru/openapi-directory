# openapi_client.UpdateRunsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_runs_get**](UpdateRunsApi.md#update_runs_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updates/{updateName}/updateRuns/{runName} | 
[**update_runs_get_top_level**](UpdateRunsApi.md#update_runs_get_top_level) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updateRuns/{runName} | 
[**update_runs_list**](UpdateRunsApi.md#update_runs_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updates/{updateName}/updateRuns | 
[**update_runs_list_top_level**](UpdateRunsApi.md#update_runs_list_top_level) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updateRuns | 
[**update_runs_rerun**](UpdateRunsApi.md#update_runs_rerun) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updates/{updateName}/updateRuns/{runName}/rerun | 


# **update_runs_get**
> UpdateRun update_runs_get(subscription_id, resource_group_name, update_location, update_name, run_name, api_version)



Get an instance of update run using the ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_run import UpdateRun
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    update_location = 'update_location_example' # str | The name of the update location.
    update_name = 'update_name_example' # str | Name of the update.
    run_name = 'run_name_example' # str | Update run identifier.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.update_runs_get(subscription_id, resource_group_name, update_location, update_name, run_name, api_version)
        print("The response of UpdateRunsApi->update_runs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateRunsApi->update_runs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name. | 
 **update_location** | **str**| The name of the update location. | 
 **update_name** | **str**| Name of the update. | 
 **run_name** | **str**| Update run identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**UpdateRun**](UpdateRun.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_runs_get_top_level**
> UpdateRun update_runs_get_top_level(subscription_id, resource_group_name, update_location, run_name, api_version)



Get an instance of update run using the ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_run import UpdateRun
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    update_location = 'update_location_example' # str | The name of the update location.
    run_name = 'run_name_example' # str | Update run identifier.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.update_runs_get_top_level(subscription_id, resource_group_name, update_location, run_name, api_version)
        print("The response of UpdateRunsApi->update_runs_get_top_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateRunsApi->update_runs_get_top_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name. | 
 **update_location** | **str**| The name of the update location. | 
 **run_name** | **str**| Update run identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**UpdateRun**](UpdateRun.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_runs_list**
> UpdateRunList update_runs_list(subscription_id, resource_group_name, update_location, update_name, api_version)



Get the list of update runs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_run_list import UpdateRunList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    update_location = 'update_location_example' # str | The name of the update location.
    update_name = 'update_name_example' # str | Name of the update.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.update_runs_list(subscription_id, resource_group_name, update_location, update_name, api_version)
        print("The response of UpdateRunsApi->update_runs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateRunsApi->update_runs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name. | 
 **update_location** | **str**| The name of the update location. | 
 **update_name** | **str**| Name of the update. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**UpdateRunList**](UpdateRunList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_runs_list_top_level**
> UpdateRunList update_runs_list_top_level(subscription_id, resource_group_name, update_location, api_version)



Get the list of update runs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_run_list import UpdateRunList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    update_location = 'update_location_example' # str | The name of the update location.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.update_runs_list_top_level(subscription_id, resource_group_name, update_location, api_version)
        print("The response of UpdateRunsApi->update_runs_list_top_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateRunsApi->update_runs_list_top_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name. | 
 **update_location** | **str**| The name of the update location. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**UpdateRunList**](UpdateRunList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_runs_rerun**
> update_runs_rerun(subscription_id, resource_group_name, update_location, update_name, run_name, api_version)



Resume a failed update.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateRunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    update_location = 'update_location_example' # str | The name of the update location.
    update_name = 'update_name_example' # str | Name of the update.
    run_name = 'run_name_example' # str | Update run identifier.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_instance.update_runs_rerun(subscription_id, resource_group_name, update_location, update_name, run_name, api_version)
    except Exception as e:
        print("Exception when calling UpdateRunsApi->update_runs_rerun: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource group name. | 
 **update_location** | **str**| The name of the update location. | 
 **update_name** | **str**| Name of the update. | 
 **run_name** | **str**| Update run identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


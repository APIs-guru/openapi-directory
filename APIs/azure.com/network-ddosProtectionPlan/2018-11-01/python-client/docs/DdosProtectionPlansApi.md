# openapi_client.DdosProtectionPlansApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ddos_protection_plans_create_or_update**](DdosProtectionPlansApi.md#ddos_protection_plans_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName} | 
[**ddos_protection_plans_delete**](DdosProtectionPlansApi.md#ddos_protection_plans_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName} | 
[**ddos_protection_plans_get**](DdosProtectionPlansApi.md#ddos_protection_plans_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName} | 
[**ddos_protection_plans_list**](DdosProtectionPlansApi.md#ddos_protection_plans_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/ddosProtectionPlans | 
[**ddos_protection_plans_list_by_resource_group**](DdosProtectionPlansApi.md#ddos_protection_plans_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans | 
[**ddos_protection_plans_update_tags**](DdosProtectionPlansApi.md#ddos_protection_plans_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName} | 


# **ddos_protection_plans_create_or_update**
> DdosProtectionPlan ddos_protection_plans_create_or_update(resource_group_name, ddos_protection_plan_name, api_version, subscription_id, parameters)



Creates or updates a DDoS protection plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_protection_plan import DdosProtectionPlan
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
    api_instance = openapi_client.DdosProtectionPlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_protection_plan_name = 'ddos_protection_plan_name_example' # str | The name of the DDoS protection plan.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DdosProtectionPlan() # DdosProtectionPlan | Parameters supplied to the create or update operation.

    try:
        api_response = api_instance.ddos_protection_plans_create_or_update(resource_group_name, ddos_protection_plan_name, api_version, subscription_id, parameters)
        print("The response of DdosProtectionPlansApi->ddos_protection_plans_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosProtectionPlansApi->ddos_protection_plans_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_protection_plan_name** | **str**| The name of the DDoS protection plan. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DdosProtectionPlan**](DdosProtectionPlan.md)| Parameters supplied to the create or update operation. | 

### Return type

[**DdosProtectionPlan**](DdosProtectionPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting DDoS protection plan resource. |  -  |
**201** | Create successful. The operation returns the resulting DDoS protection plan resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_protection_plans_delete**
> ddos_protection_plans_delete(resource_group_name, ddos_protection_plan_name, api_version, subscription_id)



Deletes the specified DDoS protection plan.

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
    api_instance = openapi_client.DdosProtectionPlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_protection_plan_name = 'ddos_protection_plan_name_example' # str | The name of the DDoS protection plan.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.ddos_protection_plans_delete(resource_group_name, ddos_protection_plan_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DdosProtectionPlansApi->ddos_protection_plans_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_protection_plan_name** | **str**| The name of the DDoS protection plan. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_protection_plans_get**
> DdosProtectionPlan ddos_protection_plans_get(resource_group_name, ddos_protection_plan_name, api_version, subscription_id)



Gets information about the specified DDoS protection plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_protection_plan import DdosProtectionPlan
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
    api_instance = openapi_client.DdosProtectionPlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_protection_plan_name = 'ddos_protection_plan_name_example' # str | The name of the DDoS protection plan.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.ddos_protection_plans_get(resource_group_name, ddos_protection_plan_name, api_version, subscription_id)
        print("The response of DdosProtectionPlansApi->ddos_protection_plans_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosProtectionPlansApi->ddos_protection_plans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_protection_plan_name** | **str**| The name of the DDoS protection plan. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DdosProtectionPlan**](DdosProtectionPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the specified DDoS protection plan resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_protection_plans_list**
> DdosProtectionPlanListResult ddos_protection_plans_list(api_version, subscription_id)



Gets all DDoS protection plans in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_protection_plan_list_result import DdosProtectionPlanListResult
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
    api_instance = openapi_client.DdosProtectionPlansApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.ddos_protection_plans_list(api_version, subscription_id)
        print("The response of DdosProtectionPlansApi->ddos_protection_plans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosProtectionPlansApi->ddos_protection_plans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DdosProtectionPlanListResult**](DdosProtectionPlanListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of DDoS protection plan resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_protection_plans_list_by_resource_group**
> DdosProtectionPlanListResult ddos_protection_plans_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets all the DDoS protection plans in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_protection_plan_list_result import DdosProtectionPlanListResult
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
    api_instance = openapi_client.DdosProtectionPlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.ddos_protection_plans_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of DdosProtectionPlansApi->ddos_protection_plans_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosProtectionPlansApi->ddos_protection_plans_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DdosProtectionPlanListResult**](DdosProtectionPlanListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of DDoS protection plan resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_protection_plans_update_tags**
> DdosProtectionPlan ddos_protection_plans_update_tags(resource_group_name, ddos_protection_plan_name, api_version, subscription_id, parameters)



Update a DDoS protection plan tags

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_protection_plan import DdosProtectionPlan
from openapi_client.models.ddos_protection_plans_update_tags_request import DdosProtectionPlansUpdateTagsRequest
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
    api_instance = openapi_client.DdosProtectionPlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_protection_plan_name = 'ddos_protection_plan_name_example' # str | The name of the DDoS protection plan.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DdosProtectionPlansUpdateTagsRequest() # DdosProtectionPlansUpdateTagsRequest | Parameters supplied to the update DDoS protection plan resource tags.

    try:
        api_response = api_instance.ddos_protection_plans_update_tags(resource_group_name, ddos_protection_plan_name, api_version, subscription_id, parameters)
        print("The response of DdosProtectionPlansApi->ddos_protection_plans_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosProtectionPlansApi->ddos_protection_plans_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_protection_plan_name** | **str**| The name of the DDoS protection plan. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DdosProtectionPlansUpdateTagsRequest**](DdosProtectionPlansUpdateTagsRequest.md)| Parameters supplied to the update DDoS protection plan resource tags. | 

### Return type

[**DdosProtectionPlan**](DdosProtectionPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting DDoS protection plan resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


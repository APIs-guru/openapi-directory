# openapi_client.ComputePoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compute_policies_create_or_update**](ComputePoliciesApi.md#compute_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName} | 
[**compute_policies_delete**](ComputePoliciesApi.md#compute_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName} | 
[**compute_policies_get**](ComputePoliciesApi.md#compute_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName} | 
[**compute_policies_list_by_account**](ComputePoliciesApi.md#compute_policies_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies | 
[**compute_policies_update**](ComputePoliciesApi.md#compute_policies_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName} | 


# **compute_policies_create_or_update**
> ComputePolicy compute_policies_create_or_update(subscription_id, resource_group_name, account_name, compute_policy_name, api_version, parameters)



Creates or updates the specified compute policy. During update, the compute policy with the specified name will be replaced with this new compute policy. An account supports, at most, 50 policies

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compute_policy import ComputePolicy
from openapi_client.models.create_or_update_compute_policy_parameters import CreateOrUpdateComputePolicyParameters
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
    api_instance = openapi_client.ComputePoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    compute_policy_name = 'compute_policy_name_example' # str | The name of the compute policy to create or update.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CreateOrUpdateComputePolicyParameters() # CreateOrUpdateComputePolicyParameters | Parameters supplied to create or update the compute policy. The max degree of parallelism per job property, min priority per job property, or both must be present.

    try:
        api_response = api_instance.compute_policies_create_or_update(subscription_id, resource_group_name, account_name, compute_policy_name, api_version, parameters)
        print("The response of ComputePoliciesApi->compute_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComputePoliciesApi->compute_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **compute_policy_name** | **str**| The name of the compute policy to create or update. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CreateOrUpdateComputePolicyParameters**](CreateOrUpdateComputePolicyParameters.md)| Parameters supplied to create or update the compute policy. The max degree of parallelism per job property, min priority per job property, or both must be present. | 

### Return type

[**ComputePolicy**](ComputePolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the specified compute policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compute_policies_delete**
> compute_policies_delete(subscription_id, resource_group_name, account_name, compute_policy_name, api_version)



Deletes the specified compute policy from the specified Data Lake Analytics account

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
    api_instance = openapi_client.ComputePoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    compute_policy_name = 'compute_policy_name_example' # str | The name of the compute policy to delete.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.compute_policies_delete(subscription_id, resource_group_name, account_name, compute_policy_name, api_version)
    except Exception as e:
        print("Exception when calling ComputePoliciesApi->compute_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **compute_policy_name** | **str**| The name of the compute policy to delete. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | Successfully deleted the specified compute policy |  -  |
**204** | The specified compute policy does not exist or was already deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compute_policies_get**
> ComputePolicy compute_policies_get(subscription_id, resource_group_name, account_name, compute_policy_name, api_version)



Gets the specified Data Lake Analytics compute policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compute_policy import ComputePolicy
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
    api_instance = openapi_client.ComputePoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    compute_policy_name = 'compute_policy_name_example' # str | The name of the compute policy to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.compute_policies_get(subscription_id, resource_group_name, account_name, compute_policy_name, api_version)
        print("The response of ComputePoliciesApi->compute_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComputePoliciesApi->compute_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **compute_policy_name** | **str**| The name of the compute policy to retrieve. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ComputePolicy**](ComputePolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified compute policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compute_policies_list_by_account**
> ComputePolicyListResult compute_policies_list_by_account(subscription_id, resource_group_name, account_name, api_version)



Lists the Data Lake Analytics compute policies within the specified Data Lake Analytics account. An account supports, at most, 50 policies

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compute_policy_list_result import ComputePolicyListResult
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
    api_instance = openapi_client.ComputePoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.compute_policies_list_by_account(subscription_id, resource_group_name, account_name, api_version)
        print("The response of ComputePoliciesApi->compute_policies_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComputePoliciesApi->compute_policies_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ComputePolicyListResult**](ComputePolicyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the compute policies. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compute_policies_update**
> ComputePolicy compute_policies_update(subscription_id, resource_group_name, account_name, compute_policy_name, api_version, parameters=parameters)



Updates the specified compute policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compute_policy import ComputePolicy
from openapi_client.models.update_compute_policy_parameters import UpdateComputePolicyParameters
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
    api_instance = openapi_client.ComputePoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    compute_policy_name = 'compute_policy_name_example' # str | The name of the compute policy to update.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.UpdateComputePolicyParameters() # UpdateComputePolicyParameters | Parameters supplied to update the compute policy. (optional)

    try:
        api_response = api_instance.compute_policies_update(subscription_id, resource_group_name, account_name, compute_policy_name, api_version, parameters=parameters)
        print("The response of ComputePoliciesApi->compute_policies_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComputePoliciesApi->compute_policies_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **compute_policy_name** | **str**| The name of the compute policy to update. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**UpdateComputePolicyParameters**](UpdateComputePolicyParameters.md)| Parameters supplied to update the compute policy. | [optional] 

### Return type

[**ComputePolicy**](ComputePolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the specified compute policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


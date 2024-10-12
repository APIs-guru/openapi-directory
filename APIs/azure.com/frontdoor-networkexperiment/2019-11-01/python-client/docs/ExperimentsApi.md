# openapi_client.ExperimentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experiments_create_or_update**](ExperimentsApi.md#experiments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName} | Creates or updates an Experiment
[**experiments_delete**](ExperimentsApi.md#experiments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName} | Deletes an Experiment
[**experiments_get**](ExperimentsApi.md#experiments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName} | Gets an Experiment by ExperimentName
[**experiments_list_by_profile**](ExperimentsApi.md#experiments_list_by_profile) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments | Gets a list of Experiments
[**experiments_update**](ExperimentsApi.md#experiments_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName} | Updates an Experiment by Experiment id


# **experiments_create_or_update**
> Experiment experiments_create_or_update(subscription_id, api_version, resource_group_name, profile_name, experiment_name, parameters)

Creates or updates an Experiment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    experiment_name = 'experiment_name_example' # str | The Experiment identifier associated with the Experiment
    parameters = openapi_client.Experiment() # Experiment | The Experiment resource

    try:
        # Creates or updates an Experiment
        api_response = api_instance.experiments_create_or_update(subscription_id, api_version, resource_group_name, profile_name, experiment_name, parameters)
        print("The response of ExperimentsApi->experiments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **experiment_name** | **str**| The Experiment identifier associated with the Experiment | 
 **parameters** | [**Experiment**](Experiment.md)| The Experiment resource | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. The request has been fulfilled and a new experiment has been created. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_delete**
> experiments_delete(subscription_id, api_version, resource_group_name, profile_name, experiment_name)

Deletes an Experiment

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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    experiment_name = 'experiment_name_example' # str | The Experiment identifier associated with the Experiment

    try:
        # Deletes an Experiment
        api_instance.experiments_delete(subscription_id, api_version, resource_group_name, profile_name, experiment_name)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **experiment_name** | **str**| The Experiment identifier associated with the Experiment | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**204** | No Content. The request has been accepted but the policy was not found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_get**
> Experiment experiments_get(subscription_id, api_version, resource_group_name, profile_name, experiment_name)

Gets an Experiment by ExperimentName

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    experiment_name = 'experiment_name_example' # str | The Experiment identifier associated with the Experiment

    try:
        # Gets an Experiment by ExperimentName
        api_response = api_instance.experiments_get(subscription_id, api_version, resource_group_name, profile_name, experiment_name)
        print("The response of ExperimentsApi->experiments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **experiment_name** | **str**| The Experiment identifier associated with the Experiment | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_list_by_profile**
> ExperimentList experiments_list_by_profile(subscription_id, api_version, resource_group_name, profile_name)

Gets a list of Experiments

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment_list import ExperimentList
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner

    try:
        # Gets a list of Experiments
        api_response = api_instance.experiments_list_by_profile(subscription_id, api_version, resource_group_name, profile_name)
        print("The response of ExperimentsApi->experiments_list_by_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_list_by_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 

### Return type

[**ExperimentList**](ExperimentList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_update**
> Experiment experiments_update(subscription_id, api_version, resource_group_name, profile_name, experiment_name, parameters)

Updates an Experiment by Experiment id

Updates an Experiment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
from openapi_client.models.experiment_update_model import ExperimentUpdateModel
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
    api_instance = openapi_client.ExperimentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    experiment_name = 'experiment_name_example' # str | The Experiment identifier associated with the Experiment
    parameters = openapi_client.ExperimentUpdateModel() # ExperimentUpdateModel | The Experiment Update Model

    try:
        # Updates an Experiment by Experiment id
        api_response = api_instance.experiments_update(subscription_id, api_version, resource_group_name, profile_name, experiment_name, parameters)
        print("The response of ExperimentsApi->experiments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentsApi->experiments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **experiment_name** | **str**| The Experiment identifier associated with the Experiment | 
 **parameters** | [**ExperimentUpdateModel**](ExperimentUpdateModel.md)| The Experiment Update Model | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. successful operation |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.NetworkExperimentProfilesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_experiment_profiles_create_or_update**](NetworkExperimentProfilesApi.md#network_experiment_profiles_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName} | Creates an NetworkExperiment Profile
[**network_experiment_profiles_delete**](NetworkExperimentProfilesApi.md#network_experiment_profiles_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName} | Deletes an NetworkExperiment Profile by ProfileName
[**network_experiment_profiles_get**](NetworkExperimentProfilesApi.md#network_experiment_profiles_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName} | Gets an NetworkExperiment Profile by ProfileName
[**network_experiment_profiles_list**](NetworkExperimentProfilesApi.md#network_experiment_profiles_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/NetworkExperimentProfiles | Gets a list of Network Experiment Profiles under a subscription
[**network_experiment_profiles_list_by_resource_group**](NetworkExperimentProfilesApi.md#network_experiment_profiles_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles | Gets a list of Network Experiment Profiles within a resource group under a subscription
[**network_experiment_profiles_update**](NetworkExperimentProfilesApi.md#network_experiment_profiles_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName} | Updates an NetworkExperimentProfiles by NetworkExperimentProfile name


# **network_experiment_profiles_create_or_update**
> Profile network_experiment_profiles_create_or_update(profile_name, subscription_id, api_version, resource_group_name, parameters)

Creates an NetworkExperiment Profile

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile import Profile
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
    api_instance = openapi_client.NetworkExperimentProfilesApi(api_client)
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    parameters = openapi_client.Profile() # Profile | An Network Experiment Profile

    try:
        # Creates an NetworkExperiment Profile
        api_response = api_instance.network_experiment_profiles_create_or_update(profile_name, subscription_id, api_version, resource_group_name, parameters)
        print("The response of NetworkExperimentProfilesApi->network_experiment_profiles_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkExperimentProfilesApi->network_experiment_profiles_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **parameters** | [**Profile**](Profile.md)| An Network Experiment Profile | 

### Return type

[**Profile**](Profile.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. The request has been fulfilled and a new protection policy has been created. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_experiment_profiles_delete**
> network_experiment_profiles_delete(subscription_id, api_version, resource_group_name, profile_name)

Deletes an NetworkExperiment Profile by ProfileName

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
    api_instance = openapi_client.NetworkExperimentProfilesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner

    try:
        # Deletes an NetworkExperiment Profile by ProfileName
        api_instance.network_experiment_profiles_delete(subscription_id, api_version, resource_group_name, profile_name)
    except Exception as e:
        print("Exception when calling NetworkExperimentProfilesApi->network_experiment_profiles_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 

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
**204** | No Content. The request has been accepted but the profile was not found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_experiment_profiles_get**
> Profile network_experiment_profiles_get(subscription_id, api_version, resource_group_name, profile_name)

Gets an NetworkExperiment Profile by ProfileName

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile import Profile
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
    api_instance = openapi_client.NetworkExperimentProfilesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner

    try:
        # Gets an NetworkExperiment Profile by ProfileName
        api_response = api_instance.network_experiment_profiles_get(subscription_id, api_version, resource_group_name, profile_name)
        print("The response of NetworkExperimentProfilesApi->network_experiment_profiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkExperimentProfilesApi->network_experiment_profiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 

### Return type

[**Profile**](Profile.md)

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

# **network_experiment_profiles_list**
> ProfileList network_experiment_profiles_list(subscription_id, api_version)

Gets a list of Network Experiment Profiles under a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile_list import ProfileList
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
    api_instance = openapi_client.NetworkExperimentProfilesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets a list of Network Experiment Profiles under a subscription
        api_response = api_instance.network_experiment_profiles_list(subscription_id, api_version)
        print("The response of NetworkExperimentProfilesApi->network_experiment_profiles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkExperimentProfilesApi->network_experiment_profiles_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ProfileList**](ProfileList.md)

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

# **network_experiment_profiles_list_by_resource_group**
> ProfileList network_experiment_profiles_list_by_resource_group(subscription_id, api_version, resource_group_name)

Gets a list of Network Experiment Profiles within a resource group under a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile_list import ProfileList
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
    api_instance = openapi_client.NetworkExperimentProfilesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.

    try:
        # Gets a list of Network Experiment Profiles within a resource group under a subscription
        api_response = api_instance.network_experiment_profiles_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of NetworkExperimentProfilesApi->network_experiment_profiles_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkExperimentProfilesApi->network_experiment_profiles_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 

### Return type

[**ProfileList**](ProfileList.md)

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

# **network_experiment_profiles_update**
> Profile network_experiment_profiles_update(subscription_id, api_version, resource_group_name, profile_name, parameters)

Updates an NetworkExperimentProfiles by NetworkExperimentProfile name

Updates an NetworkExperimentProfiles

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile import Profile
from openapi_client.models.profile_update_model import ProfileUpdateModel
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
    api_instance = openapi_client.NetworkExperimentProfilesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner
    parameters = openapi_client.ProfileUpdateModel() # ProfileUpdateModel | The Profile Update Model

    try:
        # Updates an NetworkExperimentProfiles by NetworkExperimentProfile name
        api_response = api_instance.network_experiment_profiles_update(subscription_id, api_version, resource_group_name, profile_name, parameters)
        print("The response of NetworkExperimentProfilesApi->network_experiment_profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkExperimentProfilesApi->network_experiment_profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 
 **parameters** | [**ProfileUpdateModel**](ProfileUpdateModel.md)| The Profile Update Model | 

### Return type

[**Profile**](Profile.md)

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


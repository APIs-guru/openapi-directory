# openapi_client.ProfilesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profiles_check_traffic_manager_relative_dns_name_availability**](ProfilesApi.md#profiles_check_traffic_manager_relative_dns_name_availability) | **POST** /providers/Microsoft.Network/checkTrafficManagerNameAvailability | 
[**profiles_create_or_update**](ProfilesApi.md#profiles_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName} | 
[**profiles_delete**](ProfilesApi.md#profiles_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName} | 
[**profiles_get**](ProfilesApi.md#profiles_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName} | 
[**profiles_list_by_resource_group**](ProfilesApi.md#profiles_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles | 
[**profiles_list_by_subscription**](ProfilesApi.md#profiles_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficmanagerprofiles | 
[**profiles_update**](ProfilesApi.md#profiles_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName} | 


# **profiles_check_traffic_manager_relative_dns_name_availability**
> TrafficManagerNameAvailability profiles_check_traffic_manager_relative_dns_name_availability(api_version, parameters)



Checks the availability of a Traffic Manager Relative DNS name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_traffic_manager_relative_dns_name_availability_parameters import CheckTrafficManagerRelativeDnsNameAvailabilityParameters
from openapi_client.models.traffic_manager_name_availability import TrafficManagerNameAvailability
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
    api_instance = openapi_client.ProfilesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CheckTrafficManagerRelativeDnsNameAvailabilityParameters() # CheckTrafficManagerRelativeDnsNameAvailabilityParameters | The Traffic Manager name parameters supplied to the CheckTrafficManagerNameAvailability operation.

    try:
        api_response = api_instance.profiles_check_traffic_manager_relative_dns_name_availability(api_version, parameters)
        print("The response of ProfilesApi->profiles_check_traffic_manager_relative_dns_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_check_traffic_manager_relative_dns_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CheckTrafficManagerRelativeDnsNameAvailabilityParameters**](CheckTrafficManagerRelativeDnsNameAvailabilityParameters.md)| The Traffic Manager name parameters supplied to the CheckTrafficManagerNameAvailability operation. | 

### Return type

[**TrafficManagerNameAvailability**](TrafficManagerNameAvailability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Traffic Manager Name Availability. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_create_or_update**
> Profile profiles_create_or_update(resource_group_name, profile_name, api_version, subscription_id, parameters)



Create or update a Traffic Manager profile.

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
    api_instance = openapi_client.ProfilesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager profile.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Profile() # Profile | The Traffic Manager profile parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.profiles_create_or_update(resource_group_name, profile_name, api_version, subscription_id, parameters)
        print("The response of ProfilesApi->profiles_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager profile. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Profile**](Profile.md)| The Traffic Manager profile parameters supplied to the CreateOrUpdate operation. | 

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
**200** | The created or updated Traffic Manager profile. |  -  |
**201** | The created or updated Traffic Manager profile. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_delete**
> DeleteOperationResult profiles_delete(resource_group_name, profile_name, api_version, subscription_id)



Deletes a Traffic Manager profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delete_operation_result import DeleteOperationResult
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
    api_instance = openapi_client.ProfilesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager profile to be deleted.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile to be deleted.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.profiles_delete(resource_group_name, profile_name, api_version, subscription_id)
        print("The response of ProfilesApi->profiles_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager profile to be deleted. | 
 **profile_name** | **str**| The name of the Traffic Manager profile to be deleted. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DeleteOperationResult**](DeleteOperationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Traffic Manager Profile was deleted successfully. |  -  |
**204** | The profile does not exist. It could have been deleted on a previous request. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_get**
> Profile profiles_get(resource_group_name, profile_name, api_version, subscription_id)



Gets a Traffic Manager profile.

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
    api_instance = openapi_client.ProfilesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager profile.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.profiles_get(resource_group_name, profile_name, api_version, subscription_id)
        print("The response of ProfilesApi->profiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager profile. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | The Traffic Manager profile. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_by_resource_group**
> ProfileListResult profiles_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists all Traffic Manager profiles within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile_list_result import ProfileListResult
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
    api_instance = openapi_client.ProfilesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager profiles to be listed.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.profiles_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ProfilesApi->profiles_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager profiles to be listed. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ProfileListResult**](ProfileListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of Traffic Manager profiles. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_by_subscription**
> ProfileListResult profiles_list_by_subscription(api_version, subscription_id)



Lists all Traffic Manager profiles within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile_list_result import ProfileListResult
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
    api_instance = openapi_client.ProfilesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.profiles_list_by_subscription(api_version, subscription_id)
        print("The response of ProfilesApi->profiles_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ProfileListResult**](ProfileListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of Traffic Manager profiles. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_update**
> Profile profiles_update(resource_group_name, profile_name, api_version, subscription_id, parameters)



Update a Traffic Manager profile.

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
    api_instance = openapi_client.ProfilesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager profile.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Profile() # Profile | The Traffic Manager profile parameters supplied to the Update operation.

    try:
        api_response = api_instance.profiles_update(resource_group_name, profile_name, api_version, subscription_id, parameters)
        print("The response of ProfilesApi->profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager profile. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Profile**](Profile.md)| The Traffic Manager profile parameters supplied to the Update operation. | 

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
**200** | The updated Traffic Manager profile. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


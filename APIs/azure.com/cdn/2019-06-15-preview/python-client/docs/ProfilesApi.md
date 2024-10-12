# openapi_client.ProfilesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profiles_create**](ProfilesApi.md#profiles_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | 
[**profiles_delete**](ProfilesApi.md#profiles_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | 
[**profiles_generate_sso_uri**](ProfilesApi.md#profiles_generate_sso_uri) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/generateSsoUri | 
[**profiles_get**](ProfilesApi.md#profiles_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | 
[**profiles_list**](ProfilesApi.md#profiles_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Cdn/profiles | 
[**profiles_list_by_resource_group**](ProfilesApi.md#profiles_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles | 
[**profiles_list_resource_usage**](ProfilesApi.md#profiles_list_resource_usage) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/checkResourceUsage | 
[**profiles_list_supported_optimization_types**](ProfilesApi.md#profiles_list_supported_optimization_types) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getSupportedOptimizationTypes | 
[**profiles_update**](ProfilesApi.md#profiles_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | 


# **profiles_create**
> Profile profiles_create(resource_group_name, profile_name, subscription_id, api_version, profile)



Creates a new CDN profile with a profile name under the specified subscription and resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    profile = openapi_client.Profile() # Profile | Profile properties needed to create a new profile.

    try:
        api_response = api_instance.profiles_create(resource_group_name, profile_name, subscription_id, api_version, profile)
        print("The response of ProfilesApi->profiles_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **profile** | [**Profile**](Profile.md)| Profile properties needed to create a new profile. | 

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
**201** | Created. The request has been fulfilled and a new profile has been created. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_delete**
> profiles_delete(resource_group_name, profile_name, subscription_id, api_version)



Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the deletion of all of the sub-resources including endpoints, origins and custom domains.

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
    api_instance = openapi_client.ProfilesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_instance.profiles_delete(resource_group_name, profile_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

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
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**204** | No Content. The request has been accepted but the profile was not found. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_generate_sso_uri**
> SsoUri profiles_generate_sso_uri(resource_group_name, profile_name, subscription_id, api_version)



Generates a dynamic SSO URI used to sign in to the CDN supplemental portal. Supplemental portal is used to configure advanced feature capabilities that are not yet available in the Azure portal, such as core reports in a standard profile; rules engine, advanced HTTP reports, and real-time stats and alerts in a premium profile. The SSO URI changes approximately every 10 minutes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sso_uri import SsoUri
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
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.profiles_generate_sso_uri(resource_group_name, profile_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_generate_sso_uri:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_generate_sso_uri: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**SsoUri**](SsoUri.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_get**
> Profile profiles_get(resource_group_name, profile_name, subscription_id, api_version)



Gets a CDN profile with the specified profile name under the specified subscription and resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.profiles_get(resource_group_name, profile_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

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
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list**
> ProfileListResult profiles_list(subscription_id, api_version)



Lists all of the CDN profiles within an Azure subscription.

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
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.profiles_list(subscription_id, api_version)
        print("The response of ProfilesApi->profiles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

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
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_by_resource_group**
> ProfileListResult profiles_list_by_resource_group(resource_group_name, subscription_id, api_version)



Lists all of the CDN profiles within a resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.profiles_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

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
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_resource_usage**
> ResourceUsageListResult profiles_list_resource_usage(resource_group_name, profile_name, subscription_id, api_version)



Checks the quota and actual usage of endpoints under the given CDN profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_usage_list_result import ResourceUsageListResult
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
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.profiles_list_resource_usage(resource_group_name, profile_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_list_resource_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list_resource_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**ResourceUsageListResult**](ResourceUsageListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_supported_optimization_types**
> SupportedOptimizationTypesListResult profiles_list_supported_optimization_types(resource_group_name, profile_name, subscription_id, api_version)



Gets the supported optimization types for the current profile. A user can create an endpoint with an optimization type from the listed values.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.supported_optimization_types_list_result import SupportedOptimizationTypesListResult
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
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.profiles_list_supported_optimization_types(resource_group_name, profile_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_list_supported_optimization_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list_supported_optimization_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**SupportedOptimizationTypesListResult**](SupportedOptimizationTypesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_update**
> Profile profiles_update(resource_group_name, profile_name, subscription_id, api_version, profile_update_parameters)



Updates an existing CDN profile with the specified profile name under the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile import Profile
from openapi_client.models.profile_update_parameters import ProfileUpdateParameters
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
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    profile_update_parameters = openapi_client.ProfileUpdateParameters() # ProfileUpdateParameters | Profile properties needed to update an existing profile.

    try:
        api_response = api_instance.profiles_update(resource_group_name, profile_name, subscription_id, api_version, profile_update_parameters)
        print("The response of ProfilesApi->profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **profile_update_parameters** | [**ProfileUpdateParameters**](ProfileUpdateParameters.md)| Profile properties needed to update an existing profile. | 

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
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


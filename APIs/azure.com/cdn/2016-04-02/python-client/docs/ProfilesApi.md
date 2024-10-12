# openapi_client.ProfilesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profiles_create**](ProfilesApi.md#profiles_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | Creates a new CDN profile with the specified parameters.
[**profiles_delete_if_exists**](ProfilesApi.md#profiles_delete_if_exists) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the deletion of all subresources including endpoints, origins and custom domains.
[**profiles_generate_sso_uri**](ProfilesApi.md#profiles_generate_sso_uri) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/generateSsoUri | Generates a dynamic SSO URI used to sign in to the CDN Supplemental Portal used for advanced management tasks, such as Country Filtering, Advanced HTTP Reports, and Real-time Stats and Alerts. The SSO URI changes approximately every 10 minutes.
[**profiles_get**](ProfilesApi.md#profiles_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | Gets a CDN profile with the specified parameters.
[**profiles_list_by_resource_group**](ProfilesApi.md#profiles_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles | Lists the CDN profiles within a resource group.
[**profiles_list_by_subscription_id**](ProfilesApi.md#profiles_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Cdn/profiles | Lists the CDN profiles within an Azure subscription.
[**profiles_update**](ProfilesApi.md#profiles_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName} | Updates an existing CDN profile with the specified parameters.


# **profiles_create**
> Profile profiles_create(profile_name, resource_group_name, subscription_id, api_version, profile_properties)

Creates a new CDN profile with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile import Profile
from openapi_client.models.profile_create_parameters import ProfileCreateParameters
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
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-04-02
    profile_properties = openapi_client.ProfileCreateParameters() # ProfileCreateParameters | Profile properties needed for creation.

    try:
        # Creates a new CDN profile with the specified parameters.
        api_response = api_instance.profiles_create(profile_name, resource_group_name, subscription_id, api_version, profile_properties)
        print("The response of ProfilesApi->profiles_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-04-02 | 
 **profile_properties** | [**ProfileCreateParameters**](ProfileCreateParameters.md)| Profile properties needed for creation. | 

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
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted and  the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_delete_if_exists**
> profiles_delete_if_exists(profile_name, resource_group_name, subscription_id, api_version)

Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the deletion of all subresources including endpoints, origins and custom domains.

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
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-04-02

    try:
        # Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the deletion of all subresources including endpoints, origins and custom domains.
        api_instance.profiles_delete_if_exists(profile_name, resource_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_delete_if_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-04-02 | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | No Content. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_generate_sso_uri**
> SsoUri profiles_generate_sso_uri(profile_name, resource_group_name, subscription_id, api_version)

Generates a dynamic SSO URI used to sign in to the CDN Supplemental Portal used for advanced management tasks, such as Country Filtering, Advanced HTTP Reports, and Real-time Stats and Alerts. The SSO URI changes approximately every 10 minutes.

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
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-04-02

    try:
        # Generates a dynamic SSO URI used to sign in to the CDN Supplemental Portal used for advanced management tasks, such as Country Filtering, Advanced HTTP Reports, and Real-time Stats and Alerts. The SSO URI changes approximately every 10 minutes.
        api_response = api_instance.profiles_generate_sso_uri(profile_name, resource_group_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_generate_sso_uri:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_generate_sso_uri: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-04-02 | 

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
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_get**
> Profile profiles_get(profile_name, resource_group_name, subscription_id, api_version)

Gets a CDN profile with the specified parameters.

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
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-04-02

    try:
        # Gets a CDN profile with the specified parameters.
        api_response = api_instance.profiles_get(profile_name, resource_group_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-04-02 | 

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
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_by_resource_group**
> ProfileListResult profiles_list_by_resource_group(resource_group_name, subscription_id, api_version)

Lists the CDN profiles within a resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-04-02

    try:
        # Lists the CDN profiles within a resource group.
        api_response = api_instance.profiles_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of ProfilesApi->profiles_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-04-02 | 

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
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_by_subscription_id**
> ProfileListResult profiles_list_by_subscription_id(subscription_id, api_version)

Lists the CDN profiles within an Azure subscription.

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-04-02

    try:
        # Lists the CDN profiles within an Azure subscription.
        api_response = api_instance.profiles_list_by_subscription_id(subscription_id, api_version)
        print("The response of ProfilesApi->profiles_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-04-02 | 

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
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_update**
> Profile profiles_update(profile_name, resource_group_name, subscription_id, api_version, profile_properties)

Updates an existing CDN profile with the specified parameters.

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
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2016-04-02
    profile_properties = openapi_client.ProfileUpdateParameters() # ProfileUpdateParameters | Profile properties needed for update.

    try:
        # Updates an existing CDN profile with the specified parameters.
        api_response = api_instance.profiles_update(profile_name, resource_group_name, subscription_id, api_version, profile_properties)
        print("The response of ProfilesApi->profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2016-04-02 | 
 **profile_properties** | [**ProfileUpdateParameters**](ProfileUpdateParameters.md)| Profile properties needed for update. | 

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
**200** | OK |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


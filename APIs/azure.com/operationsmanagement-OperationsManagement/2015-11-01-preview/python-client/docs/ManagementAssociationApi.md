# openapi_client.ManagementAssociationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**management_associations_create_or_update**](ManagementAssociationApi.md#management_associations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.OperationsManagement/ManagementAssociations/{managementAssociationName} | Create/Update ManagementAssociation.
[**management_associations_delete**](ManagementAssociationApi.md#management_associations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.OperationsManagement/ManagementAssociations/{managementAssociationName} | Deletes the ManagementAssociation
[**management_associations_get**](ManagementAssociationApi.md#management_associations_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.OperationsManagement/ManagementAssociations/{managementAssociationName} | Retrieve ManagementAssociation.
[**management_associations_list_by_subscription**](ManagementAssociationApi.md#management_associations_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.OperationsManagement/ManagementAssociations | Retrieves the ManagementAssociations list for the subscription


# **management_associations_create_or_update**
> ManagementAssociation management_associations_create_or_update(subscription_id, resource_group_name, api_version, provider_name, resource_type, resource_name, management_association_name, parameters)

Create/Update ManagementAssociation.

Creates or updates the ManagementAssociation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_association import ManagementAssociation
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
    api_instance = openapi_client.ManagementAssociationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    provider_name = 'provider_name_example' # str | Provider name for the parent resource.
    resource_type = 'resource_type_example' # str | Resource type for the parent resource
    resource_name = 'resource_name_example' # str | Parent resource name.
    management_association_name = 'management_association_name_example' # str | User ManagementAssociation Name.
    parameters = openapi_client.ManagementAssociation() # ManagementAssociation | The parameters required to create ManagementAssociation extension.

    try:
        # Create/Update ManagementAssociation.
        api_response = api_instance.management_associations_create_or_update(subscription_id, resource_group_name, api_version, provider_name, resource_type, resource_name, management_association_name, parameters)
        print("The response of ManagementAssociationApi->management_associations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementAssociationApi->management_associations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **provider_name** | **str**| Provider name for the parent resource. | 
 **resource_type** | **str**| Resource type for the parent resource | 
 **resource_name** | **str**| Parent resource name. | 
 **management_association_name** | **str**| User ManagementAssociation Name. | 
 **parameters** | [**ManagementAssociation**](ManagementAssociation.md)| The parameters required to create ManagementAssociation extension. | 

### Return type

[**ManagementAssociation**](ManagementAssociation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_associations_delete**
> management_associations_delete(subscription_id, resource_group_name, provider_name, resource_type, resource_name, management_association_name, api_version)

Deletes the ManagementAssociation

Deletes the ManagementAssociation in the subscription.

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
    api_instance = openapi_client.ManagementAssociationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    provider_name = 'provider_name_example' # str | Provider name for the parent resource.
    resource_type = 'resource_type_example' # str | Resource type for the parent resource
    resource_name = 'resource_name_example' # str | Parent resource name.
    management_association_name = 'management_association_name_example' # str | User ManagementAssociation Name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Deletes the ManagementAssociation
        api_instance.management_associations_delete(subscription_id, resource_group_name, provider_name, resource_type, resource_name, management_association_name, api_version)
    except Exception as e:
        print("Exception when calling ManagementAssociationApi->management_associations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **provider_name** | **str**| Provider name for the parent resource. | 
 **resource_type** | **str**| Resource type for the parent resource | 
 **resource_name** | **str**| Parent resource name. | 
 **management_association_name** | **str**| User ManagementAssociation Name. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_associations_get**
> ManagementAssociation management_associations_get(subscription_id, resource_group_name, provider_name, resource_type, resource_name, management_association_name, api_version)

Retrieve ManagementAssociation.

Retrieves the user ManagementAssociation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_association import ManagementAssociation
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
    api_instance = openapi_client.ManagementAssociationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    provider_name = 'provider_name_example' # str | Provider name for the parent resource.
    resource_type = 'resource_type_example' # str | Resource type for the parent resource
    resource_name = 'resource_name_example' # str | Parent resource name.
    management_association_name = 'management_association_name_example' # str | User ManagementAssociation Name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Retrieve ManagementAssociation.
        api_response = api_instance.management_associations_get(subscription_id, resource_group_name, provider_name, resource_type, resource_name, management_association_name, api_version)
        print("The response of ManagementAssociationApi->management_associations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementAssociationApi->management_associations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **provider_name** | **str**| Provider name for the parent resource. | 
 **resource_type** | **str**| Resource type for the parent resource | 
 **resource_name** | **str**| Parent resource name. | 
 **management_association_name** | **str**| User ManagementAssociation Name. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ManagementAssociation**](ManagementAssociation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_associations_list_by_subscription**
> ManagementAssociationPropertiesList management_associations_list_by_subscription(subscription_id, api_version)

Retrieves the ManagementAssociations list for the subscription

Retrieves the ManagementAssociations list.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_association_properties_list import ManagementAssociationPropertiesList
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
    api_instance = openapi_client.ManagementAssociationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Retrieves the ManagementAssociations list for the subscription
        api_response = api_instance.management_associations_list_by_subscription(subscription_id, api_version)
        print("The response of ManagementAssociationApi->management_associations_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementAssociationApi->management_associations_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ManagementAssociationPropertiesList**](ManagementAssociationPropertiesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


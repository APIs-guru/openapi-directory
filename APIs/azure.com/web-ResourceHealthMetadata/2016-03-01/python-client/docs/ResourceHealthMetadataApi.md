# openapi_client.ResourceHealthMetadataApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_health_metadata_get_by_site**](ResourceHealthMetadataApi.md#resource_health_metadata_get_by_site) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata/default | Gets the category of ResourceHealthMetadata to use for the given site
[**resource_health_metadata_get_by_site_slot**](ResourceHealthMetadataApi.md#resource_health_metadata_get_by_site_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata/default | Gets the category of ResourceHealthMetadata to use for the given site
[**resource_health_metadata_list**](ResourceHealthMetadataApi.md#resource_health_metadata_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/resourceHealthMetadata | List all ResourceHealthMetadata for all sites in the subscription.
[**resource_health_metadata_list_by_resource_group**](ResourceHealthMetadataApi.md#resource_health_metadata_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/resourceHealthMetadata | List all ResourceHealthMetadata for all sites in the resource group in the subscription.
[**resource_health_metadata_list_by_site**](ResourceHealthMetadataApi.md#resource_health_metadata_list_by_site) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata | Gets the category of ResourceHealthMetadata to use for the given site as a collection
[**resource_health_metadata_list_by_site_slot**](ResourceHealthMetadataApi.md#resource_health_metadata_list_by_site_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata | Gets the category of ResourceHealthMetadata to use for the given site as a collection


# **resource_health_metadata_get_by_site**
> ResourceHealthMetadata resource_health_metadata_get_by_site(resource_group_name, name, subscription_id, api_version)

Gets the category of ResourceHealthMetadata to use for the given site

Gets the category of ResourceHealthMetadata to use for the given site

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health_metadata import ResourceHealthMetadata
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
    api_instance = openapi_client.ResourceHealthMetadataApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the category of ResourceHealthMetadata to use for the given site
        api_response = api_instance.resource_health_metadata_get_by_site(resource_group_name, name, subscription_id, api_version)
        print("The response of ResourceHealthMetadataApi->resource_health_metadata_get_by_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceHealthMetadataApi->resource_health_metadata_get_by_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**ResourceHealthMetadata**](ResourceHealthMetadata.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_health_metadata_get_by_site_slot**
> ResourceHealthMetadata resource_health_metadata_get_by_site_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the category of ResourceHealthMetadata to use for the given site

Gets the category of ResourceHealthMetadata to use for the given site

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health_metadata import ResourceHealthMetadata
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
    api_instance = openapi_client.ResourceHealthMetadataApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the category of ResourceHealthMetadata to use for the given site
        api_response = api_instance.resource_health_metadata_get_by_site_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of ResourceHealthMetadataApi->resource_health_metadata_get_by_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceHealthMetadataApi->resource_health_metadata_get_by_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**ResourceHealthMetadata**](ResourceHealthMetadata.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_health_metadata_list**
> ResourceHealthMetadataCollection resource_health_metadata_list(subscription_id, api_version)

List all ResourceHealthMetadata for all sites in the subscription.

List all ResourceHealthMetadata for all sites in the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health_metadata_collection import ResourceHealthMetadataCollection
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
    api_instance = openapi_client.ResourceHealthMetadataApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all ResourceHealthMetadata for all sites in the subscription.
        api_response = api_instance.resource_health_metadata_list(subscription_id, api_version)
        print("The response of ResourceHealthMetadataApi->resource_health_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceHealthMetadataApi->resource_health_metadata_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**ResourceHealthMetadataCollection**](ResourceHealthMetadataCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_health_metadata_list_by_resource_group**
> ResourceHealthMetadataCollection resource_health_metadata_list_by_resource_group(resource_group_name, subscription_id, api_version)

List all ResourceHealthMetadata for all sites in the resource group in the subscription.

List all ResourceHealthMetadata for all sites in the resource group in the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health_metadata_collection import ResourceHealthMetadataCollection
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
    api_instance = openapi_client.ResourceHealthMetadataApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all ResourceHealthMetadata for all sites in the resource group in the subscription.
        api_response = api_instance.resource_health_metadata_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of ResourceHealthMetadataApi->resource_health_metadata_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceHealthMetadataApi->resource_health_metadata_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**ResourceHealthMetadataCollection**](ResourceHealthMetadataCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_health_metadata_list_by_site**
> ResourceHealthMetadataCollection resource_health_metadata_list_by_site(resource_group_name, name, subscription_id, api_version)

Gets the category of ResourceHealthMetadata to use for the given site as a collection

Gets the category of ResourceHealthMetadata to use for the given site as a collection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health_metadata_collection import ResourceHealthMetadataCollection
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
    api_instance = openapi_client.ResourceHealthMetadataApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of web app.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the category of ResourceHealthMetadata to use for the given site as a collection
        api_response = api_instance.resource_health_metadata_list_by_site(resource_group_name, name, subscription_id, api_version)
        print("The response of ResourceHealthMetadataApi->resource_health_metadata_list_by_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceHealthMetadataApi->resource_health_metadata_list_by_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of web app. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**ResourceHealthMetadataCollection**](ResourceHealthMetadataCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_health_metadata_list_by_site_slot**
> ResourceHealthMetadataCollection resource_health_metadata_list_by_site_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the category of ResourceHealthMetadata to use for the given site as a collection

Gets the category of ResourceHealthMetadata to use for the given site as a collection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health_metadata_collection import ResourceHealthMetadataCollection
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
    api_instance = openapi_client.ResourceHealthMetadataApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of web app.
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the category of ResourceHealthMetadata to use for the given site as a collection
        api_response = api_instance.resource_health_metadata_list_by_site_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of ResourceHealthMetadataApi->resource_health_metadata_list_by_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceHealthMetadataApi->resource_health_metadata_list_by_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of web app. | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**ResourceHealthMetadataCollection**](ResourceHealthMetadataCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


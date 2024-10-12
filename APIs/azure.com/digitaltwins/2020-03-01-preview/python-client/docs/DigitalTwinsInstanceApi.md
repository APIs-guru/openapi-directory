# openapi_client.DigitalTwinsInstanceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**digital_twins_create_or_update**](DigitalTwinsInstanceApi.md#digital_twins_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName} | 
[**digital_twins_delete**](DigitalTwinsInstanceApi.md#digital_twins_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName} | 
[**digital_twins_get**](DigitalTwinsInstanceApi.md#digital_twins_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName} | 
[**digital_twins_list**](DigitalTwinsInstanceApi.md#digital_twins_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/digitalTwinsInstances | 
[**digital_twins_list_by_resource_group**](DigitalTwinsInstanceApi.md#digital_twins_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances | 
[**digital_twins_update**](DigitalTwinsInstanceApi.md#digital_twins_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName} | 


# **digital_twins_create_or_update**
> DigitalTwinsDescription digital_twins_create_or_update(api_version, subscription_id, resource_group_name, resource_name, digital_twins_create)



Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified values in a new body to update the DigitalTwinsInstance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_description import DigitalTwinsDescription
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
    api_instance = openapi_client.DigitalTwinsInstanceApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.
    digital_twins_create = openapi_client.DigitalTwinsDescription() # DigitalTwinsDescription | The DigitalTwinsInstance and security metadata.

    try:
        api_response = api_instance.digital_twins_create_or_update(api_version, subscription_id, resource_group_name, resource_name, digital_twins_create)
        print("The response of DigitalTwinsInstanceApi->digital_twins_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DigitalTwinsInstanceApi->digital_twins_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 
 **digital_twins_create** | [**DigitalTwinsDescription**](DigitalTwinsDescription.md)| The DigitalTwinsInstance and security metadata. | 

### Return type

[**DigitalTwinsDescription**](DigitalTwinsDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**201** | Created - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_delete**
> digital_twins_delete(api_version, subscription_id, resource_group_name, resource_name)



Delete a DigitalTwinsInstance.

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
    api_instance = openapi_client.DigitalTwinsInstanceApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.

    try:
        api_instance.digital_twins_delete(api_version, subscription_id, resource_group_name, resource_name)
    except Exception as e:
        print("Exception when calling DigitalTwinsInstanceApi->digital_twins_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 

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
**200** | This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | Accepted - Delete request accepted; the operation will complete asynchronously. |  -  |
**204** | Once the long running delete operation completes successfully, a 204 No Content status code is returned when the status polling request finds the DigitalTwins service metadata in the service and the status of the delete operation is set to a completed state. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_get**
> DigitalTwinsDescription digital_twins_get(api_version, subscription_id, resource_group_name, resource_name)



Get DigitalTwinsInstances resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_description import DigitalTwinsDescription
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
    api_instance = openapi_client.DigitalTwinsInstanceApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.

    try:
        api_response = api_instance.digital_twins_get(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of DigitalTwinsInstanceApi->digital_twins_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DigitalTwinsInstanceApi->digital_twins_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 

### Return type

[**DigitalTwinsDescription**](DigitalTwinsDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_list**
> DigitalTwinsDescriptionListResult digital_twins_list(api_version, subscription_id)



Get all the DigitalTwinsInstances in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_description_list_result import DigitalTwinsDescriptionListResult
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
    api_instance = openapi_client.DigitalTwinsInstanceApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.

    try:
        api_response = api_instance.digital_twins_list(api_version, subscription_id)
        print("The response of DigitalTwinsInstanceApi->digital_twins_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DigitalTwinsInstanceApi->digital_twins_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 

### Return type

[**DigitalTwinsDescriptionListResult**](DigitalTwinsDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the DigitalTwinsInstances in the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_list_by_resource_group**
> DigitalTwinsDescriptionListResult digital_twins_list_by_resource_group(api_version, subscription_id, resource_group_name)



Get all the DigitalTwinsInstances in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_description_list_result import DigitalTwinsDescriptionListResult
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
    api_instance = openapi_client.DigitalTwinsInstanceApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.

    try:
        api_response = api_instance.digital_twins_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of DigitalTwinsInstanceApi->digital_twins_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DigitalTwinsInstanceApi->digital_twins_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 

### Return type

[**DigitalTwinsDescriptionListResult**](DigitalTwinsDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the DigitalTwinsInstances in the resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **digital_twins_update**
> DigitalTwinsDescription digital_twins_update(api_version, subscription_id, resource_group_name, resource_name, digital_twins_patch_description)



Update metadata of DigitalTwinsInstance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_description import DigitalTwinsDescription
from openapi_client.models.digital_twins_patch_description import DigitalTwinsPatchDescription
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
    api_instance = openapi_client.DigitalTwinsInstanceApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.
    digital_twins_patch_description = openapi_client.DigitalTwinsPatchDescription() # DigitalTwinsPatchDescription | The DigitalTwinsInstance and security metadata.

    try:
        api_response = api_instance.digital_twins_update(api_version, subscription_id, resource_group_name, resource_name, digital_twins_patch_description)
        print("The response of DigitalTwinsInstanceApi->digital_twins_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DigitalTwinsInstanceApi->digital_twins_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 
 **digital_twins_patch_description** | [**DigitalTwinsPatchDescription**](DigitalTwinsPatchDescription.md)| The DigitalTwinsInstance and security metadata. | 

### Return type

[**DigitalTwinsDescription**](DigitalTwinsDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**201** | Accepted - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.ServiceResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_check_status**](ServiceResourceApi.md#services_check_status) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/checkStatus | Check service health status
[**services_create_or_update**](ServiceResourceApi.md#services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Create or update DMS Instance
[**services_delete**](ServiceResourceApi.md#services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Delete DMS Service Instance
[**services_get**](ServiceResourceApi.md#services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Get DMS Service Instance
[**services_list**](ServiceResourceApi.md#services_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/services | Get services in subscription
[**services_list_by_resource_group**](ServiceResourceApi.md#services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services | Get services in resource group
[**services_list_skus**](ServiceResourceApi.md#services_list_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/skus | Get compatible SKUs
[**services_start**](ServiceResourceApi.md#services_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/start | Start service
[**services_stop**](ServiceResourceApi.md#services_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/stop | Stop service
[**services_update**](ServiceResourceApi.md#services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Create or update DMS Service Instance
[**tasks_list**](ServiceResourceApi.md#tasks_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks | Get tasks in a service


# **services_check_status**
> ServicesCheckStatus200Response services_check_status(subscription_id, group_name, service_name, api_version)

Check service health status

The services resource is the top-level resource that represents the Data Migration Service. This action performs a health check and returns the status of the service and virtual machine size.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_check_status200_response import ServicesCheckStatus200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Check service health status
        api_response = api_instance.services_check_status(subscription_id, group_name, service_name, api_version)
        print("The response of ServiceResourceApi->services_check_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_check_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesCheckStatus200Response**](ServicesCheckStatus200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Health checked |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_create_or_update**
> ServicesGet200Response services_create_or_update(subscription_id, group_name, service_name, api_version, parameters)

Create or update DMS Instance

The services resource is the top-level resource that represents the Data Migration Service. The PUT method creates a new service or updates an existing one. When a service is updated, existing child resources (i.e. tasks) are unaffected. Services currently support a single kind, \"vm\", which refers to a VM-based service, although other kinds may be added in the future. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request (\"ServiceIsBusy\"). The provider will reply when successful with 200 OK or 201 Created. Long-running operations use the provisioningState property.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_get200_response import ServicesGet200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ServicesGet200Response() # ServicesGet200Response | Information about the service

    try:
        # Create or update DMS Instance
        api_response = api_instance.services_create_or_update(subscription_id, group_name, service_name, api_version, parameters)
        print("The response of ServiceResourceApi->services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ServicesGet200Response**](ServicesGet200Response.md)| Information about the service | 

### Return type

[**ServicesGet200Response**](ServicesGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service updated |  -  |
**201** | Service created (use provisioningState) |  -  |
**202** | Update accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete**
> services_delete(subscription_id, group_name, service_name, api_version, delete_running_tasks=delete_running_tasks)

Delete DMS Service Instance

The services resource is the top-level resource that represents the Data Migration Service. The DELETE method deletes a service. Any running tasks will be canceled.

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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    delete_running_tasks = True # bool | Delete the resource even if it contains running tasks (optional)

    try:
        # Delete DMS Service Instance
        api_instance.services_delete(subscription_id, group_name, service_name, api_version, delete_running_tasks=delete_running_tasks)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **delete_running_tasks** | **bool**| Delete the resource even if it contains running tasks | [optional] 

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
**200** | Service resource deleted |  -  |
**202** | Deletion accepted |  -  |
**204** | Service not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get**
> ServicesGet200Response services_get(subscription_id, group_name, service_name, api_version)

Get DMS Service Instance

The services resource is the top-level resource that represents the Data Migration Service. The GET method retrieves information about a service instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_get200_response import ServicesGet200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get DMS Service Instance
        api_response = api_instance.services_get(subscription_id, group_name, service_name, api_version)
        print("The response of ServiceResourceApi->services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesGet200Response**](ServicesGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A service instance resource |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list**
> ServicesList200Response services_list(subscription_id, api_version)

Get services in subscription

The services resource is the top-level resource that represents the Data Migration Service. This method returns a list of service resources in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_list200_response import ServicesList200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get services in subscription
        api_response = api_instance.services_list(subscription_id, api_version)
        print("The response of ServiceResourceApi->services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesList200Response**](ServicesList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got services |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_by_resource_group**
> ServicesList200Response services_list_by_resource_group(subscription_id, group_name, api_version)

Get services in resource group

The Services resource is the top-level resource that represents the Data Migration Service. This method returns a list of service resources in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_list200_response import ServicesList200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get services in resource group
        api_response = api_instance.services_list_by_resource_group(subscription_id, group_name, api_version)
        print("The response of ServiceResourceApi->services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesList200Response**](ServicesList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got services |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_skus**
> ServicesListSkus200Response services_list_skus(subscription_id, group_name, service_name, api_version)

Get compatible SKUs

The services resource is the top-level resource that represents the Data Migration Service. The skus action returns the list of SKUs that a service resource can be updated to.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_list_skus200_response import ServicesListSkus200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get compatible SKUs
        api_response = api_instance.services_list_skus(subscription_id, group_name, service_name, api_version)
        print("The response of ServiceResourceApi->services_list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesListSkus200Response**](ServicesListSkus200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got SKUs |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_start**
> services_start(subscription_id, group_name, service_name, api_version)

Start service

The services resource is the top-level resource that represents the Data Migration Service. This action starts the service and the service can be used for data migration.

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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Start service
        api_instance.services_start(subscription_id, group_name, service_name, api_version)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

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
**200** | The service has already been started. |  -  |
**202** | The request to start service is accepted. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_stop**
> services_stop(subscription_id, group_name, service_name, api_version)

Stop service

The services resource is the top-level resource that represents the Data Migration Service. This action stops the service and the service cannot be used for data migration. The service owner won't be billed when the service is stopped.

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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Stop service
        api_instance.services_stop(subscription_id, group_name, service_name, api_version)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

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
**200** | The service has already been stopped. |  -  |
**202** | The request to stop service is accepted. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_update**
> ServicesGet200Response services_update(subscription_id, group_name, service_name, api_version, parameters)

Create or update DMS Service Instance

The services resource is the top-level resource that represents the Data Migration Service. The PATCH method updates an existing service. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request (\"ServiceIsBusy\").

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_get200_response import ServicesGet200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ServicesGet200Response() # ServicesGet200Response | Information about the service

    try:
        # Create or update DMS Service Instance
        api_response = api_instance.services_update(subscription_id, group_name, service_name, api_version, parameters)
        print("The response of ServiceResourceApi->services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ServicesGet200Response**](ServicesGet200Response.md)| Information about the service | 

### Return type

[**ServicesGet200Response**](ServicesGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service resource updated |  -  |
**202** | Update accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_list**
> TasksList200Response tasks_list(subscription_id, group_name, service_name, project_name, api_version, task_type=task_type)

Get tasks in a service

The services resource is the top-level resource that represents the Data Migration Service. This method returns a list of tasks owned by a service resource. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tasks_list200_response import TasksList200Response
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
    api_instance = openapi_client.ServiceResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    task_type = 'task_type_example' # str | Filter tasks by task type (optional)

    try:
        # Get tasks in a service
        api_response = api_instance.tasks_list(subscription_id, group_name, service_name, project_name, api_version, task_type=task_type)
        print("The response of ServiceResourceApi->tasks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceResourceApi->tasks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 
 **task_type** | **str**| Filter tasks by task type | [optional] 

### Return type

[**TasksList200Response**](TasksList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got tasks |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.BlobServicesApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blob_services_get**](BlobServicesApi.md#blob_services_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/blobservices/{serviceType} | 
[**blob_services_list_metric_definitions**](BlobServicesApi.md#blob_services_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/blobservices/{serviceType}/metricdefinitions | 
[**blob_services_list_metrics**](BlobServicesApi.md#blob_services_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/blobservices/{serviceType}/metrics | 


# **blob_services_get**
> BlobService blob_services_get(subscription_id, resource_group_name, farm_id, service_type, api_version)



Returns the BLOB service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_service import BlobService
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BlobServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    service_type = 'service_type_example' # str | The service type.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.blob_services_get(subscription_id, resource_group_name, farm_id, service_type, api_version)
        print("The response of BlobServicesApi->blob_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobServicesApi->blob_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **service_type** | **str**| The service type. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**BlobService**](BlobService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The BLOB service has been returned. |  -  |
**404** | NOT FOUND -- The specified farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_services_list_metric_definitions**
> BlobServicesListMetricDefinitions200Response blob_services_list_metric_definitions(subscription_id, resource_group_name, farm_id, service_type, api_version)



Returns the list of metric definitions for BLOB service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_services_list_metric_definitions200_response import BlobServicesListMetricDefinitions200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BlobServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    service_type = 'service_type_example' # str | The service type.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.blob_services_list_metric_definitions(subscription_id, resource_group_name, farm_id, service_type, api_version)
        print("The response of BlobServicesApi->blob_services_list_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobServicesApi->blob_services_list_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **service_type** | **str**| The service type. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**BlobServicesListMetricDefinitions200Response**](BlobServicesListMetricDefinitions200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of metric definitions for the BLOB service has been returned. |  -  |
**404** | NOT FOUND -- The specified farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_services_list_metrics**
> BlobServicesListMetrics200Response blob_services_list_metrics(subscription_id, resource_group_name, farm_id, service_type, api_version)



Returns a list of metrics for BLOB service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_services_list_metrics200_response import BlobServicesListMetrics200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BlobServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    service_type = 'service_type_example' # str | The service type.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.blob_services_list_metrics(subscription_id, resource_group_name, farm_id, service_type, api_version)
        print("The response of BlobServicesApi->blob_services_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlobServicesApi->blob_services_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **service_type** | **str**| The service type. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**BlobServicesListMetrics200Response**](BlobServicesListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of metrics has been returned. |  -  |
**404** | NOT FOUND -- The specified farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


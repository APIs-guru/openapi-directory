# openapi_client.GETApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_hub_resource_get**](GETApi.md#iot_hub_resource_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName} | Get the non-security related metadata of an IoT hub.
[**iot_hub_resource_get_event_hub_consumer_group**](GETApi.md#iot_hub_resource_get_event_hub_consumer_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name} | Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
[**iot_hub_resource_get_job**](GETApi.md#iot_hub_resource_get_job) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId} | Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
[**iot_hub_resource_get_quota_metrics**](GETApi.md#iot_hub_resource_get_quota_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics | Get the quota metrics for an IoT hub.
[**iot_hub_resource_get_stats**](GETApi.md#iot_hub_resource_get_stats) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats | Get the statistics from an IoT hub.
[**iot_hub_resource_get_valid_skus**](GETApi.md#iot_hub_resource_get_valid_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus | Get the list of valid SKUs for an IoT hub.
[**iot_hub_resource_list_by_resource_group**](GETApi.md#iot_hub_resource_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs | Get all the IoT hubs in a resource group.
[**iot_hub_resource_list_by_subscription**](GETApi.md#iot_hub_resource_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs | Get all the IoT hubs in a subscription.
[**iot_hub_resource_list_event_hub_consumer_groups**](GETApi.md#iot_hub_resource_list_event_hub_consumer_groups) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups | Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.
[**iot_hub_resource_list_jobs**](GETApi.md#iot_hub_resource_list_jobs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs | Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.


# **iot_hub_resource_get**
> IotHubDescription iot_hub_resource_get(api_version, subscription_id, resource_group_name, resource_name)

Get the non-security related metadata of an IoT hub.

Get the non-security related metadata of an IoT hub.

### Example


```python
import openapi_client
from openapi_client.models.iot_hub_description import IotHubDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Get the non-security related metadata of an IoT hub.
        api_response = api_instance.iot_hub_resource_get(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of GETApi->iot_hub_resource_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**IotHubDescription**](IotHubDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the IoT hub. Security-related properties are set to null. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_get_event_hub_consumer_group**
> EventHubConsumerGroupInfo iot_hub_resource_get_event_hub_consumer_group(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name, name)

Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.

Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_consumer_group_info import EventHubConsumerGroupInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    event_hub_endpoint_name = 'event_hub_endpoint_name_example' # str | The name of the Event Hub-compatible endpoint in the IoT hub.
    name = 'name_example' # str | The name of the consumer group to retrieve.

    try:
        # Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
        api_response = api_instance.iot_hub_resource_get_event_hub_consumer_group(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name, name)
        print("The response of GETApi->iot_hub_resource_get_event_hub_consumer_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_get_event_hub_consumer_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **event_hub_endpoint_name** | **str**| The name of the Event Hub-compatible endpoint in the IoT hub. | 
 **name** | **str**| The name of the consumer group to retrieve. | 

### Return type

[**EventHubConsumerGroupInfo**](EventHubConsumerGroupInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized consumer group. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_get_job**
> JobResponse iot_hub_resource_get_job(api_version, subscription_id, resource_group_name, resource_name, job_id)

Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.

Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.

### Example


```python
import openapi_client
from openapi_client.models.job_response import JobResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    job_id = 'job_id_example' # str | The job identifier.

    try:
        # Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
        api_response = api_instance.iot_hub_resource_get_job(api_version, subscription_id, resource_group_name, resource_name, job_id)
        print("The response of GETApi->iot_hub_resource_get_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_get_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **job_id** | **str**| The job identifier. | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The response contains a JSON-serialized description of the job in the IoT hub. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_get_quota_metrics**
> IotHubQuotaMetricInfoListResult iot_hub_resource_get_quota_metrics(api_version, subscription_id, resource_group_name, resource_name)

Get the quota metrics for an IoT hub.

Get the quota metrics for an IoT hub.

### Example


```python
import openapi_client
from openapi_client.models.iot_hub_quota_metric_info_list_result import IotHubQuotaMetricInfoListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Get the quota metrics for an IoT hub.
        api_response = api_instance.iot_hub_resource_get_quota_metrics(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of GETApi->iot_hub_resource_get_quota_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_get_quota_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**IotHubQuotaMetricInfoListResult**](IotHubQuotaMetricInfoListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The response contains a JSON-serialized array of the quota metrics for the IoT hub. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_get_stats**
> RegistryStatistics iot_hub_resource_get_stats(api_version, subscription_id, resource_group_name, resource_name)

Get the statistics from an IoT hub.

Get the statistics from an IoT hub.

### Example


```python
import openapi_client
from openapi_client.models.registry_statistics import RegistryStatistics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Get the statistics from an IoT hub.
        api_response = api_instance.iot_hub_resource_get_stats(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of GETApi->iot_hub_resource_get_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_get_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**RegistryStatistics**](RegistryStatistics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains JSON-serialized statistics from the identity registry in the IoT hub. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_get_valid_skus**
> IotHubSkuDescriptionListResult iot_hub_resource_get_valid_skus(api_version, subscription_id, resource_group_name, resource_name)

Get the list of valid SKUs for an IoT hub.

Get the list of valid SKUs for an IoT hub.

### Example


```python
import openapi_client
from openapi_client.models.iot_hub_sku_description_list_result import IotHubSkuDescriptionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Get the list of valid SKUs for an IoT hub.
        api_response = api_instance.iot_hub_resource_get_valid_skus(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of GETApi->iot_hub_resource_get_valid_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_get_valid_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**IotHubSkuDescriptionListResult**](IotHubSkuDescriptionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the valid SKUs for this IoT hub. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_list_by_resource_group**
> IotHubDescriptionListResult iot_hub_resource_list_by_resource_group(api_version, subscription_id, resource_group_name)

Get all the IoT hubs in a resource group.

Get all the IoT hubs in a resource group.

### Example


```python
import openapi_client
from openapi_client.models.iot_hub_description_list_result import IotHubDescriptionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hubs.

    try:
        # Get all the IoT hubs in a resource group.
        api_response = api_instance.iot_hub_resource_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of GETApi->iot_hub_resource_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hubs. | 

### Return type

[**IotHubDescriptionListResult**](IotHubDescriptionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT hubs in the resource group. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_list_by_subscription**
> IotHubDescriptionListResult iot_hub_resource_list_by_subscription(api_version, subscription_id)

Get all the IoT hubs in a subscription.

Get all the IoT hubs in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.iot_hub_description_list_result import IotHubDescriptionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.

    try:
        # Get all the IoT hubs in a subscription.
        api_response = api_instance.iot_hub_resource_list_by_subscription(api_version, subscription_id)
        print("The response of GETApi->iot_hub_resource_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 

### Return type

[**IotHubDescriptionListResult**](IotHubDescriptionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT hubs in the subscription. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_list_event_hub_consumer_groups**
> EventHubConsumerGroupsListResult iot_hub_resource_list_event_hub_consumer_groups(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name)

Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.

Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_consumer_groups_list_result import EventHubConsumerGroupsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    event_hub_endpoint_name = 'event_hub_endpoint_name_example' # str | The name of the Event Hub-compatible endpoint.

    try:
        # Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.
        api_response = api_instance.iot_hub_resource_list_event_hub_consumer_groups(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name)
        print("The response of GETApi->iot_hub_resource_list_event_hub_consumer_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_list_event_hub_consumer_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **event_hub_endpoint_name** | **str**| The name of the Event Hub-compatible endpoint. | 

### Return type

[**EventHubConsumerGroupsListResult**](EventHubConsumerGroupsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized list of the consumer groups in the Event Hub-compatible endpoint in this IoT hub |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_list_jobs**
> JobResponseListResult iot_hub_resource_list_jobs(api_version, subscription_id, resource_group_name, resource_name)

Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.

Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.

### Example


```python
import openapi_client
from openapi_client.models.job_response_list_result import JobResponseListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
        api_response = api_instance.iot_hub_resource_list_jobs(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of GETApi->iot_hub_resource_list_jobs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_hub_resource_list_jobs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**JobResponseListResult**](JobResponseListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The response contains a JSON-serialized array of all the jobs in the IoT hub. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


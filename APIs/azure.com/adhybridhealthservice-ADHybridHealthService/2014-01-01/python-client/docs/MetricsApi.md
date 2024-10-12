# openapi_client.MetricsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_get_metrics**](MetricsApi.md#service_get_metrics) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName} | 
[**service_members_get_connector_metadata**](MetricsApi.md#service_members_get_connector_metadata) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/metrics/{metricName} | 
[**service_members_get_metrics**](MetricsApi.md#service_members_get_metrics) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/metrics/{metricName}/groups/{groupName} | 
[**services_get_metric_metadata**](MetricsApi.md#services_get_metric_metadata) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata/{metricName} | 
[**services_get_metric_metadata_for_group**](MetricsApi.md#services_get_metric_metadata_for_group) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata/{metricName}/groups/{groupName} | 
[**services_list_metric_metadata**](MetricsApi.md#services_list_metric_metadata) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/metricmetadata | 
[**services_list_metrics_average**](MetricsApi.md#services_list_metrics_average) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName}/average | 
[**services_list_metrics_sum**](MetricsApi.md#services_list_metrics_sum) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/metrics/{metricName}/groups/{groupName}/sum | 


# **service_get_metrics**
> MetricSets service_get_metrics(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)



Gets the server related metrics for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_sets import MetricSets
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    group_key = 'group_key_example' # str | The group key (optional)
    from_date = '2013-10-20T19:20:30+01:00' # datetime | The start date. (optional)
    to_date = '2013-10-20T19:20:30+01:00' # datetime | The end date. (optional)

    try:
        api_response = api_instance.service_get_metrics(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)
        print("The response of MetricsApi->service_get_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->service_get_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **group_key** | **str**| The group key | [optional] 
 **from_date** | **datetime**| The start date. | [optional] 
 **to_date** | **datetime**| The end date. | [optional] 

### Return type

[**MetricSets**](MetricSets.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric sets for a given service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_get_connector_metadata**
> ConnectorMetadata service_members_get_connector_metadata(service_name, service_member_id, metric_name, api_version)



Gets the list of connectors and run profile names.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connector_metadata import ConnectorMetadata
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The service member id.
    metric_name = 'metric_name_example' # str | The name of the metric.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.service_members_get_connector_metadata(service_name, service_member_id, metric_name, api_version)
        print("The response of MetricsApi->service_members_get_connector_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->service_members_get_connector_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The service member id. | 
 **metric_name** | **str**| The name of the metric. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ConnectorMetadata**](ConnectorMetadata.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the list of connectors and run profile names for the given service and service member. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_get_metrics**
> MetricSets service_members_get_metrics(service_name, metric_name, group_name, service_member_id, api_version, group_key=group_key, from_date=from_date, to_date=to_date)



Gets the server related metrics for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_sets import MetricSets
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    service_member_id = 'service_member_id_example' # str | The server id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    group_key = 'group_key_example' # str | The group key (optional)
    from_date = '2013-10-20T19:20:30+01:00' # datetime | The start date. (optional)
    to_date = '2013-10-20T19:20:30+01:00' # datetime | The end date. (optional)

    try:
        api_response = api_instance.service_members_get_metrics(service_name, metric_name, group_name, service_member_id, api_version, group_key=group_key, from_date=from_date, to_date=to_date)
        print("The response of MetricsApi->service_members_get_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->service_members_get_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **service_member_id** | **str**| The server id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **group_key** | **str**| The group key | [optional] 
 **from_date** | **datetime**| The start date. | [optional] 
 **to_date** | **datetime**| The end date. | [optional] 

### Return type

[**MetricSets**](MetricSets.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of metric sets for a given metric. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get_metric_metadata**
> MetricMetadata services_get_metric_metadata(service_name, metric_name, api_version)



Gets the service related metrics information.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_metadata import MetricMetadata
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_get_metric_metadata(service_name, metric_name, api_version)
        print("The response of MetricsApi->services_get_metric_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->services_get_metric_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**MetricMetadata**](MetricMetadata.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric metadata for a given metric. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get_metric_metadata_for_group**
> MetricSets services_get_metric_metadata_for_group(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)



Gets the service related metrics for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_sets import MetricSets
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    group_key = 'group_key_example' # str | The group key (optional)
    from_date = '2013-10-20T19:20:30+01:00' # datetime | The start date. (optional)
    to_date = '2013-10-20T19:20:30+01:00' # datetime | The end date. (optional)

    try:
        api_response = api_instance.services_get_metric_metadata_for_group(service_name, metric_name, group_name, api_version, group_key=group_key, from_date=from_date, to_date=to_date)
        print("The response of MetricsApi->services_get_metric_metadata_for_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->services_get_metric_metadata_for_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **group_key** | **str**| The group key | [optional] 
 **from_date** | **datetime**| The start date. | [optional] 
 **to_date** | **datetime**| The end date. | [optional] 

### Return type

[**MetricSets**](MetricSets.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric sets for a given service and group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_metric_metadata**
> MetricMetadataList services_list_metric_metadata(service_name, api_version, filter=filter, perf_counter=perf_counter)



Gets the service related metrics information.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_metadata_list import MetricMetadataList
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The metric metadata property filter to apply. (optional)
    perf_counter = True # bool | Indicates if only performance counter metrics are requested. (optional)

    try:
        api_response = api_instance.services_list_metric_metadata(service_name, api_version, filter=filter, perf_counter=perf_counter)
        print("The response of MetricsApi->services_list_metric_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->services_list_metric_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The metric metadata property filter to apply. | [optional] 
 **perf_counter** | **bool**| Indicates if only performance counter metrics are requested. | [optional] 

### Return type

[**MetricMetadataList**](MetricMetadataList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of metric metadata for a given service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_metrics_average**
> Metrics services_list_metrics_average(service_name, metric_name, group_name, api_version)



Gets the average of the metric values for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metrics import Metrics
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_metrics_average(service_name, metric_name, group_name, api_version)
        print("The response of MetricsApi->services_list_metrics_average:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->services_list_metrics_average: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of average metrics for a given service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_metrics_sum**
> Metrics services_list_metrics_sum(service_name, metric_name, group_name, api_version)



Gets the sum of the metric values for a given metric and group combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metrics import Metrics
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
    api_instance = openapi_client.MetricsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    metric_name = 'metric_name_example' # str | The metric name
    group_name = 'group_name_example' # str | The group name
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_metrics_sum(service_name, metric_name, group_name, api_version)
        print("The response of MetricsApi->services_list_metrics_sum:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->services_list_metrics_sum: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **metric_name** | **str**| The metric name | 
 **group_name** | **str**| The group name | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of metrics for a given service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


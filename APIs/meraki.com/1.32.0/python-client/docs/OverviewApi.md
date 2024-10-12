# openapi_client.OverviewApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_camera_analytics_overview_2**](OverviewApi.md#get_device_camera_analytics_overview_2) | **GET** /devices/{serial}/camera/analytics/overview | Returns an overview of aggregate analytics data for a timespan
[**get_network_clients_overview_2**](OverviewApi.md#get_network_clients_overview_2) | **GET** /networks/{networkId}/clients/overview | Return overview statistics for network clients
[**get_network_sensor_alerts_current_overview_by_metric_3**](OverviewApi.md#get_network_sensor_alerts_current_overview_by_metric_3) | **GET** /networks/{networkId}/sensor/alerts/current/overview/byMetric | Return an overview of currently alerting sensors by metric
[**get_network_sensor_alerts_overview_by_metric_2**](OverviewApi.md#get_network_sensor_alerts_overview_by_metric_2) | **GET** /networks/{networkId}/sensor/alerts/overview/byMetric | Return an overview of alert occurrences over a timespan, by metric
[**get_organization_adaptive_policy_overview_2**](OverviewApi.md#get_organization_adaptive_policy_overview_2) | **GET** /organizations/{organizationId}/adaptivePolicy/overview | Returns adaptive policy aggregate statistics for an organization
[**get_organization_api_requests_overview_2**](OverviewApi.md#get_organization_api_requests_overview_2) | **GET** /organizations/{organizationId}/apiRequests/overview | Return an aggregated overview of API requests data
[**get_organization_api_requests_overview_response_codes_by_interval_2**](OverviewApi.md#get_organization_api_requests_overview_response_codes_by_interval_2) | **GET** /organizations/{organizationId}/apiRequests/overview/responseCodes/byInterval | Tracks organizations&#39; API requests by response code across a given time period
[**get_organization_clients_overview_2**](OverviewApi.md#get_organization_clients_overview_2) | **GET** /organizations/{organizationId}/clients/overview | Return summary information around client data usage (in mb) across the given organization.
[**get_organization_devices_statuses_overview_3**](OverviewApi.md#get_organization_devices_statuses_overview_3) | **GET** /organizations/{organizationId}/devices/statuses/overview | Return an overview of current device statuses
[**get_organization_licenses_overview_2**](OverviewApi.md#get_organization_licenses_overview_2) | **GET** /organizations/{organizationId}/licenses/overview | Return an overview of the license state for an organization


# **get_device_camera_analytics_overview_2**
> List[object] get_device_camera_analytics_overview_2(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)

Returns an overview of aggregate analytics data for a timespan

Returns an overview of aggregate analytics data for a timespan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. (optional)
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Returns an overview of aggregate analytics data for a timespan
        api_response = api_instance.get_device_camera_analytics_overview_2(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)
        print("The response of OverviewApi->get_device_camera_analytics_overview_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_device_camera_analytics_overview_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. | [optional] 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_clients_overview_2**
> object get_network_clients_overview_2(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

Return overview statistics for network clients

Return overview statistics for network clients

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800. (optional)

    try:
        # Return overview statistics for network clients
        api_response = api_instance.get_network_clients_overview_2(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of OverviewApi->get_network_clients_overview_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_network_clients_overview_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800. | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sensor_alerts_current_overview_by_metric_3**
> GetNetworkSensorAlertsCurrentOverviewByMetric200Response get_network_sensor_alerts_current_overview_by_metric_3(network_id)

Return an overview of currently alerting sensors by metric

Return an overview of currently alerting sensors by metric

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_current_overview_by_metric200_response import GetNetworkSensorAlertsCurrentOverviewByMetric200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return an overview of currently alerting sensors by metric
        api_response = api_instance.get_network_sensor_alerts_current_overview_by_metric_3(network_id)
        print("The response of OverviewApi->get_network_sensor_alerts_current_overview_by_metric_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_network_sensor_alerts_current_overview_by_metric_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSensorAlertsCurrentOverviewByMetric200Response**](GetNetworkSensorAlertsCurrentOverviewByMetric200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sensor_alerts_overview_by_metric_2**
> List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner] get_network_sensor_alerts_overview_by_metric_2(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)

Return an overview of alert occurrences over a timespan, by metric

Return an overview of alert occurrences over a timespan, by metric

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_overview_by_metric200_response_inner import GetNetworkSensorAlertsOverviewByMetric200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. (optional)

    try:
        # Return an overview of alert occurrences over a timespan, by metric
        api_response = api_instance.get_network_sensor_alerts_overview_by_metric_2(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)
        print("The response of OverviewApi->get_network_sensor_alerts_overview_by_metric_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_network_sensor_alerts_overview_by_metric_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **interval** | **int**| The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. | [optional] 

### Return type

[**List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner]**](GetNetworkSensorAlertsOverviewByMetric200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_overview_2**
> GetOrganizationAdaptivePolicyOverview200Response get_organization_adaptive_policy_overview_2(organization_id)

Returns adaptive policy aggregate statistics for an organization

Returns adaptive policy aggregate statistics for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_adaptive_policy_overview200_response import GetOrganizationAdaptivePolicyOverview200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns adaptive policy aggregate statistics for an organization
        api_response = api_instance.get_organization_adaptive_policy_overview_2(organization_id)
        print("The response of OverviewApi->get_organization_adaptive_policy_overview_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_organization_adaptive_policy_overview_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationAdaptivePolicyOverview200Response**](GetOrganizationAdaptivePolicyOverview200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_api_requests_overview_2**
> object get_organization_api_requests_overview_2(organization_id, t0=t0, t1=t1, timespan=timespan)

Return an aggregated overview of API requests data

Return an aggregated overview of API requests data

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. (optional)

    try:
        # Return an aggregated overview of API requests data
        api_response = api_instance.get_organization_api_requests_overview_2(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OverviewApi->get_organization_api_requests_overview_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_organization_api_requests_overview_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_api_requests_overview_response_codes_by_interval_2**
> List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner] get_organization_api_requests_overview_response_codes_by_interval_2(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)

Tracks organizations' API requests by response code across a given time period

Tracks organizations' API requests by response code across a given time period

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_api_requests_overview_response_codes_by_interval200_response_inner import GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided. (optional)
    version = 56 # int | Filter by API version of the endpoint. Allowable values are: [0, 1] (optional)
    operation_ids = ['operation_ids_example'] # List[str] | Filter by operation ID of the endpoint (optional)
    source_ips = ['source_ips_example'] # List[str] | Filter by source IP that made the API request (optional)
    admin_ids = ['admin_ids_example'] # List[str] | Filter by admin ID of user that made the API request (optional)
    user_agent = 'user_agent_example' # str | Filter by user agent string for API request. This will filter by a complete or partial match. (optional)

    try:
        # Tracks organizations' API requests by response code across a given time period
        api_response = api_instance.get_organization_api_requests_overview_response_codes_by_interval_2(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)
        print("The response of OverviewApi->get_organization_api_requests_overview_response_codes_by_interval_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_organization_api_requests_overview_response_codes_by_interval_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated. | [optional] 
 **interval** | **int**| The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided. | [optional] 
 **version** | **int**| Filter by API version of the endpoint. Allowable values are: [0, 1] | [optional] 
 **operation_ids** | [**List[str]**](str.md)| Filter by operation ID of the endpoint | [optional] 
 **source_ips** | [**List[str]**](str.md)| Filter by source IP that made the API request | [optional] 
 **admin_ids** | [**List[str]**](str.md)| Filter by admin ID of user that made the API request | [optional] 
 **user_agent** | **str**| Filter by user agent string for API request. This will filter by a complete or partial match. | [optional] 

### Return type

[**List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner]**](GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_clients_overview_2**
> GetOrganizationClientsOverview200Response get_organization_clients_overview_2(organization_id, t0=t0, t1=t1, timespan=timespan)

Return summary information around client data usage (in mb) across the given organization.

Return summary information around client data usage (in mb) across the given organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_clients_overview200_response import GetOrganizationClientsOverview200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return summary information around client data usage (in mb) across the given organization.
        api_response = api_instance.get_organization_clients_overview_2(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OverviewApi->get_organization_clients_overview_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_organization_clients_overview_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**GetOrganizationClientsOverview200Response**](GetOrganizationClientsOverview200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices_statuses_overview_3**
> GetOrganizationDevicesStatusesOverview200Response get_organization_devices_statuses_overview_3(organization_id, product_types=product_types, network_ids=network_ids)

Return an overview of current device statuses

Return an overview of current device statuses

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_statuses_overview200_response import GetOrganizationDevicesStatusesOverview200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    organization_id = 'organization_id_example' # str | 
    product_types = ['product_types_example'] # List[str] | An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    network_ids = ['network_ids_example'] # List[str] | An optional parameter to filter device statuses by network. (optional)

    try:
        # Return an overview of current device statuses
        api_response = api_instance.get_organization_devices_statuses_overview_3(organization_id, product_types=product_types, network_ids=network_ids)
        print("The response of OverviewApi->get_organization_devices_statuses_overview_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_organization_devices_statuses_overview_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **product_types** | [**List[str]**](str.md)| An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. | [optional] 
 **network_ids** | [**List[str]**](str.md)| An optional parameter to filter device statuses by network. | [optional] 

### Return type

[**GetOrganizationDevicesStatusesOverview200Response**](GetOrganizationDevicesStatusesOverview200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_licenses_overview_2**
> object get_organization_licenses_overview_2(organization_id)

Return an overview of the license state for an organization

Return an overview of the license state for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return an overview of the license state for an organization
        api_response = api_instance.get_organization_licenses_overview_2(organization_id)
        print("The response of OverviewApi->get_organization_licenses_overview_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_organization_licenses_overview_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


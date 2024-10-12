# openapi_client.SensorApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_sensor_alerts_profile**](SensorApi.md#create_network_sensor_alerts_profile) | **POST** /networks/{networkId}/sensor/alerts/profiles | Creates a sensor alert profile for a network.
[**delete_network_sensor_alerts_profile**](SensorApi.md#delete_network_sensor_alerts_profile) | **DELETE** /networks/{networkId}/sensor/alerts/profiles/{id} | Deletes a sensor alert profile from a network.
[**get_device_sensor_relationships**](SensorApi.md#get_device_sensor_relationships) | **GET** /devices/{serial}/sensor/relationships | List the sensor roles for a given sensor or camera device.
[**get_network_sensor_alerts_current_overview_by_metric**](SensorApi.md#get_network_sensor_alerts_current_overview_by_metric) | **GET** /networks/{networkId}/sensor/alerts/current/overview/byMetric | Return an overview of currently alerting sensors by metric
[**get_network_sensor_alerts_overview_by_metric**](SensorApi.md#get_network_sensor_alerts_overview_by_metric) | **GET** /networks/{networkId}/sensor/alerts/overview/byMetric | Return an overview of alert occurrences over a timespan, by metric
[**get_network_sensor_alerts_profile**](SensorApi.md#get_network_sensor_alerts_profile) | **GET** /networks/{networkId}/sensor/alerts/profiles/{id} | Show details of a sensor alert profile for a network.
[**get_network_sensor_alerts_profiles**](SensorApi.md#get_network_sensor_alerts_profiles) | **GET** /networks/{networkId}/sensor/alerts/profiles | Lists all sensor alert profiles for a network.
[**get_network_sensor_relationships**](SensorApi.md#get_network_sensor_relationships) | **GET** /networks/{networkId}/sensor/relationships | List the sensor roles for devices in a given network
[**get_organization_sensor_readings_history**](SensorApi.md#get_organization_sensor_readings_history) | **GET** /organizations/{organizationId}/sensor/readings/history | Return all reported readings from sensors in a given timespan, sorted by timestamp
[**get_organization_sensor_readings_latest**](SensorApi.md#get_organization_sensor_readings_latest) | **GET** /organizations/{organizationId}/sensor/readings/latest | Return the latest available reading for each metric from each sensor, sorted by sensor serial
[**update_device_sensor_relationships**](SensorApi.md#update_device_sensor_relationships) | **PUT** /devices/{serial}/sensor/relationships | Assign one or more sensor roles to a given sensor or camera device.
[**update_network_sensor_alerts_profile**](SensorApi.md#update_network_sensor_alerts_profile) | **PUT** /networks/{networkId}/sensor/alerts/profiles/{id} | Updates a sensor alert profile for a network.


# **create_network_sensor_alerts_profile**
> GetNetworkSensorAlertsProfiles200ResponseInner create_network_sensor_alerts_profile(network_id, create_network_sensor_alerts_profile_request)

Creates a sensor alert profile for a network.

Creates a sensor alert profile for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sensor_alerts_profile_request import CreateNetworkSensorAlertsProfileRequest
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_sensor_alerts_profile_request = openapi_client.CreateNetworkSensorAlertsProfileRequest() # CreateNetworkSensorAlertsProfileRequest | 

    try:
        # Creates a sensor alert profile for a network.
        api_response = api_instance.create_network_sensor_alerts_profile(network_id, create_network_sensor_alerts_profile_request)
        print("The response of SensorApi->create_network_sensor_alerts_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->create_network_sensor_alerts_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_sensor_alerts_profile_request** | [**CreateNetworkSensorAlertsProfileRequest**](CreateNetworkSensorAlertsProfileRequest.md)|  | 

### Return type

[**GetNetworkSensorAlertsProfiles200ResponseInner**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_sensor_alerts_profile**
> delete_network_sensor_alerts_profile(network_id, id)

Deletes a sensor alert profile from a network.

Deletes a sensor alert profile from a network.

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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Deletes a sensor alert profile from a network.
        api_instance.delete_network_sensor_alerts_profile(network_id, id)
    except Exception as e:
        print("Exception when calling SensorApi->delete_network_sensor_alerts_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_sensor_relationships**
> List[GetDeviceSensorRelationships200ResponseInner] get_device_sensor_relationships(serial)

List the sensor roles for a given sensor or camera device.

List the sensor roles for a given sensor or camera device.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_sensor_relationships200_response_inner import GetDeviceSensorRelationships200ResponseInner
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
    api_instance = openapi_client.SensorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List the sensor roles for a given sensor or camera device.
        api_response = api_instance.get_device_sensor_relationships(serial)
        print("The response of SensorApi->get_device_sensor_relationships:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_device_sensor_relationships: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**List[GetDeviceSensorRelationships200ResponseInner]**](GetDeviceSensorRelationships200ResponseInner.md)

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

# **get_network_sensor_alerts_current_overview_by_metric**
> GetNetworkSensorAlertsCurrentOverviewByMetric200Response get_network_sensor_alerts_current_overview_by_metric(network_id)

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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return an overview of currently alerting sensors by metric
        api_response = api_instance.get_network_sensor_alerts_current_overview_by_metric(network_id)
        print("The response of SensorApi->get_network_sensor_alerts_current_overview_by_metric:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_network_sensor_alerts_current_overview_by_metric: %s\n" % e)
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

# **get_network_sensor_alerts_overview_by_metric**
> List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner] get_network_sensor_alerts_overview_by_metric(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)

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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. (optional)

    try:
        # Return an overview of alert occurrences over a timespan, by metric
        api_response = api_instance.get_network_sensor_alerts_overview_by_metric(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)
        print("The response of SensorApi->get_network_sensor_alerts_overview_by_metric:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_network_sensor_alerts_overview_by_metric: %s\n" % e)
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

# **get_network_sensor_alerts_profile**
> GetNetworkSensorAlertsProfiles200ResponseInner get_network_sensor_alerts_profile(network_id, id)

Show details of a sensor alert profile for a network.

Show details of a sensor alert profile for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Show details of a sensor alert profile for a network.
        api_response = api_instance.get_network_sensor_alerts_profile(network_id, id)
        print("The response of SensorApi->get_network_sensor_alerts_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_network_sensor_alerts_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**GetNetworkSensorAlertsProfiles200ResponseInner**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

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

# **get_network_sensor_alerts_profiles**
> List[GetNetworkSensorAlertsProfiles200ResponseInner] get_network_sensor_alerts_profiles(network_id)

Lists all sensor alert profiles for a network.

Lists all sensor alert profiles for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Lists all sensor alert profiles for a network.
        api_response = api_instance.get_network_sensor_alerts_profiles(network_id)
        print("The response of SensorApi->get_network_sensor_alerts_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_network_sensor_alerts_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSensorAlertsProfiles200ResponseInner]**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

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

# **get_network_sensor_relationships**
> List[GetNetworkSensorRelationships200ResponseInner] get_network_sensor_relationships(network_id)

List the sensor roles for devices in a given network

List the sensor roles for devices in a given network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_relationships200_response_inner import GetNetworkSensorRelationships200ResponseInner
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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the sensor roles for devices in a given network
        api_response = api_instance.get_network_sensor_relationships(network_id)
        print("The response of SensorApi->get_network_sensor_relationships:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_network_sensor_relationships: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSensorRelationships200ResponseInner]**](GetNetworkSensorRelationships200ResponseInner.md)

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

# **get_organization_sensor_readings_history**
> List[GetOrganizationSensorReadingsHistory200ResponseInner] get_organization_sensor_readings_history(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, network_ids=network_ids, serials=serials, metrics=metrics)

Return all reported readings from sensors in a given timespan, sorted by timestamp

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sensor_readings_history200_response_inner import GetOrganizationSensorReadingsHistory200ResponseInner
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
    api_instance = openapi_client.SensorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days and 6 hours from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter readings by network. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter readings by sensor. (optional)
    metrics = ['metrics_example'] # List[str] | Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. (optional)

    try:
        # Return all reported readings from sensors in a given timespan, sorted by timestamp
        api_response = api_instance.get_organization_sensor_readings_history(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, network_ids=network_ids, serials=serials, metrics=metrics)
        print("The response of SensorApi->get_organization_sensor_readings_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_organization_sensor_readings_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days and 6 hours from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter readings by network. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter readings by sensor. | [optional] 
 **metrics** | [**List[str]**](str.md)| Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. | [optional] 

### Return type

[**List[GetOrganizationSensorReadingsHistory200ResponseInner]**](GetOrganizationSensorReadingsHistory200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_sensor_readings_latest**
> List[GetOrganizationSensorReadingsLatest200ResponseInner] get_organization_sensor_readings_latest(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, metrics=metrics)

Return the latest available reading for each metric from each sensor, sorted by sensor serial

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sensor_readings_latest200_response_inner import GetOrganizationSensorReadingsLatest200ResponseInner
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
    api_instance = openapi_client.SensorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter readings by network. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter readings by sensor. (optional)
    metrics = ['metrics_example'] # List[str] | Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. (optional)

    try:
        # Return the latest available reading for each metric from each sensor, sorted by sensor serial
        api_response = api_instance.get_organization_sensor_readings_latest(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, metrics=metrics)
        print("The response of SensorApi->get_organization_sensor_readings_latest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->get_organization_sensor_readings_latest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter readings by network. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter readings by sensor. | [optional] 
 **metrics** | [**List[str]**](str.md)| Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. | [optional] 

### Return type

[**List[GetOrganizationSensorReadingsLatest200ResponseInner]**](GetOrganizationSensorReadingsLatest200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_sensor_relationships**
> GetDeviceSensorRelationships200ResponseInner update_device_sensor_relationships(serial, update_device_sensor_relationships_request=update_device_sensor_relationships_request)

Assign one or more sensor roles to a given sensor or camera device.

Assign one or more sensor roles to a given sensor or camera device.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_sensor_relationships200_response_inner import GetDeviceSensorRelationships200ResponseInner
from openapi_client.models.update_device_sensor_relationships_request import UpdateDeviceSensorRelationshipsRequest
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
    api_instance = openapi_client.SensorApi(api_client)
    serial = 'serial_example' # str | 
    update_device_sensor_relationships_request = openapi_client.UpdateDeviceSensorRelationshipsRequest() # UpdateDeviceSensorRelationshipsRequest |  (optional)

    try:
        # Assign one or more sensor roles to a given sensor or camera device.
        api_response = api_instance.update_device_sensor_relationships(serial, update_device_sensor_relationships_request=update_device_sensor_relationships_request)
        print("The response of SensorApi->update_device_sensor_relationships:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->update_device_sensor_relationships: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_sensor_relationships_request** | [**UpdateDeviceSensorRelationshipsRequest**](UpdateDeviceSensorRelationshipsRequest.md)|  | [optional] 

### Return type

[**GetDeviceSensorRelationships200ResponseInner**](GetDeviceSensorRelationships200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_sensor_alerts_profile**
> GetNetworkSensorAlertsProfiles200ResponseInner update_network_sensor_alerts_profile(network_id, id, update_network_sensor_alerts_profile_request=update_network_sensor_alerts_profile_request)

Updates a sensor alert profile for a network.

Updates a sensor alert profile for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
from openapi_client.models.update_network_sensor_alerts_profile_request import UpdateNetworkSensorAlertsProfileRequest
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
    api_instance = openapi_client.SensorApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 
    update_network_sensor_alerts_profile_request = openapi_client.UpdateNetworkSensorAlertsProfileRequest() # UpdateNetworkSensorAlertsProfileRequest |  (optional)

    try:
        # Updates a sensor alert profile for a network.
        api_response = api_instance.update_network_sensor_alerts_profile(network_id, id, update_network_sensor_alerts_profile_request=update_network_sensor_alerts_profile_request)
        print("The response of SensorApi->update_network_sensor_alerts_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensorApi->update_network_sensor_alerts_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **id** | **str**|  | 
 **update_network_sensor_alerts_profile_request** | [**UpdateNetworkSensorAlertsProfileRequest**](UpdateNetworkSensorAlertsProfileRequest.md)|  | [optional] 

### Return type

[**GetNetworkSensorAlertsProfiles200ResponseInner**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.AlertsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_sensor_alerts_profile_1**](AlertsApi.md#create_network_sensor_alerts_profile_1) | **POST** /networks/{networkId}/sensor/alerts/profiles | Creates a sensor alert profile for a network.
[**create_organization_alerts_profile_1**](AlertsApi.md#create_organization_alerts_profile_1) | **POST** /organizations/{organizationId}/alerts/profiles | Create an organization-wide alert configuration
[**delete_network_sensor_alerts_profile_1**](AlertsApi.md#delete_network_sensor_alerts_profile_1) | **DELETE** /networks/{networkId}/sensor/alerts/profiles/{id} | Deletes a sensor alert profile from a network.
[**delete_organization_alerts_profile_1**](AlertsApi.md#delete_organization_alerts_profile_1) | **DELETE** /organizations/{organizationId}/alerts/profiles/{alertConfigId} | Removes an organization-wide alert config
[**get_network_alerts_history_1**](AlertsApi.md#get_network_alerts_history_1) | **GET** /networks/{networkId}/alerts/history | Return the alert history for this network
[**get_network_alerts_settings_1**](AlertsApi.md#get_network_alerts_settings_1) | **GET** /networks/{networkId}/alerts/settings | Return the alert configuration for this network
[**get_network_health_alerts_2**](AlertsApi.md#get_network_health_alerts_2) | **GET** /networks/{networkId}/health/alerts | Return all global alerts on this network
[**get_network_sensor_alerts_current_overview_by_metric_1**](AlertsApi.md#get_network_sensor_alerts_current_overview_by_metric_1) | **GET** /networks/{networkId}/sensor/alerts/current/overview/byMetric | Return an overview of currently alerting sensors by metric
[**get_network_sensor_alerts_overview_by_metric_1**](AlertsApi.md#get_network_sensor_alerts_overview_by_metric_1) | **GET** /networks/{networkId}/sensor/alerts/overview/byMetric | Return an overview of alert occurrences over a timespan, by metric
[**get_network_sensor_alerts_profile_1**](AlertsApi.md#get_network_sensor_alerts_profile_1) | **GET** /networks/{networkId}/sensor/alerts/profiles/{id} | Show details of a sensor alert profile for a network.
[**get_network_sensor_alerts_profiles_1**](AlertsApi.md#get_network_sensor_alerts_profiles_1) | **GET** /networks/{networkId}/sensor/alerts/profiles | Lists all sensor alert profiles for a network.
[**get_organization_alerts_profiles_1**](AlertsApi.md#get_organization_alerts_profiles_1) | **GET** /organizations/{organizationId}/alerts/profiles | List all organization-wide alert configurations
[**update_network_alerts_settings_1**](AlertsApi.md#update_network_alerts_settings_1) | **PUT** /networks/{networkId}/alerts/settings | Update the alert configuration for this network
[**update_network_sensor_alerts_profile_1**](AlertsApi.md#update_network_sensor_alerts_profile_1) | **PUT** /networks/{networkId}/sensor/alerts/profiles/{id} | Updates a sensor alert profile for a network.
[**update_organization_alerts_profile_1**](AlertsApi.md#update_organization_alerts_profile_1) | **PUT** /organizations/{organizationId}/alerts/profiles/{alertConfigId} | Update an organization-wide alert config


# **create_network_sensor_alerts_profile_1**
> GetNetworkSensorAlertsProfiles200ResponseInner create_network_sensor_alerts_profile_1(network_id, create_network_sensor_alerts_profile_request)

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_sensor_alerts_profile_request = openapi_client.CreateNetworkSensorAlertsProfileRequest() # CreateNetworkSensorAlertsProfileRequest | 

    try:
        # Creates a sensor alert profile for a network.
        api_response = api_instance.create_network_sensor_alerts_profile_1(network_id, create_network_sensor_alerts_profile_request)
        print("The response of AlertsApi->create_network_sensor_alerts_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->create_network_sensor_alerts_profile_1: %s\n" % e)
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

# **create_organization_alerts_profile_1**
> object create_organization_alerts_profile_1(organization_id, create_organization_alerts_profile_request)

Create an organization-wide alert configuration

Create an organization-wide alert configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_alerts_profile_request import CreateOrganizationAlertsProfileRequest
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
    api_instance = openapi_client.AlertsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_alerts_profile_request = openapi_client.CreateOrganizationAlertsProfileRequest() # CreateOrganizationAlertsProfileRequest | 

    try:
        # Create an organization-wide alert configuration
        api_response = api_instance.create_organization_alerts_profile_1(organization_id, create_organization_alerts_profile_request)
        print("The response of AlertsApi->create_organization_alerts_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->create_organization_alerts_profile_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_alerts_profile_request** | [**CreateOrganizationAlertsProfileRequest**](CreateOrganizationAlertsProfileRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_sensor_alerts_profile_1**
> delete_network_sensor_alerts_profile_1(network_id, id)

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Deletes a sensor alert profile from a network.
        api_instance.delete_network_sensor_alerts_profile_1(network_id, id)
    except Exception as e:
        print("Exception when calling AlertsApi->delete_network_sensor_alerts_profile_1: %s\n" % e)
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

# **delete_organization_alerts_profile_1**
> delete_organization_alerts_profile_1(organization_id, alert_config_id)

Removes an organization-wide alert config

Removes an organization-wide alert config

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
    api_instance = openapi_client.AlertsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    alert_config_id = 'alert_config_id_example' # str | 

    try:
        # Removes an organization-wide alert config
        api_instance.delete_organization_alerts_profile_1(organization_id, alert_config_id)
    except Exception as e:
        print("Exception when calling AlertsApi->delete_organization_alerts_profile_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **alert_config_id** | **str**|  | 

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

# **get_network_alerts_history_1**
> List[GetNetworkAlertsHistory200ResponseInner] get_network_alerts_history_1(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the alert history for this network

Return the alert history for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_alerts_history200_response_inner import GetNetworkAlertsHistory200ResponseInner
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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the alert history for this network
        api_response = api_instance.get_network_alerts_history_1(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of AlertsApi->get_network_alerts_history_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_network_alerts_history_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkAlertsHistory200ResponseInner]**](GetNetworkAlertsHistory200ResponseInner.md)

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

# **get_network_alerts_settings_1**
> object get_network_alerts_settings_1(network_id)

Return the alert configuration for this network

Return the alert configuration for this network

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the alert configuration for this network
        api_response = api_instance.get_network_alerts_settings_1(network_id)
        print("The response of AlertsApi->get_network_alerts_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_network_alerts_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_health_alerts_2**
> List[GetNetworkHealthAlerts200ResponseInner] get_network_health_alerts_2(network_id)

Return all global alerts on this network

Return all global alerts on this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_health_alerts200_response_inner import GetNetworkHealthAlerts200ResponseInner
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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return all global alerts on this network
        api_response = api_instance.get_network_health_alerts_2(network_id)
        print("The response of AlertsApi->get_network_health_alerts_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_network_health_alerts_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkHealthAlerts200ResponseInner]**](GetNetworkHealthAlerts200ResponseInner.md)

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

# **get_network_sensor_alerts_current_overview_by_metric_1**
> GetNetworkSensorAlertsCurrentOverviewByMetric200Response get_network_sensor_alerts_current_overview_by_metric_1(network_id)

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return an overview of currently alerting sensors by metric
        api_response = api_instance.get_network_sensor_alerts_current_overview_by_metric_1(network_id)
        print("The response of AlertsApi->get_network_sensor_alerts_current_overview_by_metric_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_network_sensor_alerts_current_overview_by_metric_1: %s\n" % e)
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

# **get_network_sensor_alerts_overview_by_metric_1**
> List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner] get_network_sensor_alerts_overview_by_metric_1(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. (optional)

    try:
        # Return an overview of alert occurrences over a timespan, by metric
        api_response = api_instance.get_network_sensor_alerts_overview_by_metric_1(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)
        print("The response of AlertsApi->get_network_sensor_alerts_overview_by_metric_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_network_sensor_alerts_overview_by_metric_1: %s\n" % e)
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

# **get_network_sensor_alerts_profile_1**
> GetNetworkSensorAlertsProfiles200ResponseInner get_network_sensor_alerts_profile_1(network_id, id)

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Show details of a sensor alert profile for a network.
        api_response = api_instance.get_network_sensor_alerts_profile_1(network_id, id)
        print("The response of AlertsApi->get_network_sensor_alerts_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_network_sensor_alerts_profile_1: %s\n" % e)
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

# **get_network_sensor_alerts_profiles_1**
> List[GetNetworkSensorAlertsProfiles200ResponseInner] get_network_sensor_alerts_profiles_1(network_id)

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Lists all sensor alert profiles for a network.
        api_response = api_instance.get_network_sensor_alerts_profiles_1(network_id)
        print("The response of AlertsApi->get_network_sensor_alerts_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_network_sensor_alerts_profiles_1: %s\n" % e)
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

# **get_organization_alerts_profiles_1**
> List[object] get_organization_alerts_profiles_1(organization_id)

List all organization-wide alert configurations

List all organization-wide alert configurations

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
    api_instance = openapi_client.AlertsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List all organization-wide alert configurations
        api_response = api_instance.get_organization_alerts_profiles_1(organization_id)
        print("The response of AlertsApi->get_organization_alerts_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->get_organization_alerts_profiles_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **update_network_alerts_settings_1**
> object update_network_alerts_settings_1(network_id, update_network_alerts_settings_request=update_network_alerts_settings_request)

Update the alert configuration for this network

Update the alert configuration for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_alerts_settings_request import UpdateNetworkAlertsSettingsRequest
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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_alerts_settings_request = openapi_client.UpdateNetworkAlertsSettingsRequest() # UpdateNetworkAlertsSettingsRequest |  (optional)

    try:
        # Update the alert configuration for this network
        api_response = api_instance.update_network_alerts_settings_1(network_id, update_network_alerts_settings_request=update_network_alerts_settings_request)
        print("The response of AlertsApi->update_network_alerts_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->update_network_alerts_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_alerts_settings_request** | [**UpdateNetworkAlertsSettingsRequest**](UpdateNetworkAlertsSettingsRequest.md)|  | [optional] 

### Return type

**object**

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

# **update_network_sensor_alerts_profile_1**
> GetNetworkSensorAlertsProfiles200ResponseInner update_network_sensor_alerts_profile_1(network_id, id, update_network_sensor_alerts_profile_request=update_network_sensor_alerts_profile_request)

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
    api_instance = openapi_client.AlertsApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 
    update_network_sensor_alerts_profile_request = openapi_client.UpdateNetworkSensorAlertsProfileRequest() # UpdateNetworkSensorAlertsProfileRequest |  (optional)

    try:
        # Updates a sensor alert profile for a network.
        api_response = api_instance.update_network_sensor_alerts_profile_1(network_id, id, update_network_sensor_alerts_profile_request=update_network_sensor_alerts_profile_request)
        print("The response of AlertsApi->update_network_sensor_alerts_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->update_network_sensor_alerts_profile_1: %s\n" % e)
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

# **update_organization_alerts_profile_1**
> object update_organization_alerts_profile_1(organization_id, alert_config_id, update_organization_alerts_profile_request=update_organization_alerts_profile_request)

Update an organization-wide alert config

Update an organization-wide alert config

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_alerts_profile_request import UpdateOrganizationAlertsProfileRequest
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
    api_instance = openapi_client.AlertsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    alert_config_id = 'alert_config_id_example' # str | 
    update_organization_alerts_profile_request = openapi_client.UpdateOrganizationAlertsProfileRequest() # UpdateOrganizationAlertsProfileRequest |  (optional)

    try:
        # Update an organization-wide alert config
        api_response = api_instance.update_organization_alerts_profile_1(organization_id, alert_config_id, update_organization_alerts_profile_request=update_organization_alerts_profile_request)
        print("The response of AlertsApi->update_organization_alerts_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->update_organization_alerts_profile_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **alert_config_id** | **str**|  | 
 **update_organization_alerts_profile_request** | [**UpdateOrganizationAlertsProfileRequest**](UpdateOrganizationAlertsProfileRequest.md)|  | [optional] 

### Return type

**object**

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


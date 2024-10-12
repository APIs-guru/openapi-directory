# openapi_client.InsightApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_insight_monitored_media_server**](InsightApi.md#create_organization_insight_monitored_media_server) | **POST** /organizations/{organizationId}/insight/monitoredMediaServers | Add a media server to be monitored for this organization
[**delete_organization_insight_monitored_media_server**](InsightApi.md#delete_organization_insight_monitored_media_server) | **DELETE** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Delete a monitored media server from this organization
[**get_network_insight_application_health_by_time**](InsightApi.md#get_network_insight_application_health_by_time) | **GET** /networks/{networkId}/insight/applications/{applicationId}/healthByTime | Get application health by time
[**get_organization_insight_applications**](InsightApi.md#get_organization_insight_applications) | **GET** /organizations/{organizationId}/insight/applications | List all Insight tracked applications
[**get_organization_insight_monitored_media_server**](InsightApi.md#get_organization_insight_monitored_media_server) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Return a monitored media server for this organization
[**get_organization_insight_monitored_media_servers**](InsightApi.md#get_organization_insight_monitored_media_servers) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers | List the monitored media servers for this organization
[**update_organization_insight_monitored_media_server**](InsightApi.md#update_organization_insight_monitored_media_server) | **PUT** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Update a monitored media server for this organization


# **create_organization_insight_monitored_media_server**
> object create_organization_insight_monitored_media_server(organization_id, create_organization_insight_monitored_media_server_request)

Add a media server to be monitored for this organization

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_insight_monitored_media_server_request import CreateOrganizationInsightMonitoredMediaServerRequest
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
    api_instance = openapi_client.InsightApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_insight_monitored_media_server_request = openapi_client.CreateOrganizationInsightMonitoredMediaServerRequest() # CreateOrganizationInsightMonitoredMediaServerRequest | 

    try:
        # Add a media server to be monitored for this organization
        api_response = api_instance.create_organization_insight_monitored_media_server(organization_id, create_organization_insight_monitored_media_server_request)
        print("The response of InsightApi->create_organization_insight_monitored_media_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightApi->create_organization_insight_monitored_media_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_insight_monitored_media_server_request** | [**CreateOrganizationInsightMonitoredMediaServerRequest**](CreateOrganizationInsightMonitoredMediaServerRequest.md)|  | 

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

# **delete_organization_insight_monitored_media_server**
> delete_organization_insight_monitored_media_server(organization_id, monitored_media_server_id)

Delete a monitored media server from this organization

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

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
    api_instance = openapi_client.InsightApi(api_client)
    organization_id = 'organization_id_example' # str | 
    monitored_media_server_id = 'monitored_media_server_id_example' # str | 

    try:
        # Delete a monitored media server from this organization
        api_instance.delete_organization_insight_monitored_media_server(organization_id, monitored_media_server_id)
    except Exception as e:
        print("Exception when calling InsightApi->delete_organization_insight_monitored_media_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **monitored_media_server_id** | **str**|  | 

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

# **get_network_insight_application_health_by_time**
> List[GetNetworkInsightApplicationHealthByTime200ResponseInner] get_network_insight_application_health_by_time(network_id, application_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

Get application health by time

Get application health by time

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_insight_application_health_by_time200_response_inner import GetNetworkInsightApplicationHealthByTime200ResponseInner
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
    api_instance = openapi_client.InsightApi(api_client)
    network_id = 'network_id_example' # str | 
    application_id = 'application_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 7 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 3600, 86400. The default is 300. (optional)

    try:
        # Get application health by time
        api_response = api_instance.get_network_insight_application_health_by_time(network_id, application_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of InsightApi->get_network_insight_application_health_by_time:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightApi->get_network_insight_application_health_by_time: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **application_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 7 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 3600, 86400. The default is 300. | [optional] 

### Return type

[**List[GetNetworkInsightApplicationHealthByTime200ResponseInner]**](GetNetworkInsightApplicationHealthByTime200ResponseInner.md)

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

# **get_organization_insight_applications**
> List[GetOrganizationInsightApplications200ResponseInner] get_organization_insight_applications(organization_id)

List all Insight tracked applications

List all Insight tracked applications

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_insight_applications200_response_inner import GetOrganizationInsightApplications200ResponseInner
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
    api_instance = openapi_client.InsightApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List all Insight tracked applications
        api_response = api_instance.get_organization_insight_applications(organization_id)
        print("The response of InsightApi->get_organization_insight_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightApi->get_organization_insight_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationInsightApplications200ResponseInner]**](GetOrganizationInsightApplications200ResponseInner.md)

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

# **get_organization_insight_monitored_media_server**
> object get_organization_insight_monitored_media_server(organization_id, monitored_media_server_id)

Return a monitored media server for this organization

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

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
    api_instance = openapi_client.InsightApi(api_client)
    organization_id = 'organization_id_example' # str | 
    monitored_media_server_id = 'monitored_media_server_id_example' # str | 

    try:
        # Return a monitored media server for this organization
        api_response = api_instance.get_organization_insight_monitored_media_server(organization_id, monitored_media_server_id)
        print("The response of InsightApi->get_organization_insight_monitored_media_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightApi->get_organization_insight_monitored_media_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **monitored_media_server_id** | **str**|  | 

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

# **get_organization_insight_monitored_media_servers**
> List[GetOrganizationInsightMonitoredMediaServers200ResponseInner] get_organization_insight_monitored_media_servers(organization_id)

List the monitored media servers for this organization

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_insight_monitored_media_servers200_response_inner import GetOrganizationInsightMonitoredMediaServers200ResponseInner
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
    api_instance = openapi_client.InsightApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the monitored media servers for this organization
        api_response = api_instance.get_organization_insight_monitored_media_servers(organization_id)
        print("The response of InsightApi->get_organization_insight_monitored_media_servers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightApi->get_organization_insight_monitored_media_servers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationInsightMonitoredMediaServers200ResponseInner]**](GetOrganizationInsightMonitoredMediaServers200ResponseInner.md)

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

# **update_organization_insight_monitored_media_server**
> object update_organization_insight_monitored_media_server(organization_id, monitored_media_server_id, update_organization_insight_monitored_media_server_request=update_organization_insight_monitored_media_server_request)

Update a monitored media server for this organization

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_insight_monitored_media_server_request import UpdateOrganizationInsightMonitoredMediaServerRequest
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
    api_instance = openapi_client.InsightApi(api_client)
    organization_id = 'organization_id_example' # str | 
    monitored_media_server_id = 'monitored_media_server_id_example' # str | 
    update_organization_insight_monitored_media_server_request = openapi_client.UpdateOrganizationInsightMonitoredMediaServerRequest() # UpdateOrganizationInsightMonitoredMediaServerRequest |  (optional)

    try:
        # Update a monitored media server for this organization
        api_response = api_instance.update_organization_insight_monitored_media_server(organization_id, monitored_media_server_id, update_organization_insight_monitored_media_server_request=update_organization_insight_monitored_media_server_request)
        print("The response of InsightApi->update_organization_insight_monitored_media_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightApi->update_organization_insight_monitored_media_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **monitored_media_server_id** | **str**|  | 
 **update_organization_insight_monitored_media_server_request** | [**UpdateOrganizationInsightMonitoredMediaServerRequest**](UpdateOrganizationInsightMonitoredMediaServerRequest.md)|  | [optional] 

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


# openapi_client.MonitoredMediaServersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_insight_monitored_media_server_1**](MonitoredMediaServersApi.md#create_organization_insight_monitored_media_server_1) | **POST** /organizations/{organizationId}/insight/monitoredMediaServers | Add a media server to be monitored for this organization
[**delete_organization_insight_monitored_media_server_1**](MonitoredMediaServersApi.md#delete_organization_insight_monitored_media_server_1) | **DELETE** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Delete a monitored media server from this organization
[**get_organization_insight_monitored_media_server_1**](MonitoredMediaServersApi.md#get_organization_insight_monitored_media_server_1) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Return a monitored media server for this organization
[**get_organization_insight_monitored_media_servers_1**](MonitoredMediaServersApi.md#get_organization_insight_monitored_media_servers_1) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers | List the monitored media servers for this organization
[**update_organization_insight_monitored_media_server_1**](MonitoredMediaServersApi.md#update_organization_insight_monitored_media_server_1) | **PUT** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Update a monitored media server for this organization


# **create_organization_insight_monitored_media_server_1**
> object create_organization_insight_monitored_media_server_1(organization_id, create_organization_insight_monitored_media_server_request)

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
    api_instance = openapi_client.MonitoredMediaServersApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_insight_monitored_media_server_request = openapi_client.CreateOrganizationInsightMonitoredMediaServerRequest() # CreateOrganizationInsightMonitoredMediaServerRequest | 

    try:
        # Add a media server to be monitored for this organization
        api_response = api_instance.create_organization_insight_monitored_media_server_1(organization_id, create_organization_insight_monitored_media_server_request)
        print("The response of MonitoredMediaServersApi->create_organization_insight_monitored_media_server_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoredMediaServersApi->create_organization_insight_monitored_media_server_1: %s\n" % e)
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

# **delete_organization_insight_monitored_media_server_1**
> delete_organization_insight_monitored_media_server_1(organization_id, monitored_media_server_id)

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
    api_instance = openapi_client.MonitoredMediaServersApi(api_client)
    organization_id = 'organization_id_example' # str | 
    monitored_media_server_id = 'monitored_media_server_id_example' # str | 

    try:
        # Delete a monitored media server from this organization
        api_instance.delete_organization_insight_monitored_media_server_1(organization_id, monitored_media_server_id)
    except Exception as e:
        print("Exception when calling MonitoredMediaServersApi->delete_organization_insight_monitored_media_server_1: %s\n" % e)
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

# **get_organization_insight_monitored_media_server_1**
> object get_organization_insight_monitored_media_server_1(organization_id, monitored_media_server_id)

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
    api_instance = openapi_client.MonitoredMediaServersApi(api_client)
    organization_id = 'organization_id_example' # str | 
    monitored_media_server_id = 'monitored_media_server_id_example' # str | 

    try:
        # Return a monitored media server for this organization
        api_response = api_instance.get_organization_insight_monitored_media_server_1(organization_id, monitored_media_server_id)
        print("The response of MonitoredMediaServersApi->get_organization_insight_monitored_media_server_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoredMediaServersApi->get_organization_insight_monitored_media_server_1: %s\n" % e)
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

# **get_organization_insight_monitored_media_servers_1**
> List[GetOrganizationInsightMonitoredMediaServers200ResponseInner] get_organization_insight_monitored_media_servers_1(organization_id)

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
    api_instance = openapi_client.MonitoredMediaServersApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the monitored media servers for this organization
        api_response = api_instance.get_organization_insight_monitored_media_servers_1(organization_id)
        print("The response of MonitoredMediaServersApi->get_organization_insight_monitored_media_servers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoredMediaServersApi->get_organization_insight_monitored_media_servers_1: %s\n" % e)
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

# **update_organization_insight_monitored_media_server_1**
> object update_organization_insight_monitored_media_server_1(organization_id, monitored_media_server_id, update_organization_insight_monitored_media_server_request=update_organization_insight_monitored_media_server_request)

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
    api_instance = openapi_client.MonitoredMediaServersApi(api_client)
    organization_id = 'organization_id_example' # str | 
    monitored_media_server_id = 'monitored_media_server_id_example' # str | 
    update_organization_insight_monitored_media_server_request = openapi_client.UpdateOrganizationInsightMonitoredMediaServerRequest() # UpdateOrganizationInsightMonitoredMediaServerRequest |  (optional)

    try:
        # Update a monitored media server for this organization
        api_response = api_instance.update_organization_insight_monitored_media_server_1(organization_id, monitored_media_server_id, update_organization_insight_monitored_media_server_request=update_organization_insight_monitored_media_server_request)
        print("The response of MonitoredMediaServersApi->update_organization_insight_monitored_media_server_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoredMediaServersApi->update_organization_insight_monitored_media_server_1: %s\n" % e)
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


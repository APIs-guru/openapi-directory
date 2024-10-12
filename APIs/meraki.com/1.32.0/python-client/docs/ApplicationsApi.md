# openapi_client.ApplicationsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_insight_application_health_by_time_1**](ApplicationsApi.md#get_network_insight_application_health_by_time_1) | **GET** /networks/{networkId}/insight/applications/{applicationId}/healthByTime | Get application health by time
[**get_organization_insight_applications_1**](ApplicationsApi.md#get_organization_insight_applications_1) | **GET** /organizations/{organizationId}/insight/applications | List all Insight tracked applications


# **get_network_insight_application_health_by_time_1**
> List[GetNetworkInsightApplicationHealthByTime200ResponseInner] get_network_insight_application_health_by_time_1(network_id, application_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

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
    api_instance = openapi_client.ApplicationsApi(api_client)
    network_id = 'network_id_example' # str | 
    application_id = 'application_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 7 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 3600, 86400. The default is 300. (optional)

    try:
        # Get application health by time
        api_response = api_instance.get_network_insight_application_health_by_time_1(network_id, application_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of ApplicationsApi->get_network_insight_application_health_by_time_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->get_network_insight_application_health_by_time_1: %s\n" % e)
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

# **get_organization_insight_applications_1**
> List[GetOrganizationInsightApplications200ResponseInner] get_organization_insight_applications_1(organization_id)

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
    api_instance = openapi_client.ApplicationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List all Insight tracked applications
        api_response = api_instance.get_organization_insight_applications_1(organization_id)
        print("The response of ApplicationsApi->get_organization_insight_applications_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->get_organization_insight_applications_1: %s\n" % e)
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


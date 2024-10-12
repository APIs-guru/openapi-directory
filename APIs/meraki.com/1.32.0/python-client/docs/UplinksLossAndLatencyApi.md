# openapi_client.UplinksLossAndLatencyApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_devices_uplinks_loss_and_latency_3**](UplinksLossAndLatencyApi.md#get_organization_devices_uplinks_loss_and_latency_3) | **GET** /organizations/{organizationId}/devices/uplinksLossAndLatency | Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago


# **get_organization_devices_uplinks_loss_and_latency_3**
> List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInner] get_organization_devices_uplinks_loss_and_latency_3(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_uplinks_loss_and_latency200_response_inner import GetOrganizationDevicesUplinksLossAndLatency200ResponseInner
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
    api_instance = openapi_client.UplinksLossAndLatencyApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. (optional)
    uplink = 'uplink_example' # str | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. (optional)
    ip = 'ip_example' # str | Optional filter for a specific destination IP. Default will return all destination IPs. (optional)

    try:
        # Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        api_response = api_instance.get_organization_devices_uplinks_loss_and_latency_3(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)
        print("The response of UplinksLossAndLatencyApi->get_organization_devices_uplinks_loss_and_latency_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UplinksLossAndLatencyApi->get_organization_devices_uplinks_loss_and_latency_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 60 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. | [optional] 
 **uplink** | **str**| Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. | [optional] 
 **ip** | **str**| Optional filter for a specific destination IP. Default will return all destination IPs. | [optional] 

### Return type

[**List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInner]**](GetOrganizationDevicesUplinksLossAndLatency200ResponseInner.md)

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


# openapi_client.ByUtilizationApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_summary_top_appliances_by_utilization_4**](ByUtilizationApi.md#get_organization_summary_top_appliances_by_utilization_4) | **GET** /organizations/{organizationId}/summary/top/appliances/byUtilization | Return the top 10 appliances sorted by utilization over given time range.


# **get_organization_summary_top_appliances_by_utilization_4**
> List[GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner] get_organization_summary_top_appliances_by_utilization_4(organization_id, t0=t0, t1=t1, timespan=timespan)

Return the top 10 appliances sorted by utilization over given time range.

Return the top 10 appliances sorted by utilization over given time range.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_appliances_by_utilization200_response_inner import GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner
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
    api_instance = openapi_client.ByUtilizationApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the top 10 appliances sorted by utilization over given time range.
        api_response = api_instance.get_organization_summary_top_appliances_by_utilization_4(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of ByUtilizationApi->get_organization_summary_top_appliances_by_utilization_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ByUtilizationApi->get_organization_summary_top_appliances_by_utilization_4: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner]**](GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner.md)

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


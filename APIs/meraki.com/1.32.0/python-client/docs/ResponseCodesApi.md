# openapi_client.ResponseCodesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_api_requests_overview_response_codes_by_interval_3**](ResponseCodesApi.md#get_organization_api_requests_overview_response_codes_by_interval_3) | **GET** /organizations/{organizationId}/apiRequests/overview/responseCodes/byInterval | Tracks organizations&#39; API requests by response code across a given time period


# **get_organization_api_requests_overview_response_codes_by_interval_3**
> List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner] get_organization_api_requests_overview_response_codes_by_interval_3(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)

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
    api_instance = openapi_client.ResponseCodesApi(api_client)
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
        api_response = api_instance.get_organization_api_requests_overview_response_codes_by_interval_3(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)
        print("The response of ResponseCodesApi->get_organization_api_requests_overview_response_codes_by_interval_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResponseCodesApi->get_organization_api_requests_overview_response_codes_by_interval_3: %s\n" % e)
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


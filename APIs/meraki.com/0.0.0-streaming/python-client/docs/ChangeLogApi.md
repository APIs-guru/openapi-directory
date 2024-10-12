# openapi_client.ChangeLogApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_configuration_changes**](ChangeLogApi.md#get_organization_configuration_changes) | **GET** /organizations/{organizationId}/configurationChanges | View the Change Log for your organization


# **get_organization_configuration_changes**
> List[object] get_organization_configuration_changes(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_id=network_id, admin_id=admin_id)

View the Change Log for your organization

View the Change Log for your organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.ChangeLogApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_id = 'network_id_example' # str | Filters on the given network (optional)
    admin_id = 'admin_id_example' # str | Filters on the given Admin (optional)

    try:
        # View the Change Log for your organization
        api_response = api_instance.get_organization_configuration_changes(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_id=network_id, admin_id=admin_id)
        print("The response of ChangeLogApi->get_organization_configuration_changes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChangeLogApi->get_organization_configuration_changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_id** | **str**| Filters on the given network | [optional] 
 **admin_id** | **str**| Filters on the given Admin | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


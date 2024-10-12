# openapi_client.BySwitchApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_switch_ports_by_switch_2**](BySwitchApi.md#get_organization_switch_ports_by_switch_2) | **GET** /organizations/{organizationId}/switch/ports/bySwitch | List the switchports in an organization by switch


# **get_organization_switch_ports_by_switch_2**
> List[GetOrganizationSwitchPortsBySwitch200ResponseInner] get_organization_switch_ports_by_switch_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, port_profile_ids=port_profile_ids, name=name, mac=mac, macs=macs, serial=serial, serials=serials, configuration_updated_after=configuration_updated_after)

List the switchports in an organization by switch

List the switchports in an organization by switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_switch_ports_by_switch200_response_inner import GetOrganizationSwitchPortsBySwitch200ResponseInner
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
    api_instance = openapi_client.BySwitchApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter switchports by network. (optional)
    port_profile_ids = ['port_profile_ids_example'] # List[str] | Optional parameter to filter switchports belonging to the specified switchport profiles. (optional)
    name = 'name_example' # str | Optional parameter to filter switchports belonging to switches by name. All returned switches will have a name that contains the search term or is an exact match. (optional)
    mac = 'mac_example' # str | Optional parameter to filter switchports belonging to switches by MAC address. All returned switches will have a MAC address that contains the search term or is an exact match. (optional)
    macs = ['macs_example'] # List[str] | Optional parameter to filter switchports by one or more MAC addresses belonging to devices. All switchports returned belong to MAC addresses of switches that are an exact match. (optional)
    serial = 'serial_example' # str | Optional parameter to filter switchports belonging to switches by serial number. All returned switches will have a serial number that contains the search term or is an exact match. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter switchports belonging to switches with one or more serial numbers. All switchports returned belong to serial numbers of switches that are an exact match. (optional)
    configuration_updated_after = 'configuration_updated_after_example' # str | Optional parameter to filter results by switches where the configuration has been updated after the given timestamp. (optional)

    try:
        # List the switchports in an organization by switch
        api_response = api_instance.get_organization_switch_ports_by_switch_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, port_profile_ids=port_profile_ids, name=name, mac=mac, macs=macs, serial=serial, serials=serials, configuration_updated_after=configuration_updated_after)
        print("The response of BySwitchApi->get_organization_switch_ports_by_switch_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BySwitchApi->get_organization_switch_ports_by_switch_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter switchports by network. | [optional] 
 **port_profile_ids** | [**List[str]**](str.md)| Optional parameter to filter switchports belonging to the specified switchport profiles. | [optional] 
 **name** | **str**| Optional parameter to filter switchports belonging to switches by name. All returned switches will have a name that contains the search term or is an exact match. | [optional] 
 **mac** | **str**| Optional parameter to filter switchports belonging to switches by MAC address. All returned switches will have a MAC address that contains the search term or is an exact match. | [optional] 
 **macs** | [**List[str]**](str.md)| Optional parameter to filter switchports by one or more MAC addresses belonging to devices. All switchports returned belong to MAC addresses of switches that are an exact match. | [optional] 
 **serial** | **str**| Optional parameter to filter switchports belonging to switches by serial number. All returned switches will have a serial number that contains the search term or is an exact match. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter switchports belonging to switches with one or more serial numbers. All switchports returned belong to serial numbers of switches that are an exact match. | [optional] 
 **configuration_updated_after** | **str**| Optional parameter to filter results by switches where the configuration has been updated after the given timestamp. | [optional] 

### Return type

[**List[GetOrganizationSwitchPortsBySwitch200ResponseInner]**](GetOrganizationSwitchPortsBySwitch200ResponseInner.md)

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


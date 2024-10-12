# openapi_client.UpgradesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_firmware_upgrades_2**](UpgradesApi.md#get_organization_firmware_upgrades_2) | **GET** /organizations/{organizationId}/firmware/upgrades | Get firmware upgrade information for an organization
[**get_organization_firmware_upgrades_by_device_2**](UpgradesApi.md#get_organization_firmware_upgrades_by_device_2) | **GET** /organizations/{organizationId}/firmware/upgrades/byDevice | Get firmware upgrade status for the filtered devices


# **get_organization_firmware_upgrades_2**
> List[GetOrganizationFirmwareUpgrades200ResponseInner] get_organization_firmware_upgrades_2(organization_id, status=status, product_type=product_type)

Get firmware upgrade information for an organization

Get firmware upgrade information for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_firmware_upgrades200_response_inner import GetOrganizationFirmwareUpgrades200ResponseInner
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
    api_instance = openapi_client.UpgradesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    status = ['status_example'] # List[str] | The status of an upgrade  (optional)
    product_type = ['product_type_example'] # List[str] | The product type in a given upgrade ID (optional)

    try:
        # Get firmware upgrade information for an organization
        api_response = api_instance.get_organization_firmware_upgrades_2(organization_id, status=status, product_type=product_type)
        print("The response of UpgradesApi->get_organization_firmware_upgrades_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpgradesApi->get_organization_firmware_upgrades_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **status** | [**List[str]**](str.md)| The status of an upgrade  | [optional] 
 **product_type** | [**List[str]**](str.md)| The product type in a given upgrade ID | [optional] 

### Return type

[**List[GetOrganizationFirmwareUpgrades200ResponseInner]**](GetOrganizationFirmwareUpgrades200ResponseInner.md)

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

# **get_organization_firmware_upgrades_by_device_2**
> List[GetOrganizationFirmwareUpgradesByDevice200ResponseInner] get_organization_firmware_upgrades_by_device_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, macs=macs, firmware_upgrade_ids=firmware_upgrade_ids, firmware_upgrade_batch_ids=firmware_upgrade_batch_ids)

Get firmware upgrade status for the filtered devices

Get firmware upgrade status for the filtered devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_firmware_upgrades_by_device200_response_inner import GetOrganizationFirmwareUpgradesByDevice200ResponseInner
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
    api_instance = openapi_client.UpgradesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter by network (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter by serial number.  All returned devices will have a serial number that is an exact match. (optional)
    macs = ['macs_example'] # List[str] | Optional parameter to filter by one or more MAC addresses belonging to devices. All devices returned belong to MAC addresses that are an exact match. (optional)
    firmware_upgrade_ids = ['firmware_upgrade_ids_example'] # List[str] | Optional parameter to filter by firmware upgrade ids. (optional)
    firmware_upgrade_batch_ids = ['firmware_upgrade_batch_ids_example'] # List[str] | Optional parameter to filter by firmware upgrade batch ids. (optional)

    try:
        # Get firmware upgrade status for the filtered devices
        api_response = api_instance.get_organization_firmware_upgrades_by_device_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, macs=macs, firmware_upgrade_ids=firmware_upgrade_ids, firmware_upgrade_batch_ids=firmware_upgrade_batch_ids)
        print("The response of UpgradesApi->get_organization_firmware_upgrades_by_device_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpgradesApi->get_organization_firmware_upgrades_by_device_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter by network | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter by serial number.  All returned devices will have a serial number that is an exact match. | [optional] 
 **macs** | [**List[str]**](str.md)| Optional parameter to filter by one or more MAC addresses belonging to devices. All devices returned belong to MAC addresses that are an exact match. | [optional] 
 **firmware_upgrade_ids** | [**List[str]**](str.md)| Optional parameter to filter by firmware upgrade ids. | [optional] 
 **firmware_upgrade_batch_ids** | [**List[str]**](str.md)| Optional parameter to filter by firmware upgrade batch ids. | [optional] 

### Return type

[**List[GetOrganizationFirmwareUpgradesByDevice200ResponseInner]**](GetOrganizationFirmwareUpgradesByDevice200ResponseInner.md)

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


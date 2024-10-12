# openapi_client.InventoryApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claim_into_organization_inventory_1**](InventoryApi.md#claim_into_organization_inventory_1) | **POST** /organizations/{organizationId}/inventory/claim | Claim a list of devices, licenses, and/or orders into an organization inventory
[**create_organization_inventory_onboarding_cloud_monitoring_export_event_1**](InventoryApi.md#create_organization_inventory_onboarding_cloud_monitoring_export_event_1) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/exportEvents | Imports event logs related to the onboarding app into elastisearch
[**create_organization_inventory_onboarding_cloud_monitoring_import_1**](InventoryApi.md#create_organization_inventory_onboarding_cloud_monitoring_import_1) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
[**create_organization_inventory_onboarding_cloud_monitoring_prepare_1**](InventoryApi.md#create_organization_inventory_onboarding_cloud_monitoring_prepare_1) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/prepare | Initiates or updates an import session
[**get_organization_inventory_device_1**](InventoryApi.md#get_organization_inventory_device_1) | **GET** /organizations/{organizationId}/inventory/devices/{serial} | Return a single device from the inventory of an organization
[**get_organization_inventory_devices_1**](InventoryApi.md#get_organization_inventory_devices_1) | **GET** /organizations/{organizationId}/inventory/devices | Return the device inventory for an organization
[**get_organization_inventory_onboarding_cloud_monitoring_imports_1**](InventoryApi.md#get_organization_inventory_onboarding_cloud_monitoring_imports_1) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Check the status of a committed Import operation
[**get_organization_inventory_onboarding_cloud_monitoring_networks_1**](InventoryApi.md#get_organization_inventory_onboarding_cloud_monitoring_networks_1) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/networks | Returns list of networks eligible for adding cloud monitored device
[**release_from_organization_inventory_1**](InventoryApi.md#release_from_organization_inventory_1) | **POST** /organizations/{organizationId}/inventory/release | Release a list of claimed devices from an organization.


# **claim_into_organization_inventory_1**
> object claim_into_organization_inventory_1(organization_id, claim_into_organization_inventory_request=claim_into_organization_inventory_request)

Claim a list of devices, licenses, and/or orders into an organization inventory

Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.claim_into_organization_inventory_request import ClaimIntoOrganizationInventoryRequest
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    claim_into_organization_inventory_request = openapi_client.ClaimIntoOrganizationInventoryRequest() # ClaimIntoOrganizationInventoryRequest |  (optional)

    try:
        # Claim a list of devices, licenses, and/or orders into an organization inventory
        api_response = api_instance.claim_into_organization_inventory_1(organization_id, claim_into_organization_inventory_request=claim_into_organization_inventory_request)
        print("The response of InventoryApi->claim_into_organization_inventory_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->claim_into_organization_inventory_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **claim_into_organization_inventory_request** | [**ClaimIntoOrganizationInventoryRequest**](ClaimIntoOrganizationInventoryRequest.md)|  | [optional] 

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

# **create_organization_inventory_onboarding_cloud_monitoring_export_event_1**
> object create_organization_inventory_onboarding_cloud_monitoring_export_event_1(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)

Imports event logs related to the onboarding app into elastisearch

Imports event logs related to the onboarding app into elastisearch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_export_event_request import CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_export_event_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest | 

    try:
        # Imports event logs related to the onboarding app into elastisearch
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_export_event_1(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)
        print("The response of InventoryApi->create_organization_inventory_onboarding_cloud_monitoring_export_event_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->create_organization_inventory_onboarding_cloud_monitoring_export_event_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_inventory_onboarding_cloud_monitoring_export_event_request** | [**CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest**](CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest.md)|  | 

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
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_inventory_onboarding_cloud_monitoring_import_1**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_import_1(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_import201_response_inner import CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_import_request import CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_import_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest | 

    try:
        # Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_import_1(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)
        print("The response of InventoryApi->create_organization_inventory_onboarding_cloud_monitoring_import_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->create_organization_inventory_onboarding_cloud_monitoring_import_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_inventory_onboarding_cloud_monitoring_import_request** | [**CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest**](CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest.md)|  | 

### Return type

[**List[CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner]**](CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner.md)

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

# **create_organization_inventory_onboarding_cloud_monitoring_prepare_1**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_prepare_1(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)

Initiates or updates an import session

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner import CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare_request import CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_prepare_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest | 

    try:
        # Initiates or updates an import session
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_prepare_1(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)
        print("The response of InventoryApi->create_organization_inventory_onboarding_cloud_monitoring_prepare_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->create_organization_inventory_onboarding_cloud_monitoring_prepare_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_inventory_onboarding_cloud_monitoring_prepare_request** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest.md)|  | 

### Return type

[**List[CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner]**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner.md)

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

# **get_organization_inventory_device_1**
> GetOrganizationInventoryDevices200ResponseInner get_organization_inventory_device_1(organization_id, serial)

Return a single device from the inventory of an organization

Return a single device from the inventory of an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_devices200_response_inner import GetOrganizationInventoryDevices200ResponseInner
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    serial = 'serial_example' # str | 

    try:
        # Return a single device from the inventory of an organization
        api_response = api_instance.get_organization_inventory_device_1(organization_id, serial)
        print("The response of InventoryApi->get_organization_inventory_device_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_organization_inventory_device_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **serial** | **str**|  | 

### Return type

[**GetOrganizationInventoryDevices200ResponseInner**](GetOrganizationInventoryDevices200ResponseInner.md)

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

# **get_organization_inventory_devices_1**
> List[GetOrganizationInventoryDevices200ResponseInner] get_organization_inventory_devices_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, used_state=used_state, search=search, macs=macs, network_ids=network_ids, serials=serials, models=models, order_numbers=order_numbers, tags=tags, tags_filter_type=tags_filter_type, product_types=product_types)

Return the device inventory for an organization

Return the device inventory for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_devices200_response_inner import GetOrganizationInventoryDevices200ResponseInner
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    used_state = 'used_state_example' # str | Filter results by used or unused inventory. Accepted values are 'used' or 'unused'. (optional)
    search = 'search_example' # str | Search for devices in inventory based on serial number, mac address, or model. (optional)
    macs = ['macs_example'] # List[str] | Search for devices in inventory based on mac addresses. (optional)
    network_ids = ['network_ids_example'] # List[str] | Search for devices in inventory based on network ids. (optional)
    serials = ['serials_example'] # List[str] | Search for devices in inventory based on serials. (optional)
    models = ['models_example'] # List[str] | Search for devices in inventory based on model. (optional)
    order_numbers = ['order_numbers_example'] # List[str] | Search for devices in inventory based on order numbers. (optional)
    tags = ['tags_example'] # List[str] | Filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). (optional)
    tags_filter_type = 'tags_filter_type_example' # str | To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', default is 'withAnyTags'. (optional)
    product_types = ['product_types_example'] # List[str] | Filter devices by product type. Accepted values are appliance, camera, cellularGateway, sensor, switch, systemsManager, and wireless. (optional)

    try:
        # Return the device inventory for an organization
        api_response = api_instance.get_organization_inventory_devices_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, used_state=used_state, search=search, macs=macs, network_ids=network_ids, serials=serials, models=models, order_numbers=order_numbers, tags=tags, tags_filter_type=tags_filter_type, product_types=product_types)
        print("The response of InventoryApi->get_organization_inventory_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_organization_inventory_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **used_state** | **str**| Filter results by used or unused inventory. Accepted values are &#39;used&#39; or &#39;unused&#39;. | [optional] 
 **search** | **str**| Search for devices in inventory based on serial number, mac address, or model. | [optional] 
 **macs** | [**List[str]**](str.md)| Search for devices in inventory based on mac addresses. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Search for devices in inventory based on network ids. | [optional] 
 **serials** | [**List[str]**](str.md)| Search for devices in inventory based on serials. | [optional] 
 **models** | [**List[str]**](str.md)| Search for devices in inventory based on model. | [optional] 
 **order_numbers** | [**List[str]**](str.md)| Search for devices in inventory based on order numbers. | [optional] 
 **tags** | [**List[str]**](str.md)| Filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). | [optional] 
 **tags_filter_type** | **str**| To use with &#39;tags&#39; parameter, to filter devices which contain ANY or ALL given tags. Accepted values are &#39;withAnyTags&#39; or &#39;withAllTags&#39;, default is &#39;withAnyTags&#39;. | [optional] 
 **product_types** | [**List[str]**](str.md)| Filter devices by product type. Accepted values are appliance, camera, cellularGateway, sensor, switch, systemsManager, and wireless. | [optional] 

### Return type

[**List[GetOrganizationInventoryDevices200ResponseInner]**](GetOrganizationInventoryDevices200ResponseInner.md)

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

# **get_organization_inventory_onboarding_cloud_monitoring_imports_1**
> List[GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner] get_organization_inventory_onboarding_cloud_monitoring_imports_1(organization_id, import_ids)

Check the status of a committed Import operation

Check the status of a committed Import operation

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner import GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    import_ids = ['import_ids_example'] # List[str] | import ids from an imports

    try:
        # Check the status of a committed Import operation
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_imports_1(organization_id, import_ids)
        print("The response of InventoryApi->get_organization_inventory_onboarding_cloud_monitoring_imports_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_organization_inventory_onboarding_cloud_monitoring_imports_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **import_ids** | [**List[str]**](str.md)| import ids from an imports | 

### Return type

[**List[GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner]**](GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner.md)

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

# **get_organization_inventory_onboarding_cloud_monitoring_networks_1**
> List[GetNetwork200Response] get_organization_inventory_onboarding_cloud_monitoring_networks_1(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Returns list of networks eligible for adding cloud monitored device

Returns list of networks eligible for adding cloud monitored device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network200_response import GetNetwork200Response
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    device_type = 'device_type_example' # str | Device Type switch or wireless controller
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns list of networks eligible for adding cloud monitored device
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_networks_1(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of InventoryApi->get_organization_inventory_onboarding_cloud_monitoring_networks_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_organization_inventory_onboarding_cloud_monitoring_networks_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **device_type** | **str**| Device Type switch or wireless controller | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetwork200Response]**](GetNetwork200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **release_from_organization_inventory_1**
> object release_from_organization_inventory_1(organization_id, release_from_organization_inventory_request=release_from_organization_inventory_request)

Release a list of claimed devices from an organization.

Release a list of claimed devices from an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.release_from_organization_inventory_request import ReleaseFromOrganizationInventoryRequest
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
    api_instance = openapi_client.InventoryApi(api_client)
    organization_id = 'organization_id_example' # str | 
    release_from_organization_inventory_request = openapi_client.ReleaseFromOrganizationInventoryRequest() # ReleaseFromOrganizationInventoryRequest |  (optional)

    try:
        # Release a list of claimed devices from an organization.
        api_response = api_instance.release_from_organization_inventory_1(organization_id, release_from_organization_inventory_request=release_from_organization_inventory_request)
        print("The response of InventoryApi->release_from_organization_inventory_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->release_from_organization_inventory_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **release_from_organization_inventory_request** | [**ReleaseFromOrganizationInventoryRequest**](ReleaseFromOrganizationInventoryRequest.md)|  | [optional] 

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


# openapi_client.CloudMonitoringApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_inventory_onboarding_cloud_monitoring_export_event_3**](CloudMonitoringApi.md#create_organization_inventory_onboarding_cloud_monitoring_export_event_3) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/exportEvents | Imports event logs related to the onboarding app into elastisearch
[**create_organization_inventory_onboarding_cloud_monitoring_import_3**](CloudMonitoringApi.md#create_organization_inventory_onboarding_cloud_monitoring_import_3) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
[**create_organization_inventory_onboarding_cloud_monitoring_prepare_3**](CloudMonitoringApi.md#create_organization_inventory_onboarding_cloud_monitoring_prepare_3) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/prepare | Initiates or updates an import session
[**get_organization_inventory_onboarding_cloud_monitoring_imports_3**](CloudMonitoringApi.md#get_organization_inventory_onboarding_cloud_monitoring_imports_3) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Check the status of a committed Import operation
[**get_organization_inventory_onboarding_cloud_monitoring_networks_3**](CloudMonitoringApi.md#get_organization_inventory_onboarding_cloud_monitoring_networks_3) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/networks | Returns list of networks eligible for adding cloud monitored device


# **create_organization_inventory_onboarding_cloud_monitoring_export_event_3**
> object create_organization_inventory_onboarding_cloud_monitoring_export_event_3(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)

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
    api_instance = openapi_client.CloudMonitoringApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_export_event_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest | 

    try:
        # Imports event logs related to the onboarding app into elastisearch
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_export_event_3(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)
        print("The response of CloudMonitoringApi->create_organization_inventory_onboarding_cloud_monitoring_export_event_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudMonitoringApi->create_organization_inventory_onboarding_cloud_monitoring_export_event_3: %s\n" % e)
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

# **create_organization_inventory_onboarding_cloud_monitoring_import_3**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_import_3(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)

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
    api_instance = openapi_client.CloudMonitoringApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_import_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest | 

    try:
        # Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_import_3(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)
        print("The response of CloudMonitoringApi->create_organization_inventory_onboarding_cloud_monitoring_import_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudMonitoringApi->create_organization_inventory_onboarding_cloud_monitoring_import_3: %s\n" % e)
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

# **create_organization_inventory_onboarding_cloud_monitoring_prepare_3**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_prepare_3(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)

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
    api_instance = openapi_client.CloudMonitoringApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_prepare_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest | 

    try:
        # Initiates or updates an import session
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_prepare_3(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)
        print("The response of CloudMonitoringApi->create_organization_inventory_onboarding_cloud_monitoring_prepare_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudMonitoringApi->create_organization_inventory_onboarding_cloud_monitoring_prepare_3: %s\n" % e)
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

# **get_organization_inventory_onboarding_cloud_monitoring_imports_3**
> List[GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner] get_organization_inventory_onboarding_cloud_monitoring_imports_3(organization_id, import_ids)

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
    api_instance = openapi_client.CloudMonitoringApi(api_client)
    organization_id = 'organization_id_example' # str | 
    import_ids = ['import_ids_example'] # List[str] | import ids from an imports

    try:
        # Check the status of a committed Import operation
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_imports_3(organization_id, import_ids)
        print("The response of CloudMonitoringApi->get_organization_inventory_onboarding_cloud_monitoring_imports_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudMonitoringApi->get_organization_inventory_onboarding_cloud_monitoring_imports_3: %s\n" % e)
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

# **get_organization_inventory_onboarding_cloud_monitoring_networks_3**
> List[GetNetwork200Response] get_organization_inventory_onboarding_cloud_monitoring_networks_3(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.CloudMonitoringApi(api_client)
    organization_id = 'organization_id_example' # str | 
    device_type = 'device_type_example' # str | Device Type switch or wireless controller
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns list of networks eligible for adding cloud monitored device
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_networks_3(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of CloudMonitoringApi->get_organization_inventory_onboarding_cloud_monitoring_networks_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudMonitoringApi->get_organization_inventory_onboarding_cloud_monitoring_networks_3: %s\n" % e)
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


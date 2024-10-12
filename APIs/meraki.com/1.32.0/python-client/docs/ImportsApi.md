# openapi_client.ImportsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_inventory_onboarding_cloud_monitoring_import_4**](ImportsApi.md#create_organization_inventory_onboarding_cloud_monitoring_import_4) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
[**get_organization_inventory_onboarding_cloud_monitoring_imports_4**](ImportsApi.md#get_organization_inventory_onboarding_cloud_monitoring_imports_4) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Check the status of a committed Import operation


# **create_organization_inventory_onboarding_cloud_monitoring_import_4**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_import_4(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)

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
    api_instance = openapi_client.ImportsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_import_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest | 

    try:
        # Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_import_4(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)
        print("The response of ImportsApi->create_organization_inventory_onboarding_cloud_monitoring_import_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportsApi->create_organization_inventory_onboarding_cloud_monitoring_import_4: %s\n" % e)
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

# **get_organization_inventory_onboarding_cloud_monitoring_imports_4**
> List[GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner] get_organization_inventory_onboarding_cloud_monitoring_imports_4(organization_id, import_ids)

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
    api_instance = openapi_client.ImportsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    import_ids = ['import_ids_example'] # List[str] | import ids from an imports

    try:
        # Check the status of a committed Import operation
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_imports_4(organization_id, import_ids)
        print("The response of ImportsApi->get_organization_inventory_onboarding_cloud_monitoring_imports_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportsApi->get_organization_inventory_onboarding_cloud_monitoring_imports_4: %s\n" % e)
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


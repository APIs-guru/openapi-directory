# openapi_client.ExportEventsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_inventory_onboarding_cloud_monitoring_export_event_4**](ExportEventsApi.md#create_organization_inventory_onboarding_cloud_monitoring_export_event_4) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/exportEvents | Imports event logs related to the onboarding app into elastisearch


# **create_organization_inventory_onboarding_cloud_monitoring_export_event_4**
> object create_organization_inventory_onboarding_cloud_monitoring_export_event_4(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)

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
    api_instance = openapi_client.ExportEventsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_export_event_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest | 

    try:
        # Imports event logs related to the onboarding app into elastisearch
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_export_event_4(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)
        print("The response of ExportEventsApi->create_organization_inventory_onboarding_cloud_monitoring_export_event_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportEventsApi->create_organization_inventory_onboarding_cloud_monitoring_export_event_4: %s\n" % e)
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


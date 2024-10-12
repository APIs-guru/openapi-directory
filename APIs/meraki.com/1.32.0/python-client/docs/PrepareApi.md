# openapi_client.PrepareApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_inventory_onboarding_cloud_monitoring_prepare_4**](PrepareApi.md#create_organization_inventory_onboarding_cloud_monitoring_prepare_4) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/prepare | Initiates or updates an import session


# **create_organization_inventory_onboarding_cloud_monitoring_prepare_4**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_prepare_4(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)

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
    api_instance = openapi_client.PrepareApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_prepare_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest | 

    try:
        # Initiates or updates an import session
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_prepare_4(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)
        print("The response of PrepareApi->create_organization_inventory_onboarding_cloud_monitoring_prepare_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepareApi->create_organization_inventory_onboarding_cloud_monitoring_prepare_4: %s\n" % e)
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


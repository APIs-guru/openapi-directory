# openapi_client.BackupCrrJobsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_crr_jobs_list**](BackupCrrJobsApi.md#backup_crr_jobs_list) | **POST** /Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupCrrJobs | Gets the list of CRR jobs from the target region.


# **backup_crr_jobs_list**
> JobResourceList backup_crr_jobs_list(api_version, azure_region, subscription_id)

Gets the list of CRR jobs from the target region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_resource_list import JobResourceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupCrrJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    azure_region = 'azure_region_example' # str | Azure region to hit Api
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of CRR jobs from the target region.
        api_response = api_instance.backup_crr_jobs_list(api_version, azure_region, subscription_id)
        print("The response of BackupCrrJobsApi->backup_crr_jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupCrrJobsApi->backup_crr_jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **azure_region** | **str**| Azure region to hit Api | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**JobResourceList**](JobResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


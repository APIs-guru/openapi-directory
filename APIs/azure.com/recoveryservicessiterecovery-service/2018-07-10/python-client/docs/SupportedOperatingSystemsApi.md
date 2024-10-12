# openapi_client.SupportedOperatingSystemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**supported_operating_systems_get**](SupportedOperatingSystemsApi.md#supported_operating_systems_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationSupportedOperatingSystems | Gets the data of supported OSes by SRS.


# **supported_operating_systems_get**
> SupportedOperatingSystems supported_operating_systems_get(api_version, resource_name, resource_group_name, subscription_id)

Gets the data of supported OSes by SRS.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.supported_operating_systems import SupportedOperatingSystems
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
    api_instance = openapi_client.SupportedOperatingSystemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the data of supported OSes by SRS.
        api_response = api_instance.supported_operating_systems_get(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of SupportedOperatingSystemsApi->supported_operating_systems_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupportedOperatingSystemsApi->supported_operating_systems_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**SupportedOperatingSystems**](SupportedOperatingSystems.md)

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


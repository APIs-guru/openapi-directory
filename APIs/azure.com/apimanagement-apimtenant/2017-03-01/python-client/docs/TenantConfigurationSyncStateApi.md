# openapi_client.TenantConfigurationSyncStateApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenant_configuration_get_sync_state**](TenantConfigurationSyncStateApi.md#tenant_configuration_get_sync_state) | **GET** /tenant/{configurationName}/syncState | 


# **tenant_configuration_get_sync_state**
> TenantConfigurationSyncStateContract tenant_configuration_get_sync_state(api_version, configuration_name)



Gets the status of the most recent synchronization between the configuration database and the Git repository.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.tenant_configuration_sync_state_contract import TenantConfigurationSyncStateContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantConfigurationSyncStateApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    configuration_name = 'configuration_name_example' # str | The identifier of the Git Configuration Operation.

    try:
        api_response = api_instance.tenant_configuration_get_sync_state(api_version, configuration_name)
        print("The response of TenantConfigurationSyncStateApi->tenant_configuration_get_sync_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantConfigurationSyncStateApi->tenant_configuration_get_sync_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **configuration_name** | **str**| The identifier of the Git Configuration Operation. | 

### Return type

[**TenantConfigurationSyncStateContract**](TenantConfigurationSyncStateContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sync state result. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


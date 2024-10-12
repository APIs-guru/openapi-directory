# openapi_client.AdvancedThreatProtectionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**advanced_threat_protection_create**](AdvancedThreatProtectionApi.md#advanced_threat_protection_create) | **PUT** /{resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName} | 
[**advanced_threat_protection_get**](AdvancedThreatProtectionApi.md#advanced_threat_protection_get) | **GET** /{resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName} | 


# **advanced_threat_protection_create**
> AdvancedThreatProtectionSetting advanced_threat_protection_create(api_version, resource_id, setting_name, advanced_threat_protection_setting)



Creates or updates the Advanced Threat Protection settings on a specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.advanced_threat_protection_setting import AdvancedThreatProtectionSetting
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
    api_instance = openapi_client.AdvancedThreatProtectionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    setting_name = 'setting_name_example' # str | Advanced Threat Protection setting name.
    advanced_threat_protection_setting = openapi_client.AdvancedThreatProtectionSetting() # AdvancedThreatProtectionSetting | Advanced Threat Protection Settings

    try:
        api_response = api_instance.advanced_threat_protection_create(api_version, resource_id, setting_name, advanced_threat_protection_setting)
        print("The response of AdvancedThreatProtectionApi->advanced_threat_protection_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvancedThreatProtectionApi->advanced_threat_protection_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **setting_name** | **str**| Advanced Threat Protection setting name. | 
 **advanced_threat_protection_setting** | [**AdvancedThreatProtectionSetting**](AdvancedThreatProtectionSetting.md)| Advanced Threat Protection Settings | 

### Return type

[**AdvancedThreatProtectionSetting**](AdvancedThreatProtectionSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to put Advanced Threat Protection settings. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **advanced_threat_protection_get**
> AdvancedThreatProtectionSetting advanced_threat_protection_get(api_version, resource_id, setting_name)



Gets the Advanced Threat Protection settings for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.advanced_threat_protection_setting import AdvancedThreatProtectionSetting
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
    api_instance = openapi_client.AdvancedThreatProtectionApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    setting_name = 'setting_name_example' # str | Advanced Threat Protection setting name.

    try:
        api_response = api_instance.advanced_threat_protection_get(api_version, resource_id, setting_name)
        print("The response of AdvancedThreatProtectionApi->advanced_threat_protection_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvancedThreatProtectionApi->advanced_threat_protection_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **setting_name** | **str**| Advanced Threat Protection setting name. | 

### Return type

[**AdvancedThreatProtectionSetting**](AdvancedThreatProtectionSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get Advanced Threat Protection settings. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


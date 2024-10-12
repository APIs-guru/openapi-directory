# openapi_client.ConfigurationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configuration_add**](ConfigurationApi.md#configuration_add) | **POST** /providers/Microsoft.ADHybridHealthService/configuration | 
[**configuration_get**](ConfigurationApi.md#configuration_get) | **GET** /providers/Microsoft.ADHybridHealthService/configuration | 
[**configuration_update**](ConfigurationApi.md#configuration_update) | **PATCH** /providers/Microsoft.ADHybridHealthService/configuration | 


# **configuration_add**
> Tenant configuration_add(api_version)



Onboards a tenant in Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tenant import Tenant
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.configuration_add(api_version)
        print("The response of ConfigurationApi->configuration_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->configuration_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added the tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_get**
> Tenant configuration_get(api_version)



Gets the details of a tenant onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tenant import Tenant
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.configuration_get(api_version)
        print("The response of ConfigurationApi->configuration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->configuration_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tenant details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_update**
> Tenant configuration_update(api_version, tenant)



Updates tenant properties for tenants onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tenant import Tenant
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    tenant = openapi_client.Tenant() # Tenant | The tenant object with the properties set to the updated value.

    try:
        api_response = api_instance.configuration_update(api_version, tenant)
        print("The response of ConfigurationApi->configuration_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->configuration_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **tenant** | [**Tenant**](Tenant.md)| The tenant object with the properties set to the updated value. | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the tenant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.ServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adds_services_delete**](ServicesApi.md#adds_services_delete) | **DELETE** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName} | 
[**adds_services_get**](ServicesApi.md#adds_services_get) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName} | 
[**adds_services_list_premium_services**](ServicesApi.md#adds_services_list_premium_services) | **GET** /providers/Microsoft.ADHybridHealthService/addsservices/premiumCheck | 
[**adds_services_update**](ServicesApi.md#adds_services_update) | **PATCH** /providers/Microsoft.ADHybridHealthService/addsservices/{serviceName} | 
[**services_add**](ServicesApi.md#services_add) | **POST** /providers/Microsoft.ADHybridHealthService/services | 
[**services_delete**](ServicesApi.md#services_delete) | **DELETE** /providers/Microsoft.ADHybridHealthService/services/{serviceName} | 
[**services_get**](ServicesApi.md#services_get) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName} | 
[**services_get_feature_availibility**](ServicesApi.md#services_get_feature_availibility) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/checkServiceFeatureAvailibility/{featureName} | 
[**services_get_tenant_whitelisting**](ServicesApi.md#services_get_tenant_whitelisting) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/TenantWhitelisting/{featureName} | 
[**services_list**](ServicesApi.md#services_list) | **GET** /providers/Microsoft.ADHybridHealthService/services | 
[**services_list_export_errors**](ServicesApi.md#services_list_export_errors) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/exporterrors/counts | 
[**services_list_export_errors_v2**](ServicesApi.md#services_list_export_errors_v2) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/exporterrors/listV2 | 
[**services_list_export_status**](ServicesApi.md#services_list_export_status) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/exportstatus | 
[**services_list_monitoring_configurations**](ServicesApi.md#services_list_monitoring_configurations) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/monitoringconfigurations | 
[**services_list_premium**](ServicesApi.md#services_list_premium) | **GET** /providers/Microsoft.ADHybridHealthService/services/premiumCheck | 
[**services_update**](ServicesApi.md#services_update) | **PATCH** /providers/Microsoft.ADHybridHealthService/services/{serviceName} | 
[**services_update_monitoring_configuration**](ServicesApi.md#services_update_monitoring_configuration) | **PATCH** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/monitoringconfiguration | 


# **adds_services_delete**
> adds_services_delete(service_name, api_version, confirm=confirm)



Deletes an Active Directory Domain Service which is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service which needs to be deleted.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    confirm = True # bool | Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered. (optional)

    try:
        api_instance.adds_services_delete(service_name, api_version, confirm=confirm)
    except Exception as e:
        print("Exception when calling ServicesApi->adds_services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service which needs to be deleted. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **confirm** | **bool**| Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully deleted the service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_get**
> ServiceProperties adds_services_get(service_name, api_version)



Gets the details of an Active Directory Domain Service for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_properties import ServiceProperties
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.adds_services_get(service_name, api_version)
        print("The response of ServicesApi->adds_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->adds_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ServiceProperties**](ServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Active Directory Domain Controller service as specified by the serviceName property.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_list_premium_services**
> Services adds_services_list_premium_services(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)



Gets the details of Active Directory Domain Services for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services import Services
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
    api_instance = openapi_client.ServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The service property filter to apply. (optional)
    service_type = 'service_type_example' # str | The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. (optional)
    skip_count = 56 # int | The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. (optional)
    take_count = 56 # int | The take count , which specifies the number of elements that can be returned from a sequence. (optional)

    try:
        api_response = api_instance.adds_services_list_premium_services(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)
        print("The response of ServicesApi->adds_services_list_premium_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->adds_services_list_premium_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The service property filter to apply. | [optional] 
 **service_type** | **str**| The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. | [optional] 
 **skip_count** | **int**| The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. | [optional] 
 **take_count** | **int**| The take count , which specifies the number of elements that can be returned from a sequence. | [optional] 

### Return type

[**Services**](Services.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of premium services. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adds_services_update**
> ServiceProperties adds_services_update(service_name, api_version, service)



Updates an Active Directory Domain Service properties of an onboarded service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_properties import ServiceProperties
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service which needs to be deleted.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    service = openapi_client.ServiceProperties() # ServiceProperties | The service object.

    try:
        api_response = api_instance.adds_services_update(service_name, api_version, service)
        print("The response of ServicesApi->adds_services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->adds_services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service which needs to be deleted. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **service** | [**ServiceProperties**](ServiceProperties.md)| The service object. | 

### Return type

[**ServiceProperties**](ServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_add**
> ServiceProperties services_add(api_version, service)



Onboards a service for a given tenant in Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_properties import ServiceProperties
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
    api_instance = openapi_client.ServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    service = openapi_client.ServiceProperties() # ServiceProperties | The service object.

    try:
        api_response = api_instance.services_add(api_version, service)
        print("The response of ServicesApi->services_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **service** | [**ServiceProperties**](ServiceProperties.md)| The service object. | 

### Return type

[**ServiceProperties**](ServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added the service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete**
> services_delete(service_name, api_version, confirm=confirm)



Deletes a service which is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service which needs to be deleted.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    confirm = True # bool | Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered. (optional)

    try:
        api_instance.services_delete(service_name, api_version, confirm=confirm)
    except Exception as e:
        print("Exception when calling ServicesApi->services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service which needs to be deleted. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **confirm** | **bool**| Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully deleted the service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get**
> ServiceProperties services_get(service_name, api_version)



Gets the details of a service for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_properties import ServiceProperties
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_get(service_name, api_version)
        print("The response of ServicesApi->services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ServiceProperties**](ServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of services. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get_feature_availibility**
> Result services_get_feature_availibility(service_name, feature_name, api_version)



Checks if the service has all the pre-requisites met to use a feature.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.result import Result
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    feature_name = 'feature_name_example' # str | The name of the feature.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_get_feature_availibility(service_name, feature_name, api_version)
        print("The response of ServicesApi->services_get_feature_availibility:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_get_feature_availibility: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **feature_name** | **str**| The name of the feature. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Result**](Result.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Indicates if the feature is available or not. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get_tenant_whitelisting**
> Result services_get_tenant_whitelisting(service_name, feature_name, api_version)



Checks if the tenant, to which a service is registered, is whitelisted to use a feature.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.result import Result
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    feature_name = 'feature_name_example' # str | The name of the feature.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_get_tenant_whitelisting(service_name, feature_name, api_version)
        print("The response of ServicesApi->services_get_tenant_whitelisting:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_get_tenant_whitelisting: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **feature_name** | **str**| The name of the feature. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Result**](Result.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Indicates if a tenant is whitelisted for a feature or not. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list**
> Services services_list(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)



Gets the details of services, for a tenant, that are onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services import Services
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
    api_instance = openapi_client.ServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The service property filter to apply. (optional)
    service_type = 'service_type_example' # str | The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. (optional)
    skip_count = 56 # int | The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. (optional)
    take_count = 56 # int | The take count , which specifies the number of elements that can be returned from a sequence. (optional)

    try:
        api_response = api_instance.services_list(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)
        print("The response of ServicesApi->services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The service property filter to apply. | [optional] 
 **service_type** | **str**| The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. | [optional] 
 **skip_count** | **int**| The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. | [optional] 
 **take_count** | **int**| The take count , which specifies the number of elements that can be returned from a sequence. | [optional] 

### Return type

[**Services**](Services.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of services. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_export_errors**
> ErrorCounts services_list_export_errors(service_name, api_version)



Gets the count of latest AAD export errors.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.error_counts import ErrorCounts
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_export_errors(service_name, api_version)
        print("The response of ServicesApi->services_list_export_errors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_list_export_errors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ErrorCounts**](ErrorCounts.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of export errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_export_errors_v2**
> MergedExportErrors services_list_export_errors_v2(service_name, error_bucket, api_version)



 Gets the categorized export errors.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.merged_export_errors import MergedExportErrors
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    error_bucket = 'error_bucket_example' # str | The error category to query for.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_export_errors_v2(service_name, error_bucket, api_version)
        print("The response of ServicesApi->services_list_export_errors_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_list_export_errors_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **error_bucket** | **str**| The error category to query for. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**MergedExportErrors**](MergedExportErrors.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of merged export errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_export_status**
> ExportStatuses services_list_export_status(service_name, api_version)



Gets the export status.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.export_statuses import ExportStatuses
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_export_status(service_name, api_version)
        print("The response of ServicesApi->services_list_export_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_list_export_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ExportStatuses**](ExportStatuses.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of export statuses. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_monitoring_configurations**
> Items services_list_monitoring_configurations(service_name, api_version)



Gets the service level monitoring configurations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.items import Items
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_monitoring_configurations(service_name, api_version)
        print("The response of ServicesApi->services_list_monitoring_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_list_monitoring_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Items**](Items.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of monitoring configurations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_premium**
> Services services_list_premium(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)



Gets the details of services for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services import Services
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
    api_instance = openapi_client.ServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The service property filter to apply. (optional)
    service_type = 'service_type_example' # str | The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. (optional)
    skip_count = 56 # int | The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. (optional)
    take_count = 56 # int | The take count , which specifies the number of elements that can be returned from a sequence. (optional)

    try:
        api_response = api_instance.services_list_premium(api_version, filter=filter, service_type=service_type, skip_count=skip_count, take_count=take_count)
        print("The response of ServicesApi->services_list_premium:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_list_premium: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The service property filter to apply. | [optional] 
 **service_type** | **str**| The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. | [optional] 
 **skip_count** | **int**| The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements. | [optional] 
 **take_count** | **int**| The take count , which specifies the number of elements that can be returned from a sequence. | [optional] 

### Return type

[**Services**](Services.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of premium services. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_update**
> ServiceProperties services_update(service_name, api_version, service)



Updates the service properties of an onboarded service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_properties import ServiceProperties
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service which needs to be deleted.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    service = openapi_client.ServiceProperties() # ServiceProperties | The service object.

    try:
        api_response = api_instance.services_update(service_name, api_version, service)
        print("The response of ServicesApi->services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service which needs to be deleted. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **service** | [**ServiceProperties**](ServiceProperties.md)| The service object. | 

### Return type

[**ServiceProperties**](ServiceProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_update_monitoring_configuration**
> services_update_monitoring_configuration(service_name, api_version, configuration_setting)



Updates the service level monitoring configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.item import Item
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
    api_instance = openapi_client.ServicesApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    configuration_setting = openapi_client.Item() # Item | The monitoring configuration to update

    try:
        api_instance.services_update_monitoring_configuration(service_name, api_version, configuration_setting)
    except Exception as e:
        print("Exception when calling ServicesApi->services_update_monitoring_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **configuration_setting** | [**Item**](Item.md)| The monitoring configuration to update | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the monitoring configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


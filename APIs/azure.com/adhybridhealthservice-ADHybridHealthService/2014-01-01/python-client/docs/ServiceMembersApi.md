# openapi_client.ServiceMembersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_members_add**](ServiceMembersApi.md#service_members_add) | **POST** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers | 
[**service_members_delete**](ServiceMembersApi.md#service_members_delete) | **DELETE** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId} | 
[**service_members_delete_data**](ServiceMembersApi.md#service_members_delete_data) | **DELETE** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/data | 
[**service_members_get**](ServiceMembersApi.md#service_members_get) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId} | 
[**service_members_get_service_configuration**](ServiceMembersApi.md#service_members_get_service_configuration) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/serviceconfiguration | 
[**service_members_list**](ServiceMembersApi.md#service_members_list) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers | 
[**service_members_list_connectors**](ServiceMembersApi.md#service_members_list_connectors) | **GET** /providers/Microsoft.ADHybridHealthService/service/{serviceName}/servicemembers/{serviceMemberId}/connectors | 
[**service_members_list_credentials**](ServiceMembersApi.md#service_members_list_credentials) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/credentials | 
[**service_members_list_data_freshness**](ServiceMembersApi.md#service_members_list_data_freshness) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/datafreshness | 
[**service_members_list_export_status**](ServiceMembersApi.md#service_members_list_export_status) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/exportstatus | 
[**service_members_list_global_configuration**](ServiceMembersApi.md#service_members_list_global_configuration) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/globalconfiguration | 


# **service_members_add**
> ServiceMember service_members_add(service_name, api_version, service_member)



Onboards  a server, for a given service, to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_member import ServiceMember
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service under which the server is to be onboarded.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    service_member = openapi_client.ServiceMember() # ServiceMember | The server object.

    try:
        api_response = api_instance.service_members_add(service_name, api_version, service_member)
        print("The response of ServiceMembersApi->service_members_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service under which the server is to be onboarded. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **service_member** | [**ServiceMember**](ServiceMember.md)| The server object. | 

### Return type

[**ServiceMember**](ServiceMember.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added the service member. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_delete**
> service_members_delete(service_name, service_member_id, api_version, confirm=confirm)



Deletes a server that has been onboarded to Azure Active Directory Connect Health Service.

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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    confirm = True # bool | Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered. (optional)

    try:
        api_instance.service_members_delete(service_name, service_member_id, api_version, confirm=confirm)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **confirm** | **bool**| Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered. | [optional] 

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
**200** | Successfully deleted the service member. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_delete_data**
> service_members_delete_data(service_name, service_member_id, api_version)



Deletes the data uploaded by the server to Azure Active Directory Connect Health Service.

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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_instance.service_members_delete_data(service_name, service_member_id, api_version)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_delete_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

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
**200** | Successfully deleted the service member. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_get**
> ServiceMember service_members_get(service_name, service_member_id, api_version)



Gets the details of a server, for a given service, that are onboarded to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_member import ServiceMember
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.service_members_get(service_name, service_member_id, api_version)
        print("The response of ServiceMembersApi->service_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ServiceMember**](ServiceMember.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specific service member. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_get_service_configuration**
> ServiceConfiguration service_members_get_service_configuration(service_name, service_member_id, api_version)



Gets the service configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_configuration import ServiceConfiguration
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.service_members_get_service_configuration(service_name, service_member_id, api_version)
        print("The response of ServiceMembersApi->service_members_get_service_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_get_service_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ServiceConfiguration**](ServiceConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_list**
> ServiceMembers service_members_list(service_name, api_version, filter=filter, dimension_type=dimension_type, dimension_signature=dimension_signature)



Gets the details of the servers, for a given service, that are onboarded to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_members import ServiceMembers
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The server property filter to apply. (optional)
    dimension_type = 'dimension_type_example' # str | The server specific dimension. (optional)
    dimension_signature = 'dimension_signature_example' # str | The value of the dimension. (optional)

    try:
        api_response = api_instance.service_members_list(service_name, api_version, filter=filter, dimension_type=dimension_type, dimension_signature=dimension_signature)
        print("The response of ServiceMembersApi->service_members_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The server property filter to apply. | [optional] 
 **dimension_type** | **str**| The server specific dimension. | [optional] 
 **dimension_signature** | **str**| The value of the dimension. | [optional] 

### Return type

[**ServiceMembers**](ServiceMembers.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of service members. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_list_connectors**
> Connectors service_members_list_connectors(service_name, service_member_id, api_version)



Gets the connector details for a service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connectors import Connectors
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.service_members_list_connectors(service_name, service_member_id, api_version)
        print("The response of ServiceMembersApi->service_members_list_connectors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_list_connectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**Connectors**](Connectors.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of connector details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_list_credentials**
> Credentials service_members_list_credentials(service_name, service_member_id, api_version, filter=filter)



Gets the credentials of the server which is needed by the agent to connect to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.credentials import Credentials
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The property filter to apply. (optional)

    try:
        api_response = api_instance.service_members_list_credentials(service_name, service_member_id, api_version, filter=filter)
        print("The response of ServiceMembersApi->service_members_list_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_list_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The property filter to apply. | [optional] 

### Return type

[**Credentials**](Credentials.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of service member credentials. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_list_data_freshness**
> DataFreshnessDetails service_members_list_data_freshness(service_name, service_member_id, api_version)



Gets the last time when the server uploaded data to Azure Active Directory Connect Health Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_freshness_details import DataFreshnessDetails
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.service_members_list_data_freshness(service_name, service_member_id, api_version)
        print("The response of ServiceMembersApi->service_members_list_data_freshness:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_list_data_freshness: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**DataFreshnessDetails**](DataFreshnessDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of datafreshness details for a server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_members_list_export_status**
> ExportStatuses service_members_list_export_status(service_name, service_member_id, api_version)



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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server Id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.service_members_list_export_status(service_name, service_member_id, api_version)
        print("The response of ServiceMembersApi->service_members_list_export_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_list_export_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server Id. | 
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

# **service_members_list_global_configuration**
> GlobalConfigurations service_members_list_global_configuration(service_name, service_member_id, api_version)



Gets the global configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.global_configurations import GlobalConfigurations
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
    api_instance = openapi_client.ServiceMembersApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    service_member_id = 'service_member_id_example' # str | The server id.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.service_members_list_global_configuration(service_name, service_member_id, api_version)
        print("The response of ServiceMembersApi->service_members_list_global_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceMembersApi->service_members_list_global_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **service_member_id** | **str**| The server id. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**GlobalConfigurations**](GlobalConfigurations.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of global configurations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


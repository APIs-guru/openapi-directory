# openapi_client.ReportsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_list_all_risky_ip_download_report**](ReportsApi.md#services_list_all_risky_ip_download_report) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/riskyIp/blobUris | 
[**services_list_current_risky_ip_download_report**](ReportsApi.md#services_list_current_risky_ip_download_report) | **POST** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/riskyIp/generateBlobUri | 
[**services_list_user_bad_password_report**](ReportsApi.md#services_list_user_bad_password_report) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/reports/badpassword/details/user | 


# **services_list_all_risky_ip_download_report**
> RiskyIPBlobUris services_list_all_risky_ip_download_report(service_name, api_version)



Gets all Risky IP report URIs for the last 7 days.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.risky_ip_blob_uris import RiskyIPBlobUris
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
    api_instance = openapi_client.ReportsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_all_risky_ip_download_report(service_name, api_version)
        print("The response of ReportsApi->services_list_all_risky_ip_download_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->services_list_all_risky_ip_download_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**RiskyIPBlobUris**](RiskyIPBlobUris.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Risky IP report URIs for the last 7 days. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_current_risky_ip_download_report**
> RiskyIPBlobUris services_list_current_risky_ip_download_report(service_name, api_version)



Initiate the generation of a new Risky IP report. Returns the URI for the new one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.risky_ip_blob_uris import RiskyIPBlobUris
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
    api_instance = openapi_client.ReportsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_current_risky_ip_download_report(service_name, api_version)
        print("The response of ReportsApi->services_list_current_risky_ip_download_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->services_list_current_risky_ip_download_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**RiskyIPBlobUris**](RiskyIPBlobUris.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The URI of the Risky IP report that was requested. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_user_bad_password_report**
> ErrorReportUsersEntries services_list_user_bad_password_report(service_name, api_version, data_source=data_source)



Gets the bad password login attempt report for an user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.error_report_users_entries import ErrorReportUsersEntries
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
    api_instance = openapi_client.ReportsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    data_source = 'data_source_example' # str | The source of data, if its test data or customer data. (optional)

    try:
        api_response = api_instance.services_list_user_bad_password_report(service_name, api_version, data_source=data_source)
        print("The response of ReportsApi->services_list_user_bad_password_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->services_list_user_bad_password_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **data_source** | **str**| The source of data, if its test data or customer data. | [optional] 

### Return type

[**ErrorReportUsersEntries**](ErrorReportUsersEntries.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of bad password login attempts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


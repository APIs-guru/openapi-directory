# openapi_client.PackageReportsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_clients_client_id_package_reports_put**](PackageReportsApi.md#api_v2_clients_client_id_package_reports_put) | **PUT** /api/v2/Clients/{ClientID}/PackageReports | Submit a package report
[**package_reports_batch**](PackageReportsApi.md#package_reports_batch) | **PUT** /api/v2/Clients/{ClientID}/PackageReports/Batch | Submit a batch of package reports
[**package_reports_default**](PackageReportsApi.md#package_reports_default) | **GET** /api/v2/Clients/{ClientID}/PackageReports | Get the package reports for a client.


# **api_v2_clients_client_id_package_reports_put**
> api_v2_clients_client_id_package_reports_put(client_id, update_system_models_package_report)

Submit a package report

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_report import UpdateSystemModelsPackageReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PackageReportsApi(api_client)
    client_id = 'client_id_example' # str | The Client ID
    update_system_models_package_report = openapi_client.UpdateSystemModelsPackageReport() # UpdateSystemModelsPackageReport | The Package Report

    try:
        # Submit a package report
        api_instance.api_v2_clients_client_id_package_reports_put(client_id, update_system_models_package_report)
    except Exception as e:
        print("Exception when calling PackageReportsApi->api_v2_clients_client_id_package_reports_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The Client ID | 
 **update_system_models_package_report** | [**UpdateSystemModelsPackageReport**](UpdateSystemModelsPackageReport.md)| The Package Report | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_reports_batch**
> package_reports_batch(client_id, update_system_models_package_report)

Submit a batch of package reports

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_report import UpdateSystemModelsPackageReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PackageReportsApi(api_client)
    client_id = 'client_id_example' # str | The Client ID
    update_system_models_package_report = [openapi_client.UpdateSystemModelsPackageReport()] # List[UpdateSystemModelsPackageReport] | The Package Reports

    try:
        # Submit a batch of package reports
        api_instance.package_reports_batch(client_id, update_system_models_package_report)
    except Exception as e:
        print("Exception when calling PackageReportsApi->package_reports_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The Client ID | 
 **update_system_models_package_report** | [**List[UpdateSystemModelsPackageReport]**](UpdateSystemModelsPackageReport.md)| The Package Reports | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_reports_default**
> List[UpdateSystemModelsPackageReport] package_reports_default(client_id)

Get the package reports for a client.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_report import UpdateSystemModelsPackageReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PackageReportsApi(api_client)
    client_id = 'client_id_example' # str | The Client ID

    try:
        # Get the package reports for a client.
        api_response = api_instance.package_reports_default(client_id)
        print("The response of PackageReportsApi->package_reports_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageReportsApi->package_reports_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The Client ID | 

### Return type

[**List[UpdateSystemModelsPackageReport]**](UpdateSystemModelsPackageReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


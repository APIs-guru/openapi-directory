# openapi_client.DiagnosticsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**diagnostics_execute_site_analysis**](DiagnosticsApi.md#diagnostics_execute_site_analysis) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/analyses/{analysisName}/execute | Execute Analysis
[**diagnostics_execute_site_analysis_slot**](DiagnosticsApi.md#diagnostics_execute_site_analysis_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/analyses/{analysisName}/execute | Execute Analysis
[**diagnostics_execute_site_detector**](DiagnosticsApi.md#diagnostics_execute_site_detector) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/detectors/{detectorName}/execute | Execute Detector
[**diagnostics_execute_site_detector_slot**](DiagnosticsApi.md#diagnostics_execute_site_detector_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/detectors/{detectorName}/execute | Execute Detector
[**diagnostics_get_hosting_environment_detector_response**](DiagnosticsApi.md#diagnostics_get_hosting_environment_detector_response) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/detectors/{detectorName} | Get Hosting Environment Detector Response
[**diagnostics_get_site_analysis**](DiagnosticsApi.md#diagnostics_get_site_analysis) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/analyses/{analysisName} | Get Site Analysis
[**diagnostics_get_site_analysis_slot**](DiagnosticsApi.md#diagnostics_get_site_analysis_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/analyses/{analysisName} | Get Site Analysis
[**diagnostics_get_site_detector**](DiagnosticsApi.md#diagnostics_get_site_detector) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/detectors/{detectorName} | Get Detector
[**diagnostics_get_site_detector_response**](DiagnosticsApi.md#diagnostics_get_site_detector_response) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/detectors/{detectorName} | Get site detector response
[**diagnostics_get_site_detector_response_slot**](DiagnosticsApi.md#diagnostics_get_site_detector_response_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/detectors/{detectorName} | Get site detector response
[**diagnostics_get_site_detector_slot**](DiagnosticsApi.md#diagnostics_get_site_detector_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/detectors/{detectorName} | Get Detector
[**diagnostics_get_site_diagnostic_category**](DiagnosticsApi.md#diagnostics_get_site_diagnostic_category) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory} | Get Diagnostics Category
[**diagnostics_get_site_diagnostic_category_slot**](DiagnosticsApi.md#diagnostics_get_site_diagnostic_category_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory} | Get Diagnostics Category
[**diagnostics_list_hosting_environment_detector_responses**](DiagnosticsApi.md#diagnostics_list_hosting_environment_detector_responses) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/detectors | List Hosting Environment Detector Responses
[**diagnostics_list_site_analyses**](DiagnosticsApi.md#diagnostics_list_site_analyses) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/analyses | Get Site Analyses
[**diagnostics_list_site_analyses_slot**](DiagnosticsApi.md#diagnostics_list_site_analyses_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/analyses | Get Site Analyses
[**diagnostics_list_site_detector_responses**](DiagnosticsApi.md#diagnostics_list_site_detector_responses) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/detectors | List Site Detector Responses
[**diagnostics_list_site_detector_responses_slot**](DiagnosticsApi.md#diagnostics_list_site_detector_responses_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/detectors | List Site Detector Responses
[**diagnostics_list_site_detectors**](DiagnosticsApi.md#diagnostics_list_site_detectors) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/detectors | Get Detectors
[**diagnostics_list_site_detectors_slot**](DiagnosticsApi.md#diagnostics_list_site_detectors_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/detectors | Get Detectors
[**diagnostics_list_site_diagnostic_categories**](DiagnosticsApi.md#diagnostics_list_site_diagnostic_categories) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics | Get Diagnostics Categories
[**diagnostics_list_site_diagnostic_categories_slot**](DiagnosticsApi.md#diagnostics_list_site_diagnostic_categories_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics | Get Diagnostics Categories


# **diagnostics_execute_site_analysis**
> DiagnosticAnalysis diagnostics_execute_site_analysis(resource_group_name, site_name, diagnostic_category, analysis_name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)

Execute Analysis

Description for Execute Analysis

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_analysis import DiagnosticAnalysis
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Category Name
    analysis_name = 'analysis_name_example' # str | Analysis Resource Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start Time (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End Time (optional)
    time_grain = 'time_grain_example' # str | Time Grain (optional)

    try:
        # Execute Analysis
        api_response = api_instance.diagnostics_execute_site_analysis(resource_group_name, site_name, diagnostic_category, analysis_name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)
        print("The response of DiagnosticsApi->diagnostics_execute_site_analysis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_execute_site_analysis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Category Name | 
 **analysis_name** | **str**| Analysis Resource Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **datetime**| Start Time | [optional] 
 **end_time** | **datetime**| End Time | [optional] 
 **time_grain** | **str**| Time Grain | [optional] 

### Return type

[**DiagnosticAnalysis**](DiagnosticAnalysis.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_execute_site_analysis_slot**
> DiagnosticAnalysis diagnostics_execute_site_analysis_slot(resource_group_name, site_name, diagnostic_category, analysis_name, slot, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)

Execute Analysis

Description for Execute Analysis

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_analysis import DiagnosticAnalysis
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Category Name
    analysis_name = 'analysis_name_example' # str | Analysis Resource Name
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start Time (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End Time (optional)
    time_grain = 'time_grain_example' # str | Time Grain (optional)

    try:
        # Execute Analysis
        api_response = api_instance.diagnostics_execute_site_analysis_slot(resource_group_name, site_name, diagnostic_category, analysis_name, slot, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)
        print("The response of DiagnosticsApi->diagnostics_execute_site_analysis_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_execute_site_analysis_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Category Name | 
 **analysis_name** | **str**| Analysis Resource Name | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **datetime**| Start Time | [optional] 
 **end_time** | **datetime**| End Time | [optional] 
 **time_grain** | **str**| Time Grain | [optional] 

### Return type

[**DiagnosticAnalysis**](DiagnosticAnalysis.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_execute_site_detector**
> DiagnosticDetectorResponse diagnostics_execute_site_detector(resource_group_name, site_name, detector_name, diagnostic_category, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)

Execute Detector

Description for Execute Detector

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_detector_response import DiagnosticDetectorResponse
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    detector_name = 'detector_name_example' # str | Detector Resource Name
    diagnostic_category = 'diagnostic_category_example' # str | Category Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start Time (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End Time (optional)
    time_grain = 'time_grain_example' # str | Time Grain (optional)

    try:
        # Execute Detector
        api_response = api_instance.diagnostics_execute_site_detector(resource_group_name, site_name, detector_name, diagnostic_category, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)
        print("The response of DiagnosticsApi->diagnostics_execute_site_detector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_execute_site_detector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **detector_name** | **str**| Detector Resource Name | 
 **diagnostic_category** | **str**| Category Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **datetime**| Start Time | [optional] 
 **end_time** | **datetime**| End Time | [optional] 
 **time_grain** | **str**| Time Grain | [optional] 

### Return type

[**DiagnosticDetectorResponse**](DiagnosticDetectorResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_execute_site_detector_slot**
> DiagnosticDetectorResponse diagnostics_execute_site_detector_slot(resource_group_name, site_name, detector_name, diagnostic_category, slot, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)

Execute Detector

Description for Execute Detector

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_detector_response import DiagnosticDetectorResponse
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    detector_name = 'detector_name_example' # str | Detector Resource Name
    diagnostic_category = 'diagnostic_category_example' # str | Category Name
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start Time (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End Time (optional)
    time_grain = 'time_grain_example' # str | Time Grain (optional)

    try:
        # Execute Detector
        api_response = api_instance.diagnostics_execute_site_detector_slot(resource_group_name, site_name, detector_name, diagnostic_category, slot, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)
        print("The response of DiagnosticsApi->diagnostics_execute_site_detector_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_execute_site_detector_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **detector_name** | **str**| Detector Resource Name | 
 **diagnostic_category** | **str**| Category Name | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **datetime**| Start Time | [optional] 
 **end_time** | **datetime**| End Time | [optional] 
 **time_grain** | **str**| Time Grain | [optional] 

### Return type

[**DiagnosticDetectorResponse**](DiagnosticDetectorResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_hosting_environment_detector_response**
> DetectorResponse diagnostics_get_hosting_environment_detector_response(resource_group_name, name, detector_name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)

Get Hosting Environment Detector Response

Description for Get Hosting Environment Detector Response

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_response import DetectorResponse
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | App Service Environment Name
    detector_name = 'detector_name_example' # str | Detector Resource Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start Time (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End Time (optional)
    time_grain = 'time_grain_example' # str | Time Grain (optional)

    try:
        # Get Hosting Environment Detector Response
        api_response = api_instance.diagnostics_get_hosting_environment_detector_response(resource_group_name, name, detector_name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)
        print("The response of DiagnosticsApi->diagnostics_get_hosting_environment_detector_response:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_hosting_environment_detector_response: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| App Service Environment Name | 
 **detector_name** | **str**| Detector Resource Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **datetime**| Start Time | [optional] 
 **end_time** | **datetime**| End Time | [optional] 
 **time_grain** | **str**| Time Grain | [optional] 

### Return type

[**DetectorResponse**](DetectorResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_analysis**
> AnalysisDefinition diagnostics_get_site_analysis(resource_group_name, site_name, diagnostic_category, analysis_name, subscription_id, api_version)

Get Site Analysis

Description for Get Site Analysis

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.analysis_definition import AnalysisDefinition
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    analysis_name = 'analysis_name_example' # str | Analysis Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Site Analysis
        api_response = api_instance.diagnostics_get_site_analysis(resource_group_name, site_name, diagnostic_category, analysis_name, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_get_site_analysis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_analysis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **analysis_name** | **str**| Analysis Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AnalysisDefinition**](AnalysisDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_analysis_slot**
> AnalysisDefinition diagnostics_get_site_analysis_slot(resource_group_name, site_name, diagnostic_category, analysis_name, slot, subscription_id, api_version)

Get Site Analysis

Description for Get Site Analysis

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.analysis_definition import AnalysisDefinition
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    analysis_name = 'analysis_name_example' # str | Analysis Name
    slot = 'slot_example' # str | Slot - optional
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Site Analysis
        api_response = api_instance.diagnostics_get_site_analysis_slot(resource_group_name, site_name, diagnostic_category, analysis_name, slot, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_get_site_analysis_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_analysis_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **analysis_name** | **str**| Analysis Name | 
 **slot** | **str**| Slot - optional | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AnalysisDefinition**](AnalysisDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_detector**
> DetectorDefinition diagnostics_get_site_detector(resource_group_name, site_name, diagnostic_category, detector_name, subscription_id, api_version)

Get Detector

Description for Get Detector

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_definition import DetectorDefinition
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    detector_name = 'detector_name_example' # str | Detector Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Detector
        api_response = api_instance.diagnostics_get_site_detector(resource_group_name, site_name, diagnostic_category, detector_name, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_get_site_detector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_detector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **detector_name** | **str**| Detector Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DetectorDefinition**](DetectorDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_detector_response**
> DetectorResponse diagnostics_get_site_detector_response(resource_group_name, site_name, detector_name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)

Get site detector response

Description for Get site detector response

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_response import DetectorResponse
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    detector_name = 'detector_name_example' # str | Detector Resource Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start Time (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End Time (optional)
    time_grain = 'time_grain_example' # str | Time Grain (optional)

    try:
        # Get site detector response
        api_response = api_instance.diagnostics_get_site_detector_response(resource_group_name, site_name, detector_name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)
        print("The response of DiagnosticsApi->diagnostics_get_site_detector_response:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_detector_response: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **detector_name** | **str**| Detector Resource Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **datetime**| Start Time | [optional] 
 **end_time** | **datetime**| End Time | [optional] 
 **time_grain** | **str**| Time Grain | [optional] 

### Return type

[**DetectorResponse**](DetectorResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_detector_response_slot**
> DetectorResponse diagnostics_get_site_detector_response_slot(resource_group_name, site_name, detector_name, slot, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)

Get site detector response

Description for Get site detector response

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_response import DetectorResponse
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    detector_name = 'detector_name_example' # str | Detector Resource Name
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start Time (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End Time (optional)
    time_grain = 'time_grain_example' # str | Time Grain (optional)

    try:
        # Get site detector response
        api_response = api_instance.diagnostics_get_site_detector_response_slot(resource_group_name, site_name, detector_name, slot, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain)
        print("The response of DiagnosticsApi->diagnostics_get_site_detector_response_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_detector_response_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **detector_name** | **str**| Detector Resource Name | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **datetime**| Start Time | [optional] 
 **end_time** | **datetime**| End Time | [optional] 
 **time_grain** | **str**| Time Grain | [optional] 

### Return type

[**DetectorResponse**](DetectorResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_detector_slot**
> DetectorDefinition diagnostics_get_site_detector_slot(resource_group_name, site_name, diagnostic_category, detector_name, slot, subscription_id, api_version)

Get Detector

Description for Get Detector

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_definition import DetectorDefinition
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    detector_name = 'detector_name_example' # str | Detector Name
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Detector
        api_response = api_instance.diagnostics_get_site_detector_slot(resource_group_name, site_name, diagnostic_category, detector_name, slot, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_get_site_detector_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_detector_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **detector_name** | **str**| Detector Name | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DetectorDefinition**](DetectorDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_diagnostic_category**
> DiagnosticCategory diagnostics_get_site_diagnostic_category(resource_group_name, site_name, diagnostic_category, subscription_id, api_version)

Get Diagnostics Category

Description for Get Diagnostics Category

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_category import DiagnosticCategory
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Diagnostics Category
        api_response = api_instance.diagnostics_get_site_diagnostic_category(resource_group_name, site_name, diagnostic_category, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_get_site_diagnostic_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_diagnostic_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticCategory**](DiagnosticCategory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_get_site_diagnostic_category_slot**
> DiagnosticCategory diagnostics_get_site_diagnostic_category_slot(resource_group_name, site_name, diagnostic_category, slot, subscription_id, api_version)

Get Diagnostics Category

Description for Get Diagnostics Category

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_category import DiagnosticCategory
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Diagnostics Category
        api_response = api_instance.diagnostics_get_site_diagnostic_category_slot(resource_group_name, site_name, diagnostic_category, slot, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_get_site_diagnostic_category_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_get_site_diagnostic_category_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticCategory**](DiagnosticCategory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_hosting_environment_detector_responses**
> DetectorResponseCollection diagnostics_list_hosting_environment_detector_responses(resource_group_name, name, subscription_id, api_version)

List Hosting Environment Detector Responses

Description for List Hosting Environment Detector Responses

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_response_collection import DetectorResponseCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Site Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List Hosting Environment Detector Responses
        api_response = api_instance.diagnostics_list_hosting_environment_detector_responses(resource_group_name, name, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_hosting_environment_detector_responses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_hosting_environment_detector_responses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Site Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DetectorResponseCollection**](DetectorResponseCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_analyses**
> DiagnosticAnalysisCollection diagnostics_list_site_analyses(resource_group_name, site_name, diagnostic_category, subscription_id, api_version)

Get Site Analyses

Description for Get Site Analyses

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_analysis_collection import DiagnosticAnalysisCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Site Analyses
        api_response = api_instance.diagnostics_list_site_analyses(resource_group_name, site_name, diagnostic_category, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_analyses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_analyses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticAnalysisCollection**](DiagnosticAnalysisCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_analyses_slot**
> DiagnosticAnalysisCollection diagnostics_list_site_analyses_slot(resource_group_name, site_name, diagnostic_category, slot, subscription_id, api_version)

Get Site Analyses

Description for Get Site Analyses

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_analysis_collection import DiagnosticAnalysisCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Site Analyses
        api_response = api_instance.diagnostics_list_site_analyses_slot(resource_group_name, site_name, diagnostic_category, slot, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_analyses_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_analyses_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticAnalysisCollection**](DiagnosticAnalysisCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_detector_responses**
> DetectorResponseCollection diagnostics_list_site_detector_responses(resource_group_name, site_name, subscription_id, api_version)

List Site Detector Responses

Description for List Site Detector Responses

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_response_collection import DetectorResponseCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List Site Detector Responses
        api_response = api_instance.diagnostics_list_site_detector_responses(resource_group_name, site_name, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_detector_responses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_detector_responses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DetectorResponseCollection**](DetectorResponseCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_detector_responses_slot**
> DetectorResponseCollection diagnostics_list_site_detector_responses_slot(resource_group_name, site_name, slot, subscription_id, api_version)

List Site Detector Responses

Description for List Site Detector Responses

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detector_response_collection import DetectorResponseCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List Site Detector Responses
        api_response = api_instance.diagnostics_list_site_detector_responses_slot(resource_group_name, site_name, slot, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_detector_responses_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_detector_responses_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DetectorResponseCollection**](DetectorResponseCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_detectors**
> DiagnosticDetectorCollection diagnostics_list_site_detectors(resource_group_name, site_name, diagnostic_category, subscription_id, api_version)

Get Detectors

Description for Get Detectors

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_detector_collection import DiagnosticDetectorCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Detectors
        api_response = api_instance.diagnostics_list_site_detectors(resource_group_name, site_name, diagnostic_category, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_detectors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_detectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticDetectorCollection**](DiagnosticDetectorCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_detectors_slot**
> DiagnosticDetectorCollection diagnostics_list_site_detectors_slot(resource_group_name, site_name, diagnostic_category, slot, subscription_id, api_version)

Get Detectors

Description for Get Detectors

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_detector_collection import DiagnosticDetectorCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    diagnostic_category = 'diagnostic_category_example' # str | Diagnostic Category
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Detectors
        api_response = api_instance.diagnostics_list_site_detectors_slot(resource_group_name, site_name, diagnostic_category, slot, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_detectors_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_detectors_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **diagnostic_category** | **str**| Diagnostic Category | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticDetectorCollection**](DiagnosticDetectorCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_diagnostic_categories**
> DiagnosticCategoryCollection diagnostics_list_site_diagnostic_categories(resource_group_name, site_name, subscription_id, api_version)

Get Diagnostics Categories

Description for Get Diagnostics Categories

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_category_collection import DiagnosticCategoryCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Diagnostics Categories
        api_response = api_instance.diagnostics_list_site_diagnostic_categories(resource_group_name, site_name, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_diagnostic_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_diagnostic_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticCategoryCollection**](DiagnosticCategoryCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostics_list_site_diagnostic_categories_slot**
> DiagnosticCategoryCollection diagnostics_list_site_diagnostic_categories_slot(resource_group_name, site_name, slot, subscription_id, api_version)

Get Diagnostics Categories

Description for Get Diagnostics Categories

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_category_collection import DiagnosticCategoryCollection
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
    api_instance = openapi_client.DiagnosticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    site_name = 'site_name_example' # str | Site Name
    slot = 'slot_example' # str | Slot Name
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get Diagnostics Categories
        api_response = api_instance.diagnostics_list_site_diagnostic_categories_slot(resource_group_name, site_name, slot, subscription_id, api_version)
        print("The response of DiagnosticsApi->diagnostics_list_site_diagnostic_categories_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->diagnostics_list_site_diagnostic_categories_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **site_name** | **str**| Site Name | 
 **slot** | **str**| Slot Name | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DiagnosticCategoryCollection**](DiagnosticCategoryCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


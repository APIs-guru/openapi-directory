# openapi_client.ReportingAndMonitoringApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**report_performance_planning_level_id_get**](ReportingAndMonitoringApi.md#report_performance_planning_level_id_get) | **GET** /report/performance/{planningLevelId} | Month over month performance per planning level
[**report_performance_sku_rationalization_planning_level_id_get**](ReportingAndMonitoringApi.md#report_performance_sku_rationalization_planning_level_id_get) | **GET** /report/performance/sku-rationalization/{planningLevelId} | SKU rationalization report
[**report_planning_level_organization_get**](ReportingAndMonitoringApi.md#report_planning_level_organization_get) | **GET** /report/planning-level/organization | Get list of plannign levels by organization
[**report_planning_level_user_get**](ReportingAndMonitoringApi.md#report_planning_level_user_get) | **GET** /report/planning-level/user | Get list of plannign levels by user
[**report_user_get**](ReportingAndMonitoringApi.md#report_user_get) | **GET** /report/user | Get usage statistics per user


# **report_performance_planning_level_id_get**
> report_performance_planning_level_id_get(planning_level_id, token=token)

Month over month performance per planning level

Month over month performance per planning level

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAndMonitoringApi(api_client)
    planning_level_id = 'planning_level_id_example' # str | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Month over month performance per planning level
        api_instance.report_performance_planning_level_id_get(planning_level_id, token=token)
    except Exception as e:
        print("Exception when calling ReportingAndMonitoringApi->report_performance_planning_level_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planning_level_id** | **str**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_performance_sku_rationalization_planning_level_id_get**
> List[PortfolioModel] report_performance_sku_rationalization_planning_level_id_get(planning_level_id, token=token)

SKU rationalization report

SKU rationalization report

### Example


```python
import openapi_client
from openapi_client.models.portfolio_model import PortfolioModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAndMonitoringApi(api_client)
    planning_level_id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # SKU rationalization report
        api_response = api_instance.report_performance_sku_rationalization_planning_level_id_get(planning_level_id, token=token)
        print("The response of ReportingAndMonitoringApi->report_performance_sku_rationalization_planning_level_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAndMonitoringApi->report_performance_sku_rationalization_planning_level_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planning_level_id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

[**List[PortfolioModel]**](PortfolioModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_planning_level_organization_get**
> report_planning_level_organization_get(token=token)

Get list of plannign levels by organization

Get list of plannign levels by organization

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAndMonitoringApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get list of plannign levels by organization
        api_instance.report_planning_level_organization_get(token=token)
    except Exception as e:
        print("Exception when calling ReportingAndMonitoringApi->report_planning_level_organization_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_planning_level_user_get**
> report_planning_level_user_get(token=token)

Get list of plannign levels by user

Get list of plannign levels by user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAndMonitoringApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get list of plannign levels by user
        api_instance.report_planning_level_user_get(token=token)
    except Exception as e:
        print("Exception when calling ReportingAndMonitoringApi->report_planning_level_user_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_user_get**
> report_user_get(token=token)

Get usage statistics per user

Get usage statistics per user

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAndMonitoringApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get usage statistics per user
        api_instance.report_user_get(token=token)
    except Exception as e:
        print("Exception when calling ReportingAndMonitoringApi->report_user_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


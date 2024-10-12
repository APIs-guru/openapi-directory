# openapi_client.3ForBackEndOptionalApi

All URIs are relative to *https://api.telematicssdk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_v1_scorings_consolidated**](3ForBackEndOptionalApi.md#_v1_scorings_consolidated) | **GET** /statistics/v1/Scorings/consolidated | /v1/Scorings/consolidated
[**_v1_scorings_consolidated_daily**](3ForBackEndOptionalApi.md#_v1_scorings_consolidated_daily) | **GET** /statistics/v1/Scorings/consolidated/daily | /v1/Scorings/consolidated/daily
[**_v1_statistics_consolidated**](3ForBackEndOptionalApi.md#_v1_statistics_consolidated) | **GET** /statistics/v1/Statistics/consolidated | /v1/Statistics/consolidated
[**_v1_statistics_consolidated_daily**](3ForBackEndOptionalApi.md#_v1_statistics_consolidated_daily) | **GET** /statistics/v1/Statistics/consolidated/daily | /v1/Statistics/consolidated/daily


# **_v1_scorings_consolidated**
> _v1_scorings_consolidated(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)

/v1/Scorings/consolidated

/v1/Scorings/consolidated

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.telematicssdk.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.telematicssdk.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.3ForBackEndOptionalApi(api_client)
    device_token = '' # str |  (optional)
    start_date = '2021-01-17T01:04:22.840Z' # str |  (optional)
    end_date = '2021-01-18T01:04:22.840Z' # str |  (optional)
    tag = '' # str |  (optional)
    instance_id = '' # str |  (optional)
    app_id = '' # str |  (optional)
    company_id = '' # str |  (optional)

    try:
        # /v1/Scorings/consolidated
        api_instance._v1_scorings_consolidated(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)
    except Exception as e:
        print("Exception when calling 3ForBackEndOptionalApi->_v1_scorings_consolidated: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_token** | **str**|  | [optional] 
 **start_date** | **str**|  | [optional] 
 **end_date** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **instance_id** | **str**|  | [optional] 
 **app_id** | **str**|  | [optional] 
 **company_id** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Strict-Transport-Security -  <br>  * X-Powered-By -  <br>  * X-StackifyID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **_v1_scorings_consolidated_daily**
> V1ScoringsConsolidatedDaily200Response _v1_scorings_consolidated_daily(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)

/v1/Scorings/consolidated/daily

/v1/Scorings/consolidated/daily

### Example


```python
import openapi_client
from openapi_client.models.v1_scorings_consolidated_daily200_response import V1ScoringsConsolidatedDaily200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.telematicssdk.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.telematicssdk.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.3ForBackEndOptionalApi(api_client)
    device_token = '' # str |  (optional)
    start_date = '2021-01-17T01:04:22.840Z' # str |  (optional)
    end_date = '2021-01-18T01:04:22.840Z' # str |  (optional)
    tag = '' # str |  (optional)
    instance_id = '' # str |  (optional)
    app_id = '' # str |  (optional)
    company_id = '' # str |  (optional)

    try:
        # /v1/Scorings/consolidated/daily
        api_response = api_instance._v1_scorings_consolidated_daily(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)
        print("The response of 3ForBackEndOptionalApi->_v1_scorings_consolidated_daily:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 3ForBackEndOptionalApi->_v1_scorings_consolidated_daily: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_token** | **str**|  | [optional] 
 **start_date** | **str**|  | [optional] 
 **end_date** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **instance_id** | **str**|  | [optional] 
 **app_id** | **str**|  | [optional] 
 **company_id** | **str**|  | [optional] 

### Return type

[**V1ScoringsConsolidatedDaily200Response**](V1ScoringsConsolidatedDaily200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Strict-Transport-Security -  <br>  * X-Powered-By -  <br>  * X-StackifyID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **_v1_statistics_consolidated**
> _v1_statistics_consolidated(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)

/v1/Statistics/consolidated

/v1/Statistics/consolidated

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.telematicssdk.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.telematicssdk.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.3ForBackEndOptionalApi(api_client)
    device_token = '' # str |  (optional)
    start_date = '2021-01-18' # str |  (optional)
    end_date = '2021-03-18' # str |  (optional)
    tag = '' # str |  (optional)
    instance_id = '' # str |  (optional)
    app_id = '' # str |  (optional)
    company_id = '' # str |  (optional)

    try:
        # /v1/Statistics/consolidated
        api_instance._v1_statistics_consolidated(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)
    except Exception as e:
        print("Exception when calling 3ForBackEndOptionalApi->_v1_statistics_consolidated: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_token** | **str**|  | [optional] 
 **start_date** | **str**|  | [optional] 
 **end_date** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **instance_id** | **str**|  | [optional] 
 **app_id** | **str**|  | [optional] 
 **company_id** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Strict-Transport-Security -  <br>  * X-Powered-By -  <br>  * X-StackifyID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **_v1_statistics_consolidated_daily**
> _v1_statistics_consolidated_daily(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)

/v1/Statistics/consolidated/daily

/v1/Statistics/consolidated/daily

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.telematicssdk.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.telematicssdk.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.3ForBackEndOptionalApi(api_client)
    device_token = '' # str |  (optional)
    start_date = '2021-01-17' # str |  (optional)
    end_date = '2021-01-18' # str |  (optional)
    tag = '' # str |  (optional)
    instance_id = '' # str |  (optional)
    app_id = '' # str |  (optional)
    company_id = '' # str |  (optional)

    try:
        # /v1/Statistics/consolidated/daily
        api_instance._v1_statistics_consolidated_daily(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)
    except Exception as e:
        print("Exception when calling 3ForBackEndOptionalApi->_v1_statistics_consolidated_daily: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_token** | **str**|  | [optional] 
 **start_date** | **str**|  | [optional] 
 **end_date** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **instance_id** | **str**|  | [optional] 
 **app_id** | **str**|  | [optional] 
 **company_id** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Strict-Transport-Security -  <br>  * X-Powered-By -  <br>  * X-StackifyID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


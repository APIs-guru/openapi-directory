# openapi_client.ConsolidatedSafeScoringApi

All URIs are relative to *https://api.telematicssdk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_v1_scorings_consolidated_0**](ConsolidatedSafeScoringApi.md#_v1_scorings_consolidated_0) | **GET** /statistics/v1/Scorings/consolidated | /v1/Scorings/consolidated
[**_v1_scorings_consolidated_daily_0**](ConsolidatedSafeScoringApi.md#_v1_scorings_consolidated_daily_0) | **GET** /statistics/v1/Scorings/consolidated/daily | /v1/Scorings/consolidated/daily


# **_v1_scorings_consolidated_0**
> _v1_scorings_consolidated_0(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)

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
    api_instance = openapi_client.ConsolidatedSafeScoringApi(api_client)
    device_token = '' # str |  (optional)
    start_date = '2021-01-17T01:04:22.840Z' # str |  (optional)
    end_date = '2021-01-18T01:04:22.840Z' # str |  (optional)
    tag = '' # str |  (optional)
    instance_id = '' # str |  (optional)
    app_id = '' # str |  (optional)
    company_id = '' # str |  (optional)

    try:
        # /v1/Scorings/consolidated
        api_instance._v1_scorings_consolidated_0(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)
    except Exception as e:
        print("Exception when calling ConsolidatedSafeScoringApi->_v1_scorings_consolidated_0: %s\n" % e)
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

# **_v1_scorings_consolidated_daily_0**
> V1ScoringsConsolidatedDaily200Response _v1_scorings_consolidated_daily_0(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)

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
    api_instance = openapi_client.ConsolidatedSafeScoringApi(api_client)
    device_token = '' # str |  (optional)
    start_date = '2021-01-17T01:04:22.840Z' # str |  (optional)
    end_date = '2021-01-18T01:04:22.840Z' # str |  (optional)
    tag = '' # str |  (optional)
    instance_id = '' # str |  (optional)
    app_id = '' # str |  (optional)
    company_id = '' # str |  (optional)

    try:
        # /v1/Scorings/consolidated/daily
        api_response = api_instance._v1_scorings_consolidated_daily_0(device_token=device_token, start_date=start_date, end_date=end_date, tag=tag, instance_id=instance_id, app_id=app_id, company_id=company_id)
        print("The response of ConsolidatedSafeScoringApi->_v1_scorings_consolidated_daily_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsolidatedSafeScoringApi->_v1_scorings_consolidated_daily_0: %s\n" % e)
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


# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_report**](DefaultApi.md#cancel_report) | **DELETE** /v2/reports/{report_id} | Cancel the execution of a report
[**create_async_report**](DefaultApi.md#create_async_report) | **POST** /v2/reports | Create an asynchronous report
[**download_report**](DefaultApi.md#download_report) | **GET** /v3/media/{file_id} | Get report data
[**get_records**](DefaultApi.md#get_records) | **GET** /v2/reports/records | Load records synchronously
[**get_report**](DefaultApi.md#get_report) | **GET** /v2/reports/{report_id} | Get status of report
[**list_reports**](DefaultApi.md#list_reports) | **GET** /v2/reports | List reports


# **cancel_report**
> GetReport200Response cancel_report(report_id)

Cancel the execution of a report

Cancel the execution of a pending or processing report.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.get_report200_response import GetReport200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    report_id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | UUID of the report

    try:
        # Cancel the execution of a report
        api_response = api_instance.cancel_report(report_id)
        print("The response of DefaultApi->cancel_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cancel_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **str**| UUID of the report | 

### Return type

[**GetReport200Response**](GetReport200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**409** | Invalid Abort Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_async_report**
> CreateAsyncReport200Response create_async_report(create_async_report_request=create_async_report_request)

Create an asynchronous report

Request a report on your account activity

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_async_report200_response import CreateAsyncReport200Response
from openapi_client.models.create_async_report_request import CreateAsyncReportRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    create_async_report_request = openapi_client.CreateAsyncReportRequest() # CreateAsyncReportRequest | The parameters of the JSON body will be used to create and filter the report.<br> The value of the `product` field will define which product the report will be created for and which parameters are accepted.  (optional)

    try:
        # Create an asynchronous report
        api_response = api_instance.create_async_report(create_async_report_request=create_async_report_request)
        print("The response of DefaultApi->create_async_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_async_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_async_report_request** | [**CreateAsyncReportRequest**](CreateAsyncReportRequest.md)| The parameters of the JSON body will be used to create and filter the report.&lt;br&gt; The value of the &#x60;product&#x60; field will define which product the report will be created for and which parameters are accepted.  | [optional] 

### Return type

[**CreateAsyncReport200Response**](CreateAsyncReport200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_report**
> DownloadReport200Response download_report(file_id)

Get report data

Download a zipped archive of the rendered report. The file is available for download for 72 hours.<br> The zip file will be named `<PRODUCT>_<REPORT_ID>.zip`<br> The csv file in the zip archive will be named as `report_<PRODUCT>_<ACCOUNT_ID>_<DATE>.csv` the date will be formatted as `yyyyMMdd`. 

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.download_report200_response import DownloadReport200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    file_id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | UUID of the file.

    try:
        # Get report data
        api_response = api_instance.download_report(file_id)
        print("The response of DefaultApi->download_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->download_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| UUID of the file. | 

### Return type

[**DownloadReport200Response**](DownloadReport200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Zip file containing CSV files |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_records**
> GetRecords200Response get_records(account_id, product, direction=direction, id=id, date_start=date_start, date_end=date_end, include_message=include_message, show_concatenated=show_concatenated, status=status)

Load records synchronously

Fetch usage data synchronously

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.get_records200_response import GetRecords200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    account_id = 'abcd1234' # str | The account for which the list of reports will be queried.
    product = 'SMS' # str | The product to return records for
    direction = 'inbound' # str | Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`. (optional)
    id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | The UUID of the message or call to be searched for. You can specify a comma-separated list of UUIDs. If UUIDs are not found they are listed in the response in the `ids_not_found` field.  If you specify `id`, you must not specify `status`, `date_start` or `date_end`.  (optional)
    date_start = '2017-12-01T00:00:00+0000' # date | ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports should begin.   It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.  If you provide this, you must provide `date_end` and must not provide `id`.  (optional)
    date_end = '2018-01-01T00:00:00+0000' # date | **Must be no more than 24 hours later than `date_start`**  ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR.  If you provide this, you must provide `date_start` and must not provide `id`.  (optional)
    include_message = False # bool | Include the message contents in the records. Only applicable for use with products `SMS` and `MESSAGES`, where it is optional. (optional) (default to False)
    show_concatenated = False # bool | Indicates whether the SMS was split up into multiple parts (due to its length). (optional) (default to False)
    status = none # str | The SMS status to search for. Optional where product is `SMS`. (optional) (default to none)

    try:
        # Load records synchronously
        api_response = api_instance.get_records(account_id, product, direction=direction, id=id, date_start=date_start, date_end=date_end, include_message=include_message, show_concatenated=show_concatenated, status=status)
        print("The response of DefaultApi->get_records:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account for which the list of reports will be queried. | 
 **product** | **str**| The product to return records for | 
 **direction** | **str**| Direction of the communication, either &#x60;inbound&#x60; (received by our services), or &#x60;outbound&#x60; (originated from our services). Required for products &#x60;SMS&#x60; and &#x60;MESSAGES&#x60;. Optional for &#x60;VOICE-CALL&#x60;. Invalid for &#x60;IN-APP-VOICE&#x60;, &#x60;CONVERSATIONS&#x60;, &#x60;NUMBER-INSIGHT&#x60;, &#x60;VERIFY-API&#x60;. | [optional] 
 **id** | **str**| The UUID of the message or call to be searched for. You can specify a comma-separated list of UUIDs. If UUIDs are not found they are listed in the response in the &#x60;ids_not_found&#x60; field.  If you specify &#x60;id&#x60;, you must not specify &#x60;status&#x60;, &#x60;date_start&#x60; or &#x60;date_end&#x60;.  | [optional] 
 **date_start** | **date**| ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;) for when reports should begin.   It filters on the time the API call was received by Vonage and corresponds to the field &#x60;date_received&#x60; (&#x60;date_start&#x60; for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field &#x60;date_received&#x60; (&#x60;date_start&#x60; for Voice) in the CDR.  If you provide this, you must provide &#x60;date_end&#x60; and must not provide &#x60;id&#x60;.  | [optional] 
 **date_end** | **date**| **Must be no more than 24 hours later than &#x60;date_start&#x60;**  ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field &#x60;date_received&#x60; in the CDR.  If you provide this, you must provide &#x60;date_start&#x60; and must not provide &#x60;id&#x60;.  | [optional] 
 **include_message** | **bool**| Include the message contents in the records. Only applicable for use with products &#x60;SMS&#x60; and &#x60;MESSAGES&#x60;, where it is optional. | [optional] [default to False]
 **show_concatenated** | **bool**| Indicates whether the SMS was split up into multiple parts (due to its length). | [optional] [default to False]
 **status** | **str**| The SMS status to search for. Optional where product is &#x60;SMS&#x60;. | [optional] [default to none]

### Return type

[**GetRecords200Response**](GetRecords200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Unprocessable entity |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_report**
> GetReport200Response get_report(report_id)

Get status of report

Retrieve status and metadata about a requested report.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.get_report200_response import GetReport200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    report_id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | UUID of the report request (`request_id` in response).

    try:
        # Get status of report
        api_response = api_instance.get_report(report_id)
        print("The response of DefaultApi->get_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **str**| UUID of the report request (&#x60;request_id&#x60; in response). | 

### Return type

[**GetReport200Response**](GetReport200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_reports**
> ListReports200Response list_reports(account_id, status, date_from=date_from, date_to=date_to)

List reports

List reports created by the specified account based on filtered provided.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.list_reports200_response import ListReports200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    account_id = 'abcd1234' # str | The account for which the list of reports will be queried.
    status = 'SUCCESS, FAILED' # str | A comma-separated list of report status values. Reports with any of the statuses specified are returned. The values in the comma-seperated list specified for `status` can be any of `PENDING`, `PROCESSING`, `SUCCESS`, `ABORTED`, `FAILED`, `TRUNCATED`.
    date_from = '2019-06-28T00:00:00-00:00' # date | ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date from which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`. (optional)
    date_to = '2019-06-28T23:59:59-00:00' # date | ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date until which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`. (optional)

    try:
        # List reports
        api_response = api_instance.list_reports(account_id, status, date_from=date_from, date_to=date_to)
        print("The response of DefaultApi->list_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_reports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account for which the list of reports will be queried. | 
 **status** | **str**| A comma-separated list of report status values. Reports with any of the statuses specified are returned. The values in the comma-seperated list specified for &#x60;status&#x60; can be any of &#x60;PENDING&#x60;, &#x60;PROCESSING&#x60;, &#x60;SUCCESS&#x60;, &#x60;ABORTED&#x60;, &#x60;FAILED&#x60;, &#x60;TRUNCATED&#x60;. | 
 **date_from** | **date**| ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date from which the list of reports will be queried. Format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;. | [optional] 
 **date_to** | **date**| ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date until which the list of reports will be queried. Format &#x60;yyyy-mm-ddThh:mm:ss[.sss]±hh:mm&#x60; or &#x60;yyyy-mm-ddThh:mm:ss[.sss]Z&#x60;. | [optional] 

### Return type

[**ListReports200Response**](ListReports200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


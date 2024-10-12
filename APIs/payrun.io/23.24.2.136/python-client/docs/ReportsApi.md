# openapi_client.ReportsApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_report_definition**](ReportsApi.md#delete_report_definition) | **DELETE** /Report/{ReportDefinitionId} | Deletes a report definition
[**delete_transform_definition**](ReportsApi.md#delete_transform_definition) | **DELETE** /Transform/{TransformDefinitionId} | Deletes a transform definition
[**get_active_pay_instructions_report_output**](ReportsApi.md#get_active_pay_instructions_report_output) | **GET** /Report/ACTPAYINS/run | Runs the active pay instructions report
[**get_aoe_liability_report_ouput**](ReportsApi.md#get_aoe_liability_report_ouput) | **GET** /Report/AOELIABILITY/run | Runs the AOE liability report
[**get_dps_message_report_output**](ReportsApi.md#get_dps_message_report_output) | **GET** /Report/DPSMSG/run | Runs the DPS message report
[**get_employer_summary_report_ouput**](ReportsApi.md#get_employer_summary_report_ouput) | **GET** /Report/EMPSUM/run | Runs the employer summary report
[**get_gross_to_net_report_output**](ReportsApi.md#get_gross_to_net_report_output) | **GET** /Report/GRO2NET/run | Runs the gross to net report
[**get_holiday_balance_report_output**](ReportsApi.md#get_holiday_balance_report_output) | **GET** /Report/HOLBAL/run | Runs the holiday balance report
[**get_journal_report_ouput**](ReportsApi.md#get_journal_report_ouput) | **GET** /Report/JOURNAL/run | Runs the journal report
[**get_last_pay_date_report_ouput**](ReportsApi.md#get_last_pay_date_report_ouput) | **GET** /Report/LASTPAYDATE/run | Runs the last pay date report
[**get_net_pay_report_output**](ReportsApi.md#get_net_pay_report_output) | **GET** /Report/NETPAY/run | Runs the net pay report
[**get_next_pay_period_dates_report_output**](ReportsApi.md#get_next_pay_period_dates_report_output) | **GET** /Report/NEXTPERIOD/run | Runs the next pay period report
[**get_p11_summary_report_output**](ReportsApi.md#get_p11_summary_report_output) | **GET** /Report/P11SUM/run | Runs the P11 summary report
[**get_p32_net_report_output**](ReportsApi.md#get_p32_net_report_output) | **GET** /Report/P32/run | Runs the P32 report
[**get_p32_summary_net_report_output**](ReportsApi.md#get_p32_summary_net_report_output) | **GET** /Report/P32SUM/run | Runs the P32 summary report
[**get_p45_report_output**](ReportsApi.md#get_p45_report_output) | **GET** /Report/P45/run | Runs the P45 report
[**get_p60_report_output**](ReportsApi.md#get_p60_report_output) | **GET** /Report/P60/run | Runs the P60 report
[**get_papdis_report_ouput**](ReportsApi.md#get_papdis_report_ouput) | **GET** /Report/PAPDIS/run | Runs the PAPDIS report
[**get_pass_report_ouput**](ReportsApi.md#get_pass_report_ouput) | **GET** /Report/PASS/run | Runs the PASS report
[**get_pay_dashboard_payslip_report_ouput**](ReportsApi.md#get_pay_dashboard_payslip_report_ouput) | **GET** /Report/PAYDASHBOARD/run | Runs the Pay Dashboard payslips report
[**get_payslip3_report_output**](ReportsApi.md#get_payslip3_report_output) | **GET** /Report/PAYSLIP3/run | Runs the verbose payslip report
[**get_pension_liability_report_output**](ReportsApi.md#get_pension_liability_report_output) | **GET** /Report/PENLIABILITY/run | Runs the pension liability report
[**get_report_definition_from_application**](ReportsApi.md#get_report_definition_from_application) | **GET** /Report/{ReportDefinitionId} | Get the report definition
[**get_report_definitions_from_application**](ReportsApi.md#get_report_definitions_from_application) | **GET** /Reports | Gets all reports
[**get_report_output**](ReportsApi.md#get_report_output) | **GET** /Report/{ReportDefinitionId}/run | Runs the specified report definition
[**get_transform_definition_from_application**](ReportsApi.md#get_transform_definition_from_application) | **GET** /Transform/{TransformDefinitionId} | Get the transform definition
[**get_transform_definitions_from_application**](ReportsApi.md#get_transform_definitions_from_application) | **GET** /Transforms | Gets all transform definitions
[**post_report_definition**](ReportsApi.md#post_report_definition) | **POST** /Reports | Create a new report definition
[**post_transform_definition**](ReportsApi.md#post_transform_definition) | **POST** /Transforms | Create a new transform definition
[**put_report_definition**](ReportsApi.md#put_report_definition) | **PUT** /Report/{ReportDefinitionId} | Updates a report definition
[**put_transform_definition**](ReportsApi.md#put_transform_definition) | **PUT** /Transform/{TransformDefinitionId} | Updates a transform definition


# **delete_report_definition**
> delete_report_definition(report_definition_id, authorization, api_version)

Deletes a report definition

Delete the specified report definition

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    report_definition_id = 'report_definition_id_example' # str | The report definition unique identifier.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a report definition
        api_instance.delete_report_definition(report_definition_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling ReportsApi->delete_report_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_definition_id** | **str**| The report definition unique identifier. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_transform_definition**
> delete_transform_definition(transform_definition_id, authorization, api_version)

Deletes a transform definition

Delete the specified transform definition

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    transform_definition_id = 'transform_definition_id_example' # str | The transform definition unique identifier.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a transform definition
        api_instance.delete_transform_definition(transform_definition_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling ReportsApi->delete_transform_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform_definition_id** | **str**| The transform definition unique identifier. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_active_pay_instructions_report_output**
> bytearray get_active_pay_instructions_report_output(employer_key, employee_key, from_date, authorization, api_version, active_on=active_on, to_date=to_date, type=type)

Runs the active pay instructions report

Returns the result of the executed active pay instructions report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    employee_key = 'employee_key_example' # str | The employee unique key. E.g. EE001
    from_date = '2013-10-20' # date | The lower filter date. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    active_on = '2013-10-20' # date | The active date to consider. E.g 2017-04-05 (optional)
    to_date = '2013-10-20' # date | The upper filter date. E.g 2017-04-05 (optional)
    type = 'type_example' # str | the data type to filter on. E.g. TaxPayInstruction (optional)

    try:
        # Runs the active pay instructions report
        api_response = api_instance.get_active_pay_instructions_report_output(employer_key, employee_key, from_date, authorization, api_version, active_on=active_on, to_date=to_date, type=type)
        print("The response of ReportsApi->get_active_pay_instructions_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_active_pay_instructions_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **employee_key** | **str**| The employee unique key. E.g. EE001 | 
 **from_date** | **date**| The lower filter date. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **active_on** | **date**| The active date to consider. E.g 2017-04-05 | [optional] 
 **to_date** | **date**| The upper filter date. E.g 2017-04-05 | [optional] 
 **type** | **str**| the data type to filter on. E.g. TaxPayInstruction | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the active pay instructions report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_aoe_liability_report_ouput**
> bytearray get_aoe_liability_report_ouput(employer_key, pay_schedule_key, tax_year, authorization, api_version, tax_period=tax_period, transform_definition_key=transform_definition_key)

Runs the AOE liability report

Returns the result of the executed AOE liability report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    tax_period = 56 # int | The tax period number. (optional)
    transform_definition_key = 'transform_definition_key_example' # str | The transform definition unique key. E.g. P45-Pdf (optional)

    try:
        # Runs the AOE liability report
        api_response = api_instance.get_aoe_liability_report_ouput(employer_key, pay_schedule_key, tax_year, authorization, api_version, tax_period=tax_period, transform_definition_key=transform_definition_key)
        print("The response of ReportsApi->get_aoe_liability_report_ouput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_aoe_liability_report_ouput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **tax_period** | **int**| The tax period number. | [optional] 
 **transform_definition_key** | **str**| The transform definition unique key. E.g. P45-Pdf | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the AOE liability report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dps_message_report_output**
> bytearray get_dps_message_report_output(employer_key, from_date, authorization, api_version, to_date=to_date, message_types=message_types, message_statuses=message_statuses, start_index=start_index, max_index=max_index)

Runs the DPS message report

Returns the result of the executed DPS message report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    from_date = '2013-10-20' # date | The lower filter date. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    to_date = '2013-10-20' # date | The upper filter date. E.g 2017-04-05 (optional)
    message_types = 'message_types_example' # str | The DPS message types as a CSV list. E.g. P6,P9,SL1,SL2 (optional)
    message_statuses = 'message_statuses_example' # str | The DPS message status as a CSV list. E.g. Retrieved,Processed,Blocked,Ignored (optional)
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)

    try:
        # Runs the DPS message report
        api_response = api_instance.get_dps_message_report_output(employer_key, from_date, authorization, api_version, to_date=to_date, message_types=message_types, message_statuses=message_statuses, start_index=start_index, max_index=max_index)
        print("The response of ReportsApi->get_dps_message_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_dps_message_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **from_date** | **date**| The lower filter date. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **to_date** | **date**| The upper filter date. E.g 2017-04-05 | [optional] 
 **message_types** | **str**| The DPS message types as a CSV list. E.g. P6,P9,SL1,SL2 | [optional] 
 **message_statuses** | **str**| The DPS message status as a CSV list. E.g. Retrieved,Processed,Blocked,Ignored | [optional] 
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the DPS message report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employer_summary_report_ouput**
> bytearray get_employer_summary_report_ouput(employer_key, context_date, authorization, api_version)

Runs the employer summary report

Returns the result of the employer summary report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    context_date = '2013-10-20' # date | The date context for the report. E.g. 2018-04-30
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Runs the employer summary report
        api_response = api_instance.get_employer_summary_report_ouput(employer_key, context_date, authorization, api_version)
        print("The response of ReportsApi->get_employer_summary_report_ouput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_employer_summary_report_ouput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **context_date** | **date**| The date context for the report. E.g. 2018-04-30 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the employer summary report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_gross_to_net_report_output**
> bytearray get_gross_to_net_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, tax_period=tax_period, start_index=start_index, max_index=max_index)

Runs the gross to net report

Returns the result of the executed gross to net report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    tax_period = 56 # int | The tax period number. (optional)
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)

    try:
        # Runs the gross to net report
        api_response = api_instance.get_gross_to_net_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, tax_period=tax_period, start_index=start_index, max_index=max_index)
        print("The response of ReportsApi->get_gross_to_net_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_gross_to_net_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **tax_period** | **int**| The tax period number. | [optional] 
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the gross to net report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_holiday_balance_report_output**
> bytearray get_holiday_balance_report_output(employer_key, holiday_year_end, authorization, api_version, employee_codes=employee_codes, start_index=start_index, max_index=max_index)

Runs the holiday balance report

Returns the result of the executed holiday balance report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    holiday_year_end = '2013-10-20' # date | The holiday year end for the report. E.g. 2018-12-31
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    employee_codes = 'employee_codes_example' # str | A comma separated list of the employee codes. E.g. EMP001,EMP002 (optional)
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)

    try:
        # Runs the holiday balance report
        api_response = api_instance.get_holiday_balance_report_output(employer_key, holiday_year_end, authorization, api_version, employee_codes=employee_codes, start_index=start_index, max_index=max_index)
        print("The response of ReportsApi->get_holiday_balance_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_holiday_balance_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **holiday_year_end** | **date**| The holiday year end for the report. E.g. 2018-12-31 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **employee_codes** | **str**| A comma separated list of the employee codes. E.g. EMP001,EMP002 | [optional] 
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the holiday balance report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_journal_report_ouput**
> bytearray get_journal_report_ouput(employer_key, pay_frequency, tax_year, ledger_target, authorization, api_version, tax_period=tax_period)

Runs the journal report

Returns the result of the journal report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_frequency = 'pay_frequency_example' # str | The pay frequency option. E.g. Monthly
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    ledger_target = 'ledger_target_example' # str | Specific to JOURNAL report, a filter used to select the journal lines for the specified ledger target. E.g. [Default]
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    tax_period = 56 # int | The tax period number. (optional)

    try:
        # Runs the journal report
        api_response = api_instance.get_journal_report_ouput(employer_key, pay_frequency, tax_year, ledger_target, authorization, api_version, tax_period=tax_period)
        print("The response of ReportsApi->get_journal_report_ouput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_journal_report_ouput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_frequency** | **str**| The pay frequency option. E.g. Monthly | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **ledger_target** | **str**| Specific to JOURNAL report, a filter used to select the journal lines for the specified ledger target. E.g. [Default] | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **tax_period** | **int**| The tax period number. | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the journal report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_last_pay_date_report_ouput**
> bytearray get_last_pay_date_report_ouput(employer_key, employee_key, authorization, api_version)

Runs the last pay date report

Returns the result of the executed last pay date report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    employee_key = 'employee_key_example' # str | The employee unique key. E.g. EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Runs the last pay date report
        api_response = api_instance.get_last_pay_date_report_ouput(employer_key, employee_key, authorization, api_version)
        print("The response of ReportsApi->get_last_pay_date_report_ouput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_last_pay_date_report_ouput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **employee_key** | **str**| The employee unique key. E.g. EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the last pay date report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_net_pay_report_output**
> bytearray get_net_pay_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, tax_period=tax_period, start_index=start_index, max_index=max_index)

Runs the net pay report

Returns the result of the executed net pay report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    tax_period = 56 # int | The tax period number. (optional)
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)

    try:
        # Runs the net pay report
        api_response = api_instance.get_net_pay_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, tax_period=tax_period, start_index=start_index, max_index=max_index)
        print("The response of ReportsApi->get_net_pay_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_net_pay_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **tax_period** | **int**| The tax period number. | [optional] 
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the net pay report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_next_pay_period_dates_report_output**
> bytearray get_next_pay_period_dates_report_output(employer_key, pay_schedule_key, authorization, api_version)

Runs the next pay period report

Returns the result of the executed next pay period report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Runs the next pay period report
        api_response = api_instance.get_next_pay_period_dates_report_output(employer_key, pay_schedule_key, authorization, api_version)
        print("The response of ReportsApi->get_next_pay_period_dates_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_next_pay_period_dates_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the next pay period report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_p11_summary_report_output**
> bytearray get_p11_summary_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, start_index=start_index, max_index=max_index)

Runs the P11 summary report

Returns the result of the executed P11 summary report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)

    try:
        # Runs the P11 summary report
        api_response = api_instance.get_p11_summary_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, start_index=start_index, max_index=max_index)
        print("The response of ReportsApi->get_p11_summary_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_p11_summary_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the P11 report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_p32_net_report_output**
> bytearray get_p32_net_report_output(employer_key, tax_year, authorization, api_version)

Runs the P32 report

Returns the result of the executed P32 report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Runs the P32 report
        api_response = api_instance.get_p32_net_report_output(employer_key, tax_year, authorization, api_version)
        print("The response of ReportsApi->get_p32_net_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_p32_net_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the P32 report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_p32_summary_net_report_output**
> bytearray get_p32_summary_net_report_output(employer_key, tax_year, authorization, api_version)

Runs the P32 summary report

Returns the result of the executed P32 summary report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Runs the P32 summary report
        api_response = api_instance.get_p32_summary_net_report_output(employer_key, tax_year, authorization, api_version)
        print("The response of ReportsApi->get_p32_summary_net_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_p32_summary_net_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the P32 summary report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_p45_report_output**
> bytearray get_p45_report_output(employer_key, employee_key, authorization, api_version, transform_definition_key=transform_definition_key)

Runs the P45 report

Returns the result of the executed P45 report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    employee_key = 'employee_key_example' # str | The employee unique key. E.g. EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    transform_definition_key = 'transform_definition_key_example' # str | The transform definition unique key. E.g. P45-Pdf (optional)

    try:
        # Runs the P45 report
        api_response = api_instance.get_p45_report_output(employer_key, employee_key, authorization, api_version, transform_definition_key=transform_definition_key)
        print("The response of ReportsApi->get_p45_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_p45_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **employee_key** | **str**| The employee unique key. E.g. EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **transform_definition_key** | **str**| The transform definition unique key. E.g. P45-Pdf | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the P45 report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_p60_report_output**
> bytearray get_p60_report_output(employer_key, tax_year, authorization, api_version, employee_codes=employee_codes, transform_definition_key=transform_definition_key, start_index=start_index, max_index=max_index)

Runs the P60 report

Returns the result of the executed P60 report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    employee_codes = 'employee_codes_example' # str | A comma separated list of the employee codes. E.g. EMP001,EMP002 (optional)
    transform_definition_key = 'transform_definition_key_example' # str | The transform definition unique key. E.g. P45-Pdf (optional)
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)

    try:
        # Runs the P60 report
        api_response = api_instance.get_p60_report_output(employer_key, tax_year, authorization, api_version, employee_codes=employee_codes, transform_definition_key=transform_definition_key, start_index=start_index, max_index=max_index)
        print("The response of ReportsApi->get_p60_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_p60_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **employee_codes** | **str**| A comma separated list of the employee codes. E.g. EMP001,EMP002 | [optional] 
 **transform_definition_key** | **str**| The transform definition unique key. E.g. P45-Pdf | [optional] 
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the P60 report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_papdis_report_ouput**
> bytearray get_papdis_report_ouput(employer_key, pay_schedule_key, tax_year, pension_key, message_function_code, authorization, api_version, payment_date=payment_date, transform_definition_key=transform_definition_key)

Runs the PAPDIS report

Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org/

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    pension_key = 'pension_key_example' # str | The pension scheme unique key. E.g. PENSCH001
    message_function_code = 'message_function_code_example' # str | Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    payment_date = '2013-10-20' # date | The payment date context for the report. E.g. 2018-04-30 (optional)
    transform_definition_key = 'transform_definition_key_example' # str | The transform definition unique key. E.g. P45-Pdf (optional)

    try:
        # Runs the PAPDIS report
        api_response = api_instance.get_papdis_report_ouput(employer_key, pay_schedule_key, tax_year, pension_key, message_function_code, authorization, api_version, payment_date=payment_date, transform_definition_key=transform_definition_key)
        print("The response of ReportsApi->get_papdis_report_ouput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_papdis_report_ouput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **pension_key** | **str**| The pension scheme unique key. E.g. PENSCH001 | 
 **message_function_code** | **str**| Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions). | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **payment_date** | **date**| The payment date context for the report. E.g. 2018-04-30 | [optional] 
 **transform_definition_key** | **str**| The transform definition unique key. E.g. P45-Pdf | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the PAPDIS report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pass_report_ouput**
> bytearray get_pass_report_ouput(employer_key, pay_schedule_key, tax_year, pension_key, message_function_code, intermediary_id, document_id, authorization, api_version, payment_date=payment_date)

Runs the PASS report

Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    pension_key = 'pension_key_example' # str | The pension scheme unique key. E.g. PENSCH001
    message_function_code = 'message_function_code_example' # str | Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
    intermediary_id = 'intermediary_id_example' # str | Specific to PensionSync PASS report, a unique identifier for the Intermediary who is acting on behalf of the employer.
    document_id = 'document_id_example' # str | Specific to PensionSync PASS report, a document identifier unique for this document within the Intermediary.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    payment_date = '2013-10-20' # date | The payment date context for the report. E.g. 2018-04-30 (optional)

    try:
        # Runs the PASS report
        api_response = api_instance.get_pass_report_ouput(employer_key, pay_schedule_key, tax_year, pension_key, message_function_code, intermediary_id, document_id, authorization, api_version, payment_date=payment_date)
        print("The response of ReportsApi->get_pass_report_ouput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_pass_report_ouput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **pension_key** | **str**| The pension scheme unique key. E.g. PENSCH001 | 
 **message_function_code** | **str**| Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions). | 
 **intermediary_id** | **str**| Specific to PensionSync PASS report, a unique identifier for the Intermediary who is acting on behalf of the employer. | 
 **document_id** | **str**| Specific to PensionSync PASS report, a document identifier unique for this document within the Intermediary. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **payment_date** | **date**| The payment date context for the report. E.g. 2018-04-30 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the PASS report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pay_dashboard_payslip_report_ouput**
> bytearray get_pay_dashboard_payslip_report_ouput(employer_key, pay_schedule_key, tax_year, publication_date, authorization, api_version, employee_codes=employee_codes, transform_definition_key=transform_definition_key, start_index=start_index, max_index=max_index, payment_date=payment_date)

Runs the Pay Dashboard payslips report

Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    publication_date = '2013-10-20' # date | Specific to the Pay Dashboard report, allows the specification of a future payslip publication date. E.g. 2018-12-31
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    employee_codes = 'employee_codes_example' # str | A comma separated list of the employee codes. E.g. EMP001,EMP002 (optional)
    transform_definition_key = 'transform_definition_key_example' # str | The transform definition unique key. E.g. P45-Pdf (optional)
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)
    payment_date = '2013-10-20' # date | The payment date context for the report. E.g. 2018-04-30 (optional)

    try:
        # Runs the Pay Dashboard payslips report
        api_response = api_instance.get_pay_dashboard_payslip_report_ouput(employer_key, pay_schedule_key, tax_year, publication_date, authorization, api_version, employee_codes=employee_codes, transform_definition_key=transform_definition_key, start_index=start_index, max_index=max_index, payment_date=payment_date)
        print("The response of ReportsApi->get_pay_dashboard_payslip_report_ouput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_pay_dashboard_payslip_report_ouput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **publication_date** | **date**| Specific to the Pay Dashboard report, allows the specification of a future payslip publication date. E.g. 2018-12-31 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **employee_codes** | **str**| A comma separated list of the employee codes. E.g. EMP001,EMP002 | [optional] 
 **transform_definition_key** | **str**| The transform definition unique key. E.g. P45-Pdf | [optional] 
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 
 **payment_date** | **date**| The payment date context for the report. E.g. 2018-04-30 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the Pay Dashboard payslip report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payslip3_report_output**
> bytearray get_payslip3_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, employee_codes=employee_codes, transform_definition_key=transform_definition_key, start_index=start_index, max_index=max_index, payment_date=payment_date)

Runs the verbose payslip report

Returns the result of the executed verbose payslip report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    pay_schedule_key = 'pay_schedule_key_example' # str | The pay schedule unique key. E.g. SCH001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    employee_codes = 'employee_codes_example' # str | A comma separated list of the employee codes. E.g. EMP001,EMP002 (optional)
    transform_definition_key = 'transform_definition_key_example' # str | The transform definition unique key. E.g. P45-Pdf (optional)
    start_index = 'start_index_example' # str | The element index to begin the report. Used to control paging within large data sets. E.g. 1 (optional)
    max_index = 'max_index_example' # str | The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 (optional)
    payment_date = '2013-10-20' # date | The payment date context for the report. E.g. 2018-04-30 (optional)

    try:
        # Runs the verbose payslip report
        api_response = api_instance.get_payslip3_report_output(employer_key, pay_schedule_key, tax_year, authorization, api_version, employee_codes=employee_codes, transform_definition_key=transform_definition_key, start_index=start_index, max_index=max_index, payment_date=payment_date)
        print("The response of ReportsApi->get_payslip3_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_payslip3_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **pay_schedule_key** | **str**| The pay schedule unique key. E.g. SCH001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **employee_codes** | **str**| A comma separated list of the employee codes. E.g. EMP001,EMP002 | [optional] 
 **transform_definition_key** | **str**| The transform definition unique key. E.g. P45-Pdf | [optional] 
 **start_index** | **str**| The element index to begin the report. Used to control paging within large data sets. E.g. 1 | [optional] 
 **max_index** | **str**| The highest element index to return from the report. Used to control paging within large data sets. E.g. 100 | [optional] 
 **payment_date** | **date**| The payment date context for the report. E.g. 2018-04-30 | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the verbose payslip report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pension_liability_report_output**
> bytearray get_pension_liability_report_output(employer_key, tax_year, pension_key, authorization, api_version)

Runs the pension liability report

Returns the result of the executed pension liability report for the given query parameters

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    employer_key = 'employer_key_example' # str | The employer unique key. E.g. ER001
    tax_year = 56 # int | The tax year. E.g. 2017 = 2017/18 year.
    pension_key = 'pension_key_example' # str | The pension scheme unique key. E.g. PENSCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Runs the pension liability report
        api_response = api_instance.get_pension_liability_report_output(employer_key, tax_year, pension_key, authorization, api_version)
        print("The response of ReportsApi->get_pension_liability_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_pension_liability_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_key** | **str**| The employer unique key. E.g. ER001 | 
 **tax_year** | **int**| The tax year. E.g. 2017 &#x3D; 2017/18 year. | 
 **pension_key** | **str**| The pension scheme unique key. E.g. PENSCH001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the pension liability report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_report_definition_from_application**
> ReportDefinition get_report_definition_from_application(report_definition_id, authorization, api_version)

Get the report definition

Returns the specified report definition from the authroised application

### Example


```python
import openapi_client
from openapi_client.models.report_definition import ReportDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    report_definition_id = 'report_definition_id_example' # str | The report definition unique identifier.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the report definition
        api_response = api_instance.get_report_definition_from_application(report_definition_id, authorization, api_version)
        print("The response of ReportsApi->get_report_definition_from_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_report_definition_from_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_definition_id** | **str**| The report definition unique identifier. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**ReportDefinition**](ReportDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The report definition object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_report_definitions_from_application**
> LinkCollection get_report_definitions_from_application(authorization, api_version)

Gets all reports

Get links to all saved report definitions under authorised application

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets all reports
        api_response = api_instance.get_report_definitions_from_application(authorization, api_version)
        print("The response of ReportsApi->get_report_definitions_from_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_report_definitions_from_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_report_output**
> bytearray get_report_output(report_definition_id, authorization, api_version)

Runs the specified report definition

Returns the result of the executed report definition

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    report_definition_id = 'report_definition_id_example' # str | The report definition unique identifier.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Runs the specified report definition
        api_response = api_instance.get_report_output(report_definition_id, authorization, api_version)
        print("The response of ReportsApi->get_report_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_report_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_definition_id** | **str**| The report definition unique identifier. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the report execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transform_definition_from_application**
> TransformDefinition get_transform_definition_from_application(transform_definition_id, authorization, api_version)

Get the transform definition

Returns the specified transform definition from the authroised application

### Example


```python
import openapi_client
from openapi_client.models.transform_definition import TransformDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    transform_definition_id = 'transform_definition_id_example' # str | The transform definition unique identifier.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the transform definition
        api_response = api_instance.get_transform_definition_from_application(transform_definition_id, authorization, api_version)
        print("The response of ReportsApi->get_transform_definition_from_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_transform_definition_from_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform_definition_id** | **str**| The transform definition unique identifier. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**TransformDefinition**](TransformDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transform definition object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transform_definitions_from_application**
> LinkCollection get_transform_definitions_from_application(authorization, api_version)

Gets all transform definitions

Get links to all saved transform definitions under authorised application

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets all transform definitions
        api_response = api_instance.get_transform_definitions_from_application(authorization, api_version)
        print("The response of ReportsApi->get_transform_definitions_from_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_transform_definitions_from_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_report_definition**
> Link post_report_definition(authorization, api_version, report_definition)

Create a new report definition

Creates a new report defintion object

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.report_definition import ReportDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    report_definition = openapi_client.ReportDefinition() # ReportDefinition | The report definition object.

    try:
        # Create a new report definition
        api_response = api_instance.post_report_definition(authorization, api_version, report_definition)
        print("The response of ReportsApi->post_report_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->post_report_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **report_definition** | [**ReportDefinition**](ReportDefinition.md)| The report definition object. | 

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The link object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_transform_definition**
> Link post_transform_definition(authorization, api_version, transform_definition)

Create a new transform definition

Creates a new transform defintion object

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.transform_definition import TransformDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    transform_definition = openapi_client.TransformDefinition() # TransformDefinition | The transform definition object to be executed against the report data.

    try:
        # Create a new transform definition
        api_response = api_instance.post_transform_definition(authorization, api_version, transform_definition)
        print("The response of ReportsApi->post_transform_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->post_transform_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **transform_definition** | [**TransformDefinition**](TransformDefinition.md)| The transform definition object to be executed against the report data. | 

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The link object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_report_definition**
> ReportDefinition put_report_definition(report_definition_id, authorization, api_version, report_definition)

Updates a report definition

Updates the existing specified report definition object

### Example


```python
import openapi_client
from openapi_client.models.report_definition import ReportDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    report_definition_id = 'report_definition_id_example' # str | The report definition unique identifier.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    report_definition = openapi_client.ReportDefinition() # ReportDefinition | The report definition object.

    try:
        # Updates a report definition
        api_response = api_instance.put_report_definition(report_definition_id, authorization, api_version, report_definition)
        print("The response of ReportsApi->put_report_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->put_report_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_definition_id** | **str**| The report definition unique identifier. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **report_definition** | [**ReportDefinition**](ReportDefinition.md)| The report definition object. | 

### Return type

[**ReportDefinition**](ReportDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The report definition object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_transform_definition**
> TransformDefinition put_transform_definition(transform_definition_id, authorization, api_version, transform_definition)

Updates a transform definition

Updates the existing specified transform definition object

### Example


```python
import openapi_client
from openapi_client.models.transform_definition import TransformDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    transform_definition_id = 'transform_definition_id_example' # str | The transform definition unique identifier.
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    transform_definition = openapi_client.TransformDefinition() # TransformDefinition | The transform definition object to be executed against the report data.

    try:
        # Updates a transform definition
        api_response = api_instance.put_transform_definition(transform_definition_id, authorization, api_version, transform_definition)
        print("The response of ReportsApi->put_transform_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->put_transform_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform_definition_id** | **str**| The transform definition unique identifier. | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **transform_definition** | [**TransformDefinition**](TransformDefinition.md)| The transform definition object to be executed against the report data. | 

### Return type

[**TransformDefinition**](TransformDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transform definition object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


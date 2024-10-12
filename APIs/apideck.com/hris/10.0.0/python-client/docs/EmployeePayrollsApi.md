# openapi_client.EmployeePayrollsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employee_payrolls_all**](EmployeePayrollsApi.md#employee_payrolls_all) | **GET** /hris/payrolls/employees/{employee_id} | List Employee Payrolls
[**employee_payrolls_one**](EmployeePayrollsApi.md#employee_payrolls_one) | **GET** /hris/payrolls/employees/{employee_id}/payrolls/{payroll_id} | Get Employee Payroll


# **employee_payrolls_all**
> GetEmployeePayrollsResponse employee_payrolls_all(employee_id, x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, filter=filter, pass_through=pass_through, fields=fields)

List Employee Payrolls

List payrolls for employee

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_employee_payrolls_response import GetEmployeePayrollsResponse
from openapi_client.models.payrolls_filter import PayrollsFilter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EmployeePayrollsApi(api_client)
    employee_id = 'employee_id_example' # str | ID of the employee you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    filter = openapi_client.PayrollsFilter() # PayrollsFilter | Apply filters (optional)
    pass_through = None # PassThroughQuery | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads (optional)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # List Employee Payrolls
        api_response = api_instance.employee_payrolls_all(employee_id, x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, filter=filter, pass_through=pass_through, fields=fields)
        print("The response of EmployeePayrollsApi->employee_payrolls_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeePayrollsApi->employee_payrolls_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee_id** | **str**| ID of the employee you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **filter** | [**PayrollsFilter**](.md)| Apply filters | [optional] 
 **pass_through** | [**PassThroughQuery**](object.md)| Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]&#x3D;leads becomes ?search&#x3D;leads | [optional] 
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetEmployeePayrollsResponse**](GetEmployeePayrollsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | EmployeePayrolls |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **employee_payrolls_one**
> GetEmployeePayrollResponse employee_payrolls_one(payroll_id, employee_id, x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, fields=fields)

Get Employee Payroll

Get payroll for employee

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_employee_payroll_response import GetEmployeePayrollResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EmployeePayrollsApi(api_client)
    payroll_id = 'payroll_id_example' # str | ID of the payroll you are acting upon.
    employee_id = 'employee_id_example' # str | ID of the employee you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # Get Employee Payroll
        api_response = api_instance.employee_payrolls_one(payroll_id, employee_id, x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, fields=fields)
        print("The response of EmployeePayrollsApi->employee_payrolls_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeePayrollsApi->employee_payrolls_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payroll_id** | **str**| ID of the payroll you are acting upon. | 
 **employee_id** | **str**| ID of the employee you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetEmployeePayrollResponse**](GetEmployeePayrollResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payrolls |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.AlertsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_members_list_alerts**](AlertsApi.md#service_members_list_alerts) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/servicemembers/{serviceMemberId}/alerts | 
[**services_list_alerts**](AlertsApi.md#services_list_alerts) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/alerts | 


# **service_members_list_alerts**
> Alerts service_members_list_alerts(service_member_id, service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)



Gets the details of an alert for a given service and server combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alerts import Alerts
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
    api_instance = openapi_client.AlertsApi(api_client)
    service_member_id = 'service_member_id_example' # str | The server Id for which the alert details needs to be queried.
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The alert property filter to apply. (optional)
    state = 'state_example' # str | The alert state to query for. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date to query for. (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date till when to query for. (optional)

    try:
        api_response = api_instance.service_members_list_alerts(service_member_id, service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)
        print("The response of AlertsApi->service_members_list_alerts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->service_members_list_alerts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_member_id** | **str**| The server Id for which the alert details needs to be queried. | 
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The alert property filter to apply. | [optional] 
 **state** | **str**| The alert state to query for. | [optional] 
 **var_from** | **datetime**| The start date to query for. | [optional] 
 **to** | **datetime**| The end date till when to query for. | [optional] 

### Return type

[**Alerts**](Alerts.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of alerts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_alerts**
> Alerts services_list_alerts(service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)



Gets the alerts for a given service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alerts import Alerts
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
    api_instance = openapi_client.AlertsApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The alert property filter to apply. (optional)
    state = 'state_example' # str | The alert state to query for. (optional)
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start date to query for. (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end date till when to query for. (optional)

    try:
        api_response = api_instance.services_list_alerts(service_name, api_version, filter=filter, state=state, var_from=var_from, to=to)
        print("The response of AlertsApi->services_list_alerts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->services_list_alerts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The alert property filter to apply. | [optional] 
 **state** | **str**| The alert state to query for. | [optional] 
 **var_from** | **datetime**| The start date to query for. | [optional] 
 **to** | **datetime**| The end date till when to query for. | [optional] 

### Return type

[**Alerts**](Alerts.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of alerts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


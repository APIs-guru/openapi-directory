# openapi_client.FeedbackApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_add_alert_feedback**](FeedbackApi.md#services_add_alert_feedback) | **POST** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/feedbacktype/alerts/feedback | 
[**services_list_alert_feedback**](FeedbackApi.md#services_list_alert_feedback) | **GET** /providers/Microsoft.ADHybridHealthService/services/{serviceName}/feedbacktype/alerts/{shortName}/alertfeedback | 


# **services_add_alert_feedback**
> AlertFeedback services_add_alert_feedback(service_name, api_version, alert_feedback)



Adds an alert feedback submitted by customer.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_feedback import AlertFeedback
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
    api_instance = openapi_client.FeedbackApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    alert_feedback = openapi_client.AlertFeedback() # AlertFeedback | The alert feedback.

    try:
        api_response = api_instance.services_add_alert_feedback(service_name, api_version, alert_feedback)
        print("The response of FeedbackApi->services_add_alert_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->services_add_alert_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **alert_feedback** | [**AlertFeedback**](AlertFeedback.md)| The alert feedback. | 

### Return type

[**AlertFeedback**](AlertFeedback.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added alert feedback. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_alert_feedback**
> AlertFeedbacks services_list_alert_feedback(service_name, short_name, api_version)



Gets a list of all alert feedback for a given tenant and alert type.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_feedbacks import AlertFeedbacks
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
    api_instance = openapi_client.FeedbackApi(api_client)
    service_name = 'service_name_example' # str | The name of the service.
    short_name = 'short_name_example' # str | The name of the alert.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.services_list_alert_feedback(service_name, short_name, api_version)
        print("The response of FeedbackApi->services_list_alert_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->services_list_alert_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service. | 
 **short_name** | **str**| The name of the alert. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**AlertFeedbacks**](AlertFeedbacks.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of alert feedback. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


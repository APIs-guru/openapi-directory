# openapi_client.RulesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_notification_rules_id_query**](RulesApi.md#get_notification_rules_id_query) | **GET** /notificationRules/{ruleID}/query | Retrieve a notification rule query


# **get_notification_rules_id_query**
> FluxResponse get_notification_rules_id_query(rule_id, zap_trace_span=zap_trace_span)

Retrieve a notification rule query

### Example


```python
import openapi_client
from openapi_client.models.flux_response import FluxResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RulesApi(api_client)
    rule_id = 'rule_id_example' # str | The notification rule ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a notification rule query
        api_response = api_instance.get_notification_rules_id_query(rule_id, zap_trace_span=zap_trace_span)
        print("The response of RulesApi->get_notification_rules_id_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->get_notification_rules_id_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| The notification rule ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**FluxResponse**](FluxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The notification rule query requested |  -  |
**400** | Invalid request |  -  |
**404** | Notification rule not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


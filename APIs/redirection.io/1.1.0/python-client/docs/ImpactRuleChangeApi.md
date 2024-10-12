# openapi_client.ImpactRuleChangeApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_impact_rule_change_item**](ImpactRuleChangeApi.md#get_impact_rule_change_item) | **GET** /impact-rule-changes/{id} | Retrieves a ImpactRuleChange resource.
[**post_impact_rule_change_collection**](ImpactRuleChangeApi.md#post_impact_rule_change_collection) | **POST** /impact-rule-changes | Creates a ImpactRuleChange resource.


# **get_impact_rule_change_item**
> ImpactRuleChangeRead get_impact_rule_change_item(id)

Retrieves a ImpactRuleChange resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.impact_rule_change_read import ImpactRuleChangeRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
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
    api_instance = openapi_client.ImpactRuleChangeApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a ImpactRuleChange resource.
        api_response = api_instance.get_impact_rule_change_item(id)
        print("The response of ImpactRuleChangeApi->get_impact_rule_change_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImpactRuleChangeApi->get_impact_rule_change_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ImpactRuleChangeRead**](ImpactRuleChangeRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ImpactRuleChange resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_impact_rule_change_collection**
> ImpactRuleChangeRead post_impact_rule_change_collection(impact_rule_change=impact_rule_change)

Creates a ImpactRuleChange resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.impact_rule_change_read import ImpactRuleChangeRead
from openapi_client.models.impact_rule_change_write import ImpactRuleChangeWrite
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
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
    api_instance = openapi_client.ImpactRuleChangeApi(api_client)
    impact_rule_change = openapi_client.ImpactRuleChangeWrite() # ImpactRuleChangeWrite | The new ImpactRuleChange resource (optional)

    try:
        # Creates a ImpactRuleChange resource.
        api_response = api_instance.post_impact_rule_change_collection(impact_rule_change=impact_rule_change)
        print("The response of ImpactRuleChangeApi->post_impact_rule_change_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImpactRuleChangeApi->post_impact_rule_change_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impact_rule_change** | [**ImpactRuleChangeWrite**](ImpactRuleChangeWrite.md)| The new ImpactRuleChange resource | [optional] 

### Return type

[**ImpactRuleChangeRead**](ImpactRuleChangeRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ImpactRuleChange resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


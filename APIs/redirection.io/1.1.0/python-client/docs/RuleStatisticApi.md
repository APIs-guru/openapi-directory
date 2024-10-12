# openapi_client.RuleStatisticApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_rule_statistic_collection**](RuleStatisticApi.md#get_rule_statistic_collection) | **GET** /rule-statistics | Retrieves the collection of RuleStatistic resources.
[**get_rule_statistic_item**](RuleStatisticApi.md#get_rule_statistic_item) | **GET** /rule-statistics/{id} | Retrieves a RuleStatistic resource.


# **get_rule_statistic_collection**
> List[RuleStatistic] get_rule_statistic_collection(project_id)

Retrieves the collection of RuleStatistic resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_statistic import RuleStatistic
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
    api_instance = openapi_client.RuleStatisticApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # Retrieves the collection of RuleStatistic resources.
        api_response = api_instance.get_rule_statistic_collection(project_id)
        print("The response of RuleStatisticApi->get_rule_statistic_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleStatisticApi->get_rule_statistic_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

[**List[RuleStatistic]**](RuleStatistic.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RuleStatistic collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule_statistic_item**
> RuleStatistic get_rule_statistic_item(id)

Retrieves a RuleStatistic resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.rule_statistic import RuleStatistic
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
    api_instance = openapi_client.RuleStatisticApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a RuleStatistic resource.
        api_response = api_instance.get_rule_statistic_item(id)
        print("The response of RuleStatisticApi->get_rule_statistic_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleStatisticApi->get_rule_statistic_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**RuleStatistic**](RuleStatistic.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RuleStatistic resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


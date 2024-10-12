# openapi_client.AggregateLogApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_aggregate_log_collection**](AggregateLogApi.md#get_aggregate_log_collection) | **GET** /aggregate-logs | Retrieves the collection of AggregateLog resources.
[**get_aggregate_log_item**](AggregateLogApi.md#get_aggregate_log_item) | **GET** /aggregate-logs/{id} | Retrieves a AggregateLog resource.


# **get_aggregate_log_collection**
> List[AggregateLogRead] get_aggregate_log_collection(page=page, project_id=project_id, created_at=created_at, source=source, target=target, status_code=status_code, referrer=referrer, user_agent=user_agent, user_agent_type=user_agent_type, simplified_user_agent=simplified_user_agent, rule_id=rule_id, instance_name=instance_name, exclude_urls=exclude_urls, exclude_empty_referrer=exclude_empty_referrer, created_at_gt=created_at_gt, created_at_gte=created_at_gte, created_at_lt=created_at_lt, created_at_lte=created_at_lte, status_code_gt=status_code_gt, status_code_gte=status_code_gte, status_code_lt=status_code_lt, status_code_lte=status_code_lte)

Retrieves the collection of AggregateLog resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.aggregate_log_read import AggregateLogRead
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
    api_instance = openapi_client.AggregateLogApi(api_client)
    page = 56 # int | The collection page number (optional)
    project_id = 'project_id_example' # str |  (optional)
    created_at = 'created_at_example' # str |  (optional)
    source = 'source_example' # str |  (optional)
    target = 'target_example' # str |  (optional)
    status_code = 'status_code_example' # str |  (optional)
    referrer = 'referrer_example' # str |  (optional)
    user_agent = 'user_agent_example' # str |  (optional)
    user_agent_type = 'user_agent_type_example' # str |  (optional)
    simplified_user_agent = 'simplified_user_agent_example' # str |  (optional)
    rule_id = 'rule_id_example' # str |  (optional)
    instance_name = 'instance_name_example' # str |  (optional)
    exclude_urls = 'exclude_urls_example' # str |  (optional)
    exclude_empty_referrer = 'exclude_empty_referrer_example' # str |  (optional)
    created_at_gt = 'created_at_gt_example' # str |  (optional)
    created_at_gte = 'created_at_gte_example' # str |  (optional)
    created_at_lt = 'created_at_lt_example' # str |  (optional)
    created_at_lte = 'created_at_lte_example' # str |  (optional)
    status_code_gt = 'status_code_gt_example' # str |  (optional)
    status_code_gte = 'status_code_gte_example' # str |  (optional)
    status_code_lt = 'status_code_lt_example' # str |  (optional)
    status_code_lte = 'status_code_lte_example' # str |  (optional)

    try:
        # Retrieves the collection of AggregateLog resources.
        api_response = api_instance.get_aggregate_log_collection(page=page, project_id=project_id, created_at=created_at, source=source, target=target, status_code=status_code, referrer=referrer, user_agent=user_agent, user_agent_type=user_agent_type, simplified_user_agent=simplified_user_agent, rule_id=rule_id, instance_name=instance_name, exclude_urls=exclude_urls, exclude_empty_referrer=exclude_empty_referrer, created_at_gt=created_at_gt, created_at_gte=created_at_gte, created_at_lt=created_at_lt, created_at_lte=created_at_lte, status_code_gt=status_code_gt, status_code_gte=status_code_gte, status_code_lt=status_code_lt, status_code_lte=status_code_lte)
        print("The response of AggregateLogApi->get_aggregate_log_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AggregateLogApi->get_aggregate_log_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] 
 **project_id** | **str**|  | [optional] 
 **created_at** | **str**|  | [optional] 
 **source** | **str**|  | [optional] 
 **target** | **str**|  | [optional] 
 **status_code** | **str**|  | [optional] 
 **referrer** | **str**|  | [optional] 
 **user_agent** | **str**|  | [optional] 
 **user_agent_type** | **str**|  | [optional] 
 **simplified_user_agent** | **str**|  | [optional] 
 **rule_id** | **str**|  | [optional] 
 **instance_name** | **str**|  | [optional] 
 **exclude_urls** | **str**|  | [optional] 
 **exclude_empty_referrer** | **str**|  | [optional] 
 **created_at_gt** | **str**|  | [optional] 
 **created_at_gte** | **str**|  | [optional] 
 **created_at_lt** | **str**|  | [optional] 
 **created_at_lte** | **str**|  | [optional] 
 **status_code_gt** | **str**|  | [optional] 
 **status_code_gte** | **str**|  | [optional] 
 **status_code_lt** | **str**|  | [optional] 
 **status_code_lte** | **str**|  | [optional] 

### Return type

[**List[AggregateLogRead]**](AggregateLogRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AggregateLog collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_aggregate_log_item**
> AggregateLogRead get_aggregate_log_item(id)

Retrieves a AggregateLog resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.aggregate_log_read import AggregateLogRead
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
    api_instance = openapi_client.AggregateLogApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a AggregateLog resource.
        api_response = api_instance.get_aggregate_log_item(id)
        print("The response of AggregateLogApi->get_aggregate_log_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AggregateLogApi->get_aggregate_log_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**AggregateLogRead**](AggregateLogRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AggregateLog resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


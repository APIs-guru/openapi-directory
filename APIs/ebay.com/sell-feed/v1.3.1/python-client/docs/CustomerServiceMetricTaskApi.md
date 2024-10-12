# openapi_client.CustomerServiceMetricTaskApi

All URIs are relative to *https://api.ebay.com/sell/feed/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_customer_service_metric_task**](CustomerServiceMetricTaskApi.md#create_customer_service_metric_task) | **POST** /customer_service_metric_task | 
[**get_customer_service_metric_task**](CustomerServiceMetricTaskApi.md#get_customer_service_metric_task) | **GET** /customer_service_metric_task/{task_id} | 
[**get_customer_service_metric_tasks**](CustomerServiceMetricTaskApi.md#get_customer_service_metric_tasks) | **GET** /customer_service_metric_task | 


# **create_customer_service_metric_task**
> create_customer_service_metric_task(accept_language, create_service_metrics_task_request)



<p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href=\"/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric\">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class=\"tablenote\"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href=\"/api-docs/sell/analytics/resources/methods\">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_service_metrics_task_request import CreateServiceMetricsTaskRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/feed/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/feed/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerServiceMetricTaskApi(api_client)
    accept_language = 'accept_language_example' # str | Use this header to specify the natural language in which the authenticated user desires the response.
    create_service_metrics_task_request = openapi_client.CreateServiceMetricsTaskRequest() # CreateServiceMetricsTaskRequest | Request payload containing version, feedType, and optional filterCriteria.

    try:
        api_instance.create_customer_service_metric_task(accept_language, create_service_metrics_task_request)
    except Exception as e:
        print("Exception when calling CustomerServiceMetricTaskApi->create_customer_service_metric_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Use this header to specify the natural language in which the authenticated user desires the response. | 
 **create_service_metrics_task_request** | [**CreateServiceMetricsTaskRequest**](CreateServiceMetricsTaskRequest.md)| Request payload containing version, feedType, and optional filterCriteria. | 

### Return type

void (empty response body)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_service_metric_task**
> ServiceMetricsTask get_customer_service_metric_task(task_id)



<p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.service_metrics_task import ServiceMetricsTask
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/feed/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/feed/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerServiceMetricTaskApi(api_client)
    task_id = 'task_id_example' # str | Use this path parameter to specify the task ID value for the customer service metric task to retrieve.

    try:
        api_response = api_instance.get_customer_service_metric_task(task_id)
        print("The response of CustomerServiceMetricTaskApi->get_customer_service_metric_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerServiceMetricTaskApi->get_customer_service_metric_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| Use this path parameter to specify the task ID value for the customer service metric task to retrieve. | 

### Return type

[**ServiceMetricsTask**](ServiceMetricsTask.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_service_metric_tasks**
> CustomerServiceMetricTaskCollection get_customer_service_metric_tasks(date_range=date_range, feed_type=feed_type, limit=limit, look_back_days=look_back_days, offset=offset)



Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class=\"tablenote\"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.customer_service_metric_task_collection import CustomerServiceMetricTaskCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/feed/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/feed/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerServiceMetricTaskApi(api_client)
    date_range = 'date_range_example' # str | The task creation date range. The results are filtered to include only tasks with a creation date that is equal to the dates specified or is within the specified range. Do not use with the <code>look_back_days</code> parameter.<p><strong>Format: </strong>UTC</p><p>For example, tasks within a range: </p><p><code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code></p><p>Tasks created on March 8, 2020</p><p><code>2020-03-08T00:00.00.000Z..2020-03-09T00:00:00.000Z</code></p><p><b>Maximum: </b>90 days</p> (optional)
    feed_type = 'feed_type_example' # str | The feed type associated with the task. The only presently supported value is <code>CUSTOMER_SERVICE_METRICS_REPORT</code>. (optional)
    limit = 'limit_example' # str | The number of customer service metric tasks to return per page of the result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. <p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves tasks 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used.</p><p> <span class=\"tablenote\"><strong>Note:</strong>This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p><b>Default:</b> 10 <p><b>Maximum:</b> 500</p> (optional)
    look_back_days = 'look_back_days_example' # str | The number of previous days in which to search for tasks. Do not use with the <code>date_range</code> parameter. If both <code>date_range</code> and <code>look_back_days</code> are omitted, this parameter's default value is used. <p><b>Default value:</b> 7</p><p><b>Range:</b> 1-90 (inclusive)</p> (optional)
    offset = 'offset_example' # str | The number of customer service metric tasks to skip in the result set before returning the first task in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. <br /><br /><b>Default: </b>0 (optional)

    try:
        api_response = api_instance.get_customer_service_metric_tasks(date_range=date_range, feed_type=feed_type, limit=limit, look_back_days=look_back_days, offset=offset)
        print("The response of CustomerServiceMetricTaskApi->get_customer_service_metric_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerServiceMetricTaskApi->get_customer_service_metric_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_range** | **str**| The task creation date range. The results are filtered to include only tasks with a creation date that is equal to the dates specified or is within the specified range. Do not use with the &lt;code&gt;look_back_days&lt;/code&gt; parameter.&lt;p&gt;&lt;strong&gt;Format: &lt;/strong&gt;UTC&lt;/p&gt;&lt;p&gt;For example, tasks within a range: &lt;/p&gt;&lt;p&gt;&lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ &lt;/code&gt;&lt;/p&gt;&lt;p&gt;Tasks created on March 8, 2020&lt;/p&gt;&lt;p&gt;&lt;code&gt;2020-03-08T00:00.00.000Z..2020-03-09T00:00:00.000Z&lt;/code&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;Maximum: &lt;/b&gt;90 days&lt;/p&gt; | [optional] 
 **feed_type** | **str**| The feed type associated with the task. The only presently supported value is &lt;code&gt;CUSTOMER_SERVICE_METRICS_REPORT&lt;/code&gt;. | [optional] 
 **limit** | **str**| The number of customer service metric tasks to return per page of the result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. &lt;p&gt;For example, if &lt;strong&gt;offset&lt;/strong&gt; is set to 10 and &lt;strong&gt;limit&lt;/strong&gt; is set to 10, the call retrieves tasks 11 thru 20 from the result set.&lt;/p&gt;&lt;p&gt;If this parameter is omitted, the default value is used.&lt;/p&gt;&lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;This feature employs a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;Default:&lt;/b&gt; 10 &lt;p&gt;&lt;b&gt;Maximum:&lt;/b&gt; 500&lt;/p&gt; | [optional] 
 **look_back_days** | **str**| The number of previous days in which to search for tasks. Do not use with the &lt;code&gt;date_range&lt;/code&gt; parameter. If both &lt;code&gt;date_range&lt;/code&gt; and &lt;code&gt;look_back_days&lt;/code&gt; are omitted, this parameter&#39;s default value is used. &lt;p&gt;&lt;b&gt;Default value:&lt;/b&gt; 7&lt;/p&gt;&lt;p&gt;&lt;b&gt;Range:&lt;/b&gt; 1-90 (inclusive)&lt;/p&gt; | [optional] 
 **offset** | **str**| The number of customer service metric tasks to skip in the result set before returning the first task in the paginated response. &lt;p&gt;Combine &lt;strong&gt;offset&lt;/strong&gt; with the &lt;strong&gt;limit&lt;/strong&gt; query parameter to control the items returned in the response. For example, if you supply an &lt;strong&gt;offset&lt;/strong&gt; of &lt;code&gt;0&lt;/code&gt; and a &lt;strong&gt;limit&lt;/strong&gt; of &lt;code&gt;10&lt;/code&gt;, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If &lt;strong&gt;offset&lt;/strong&gt; is &lt;code&gt;10&lt;/code&gt; and &lt;strong&gt;limit&lt;/strong&gt; is &lt;code&gt;20&lt;/code&gt;, the first page of the response contains items 11-30 from the complete result set. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt;0 | [optional] 

### Return type

[**CustomerServiceMetricTaskCollection**](CustomerServiceMetricTaskCollection.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


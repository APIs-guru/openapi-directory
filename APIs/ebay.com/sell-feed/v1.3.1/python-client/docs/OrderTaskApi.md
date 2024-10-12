# openapi_client.OrderTaskApi

All URIs are relative to *https://api.ebay.com/sell/feed/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order_task**](OrderTaskApi.md#create_order_task) | **POST** /order_task | 
[**get_order_task**](OrderTaskApi.md#get_order_task) | **GET** /order_task/{task_id} | 
[**get_order_tasks**](OrderTaskApi.md#get_order_tasks) | **GET** /order_task | 


# **create_order_task**
> create_order_task(create_order_task_request)



This method creates an order download task with filter criteria for the order report. When using this method, specify the <b> feedType</b>, <b> schemaVersion</b>, and <b> filterCriteria</b> for the report. The method returns the <b> location</b> response header containing the getOrderTask call URI to retrieve the order task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the order task. <br /><br />To retrieve the status of the task, use the <b> getOrderTask</b> method to retrieve a single task ID or the <b>getOrderTasks</b> method to retrieve multiple order task IDs.<p> <span class=\"tablenote\"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p><p>The following list contains this method's authorization scope and its corresponding feed type:<ul><li>https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_REPORT</li></ul> </p><p>For details about how this method is used, see <a href=\"/api-docs/sell/static/feed/general-feed-tasks.html\">General feed types</a> in the Selling Integration Guide. <p> <span class=\"tablenote\"><strong>Note:</strong> At this time, the <strong>createOrderTask</strong> method only supports order creation date filters and not modified order date filters. Do not include the <strong>modifiedDateRange</strong> filter in your request payload.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_order_task_request import CreateOrderTaskRequest
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
    api_instance = openapi_client.OrderTaskApi(api_client)
    create_order_task_request = openapi_client.CreateOrderTaskRequest() # CreateOrderTaskRequest | description not needed

    try:
        api_instance.create_order_task(create_order_task_request)
    except Exception as e:
        print("Exception when calling OrderTaskApi->create_order_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_order_task_request** | [**CreateOrderTaskRequest**](CreateOrderTaskRequest.md)| description not needed | 

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_order_task**
> OrderTask get_order_task(task_id)



This method retrieves the task details and status of the specified task. The input is <strong>task_id</strong>. <p>For details about how this method is used, see <a href=\"/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html\">Working with Order Feeds</a> in the Selling Integration Guide.  </p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.order_task import OrderTask
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
    api_instance = openapi_client.OrderTaskApi(api_client)
    task_id = 'task_id_example' # str | The ID of the task. This ID is generated when the task was created by the <b> createOrderTask</b> method.

    try:
        api_response = api_instance.get_order_task(task_id)
        print("The response of OrderTaskApi->get_order_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTaskApi->get_order_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The ID of the task. This ID is generated when the task was created by the &lt;b&gt; createOrderTask&lt;/b&gt; method. | 

### Return type

[**OrderTask**](OrderTask.md)

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

# **get_order_tasks**
> OrderTaskCollection get_order_tasks(date_range=date_range, feed_type=feed_type, limit=limit, look_back_days=look_back_days, offset=offset, schedule_id=schedule_id)



This method returns the details and status for an array of order tasks based on a specified <strong>feed_type</strong> or <strong>schedule_id</strong>. Specifying both <strong>feed_type</strong> and <strong>schedule_id</strong> results in an error. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.<br /><br />If specifying the <strong>feed_type</strong>, limit which order tasks are returned by specifying filters such as the creation date range or period of time using <strong>look_back_days</strong>. <br /><br />If specifying a <strong>schedule_id</strong>, the schedule template (that the <strong>schedule_id</strong> is based on) determines which order tasks are returned (see <strong>schedule_id</strong> for additional information). Each <strong>schedule_id</strong> applies to one <strong>feed_type</strong>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.order_task_collection import OrderTaskCollection
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
    api_instance = openapi_client.OrderTaskApi(api_client)
    date_range = 'date_range_example' # str | The order tasks creation date range. This range is used to filter the results. The filtered results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only orders less than 90 days old can be retrieved. Do not use with the <strong>look_back_days</strong> parameter. <br /><br /><b>Format: </b>UTC   <br /><br /> <b> For example: </b> <br /><br />Tasks within a range  <br /> <code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> Tasks created on September 8, 2019<br /> <code>2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z</code><br /> (optional)
    feed_type = 'feed_type_example' # str | The feed type associated with the task. The only presently supported value is <code>LMS_ORDER_REPORT</code>. Do not use with the <strong>schedule_id</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>. (optional)
    limit = 'limit_example' # str | The maximum number of order tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class=\"tablenote\"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves order tasks 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used.</p><p><b>Default:</b> 10 <p><b>Maximum:</b> 500</p> (optional)
    look_back_days = 'look_back_days_example' # str | The number of previous days in which to search for tasks. Do not use with the <strong>date_range</strong> parameter. If both <strong>date_range</strong> and <strong>look_back_days</strong> are omitted, this parameter's default value is used.  <br /><br /><b>Default: </b> 7 <br /><br /><b>Range: </b> 1-90 (inclusive)   (optional)
    offset = 'offset_example' # str | The number of order tasks to skip in the result set before returning the first order in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.<br /><br /><b>Default: </b>0 (optional)
    schedule_id = 'schedule_id_example' # str | The schedule ID associated with the order task. A schedule periodically generates a report for the feed type specified by the schedule template (see <strong>scheduleTemplateId</strong> in <strong>createSchedule</strong>). Do not use with the <strong>feed_type</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>. (optional)

    try:
        api_response = api_instance.get_order_tasks(date_range=date_range, feed_type=feed_type, limit=limit, look_back_days=look_back_days, offset=offset, schedule_id=schedule_id)
        print("The response of OrderTaskApi->get_order_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTaskApi->get_order_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_range** | **str**| The order tasks creation date range. This range is used to filter the results. The filtered results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only orders less than 90 days old can be retrieved. Do not use with the &lt;strong&gt;look_back_days&lt;/strong&gt; parameter. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format: &lt;/b&gt;UTC   &lt;br /&gt;&lt;br /&gt; &lt;b&gt; For example: &lt;/b&gt; &lt;br /&gt;&lt;br /&gt;Tasks within a range  &lt;br /&gt; &lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ &lt;/code&gt; &lt;br /&gt;&lt;br /&gt; Tasks created on September 8, 2019&lt;br /&gt; &lt;code&gt;2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z&lt;/code&gt;&lt;br /&gt; | [optional] 
 **feed_type** | **str**| The feed type associated with the task. The only presently supported value is &lt;code&gt;LMS_ORDER_REPORT&lt;/code&gt;. Do not use with the &lt;strong&gt;schedule_id&lt;/strong&gt; parameter. Since schedules are based on feed types, you can specify a schedule (&lt;strong&gt;schedule_id&lt;/strong&gt;) that returns the needed &lt;strong&gt;feed_type&lt;/strong&gt;. | [optional] 
 **limit** | **str**| The maximum number of order tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the &lt;strong&gt;offset&lt;/strong&gt; parameter to control the pagination of the output. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This feature employs a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;For example, if &lt;strong&gt;offset&lt;/strong&gt; is set to 10 and &lt;strong&gt;limit&lt;/strong&gt; is set to 10, the call retrieves order tasks 11 thru 20 from the result set.&lt;/p&gt;&lt;p&gt;If this parameter is omitted, the default value is used.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Default:&lt;/b&gt; 10 &lt;p&gt;&lt;b&gt;Maximum:&lt;/b&gt; 500&lt;/p&gt; | [optional] 
 **look_back_days** | **str**| The number of previous days in which to search for tasks. Do not use with the &lt;strong&gt;date_range&lt;/strong&gt; parameter. If both &lt;strong&gt;date_range&lt;/strong&gt; and &lt;strong&gt;look_back_days&lt;/strong&gt; are omitted, this parameter&#39;s default value is used.  &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt; 7 &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Range: &lt;/b&gt; 1-90 (inclusive)   | [optional] 
 **offset** | **str**| The number of order tasks to skip in the result set before returning the first order in the paginated response. &lt;p&gt;Combine &lt;strong&gt;offset&lt;/strong&gt; with the &lt;strong&gt;limit&lt;/strong&gt; query parameter to control the items returned in the response. For example, if you supply an &lt;strong&gt;offset&lt;/strong&gt; of &lt;code&gt;0&lt;/code&gt; and a &lt;strong&gt;limit&lt;/strong&gt; of &lt;code&gt;10&lt;/code&gt;, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If &lt;strong&gt;offset&lt;/strong&gt; is &lt;code&gt;10&lt;/code&gt; and &lt;strong&gt;limit&lt;/strong&gt; is &lt;code&gt;20&lt;/code&gt;, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt;0 | [optional] 
 **schedule_id** | **str**| The schedule ID associated with the order task. A schedule periodically generates a report for the feed type specified by the schedule template (see &lt;strong&gt;scheduleTemplateId&lt;/strong&gt; in &lt;strong&gt;createSchedule&lt;/strong&gt;). Do not use with the &lt;strong&gt;feed_type&lt;/strong&gt; parameter. Since schedules are based on feed types, you can specify a schedule (&lt;strong&gt;schedule_id&lt;/strong&gt;) that returns the needed &lt;strong&gt;feed_type&lt;/strong&gt;. | [optional] 

### Return type

[**OrderTaskCollection**](OrderTaskCollection.md)

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


# openapi_client.TaskApi

All URIs are relative to *https://api.ebay.com/sell/feed/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_task**](TaskApi.md#create_task) | **POST** /task | 
[**get_input_file**](TaskApi.md#get_input_file) | **GET** /task/{task_id}/download_input_file | 
[**get_result_file**](TaskApi.md#get_result_file) | **GET** /task/{task_id}/download_result_file | 
[**get_task**](TaskApi.md#get_task) | **GET** /task/{task_id} | 
[**get_tasks**](TaskApi.md#get_tasks) | **GET** /task | 
[**upload_file**](TaskApi.md#upload_file) | **POST** /task/{task_id}/upload_file | 


# **create_task**
> create_task(create_task_request, x_ebay_c_marketplace_id=x_ebay_c_marketplace_id)



This method creates an upload task or a download task without filter criteria. When using this method, specify the <b> feedType</b> and the feed file <b> schemaVersion</b>. The feed type specified sets the task as a download or an upload task.  <p>For details about the upload and download flows, see <a href=\"/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html\">Working with Order Feeds</a> in the Selling Integration Guide.</p><p> <span class=\"tablenote\"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p><p>The following list contains this method's authorization scopes and their corresponding feed types:</p><ul><li>https://api.ebay.com/oauth/api_scope/sell.inventory: See <a href=\"/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl\" target=\"_blank\">LMS FeedTypes</a></li><li>https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_ACK (specify for upload tasks). Also see <a href=\"/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl\" target=\"_blank\">LMS FeedTypes</a></li><li>https://api.ebay.com/oauth/api_scope/sell.marketing: None*</li><li>https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly: None*</li></ul><p>* Reserved for future release</p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_task_request import CreateTaskRequest
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
    api_instance = openapi_client.TaskApi(api_client)
    create_task_request = openapi_client.CreateTaskRequest() # CreateTaskRequest | description not needed
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | The ID of the eBay marketplace where the item is hosted. <p> <span class=\"tablenote\"><strong>Note:</strong> This value is case sensitive.</span></p><p>For example:</p><p><code>X-EBAY-C-MARKETPLACE-ID:EBAY_US</code></p><p>This identifies the eBay marketplace that applies to this task. See <a href=\"/api-docs/sell/feed/types/bas:MarketplaceIdEnum\">MarketplaceIdEnum</a>.</p> (optional)

    try:
        api_instance.create_task(create_task_request, x_ebay_c_marketplace_id=x_ebay_c_marketplace_id)
    except Exception as e:
        print("Exception when calling TaskApi->create_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_task_request** | [**CreateTaskRequest**](CreateTaskRequest.md)| description not needed | 
 **x_ebay_c_marketplace_id** | **str**| The ID of the eBay marketplace where the item is hosted. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This value is case sensitive.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;For example:&lt;/p&gt;&lt;p&gt;&lt;code&gt;X-EBAY-C-MARKETPLACE-ID:EBAY_US&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This identifies the eBay marketplace that applies to this task. See &lt;a href&#x3D;\&quot;/api-docs/sell/feed/types/bas:MarketplaceIdEnum\&quot;&gt;MarketplaceIdEnum&lt;/a&gt;.&lt;/p&gt; | [optional] 

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

# **get_input_file**
> object get_input_file(task_id)



This method downloads the file previously uploaded using <strong>uploadFile</strong>. Specify the task_id from the <strong>uploadFile</strong> call. <p><span class=\"tablenote\"><strong>Note:</strong> With respect to LMS, this method applies to all feed types except <code>LMS_ORDER_REPORT</code> and <code>LMS_ACTIVE_INVENTORY_REPORT</code>. See <a href=\"/api-docs/sell/static/feed/lms-feeds.html\">LMS API Feeds</a> in the Selling Integration Guide.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
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
    api_instance = openapi_client.TaskApi(api_client)
    task_id = 'task_id_example' # str | The task ID associated with the file to be downloaded.

    try:
        api_response = api_instance.get_input_file(task_id)
        print("The response of TaskApi->get_input_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->get_input_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task ID associated with the file to be downloaded. | 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * content-disposition -  <br>  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_result_file**
> object get_result_file(task_id)



This method retrieves the generated file that is associated with the specified task ID. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). <p>For details about how this method is used, see <a href=\"/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html\">Working with Order Feeds</a> in the Selling Integration Guide. </p><p><span class=\"tablenote\"><strong>Note:</strong> The status of the task to retrieve must be in the COMPLETED or COMPLETED_WITH_ERROR state before this method can retrieve the file. You can use the getTask or getTasks method to retrieve the status of the task.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
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
    api_instance = openapi_client.TaskApi(api_client)
    task_id = 'task_id_example' # str | The ID of the task associated with the file you want to download. This ID was generated when the task was created.

    try:
        api_response = api_instance.get_result_file(task_id)
        print("The response of TaskApi->get_result_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->get_result_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The ID of the task associated with the file you want to download. This ID was generated when the task was created. | 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * content-disposition -  <br>  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task**
> Task get_task(task_id)



This method retrieves the details and status of the specified task. The input is <strong>task_id</strong>. <br /><br />For details of how this method is used, see <a href=\"/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html\">Working with Order Feeds</a> in the Selling Integration Guide. 

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.task import Task
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
    api_instance = openapi_client.TaskApi(api_client)
    task_id = 'task_id_example' # str | The ID of the task. This ID was generated when the task was created.

    try:
        api_response = api_instance.get_task(task_id)
        print("The response of TaskApi->get_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->get_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The ID of the task. This ID was generated when the task was created. | 

### Return type

[**Task**](Task.md)

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

# **get_tasks**
> TaskCollection get_tasks(date_range=date_range, feed_type=feed_type, limit=limit, look_back_days=look_back_days, offset=offset, schedule_id=schedule_id)



This method returns the details and status for an array of tasks based on a specified <strong>feed_type</strong> or <strong>scheduledId</strong>. Specifying both <strong>feed_type</strong> and <strong>scheduledId</strong> results in an error. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.<br /><br />If specifying the <strong>feed_type</strong>, limit which tasks are returned by specifying filters, such as the creation date range or period of time using <strong>look_back_days</strong>. Also, by specifying the <strong>feed_type</strong>, both on-demand and scheduled reports are returned.<br /><br />If specifying a <strong>scheduledId</strong>, the schedule template (that the schedule ID is based on) determines which tasks are returned (see <strong>schedule_id</strong> for additional information). Each <strong>scheduledId</strong> applies to one <strong>feed_type</strong>. 

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.task_collection import TaskCollection
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
    api_instance = openapi_client.TaskApi(api_client)
    date_range = 'date_range_example' # str | Specifies the range of task creation dates used to filter the results. The results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only tasks that are less than 90 days can be retrieved. <p> <span class=\"tablenote\"><strong>Note:</strong> Maximum date range window size is 90 days.</span></p> <br /><b>Valid Format (UTC):</b><code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code><br /><br />For example: Tasks created on September 8, 2019<br /> <code>2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z</code> (optional)
    feed_type = 'feed_type_example' # str | The feed type associated with the tasks to be returned. Only use a <strong>feedType</strong> that is available for your API: <ul><li>Order Feeds: <code>LMS_ORDER_ACK, LMS_ORDER_REPORT</code></li><li>Large Merchant Services (LMS) Feeds: See <a href=\"/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl\" target=\"_blank\">Available FeedTypes</a></li></ul><br/>Do not use with the <strong>schedule_id</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>. (optional)
    limit = 'limit_example' # str | The maximum number of tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class=\"tablenote\"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves tasks 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500 (optional)
    look_back_days = 'look_back_days_example' # str | The number of previous days in which to search for tasks. Do not use with the <code>date_range</code> parameter. If both <code>date_range</code> and <code>look_back_days</code> are omitted, this parameter's default value is used.  <br /><br /><b>Default: </b> 7 <br /><br /><b>Range: </b> 1-90 (inclusive) (optional)
    offset = 'offset_example' # str | The number of tasks to skip in the result set before returning the first task in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. <br /><br /><b>Default: </b>0 (optional)
    schedule_id = 'schedule_id_example' # str | The schedule ID associated with the task. A schedule periodically generates a report for the feed type specified by the schedule template (see <strong>scheduleTemplateId</strong> in <strong>createSchedule</strong>). Do not use with the <strong>feed_type</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>. (optional)

    try:
        api_response = api_instance.get_tasks(date_range=date_range, feed_type=feed_type, limit=limit, look_back_days=look_back_days, offset=offset, schedule_id=schedule_id)
        print("The response of TaskApi->get_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->get_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_range** | **str**| Specifies the range of task creation dates used to filter the results. The results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only tasks that are less than 90 days can be retrieved. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Maximum date range window size is 90 days.&lt;/span&gt;&lt;/p&gt; &lt;br /&gt;&lt;b&gt;Valid Format (UTC):&lt;/b&gt;&lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ &lt;/code&gt;&lt;br /&gt;&lt;br /&gt;For example: Tasks created on September 8, 2019&lt;br /&gt; &lt;code&gt;2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z&lt;/code&gt; | [optional] 
 **feed_type** | **str**| The feed type associated with the tasks to be returned. Only use a &lt;strong&gt;feedType&lt;/strong&gt; that is available for your API: &lt;ul&gt;&lt;li&gt;Order Feeds: &lt;code&gt;LMS_ORDER_ACK, LMS_ORDER_REPORT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;Large Merchant Services (LMS) Feeds: See &lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Available FeedTypes&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br/&gt;Do not use with the &lt;strong&gt;schedule_id&lt;/strong&gt; parameter. Since schedules are based on feed types, you can specify a schedule (&lt;strong&gt;schedule_id&lt;/strong&gt;) that returns the needed &lt;strong&gt;feed_type&lt;/strong&gt;. | [optional] 
 **limit** | **str**| The maximum number of tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the &lt;strong&gt;offset&lt;/strong&gt; parameter to control the pagination of the output. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This feature employs a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;For example, if &lt;strong&gt;offset&lt;/strong&gt; is set to 10 and &lt;strong&gt;limit&lt;/strong&gt; is set to 10, the call retrieves tasks 11 thru 20 from the result set.&lt;/p&gt;&lt;p&gt;If this parameter is omitted, the default value is used. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt; 10 &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum: &lt;/b&gt;500 | [optional] 
 **look_back_days** | **str**| The number of previous days in which to search for tasks. Do not use with the &lt;code&gt;date_range&lt;/code&gt; parameter. If both &lt;code&gt;date_range&lt;/code&gt; and &lt;code&gt;look_back_days&lt;/code&gt; are omitted, this parameter&#39;s default value is used.  &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt; 7 &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Range: &lt;/b&gt; 1-90 (inclusive) | [optional] 
 **offset** | **str**| The number of tasks to skip in the result set before returning the first task in the paginated response. &lt;p&gt;Combine &lt;strong&gt;offset&lt;/strong&gt; with the &lt;strong&gt;limit&lt;/strong&gt; query parameter to control the items returned in the response. For example, if you supply an &lt;strong&gt;offset&lt;/strong&gt; of &lt;code&gt;0&lt;/code&gt; and a &lt;strong&gt;limit&lt;/strong&gt; of &lt;code&gt;10&lt;/code&gt;, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If &lt;strong&gt;offset&lt;/strong&gt; is &lt;code&gt;10&lt;/code&gt; and &lt;strong&gt;limit&lt;/strong&gt; is &lt;code&gt;20&lt;/code&gt;, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt;0 | [optional] 
 **schedule_id** | **str**| The schedule ID associated with the task. A schedule periodically generates a report for the feed type specified by the schedule template (see &lt;strong&gt;scheduleTemplateId&lt;/strong&gt; in &lt;strong&gt;createSchedule&lt;/strong&gt;). Do not use with the &lt;strong&gt;feed_type&lt;/strong&gt; parameter. Since schedules are based on feed types, you can specify a schedule (&lt;strong&gt;schedule_id&lt;/strong&gt;) that returns the needed &lt;strong&gt;feed_type&lt;/strong&gt;. | [optional] 

### Return type

[**TaskCollection**](TaskCollection.md)

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

# **upload_file**
> object upload_file(task_id, creation_date=creation_date, file_name=file_name, modification_date=modification_date, name=name, parameters=parameters, read_date=read_date, size=size, type=type)



This method associates the specified file with the specified task ID and uploads the input file. After the file has been uploaded, the processing of the file begins. <br /><br />Reports often take time to generate and it's common for this method to return an HTTP status of 202, which indicates the report is being generated. Use the <b> getTask</b> with the task ID or <b> getTasks</b> to determine the status of a report. <br /><br />The status flow is <code>QUEUED</code> &gt; <code>IN_PROCESS</code> &gt; <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code>. When the status is <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code>, this indicates the file has been processed and the order report can be downloaded. If there are errors, they will be indicated in the report file. <br /><br />For details of how this method is used in the upload flow, see <a href=\"/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html\">Working with Order Feeds</a> in the Selling Integration Guide. <p><span class=\"tablenote\"><strong>Note:</strong> This method applies to all Seller Hub feed types and LMS feed types except <code>LMS_ORDER_REPORT</code> and <code>LMS_ACTIVE_INVENTORY_REPORT</code>. See <a href=\"/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl\" target=\"_blank\">LMS feed types</a> and <a href=\"/api-docs/sell/static/feed/fx-feeds-quick-reference.html#availabl\" target=\"_blank\">Seller Hub feed types</a>.</span></p><p> <span class=\"tablenote\"><b>Note:</b> You must use a <strong>Content-Type</strong> header with its value set to \"<strong>multipart/form-data</strong>\". See <a href=\"/api-docs/sell/feed/resources/task/methods/uploadFile#h2-samples\">Samples</a> for information.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
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
    api_instance = openapi_client.TaskApi(api_client)
    task_id = 'task_id_example' # str | The task_id associated with the file that will be uploaded. This ID was generated when the specified task was created.
    creation_date = 'creation_date_example' # str | The file creation date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 8, 2019</p><p><code>2019-09-08T00:00:00.000Z</code></p> (optional)
    file_name = 'file_name_example' # str | The name of the file including its extension (for example, xml or csv) to be uploaded. (optional)
    modification_date = 'modification_date_example' # str | The file modified date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 9, 2019</p><p><code>2019-09-09T00:00:00.000Z</code></p> (optional)
    name = 'name_example' # str | A content identifier. The only presently supported name is <code>file</code>. (optional)
    parameters = None # Dict[str, str] | The parameters you want associated with the file. (optional)
    read_date = 'read_date_example' # str | The date you read the file. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 10, 2019</p><p><code>2019-09-10T00:00:00.000Z</code></p> (optional)
    size = 56 # int | The size of the file. (optional)
    type = 'type_example' # str | The file type. The only presently supported type is <code>form-data</code>. (optional)

    try:
        api_response = api_instance.upload_file(task_id, creation_date=creation_date, file_name=file_name, modification_date=modification_date, name=name, parameters=parameters, read_date=read_date, size=size, type=type)
        print("The response of TaskApi->upload_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->upload_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| The task_id associated with the file that will be uploaded. This ID was generated when the specified task was created. | 
 **creation_date** | **str**| The file creation date. &lt;br /&gt;&lt;br /&gt;&lt;b&gt; Format: &lt;/b&gt; UTC &lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ&lt;/code&gt;&lt;p&gt;&lt;b&gt;For example:&lt;/b&gt;&lt;p&gt;Created on September 8, 2019&lt;/p&gt;&lt;p&gt;&lt;code&gt;2019-09-08T00:00:00.000Z&lt;/code&gt;&lt;/p&gt; | [optional] 
 **file_name** | **str**| The name of the file including its extension (for example, xml or csv) to be uploaded. | [optional] 
 **modification_date** | **str**| The file modified date. &lt;br /&gt;&lt;br /&gt;&lt;b&gt; Format: &lt;/b&gt; UTC &lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ&lt;/code&gt;&lt;p&gt;&lt;b&gt;For example:&lt;/b&gt;&lt;p&gt;Created on September 9, 2019&lt;/p&gt;&lt;p&gt;&lt;code&gt;2019-09-09T00:00:00.000Z&lt;/code&gt;&lt;/p&gt; | [optional] 
 **name** | **str**| A content identifier. The only presently supported name is &lt;code&gt;file&lt;/code&gt;. | [optional] 
 **parameters** | [**Dict[str, str]**](Dict.md)| The parameters you want associated with the file. | [optional] 
 **read_date** | **str**| The date you read the file. &lt;br /&gt;&lt;br /&gt;&lt;b&gt; Format: &lt;/b&gt; UTC &lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ&lt;/code&gt;&lt;p&gt;&lt;b&gt;For example:&lt;/b&gt;&lt;p&gt;Created on September 10, 2019&lt;/p&gt;&lt;p&gt;&lt;code&gt;2019-09-10T00:00:00.000Z&lt;/code&gt;&lt;/p&gt; | [optional] 
 **size** | **int**| The size of the file. | [optional] 
 **type** | **str**| The file type. The only presently supported type is &lt;code&gt;form-data&lt;/code&gt;. | [optional] 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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


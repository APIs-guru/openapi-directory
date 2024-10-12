# openapi_client.ScheduleApi

All URIs are relative to *https://api.ebay.com/sell/feed/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_schedule**](ScheduleApi.md#create_schedule) | **POST** /schedule | 
[**delete_schedule**](ScheduleApi.md#delete_schedule) | **DELETE** /schedule/{schedule_id} | 
[**get_latest_result_file**](ScheduleApi.md#get_latest_result_file) | **GET** /schedule/{schedule_id}/download_result_file | 
[**get_schedule**](ScheduleApi.md#get_schedule) | **GET** /schedule/{schedule_id} | 
[**get_schedule_template**](ScheduleApi.md#get_schedule_template) | **GET** /schedule_template/{schedule_template_id} | 
[**get_schedule_templates**](ScheduleApi.md#get_schedule_templates) | **GET** /schedule_template | 
[**get_schedules**](ScheduleApi.md#get_schedules) | **GET** /schedule | 
[**update_schedule**](ScheduleApi.md#update_schedule) | **PUT** /schedule/{schedule_id} | 


# **create_schedule**
> object create_schedule(create_user_schedule_request)



This method creates a schedule, which is a subscription to the specified schedule template. A schedule periodically generates a report for the <strong>feedType</strong> specified by the template. Specify the same <strong>feedType</strong> as the <strong>feedType</strong> of the associated schedule template. When creating the schedule, if available from the template, you can specify a preferred trigger hour, day of the week, or day of the month. These and other fields are conditionally available as specified by the template.<p> <span class=\"tablenote\"><strong>Note:</strong> Make sure to include all fields required by the schedule template (<strong>scheduleTemplateId</strong>). Call the <strong>getScheduleTemplate</strong> method (or the <strong>getScheduleTemplates</strong> method), to find out which fields are required or optional. If a field is optional and a default value is provided by the template, the default value will be used if omitted from the payload.</span></p>A successful call returns the location response header containing the <strong>getSchedule</strong> call URI to retrieve the schedule you just created. The URL includes the eBay-assigned schedule ID, which you can use to reference the schedule task. <br /><br />To retrieve the details of the create schedule task, use the <strong>getSchedule</strong> method for a single schedule ID or the <strong>getSchedules</strong> method to retrieve all schedule details for the specified <strong>feed_type</strong>. The number of schedules for each feedType is limited. Error code 160031 is returned when you have reached this maximum.<p> <span class=\"tablenote\"><strong>Note:</strong> Except for schedules with a HALF-HOUR frequency, all schedules will ideally run at the start of each hour ('00' minutes). Actual start time may vary time may vary due to load and other factors.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_user_schedule_request import CreateUserScheduleRequest
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
    api_instance = openapi_client.ScheduleApi(api_client)
    create_user_schedule_request = openapi_client.CreateUserScheduleRequest() # CreateUserScheduleRequest | In the request payload: <strong>feedType</strong> and <strong>scheduleTemplateId</strong> are required; <strong>scheduleName</strong> is optional; <strong>preferredTriggerHour</strong>, <strong>preferredTriggerDayOfWeek</strong>, <strong>preferredTriggerDayOfMonth</strong>, <strong>scheduleStartDate</strong>, <strong>scheduleEndDate</strong>, and <strong>schemaVersion</strong> are conditional.

    try:
        api_response = api_instance.create_schedule(create_user_schedule_request)
        print("The response of ScheduleApi->create_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->create_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_user_schedule_request** | [**CreateUserScheduleRequest**](CreateUserScheduleRequest.md)| In the request payload: &lt;strong&gt;feedType&lt;/strong&gt; and &lt;strong&gt;scheduleTemplateId&lt;/strong&gt; are required; &lt;strong&gt;scheduleName&lt;/strong&gt; is optional; &lt;strong&gt;preferredTriggerHour&lt;/strong&gt;, &lt;strong&gt;preferredTriggerDayOfWeek&lt;/strong&gt;, &lt;strong&gt;preferredTriggerDayOfMonth&lt;/strong&gt;, &lt;strong&gt;scheduleStartDate&lt;/strong&gt;, &lt;strong&gt;scheduleEndDate&lt;/strong&gt;, and &lt;strong&gt;schemaVersion&lt;/strong&gt; are conditional. | 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location -  <br>  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_schedule**
> delete_schedule(schedule_id)



This method deletes an existing schedule. Specify the schedule to delete using the <strong>schedule_id</strong> path parameter.

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
    api_instance = openapi_client.ScheduleApi(api_client)
    schedule_id = 'schedule_id_example' # str | The <strong>schedule_id</strong> of the schedule to delete. This ID was generated when the task was created. If you do not know the schedule_id, use the <strong>getSchedules</strong> method to return all schedules based on a specified feed_type and find the schedule_id of the schedule to delete.

    try:
        api_instance.delete_schedule(schedule_id)
    except Exception as e:
        print("Exception when calling ScheduleApi->delete_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_id** | **str**| The &lt;strong&gt;schedule_id&lt;/strong&gt; of the schedule to delete. This ID was generated when the task was created. If you do not know the schedule_id, use the &lt;strong&gt;getSchedules&lt;/strong&gt; method to return all schedules based on a specified feed_type and find the schedule_id of the schedule to delete. | 

### Return type

void (empty response body)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_result_file**
> object get_latest_result_file(schedule_id)



This method downloads the latest result file generated by the schedule. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). Specify the <strong>schedule_id</strong> path parameter to download its last generated file.

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
    api_instance = openapi_client.ScheduleApi(api_client)
    schedule_id = 'schedule_id_example' # str | The ID of the schedule for which to retrieve the latest result file. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.

    try:
        api_response = api_instance.get_latest_result_file(schedule_id)
        print("The response of ScheduleApi->get_latest_result_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->get_latest_result_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_id** | **str**| The ID of the schedule for which to retrieve the latest result file. This ID is generated when the schedule was created by the &lt;strong&gt;createSchedule&lt;/strong&gt; method. | 

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

# **get_schedule**
> UserScheduleResponse get_schedule(schedule_id)



This method retrieves schedule details and status of the specified schedule. Specify the schedule to retrieve using the <strong>schedule_id</strong>. Use the <strong>getSchedules</strong> method to find a schedule if you do not know the <strong>schedule_id</strong>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.user_schedule_response import UserScheduleResponse
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
    api_instance = openapi_client.ScheduleApi(api_client)
    schedule_id = 'schedule_id_example' # str | The ID of the schedule for which to retrieve the details. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.

    try:
        api_response = api_instance.get_schedule(schedule_id)
        print("The response of ScheduleApi->get_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->get_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_id** | **str**| The ID of the schedule for which to retrieve the details. This ID is generated when the schedule was created by the &lt;strong&gt;createSchedule&lt;/strong&gt; method. | 

### Return type

[**UserScheduleResponse**](UserScheduleResponse.md)

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

# **get_schedule_template**
> ScheduleTemplateResponse get_schedule_template(schedule_template_id)



This method retrieves the details of the specified template. Specify the template to retrieve using the <strong>schedule_template_id</strong> path parameter. Use the <strong>getScheduleTemplates</strong> method to find a schedule template if you do not know the <strong>schedule_template_id</strong>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.schedule_template_response import ScheduleTemplateResponse
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
    api_instance = openapi_client.ScheduleApi(api_client)
    schedule_template_id = 'schedule_template_id_example' # str | The ID of the template to retrieve. If you do not know the <strong>schedule_template_id</strong>, refer to the documentation or use the <strong>getScheduleTemplates</strong> method to find the available schedule templates.

    try:
        api_response = api_instance.get_schedule_template(schedule_template_id)
        print("The response of ScheduleApi->get_schedule_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->get_schedule_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_template_id** | **str**| The ID of the template to retrieve. If you do not know the &lt;strong&gt;schedule_template_id&lt;/strong&gt;, refer to the documentation or use the &lt;strong&gt;getScheduleTemplates&lt;/strong&gt; method to find the available schedule templates. | 

### Return type

[**ScheduleTemplateResponse**](ScheduleTemplateResponse.md)

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_schedule_templates**
> ScheduleTemplateCollection get_schedule_templates(feed_type, limit=limit, offset=offset)



This method retrieves an array containing the details and status of all schedule templates based on the specified <strong>feed_type</strong>. Use this method to find a schedule template if you do not know the <strong>schedule_template_id</strong>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.schedule_template_collection import ScheduleTemplateCollection
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
    api_instance = openapi_client.ScheduleApi(api_client)
    feed_type = 'feed_type_example' # str | The feed type of the schedule templates to retrieve.
    limit = 'limit_example' # str | The maximum number of schedule templates that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class=\"tablenote\"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves schedule templates 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500 (optional)
    offset = 'offset_example' # str | The number of schedule templates to skip in the result set before returning the first template in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.<br /><br /><b>Default: </b>0 (optional)

    try:
        api_response = api_instance.get_schedule_templates(feed_type, limit=limit, offset=offset)
        print("The response of ScheduleApi->get_schedule_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->get_schedule_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feed_type** | **str**| The feed type of the schedule templates to retrieve. | 
 **limit** | **str**| The maximum number of schedule templates that can be returned on each page of the paginated response. Use this parameter in conjunction with the &lt;strong&gt;offset&lt;/strong&gt; parameter to control the pagination of the output. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This feature employs a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;For example, if &lt;strong&gt;offset&lt;/strong&gt; is set to 10 and &lt;strong&gt;limit&lt;/strong&gt; is set to 10, the call retrieves schedule templates 11 thru 20 from the result set.&lt;/p&gt;&lt;p&gt;If this parameter is omitted, the default value is used. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt; 10 &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum: &lt;/b&gt;500 | [optional] 
 **offset** | **str**| The number of schedule templates to skip in the result set before returning the first template in the paginated response. &lt;p&gt;Combine &lt;strong&gt;offset&lt;/strong&gt; with the &lt;strong&gt;limit&lt;/strong&gt; query parameter to control the items returned in the response. For example, if you supply an &lt;strong&gt;offset&lt;/strong&gt; of &lt;code&gt;0&lt;/code&gt; and a &lt;strong&gt;limit&lt;/strong&gt; of &lt;code&gt;10&lt;/code&gt;, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If &lt;strong&gt;offset&lt;/strong&gt; is &lt;code&gt;10&lt;/code&gt; and &lt;strong&gt;limit&lt;/strong&gt; is &lt;code&gt;20&lt;/code&gt;, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt;0 | [optional] 

### Return type

[**ScheduleTemplateCollection**](ScheduleTemplateCollection.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_schedules**
> UserScheduleCollection get_schedules(feed_type, limit=limit, offset=offset)



This method retrieves an array containing the details and status of all schedules based on the specified <strong>feed_type</strong>. Use this method to find a schedule if you do not know the <strong>schedule_id</strong>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.user_schedule_collection import UserScheduleCollection
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
    api_instance = openapi_client.ScheduleApi(api_client)
    feed_type = 'feed_type_example' # str | The <strong>feedType</strong> associated with the schedule.
    limit = 'limit_example' # str | The maximum number of schedules that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class=\"tablenote\"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves schedules 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500 (optional)
    offset = 'offset_example' # str | The number of schedules to skip in the result set before returning the first schedule in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.<br /><br /><b>Default: </b>0 (optional)

    try:
        api_response = api_instance.get_schedules(feed_type, limit=limit, offset=offset)
        print("The response of ScheduleApi->get_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->get_schedules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feed_type** | **str**| The &lt;strong&gt;feedType&lt;/strong&gt; associated with the schedule. | 
 **limit** | **str**| The maximum number of schedules that can be returned on each page of the paginated response. Use this parameter in conjunction with the &lt;strong&gt;offset&lt;/strong&gt; parameter to control the pagination of the output. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This feature employs a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;For example, if &lt;strong&gt;offset&lt;/strong&gt; is set to 10 and &lt;strong&gt;limit&lt;/strong&gt; is set to 10, the call retrieves schedules 11 thru 20 from the result set.&lt;/p&gt;&lt;p&gt;If this parameter is omitted, the default value is used. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt; 10 &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum: &lt;/b&gt;500 | [optional] 
 **offset** | **str**| The number of schedules to skip in the result set before returning the first schedule in the paginated response. &lt;p&gt;Combine &lt;strong&gt;offset&lt;/strong&gt; with the &lt;strong&gt;limit&lt;/strong&gt; query parameter to control the items returned in the response. For example, if you supply an &lt;strong&gt;offset&lt;/strong&gt; of &lt;code&gt;0&lt;/code&gt; and a &lt;strong&gt;limit&lt;/strong&gt; of &lt;code&gt;10&lt;/code&gt;, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If &lt;strong&gt;offset&lt;/strong&gt; is &lt;code&gt;10&lt;/code&gt; and &lt;strong&gt;limit&lt;/strong&gt; is &lt;code&gt;20&lt;/code&gt;, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default: &lt;/b&gt;0 | [optional] 

### Return type

[**UserScheduleCollection**](UserScheduleCollection.md)

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

# **update_schedule**
> update_schedule(schedule_id, update_user_schedule_request)



This method updates an existing schedule. Specify the schedule to update using the <strong>schedule_id</strong> path parameter. If the schedule template has changed after the schedule was created or updated, the input will be validated using the changed template.<p> <span class=\"tablenote\"><strong>Note:</strong> Make sure to include all fields required by the schedule template (<strong>scheduleTemplateId</strong>). Call the <strong>getScheduleTemplate</strong> method (or the <strong>getScheduleTemplates</strong> method), to find out which fields are required or optional. If you do not know the <strong>scheduleTemplateId</strong>, call the <strong>getSchedule</strong> method to find out.</span></p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.update_user_schedule_request import UpdateUserScheduleRequest
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
    api_instance = openapi_client.ScheduleApi(api_client)
    schedule_id = 'schedule_id_example' # str | The ID of the schedule to update. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
    update_user_schedule_request = openapi_client.UpdateUserScheduleRequest() # UpdateUserScheduleRequest | In the request payload: <strong>scheduleName</strong> is optional; <strong>preferredTriggerHour</strong>, <strong>preferredTriggerDayOfWeek</strong>, <strong>preferredTriggerDayOfMonth</strong>, <strong>scheduleStartDate</strong>, <strong>scheduleEndDate</strong>, and <strong>schemaVersion</strong> are conditional.

    try:
        api_instance.update_schedule(schedule_id, update_user_schedule_request)
    except Exception as e:
        print("Exception when calling ScheduleApi->update_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_id** | **str**| The ID of the schedule to update. This ID is generated when the schedule was created by the &lt;strong&gt;createSchedule&lt;/strong&gt; method. | 
 **update_user_schedule_request** | [**UpdateUserScheduleRequest**](UpdateUserScheduleRequest.md)| In the request payload: &lt;strong&gt;scheduleName&lt;/strong&gt; is optional; &lt;strong&gt;preferredTriggerHour&lt;/strong&gt;, &lt;strong&gt;preferredTriggerDayOfWeek&lt;/strong&gt;, &lt;strong&gt;preferredTriggerDayOfMonth&lt;/strong&gt;, &lt;strong&gt;scheduleStartDate&lt;/strong&gt;, &lt;strong&gt;scheduleEndDate&lt;/strong&gt;, and &lt;strong&gt;schemaVersion&lt;/strong&gt; are conditional. | 

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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


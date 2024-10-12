# Task

The type that defines the fields for the task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_date** | **str** | The timestamp when the task went into the &lt;code&gt;COMPLETED&lt;/code&gt; or &lt;code&gt;COMPLETED_WITH_ERROR&lt;/code&gt; state. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a &lt;strong&gt;getResultFile&lt;/strong&gt; call to download the report. | [optional] 
**creation_date** | **str** | The date the task was created. | [optional] 
**detail_href** | **str** | The path to the call URI used to retrieve the task. This field points to the GetOrderTask URI if the task is for &lt;code&gt;LMS_ORDER_REPORT&lt;/code&gt; or will be null if this task is for &lt;code&gt;LMS_ORDER_ACK&lt;/code&gt;. | [optional] 
**feed_type** | **str** | The feed type associated with the task. | [optional] 
**schema_version** | **str** | The schema version number associated with the task. | [optional] 
**status** | **str** | The enumeration value that indicates the state of the task that was submitted in the request. See &lt;strong&gt;FeedStatusEnum&lt;/strong&gt; for information. &lt;p&gt;The values &lt;code&gt;COMPLETED &lt;/code&gt;and&lt;code&gt; COMPLETED_WITH_ERROR&lt;/code&gt; indicate the Order Report file is ready to download.&lt;/p&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**task_id** | **str** | The ID of the task that was submitted in the request. | [optional] 
**upload_summary** | [**UploadSummary**](UploadSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.task import Task

# TODO update the JSON string below
json = "{}"
# create an instance of Task from a JSON string
task_instance = Task.from_json(json)
# print the JSON string representation of the object
print(Task.to_json())

# convert the object into a dict
task_dict = task_instance.to_dict()
# create an instance of Task from a dict
task_from_dict = Task.from_dict(task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



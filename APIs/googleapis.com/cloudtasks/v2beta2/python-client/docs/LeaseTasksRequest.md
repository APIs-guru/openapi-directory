# LeaseTasksRequest

Request message for leasing tasks using LeaseTasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | &#x60;filter&#x60; can be used to specify a subset of tasks to lease. When &#x60;filter&#x60; is set to &#x60;tag&#x3D;&#x60; then the response will contain only tasks whose tag is equal to &#x60;&#x60;. &#x60;&#x60; must be less than 500 characters. When &#x60;filter&#x60; is set to &#x60;tag_function&#x3D;oldest_tag()&#x60;, only tasks which have the same tag as the task with the oldest schedule_time will be returned. Grammar Syntax: * &#x60;filter &#x3D; \&quot;tag&#x3D;\&quot; tag | \&quot;tag_function&#x3D;\&quot; function&#x60; * &#x60;tag &#x3D; string&#x60; * &#x60;function &#x3D; \&quot;oldest_tag()\&quot;&#x60; The &#x60;oldest_tag()&#x60; function returns tasks which have the same tag as the oldest task (ordered by schedule time). SDK compatibility: Although the SDK allows tags to be either string or [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-), only UTF-8 encoded tags can be used in Cloud Tasks. Tag which aren&#39;t UTF-8 encoded can&#39;t be used in the filter and the task&#39;s tag will be displayed as empty in Cloud Tasks. | [optional] 
**lease_duration** | **str** | Required. The duration of the lease. Each task returned in the response will have its schedule_time set to the current time plus the &#x60;lease_duration&#x60;. The task is leased until its schedule_time; thus, the task will not be returned to another LeaseTasks call before its schedule_time. After the worker has successfully finished the work associated with the task, the worker must call via AcknowledgeTask before the schedule_time. Otherwise the task will be returned to a later LeaseTasks call so that another worker can retry it. The maximum lease duration is 1 week. &#x60;lease_duration&#x60; will be truncated to the nearest second. | [optional] 
**max_tasks** | **int** | The maximum number of tasks to lease. The system will make a best effort to return as close to as &#x60;max_tasks&#x60; as possible. The largest that &#x60;max_tasks&#x60; can be is 1000. The maximum total size of a lease tasks response is 32 MB. If the sum of all task sizes requested reaches this limit, fewer tasks than requested are returned. | [optional] 
**response_view** | **str** | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires &#x60;cloudtasks.tasks.fullView&#x60; [Google IAM](https://cloud.google.com/iam/) permission on the Task resource. | [optional] 

## Example

```python
from openapi_client.models.lease_tasks_request import LeaseTasksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LeaseTasksRequest from a JSON string
lease_tasks_request_instance = LeaseTasksRequest.from_json(json)
# print the JSON string representation of the object
print(LeaseTasksRequest.to_json())

# convert the object into a dict
lease_tasks_request_dict = lease_tasks_request_instance.to_dict()
# create an instance of LeaseTasksRequest from a dict
lease_tasks_request_from_dict = LeaseTasksRequest.from_dict(lease_tasks_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



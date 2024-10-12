# JobNotification

Notification configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**Message**](Message.md) |  | [optional] 
**pubsub_topic** | **str** | The Pub/Sub topic where notifications like the job state changes will be published. The topic must exist in the same project as the job and billings will be charged to this project. If not specified, no Pub/Sub messages will be sent. Topic format: &#x60;projects/{project}/topics/{topic}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.job_notification import JobNotification

# TODO update the JSON string below
json = "{}"
# create an instance of JobNotification from a JSON string
job_notification_instance = JobNotification.from_json(json)
# print the JSON string representation of the object
print(JobNotification.to_json())

# convert the object into a dict
job_notification_dict = job_notification_instance.to_dict()
# create an instance of JobNotification from a dict
job_notification_from_dict = JobNotification.from_dict(job_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



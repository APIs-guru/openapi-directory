# JobAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_action** | [**JobErrorAction**](JobErrorAction.md) |  | [optional] 
**queue_message** | [**StorageQueueMessage**](StorageQueueMessage.md) |  | [optional] 
**request** | [**HttpRequest**](HttpRequest.md) |  | [optional] 
**retry_policy** | [**RetryPolicy**](RetryPolicy.md) |  | [optional] 
**service_bus_queue_message** | [**ServiceBusQueueMessage**](ServiceBusQueueMessage.md) |  | [optional] 
**service_bus_topic_message** | [**ServiceBusTopicMessage**](ServiceBusTopicMessage.md) |  | [optional] 
**type** | **str** | Gets or sets the job action type. | [optional] 

## Example

```python
from openapi_client.models.job_action import JobAction

# TODO update the JSON string below
json = "{}"
# create an instance of JobAction from a JSON string
job_action_instance = JobAction.from_json(json)
# print the JSON string representation of the object
print(JobAction.to_json())

# convert the object into a dict
job_action_dict = job_action_instance.to_dict()
# create an instance of JobAction from a dict
job_action_from_dict = JobAction.from_dict(job_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



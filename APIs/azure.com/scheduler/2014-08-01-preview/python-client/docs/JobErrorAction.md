# JobErrorAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue_message** | [**StorageQueueMessage**](StorageQueueMessage.md) |  | [optional] 
**request** | [**HttpRequest**](HttpRequest.md) |  | [optional] 
**retry_policy** | [**RetryPolicy**](RetryPolicy.md) |  | [optional] 
**service_bus_queue_message** | [**ServiceBusQueueMessage**](ServiceBusQueueMessage.md) |  | [optional] 
**service_bus_topic_message** | [**ServiceBusTopicMessage**](ServiceBusTopicMessage.md) |  | [optional] 
**type** | **str** | Gets or sets the job error action type. | [optional] 

## Example

```python
from openapi_client.models.job_error_action import JobErrorAction

# TODO update the JSON string below
json = "{}"
# create an instance of JobErrorAction from a JSON string
job_error_action_instance = JobErrorAction.from_json(json)
# print the JSON string representation of the object
print(JobErrorAction.to_json())

# convert the object into a dict
job_error_action_dict = job_error_action_instance.to_dict()
# create an instance of JobErrorAction from a dict
job_error_action_from_dict = JobErrorAction.from_dict(job_error_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



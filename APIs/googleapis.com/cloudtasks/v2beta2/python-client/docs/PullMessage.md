# PullMessage

The pull message contains data that can be used by the caller of LeaseTasks to process the task. This proto can only be used for tasks in a queue which has pull_target set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **bytearray** | A data payload consumed by the worker to execute the task. | [optional] 
**tag** | **str** | The task&#39;s tag. Tags allow similar tasks to be processed in a batch. If you label tasks with a tag, your worker can lease tasks with the same tag using filter. For example, if you want to aggregate the events associated with a specific user once a day, you could tag tasks with the user ID. The task&#39;s tag can only be set when the task is created. The tag must be less than 500 characters. SDK compatibility: Although the SDK allows tags to be either string or [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-), only UTF-8 encoded tags can be used in Cloud Tasks. If a tag isn&#39;t UTF-8 encoded, the tag will be empty when the task is returned by Cloud Tasks. | [optional] 

## Example

```python
from openapi_client.models.pull_message import PullMessage

# TODO update the JSON string below
json = "{}"
# create an instance of PullMessage from a JSON string
pull_message_instance = PullMessage.from_json(json)
# print the JSON string representation of the object
print(PullMessage.to_json())

# convert the object into a dict
pull_message_dict = pull_message_instance.to_dict()
# create an instance of PullMessage from a dict
pull_message_from_dict = PullMessage.from_dict(pull_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



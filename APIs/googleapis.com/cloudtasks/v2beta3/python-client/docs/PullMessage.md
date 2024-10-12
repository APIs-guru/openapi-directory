# PullMessage

Pull Message. This proto can only be used for tasks in a queue which has PULL type. It currently exists for backwards compatibility with the App Engine Task Queue SDK. This message type maybe returned with methods list and get, when the response view is FULL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **bytearray** | A data payload consumed by the worker to execute the task. | [optional] 
**tag** | **str** | The tasks&#39;s tag. The tag is less than 500 characters. SDK compatibility: Although the SDK allows tags to be either string or [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-), only UTF-8 encoded tags can be used in Cloud Tasks. If a tag isn&#39;t UTF-8 encoded, the tag will be empty when the task is returned by Cloud Tasks. | [optional] 

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



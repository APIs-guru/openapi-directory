# TopicSharedAccessKeys

Shared access keys of the Topic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key1** | **str** | Shared access key1 for the topic. | [optional] 
**key2** | **str** | Shared access key2 for the topic. | [optional] 

## Example

```python
from openapi_client.models.topic_shared_access_keys import TopicSharedAccessKeys

# TODO update the JSON string below
json = "{}"
# create an instance of TopicSharedAccessKeys from a JSON string
topic_shared_access_keys_instance = TopicSharedAccessKeys.from_json(json)
# print the JSON string representation of the object
print(TopicSharedAccessKeys.to_json())

# convert the object into a dict
topic_shared_access_keys_dict = topic_shared_access_keys_instance.to_dict()
# create an instance of TopicSharedAccessKeys from a dict
topic_shared_access_keys_from_dict = TopicSharedAccessKeys.from_dict(topic_shared_access_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



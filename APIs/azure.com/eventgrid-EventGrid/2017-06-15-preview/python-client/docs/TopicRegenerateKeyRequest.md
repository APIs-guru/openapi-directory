# TopicRegenerateKeyRequest

Topic regenerate share access key request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Key name to regenerate key1 or key2 | 

## Example

```python
from openapi_client.models.topic_regenerate_key_request import TopicRegenerateKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TopicRegenerateKeyRequest from a JSON string
topic_regenerate_key_request_instance = TopicRegenerateKeyRequest.from_json(json)
# print the JSON string representation of the object
print(TopicRegenerateKeyRequest.to_json())

# convert the object into a dict
topic_regenerate_key_request_dict = topic_regenerate_key_request_instance.to_dict()
# create an instance of TopicRegenerateKeyRequest from a dict
topic_regenerate_key_request_from_dict = TopicRegenerateKeyRequest.from_dict(topic_regenerate_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



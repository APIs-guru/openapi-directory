# PublishResponse

Response for the `Publish` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_ids** | **List[str]** | Optional. The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic. | [optional] 

## Example

```python
from openapi_client.models.publish_response import PublishResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PublishResponse from a JSON string
publish_response_instance = PublishResponse.from_json(json)
# print the JSON string representation of the object
print(PublishResponse.to_json())

# convert the object into a dict
publish_response_dict = publish_response_instance.to_dict()
# create an instance of PublishResponse from a dict
publish_response_from_dict = PublishResponse.from_dict(publish_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



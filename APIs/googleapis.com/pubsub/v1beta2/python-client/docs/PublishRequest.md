# PublishRequest

Request for the Publish method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[PubsubMessage]**](PubsubMessage.md) | The messages to publish. | [optional] 

## Example

```python
from openapi_client.models.publish_request import PublishRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PublishRequest from a JSON string
publish_request_instance = PublishRequest.from_json(json)
# print the JSON string representation of the object
print(PublishRequest.to_json())

# convert the object into a dict
publish_request_dict = publish_request_instance.to_dict()
# create an instance of PublishRequest from a dict
publish_request_from_dict = PublishRequest.from_dict(publish_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



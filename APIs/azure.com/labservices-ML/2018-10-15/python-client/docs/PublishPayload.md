# PublishPayload

Payload for Publish operation on EnvironmentSetting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_existing_image** | **bool** | Whether to use existing VM custom image when publishing. | [optional] 

## Example

```python
from openapi_client.models.publish_payload import PublishPayload

# TODO update the JSON string below
json = "{}"
# create an instance of PublishPayload from a JSON string
publish_payload_instance = PublishPayload.from_json(json)
# print the JSON string representation of the object
print(PublishPayload.to_json())

# convert the object into a dict
publish_payload_dict = publish_payload_instance.to_dict()
# create an instance of PublishPayload from a dict
publish_payload_from_dict = PublishPayload.from_dict(publish_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MessageMediaInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_media_inner import MessageMediaInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessageMediaInner from a JSON string
message_media_inner_instance = MessageMediaInner.from_json(json)
# print the JSON string representation of the object
print(MessageMediaInner.to_json())

# convert the object into a dict
message_media_inner_dict = message_media_inner_instance.to_dict()
# create an instance of MessageMediaInner from a dict
message_media_inner_from_dict = MessageMediaInner.from_dict(message_media_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



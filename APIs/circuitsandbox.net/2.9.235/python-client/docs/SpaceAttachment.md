# SpaceAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **float** | time this item has been created | [optional] 
**creator_id** | **str** | the id of the creator | [optional] 
**file_id** | **str** | the id of the field | [optional] 
**file_name** | **str** | name of the file | [optional] 
**inline_usage** | **bool** | is inline usage allowed | [optional] 
**item_id** | **str** | id of the item | [optional] 
**layout** | **str** | layout | [optional] 
**mime_type** | **str** | the media type | [optional] 
**modification_time** | **float** | the time this item has been ben modified | [optional] 
**size** | **float** | size of this file | [optional] 
**space_id** | **str** | id of the space | [optional] 
**thumbnail_id** | **str** | the id of the tumbnail | [optional] 

## Example

```python
from openapi_client.models.space_attachment import SpaceAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceAttachment from a JSON string
space_attachment_instance = SpaceAttachment.from_json(json)
# print the JSON string representation of the object
print(SpaceAttachment.to_json())

# convert the object into a dict
space_attachment_dict = space_attachment_instance.to_dict()
# create an instance of SpaceAttachment from a dict
space_attachment_from_dict = SpaceAttachment.from_dict(space_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



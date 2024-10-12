# Attachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachable_id** | **int** |  | [optional] 
**attachable_type** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**file_url** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**map_id** | **int** |  | [optional] 
**sizes** | **object** |  | [optional] 
**spot** | [**Spot**](Spot.md) |  | [optional] 
**status** | **str** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.attachment import Attachment

# TODO update the JSON string below
json = "{}"
# create an instance of Attachment from a JSON string
attachment_instance = Attachment.from_json(json)
# print the JSON string representation of the object
print(Attachment.to_json())

# convert the object into a dict
attachment_dict = attachment_instance.to_dict()
# create an instance of Attachment from a dict
attachment_from_dict = Attachment.from_dict(attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



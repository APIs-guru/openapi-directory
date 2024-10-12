# SpaceItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The Status of this item | [optional] 
**attachments** | [**List[SpaceAttachment]**](SpaceAttachment.md) | The list of attachments | [optional] 
**complex** | **bool** | Is this item complex | [optional] 
**content** | **str** | The content of this item | [optional] 
**creation_time** | **float** | The time this item got created | [optional] 
**creator_id** | **str** | The Id of the creator | [optional] 
**deleted_by** | **str** | Incase this item got deleted, the id of the deletor | [optional] 
**external_attachments** | [**List[SpaceExternalAttachment]**](SpaceExternalAttachment.md) | A list of external attachments | [optional] 
**form_meta_data** | **str** | Incase there is FormMetaData | [optional] 
**item_id** | **str** | the Id of this item | [optional] 
**mentioned_users** | **List[str]** | A list of userIds who have been mentioned in this item | [optional] 
**modification_time** | **float** | the time this item got modified | [optional] 
**number_of_likes** | **float** | The number of likes | [optional] 
**previews** | [**List[SpaceItemPreview]**](SpaceItemPreview.md) | A list of previews | [optional] 
**shared_items** | [**List[SharedItem]**](SharedItem.md) | missing documentation | [optional] 
**space_id** | **str** | the Id of the space containing this item | [optional] 
**tenant_id** | **str** | the Id of the tenant | [optional] 

## Example

```python
from openapi_client.models.space_item import SpaceItem

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceItem from a JSON string
space_item_instance = SpaceItem.from_json(json)
# print the JSON string representation of the object
print(SpaceItem.to_json())

# convert the object into a dict
space_item_dict = space_item_instance.to_dict()
# create an instance of SpaceItem from a dict
space_item_from_dict = SpaceItem.from_dict(space_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



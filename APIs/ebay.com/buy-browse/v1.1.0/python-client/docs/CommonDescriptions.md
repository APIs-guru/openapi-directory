# CommonDescriptions

The type that defines the fields for the item ids that all use a common description.  Often the item variations within an item group all have the same description. Instead of repeating this description in the item details of each item, a description that is shared by at least one other item is returned in this container. If the description is unique, it is returned in the <b> items.description</b> field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The item description that is used by more than one of the item variations. | [optional] 
**item_ids** | **List[str]** | A list of item ids that have this description. | [optional] 

## Example

```python
from openapi_client.models.common_descriptions import CommonDescriptions

# TODO update the JSON string below
json = "{}"
# create an instance of CommonDescriptions from a JSON string
common_descriptions_instance = CommonDescriptions.from_json(json)
# print the JSON string representation of the object
print(CommonDescriptions.to_json())

# convert the object into a dict
common_descriptions_dict = common_descriptions_instance.to_dict()
# create an instance of CommonDescriptions from a dict
common_descriptions_from_dict = CommonDescriptions.from_dict(common_descriptions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



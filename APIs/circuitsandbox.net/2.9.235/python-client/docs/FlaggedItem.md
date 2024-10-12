# FlaggedItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | [**SpaceItem**](SpaceItem.md) |  | [optional] 
**parent_item** | [**SpaceItem**](SpaceItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.flagged_item import FlaggedItem

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedItem from a JSON string
flagged_item_instance = FlaggedItem.from_json(json)
# print the JSON string representation of the object
print(FlaggedItem.to_json())

# convert the object into a dict
flagged_item_dict = flagged_item_instance.to_dict()
# create an instance of FlaggedItem from a dict
flagged_item_from_dict = FlaggedItem.from_dict(flagged_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



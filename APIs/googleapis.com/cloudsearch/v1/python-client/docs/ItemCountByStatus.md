# ItemCountByStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of items matching the status code. | [optional] 
**indexed_items_count** | **str** | Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code. | [optional] 
**status_code** | **str** | Status of the items. | [optional] 

## Example

```python
from openapi_client.models.item_count_by_status import ItemCountByStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ItemCountByStatus from a JSON string
item_count_by_status_instance = ItemCountByStatus.from_json(json)
# print the JSON string representation of the object
print(ItemCountByStatus.to_json())

# convert the object into a dict
item_count_by_status_dict = item_count_by_status_instance.to_dict()
# create an instance of ItemCountByStatus from a dict
item_count_by_status_from_dict = ItemCountByStatus.from_dict(item_count_by_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



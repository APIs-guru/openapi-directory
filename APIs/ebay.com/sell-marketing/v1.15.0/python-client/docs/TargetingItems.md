# TargetingItems

A type that defines the targeted items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bases** | [**List[ItemBasis]**](ItemBasis.md) | The metrics and additional information for the items. | [optional] 
**listing_id** | **str** | The listing ID of the targeted item. | [optional] 

## Example

```python
from openapi_client.models.targeting_items import TargetingItems

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingItems from a JSON string
targeting_items_instance = TargetingItems.from_json(json)
# print the JSON string representation of the object
print(TargetingItems.to_json())

# convert the object into a dict
targeting_items_dict = targeting_items_instance.to_dict()
# create an instance of TargetingItems from a dict
targeting_items_from_dict = TargetingItems.from_dict(targeting_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



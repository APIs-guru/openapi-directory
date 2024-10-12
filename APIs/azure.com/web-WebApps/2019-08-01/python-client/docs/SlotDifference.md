# SlotDifference

A setting difference between two deployment slots of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SlotDifference resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.slot_difference import SlotDifference

# TODO update the JSON string below
json = "{}"
# create an instance of SlotDifference from a JSON string
slot_difference_instance = SlotDifference.from_json(json)
# print the JSON string representation of the object
print(SlotDifference.to_json())

# convert the object into a dict
slot_difference_dict = slot_difference_instance.to_dict()
# create an instance of SlotDifference from a dict
slot_difference_from_dict = SlotDifference.from_dict(slot_difference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



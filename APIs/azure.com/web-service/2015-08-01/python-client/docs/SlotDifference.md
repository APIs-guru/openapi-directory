# SlotDifference

An object describing the difference in setting values between two web app slots

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

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



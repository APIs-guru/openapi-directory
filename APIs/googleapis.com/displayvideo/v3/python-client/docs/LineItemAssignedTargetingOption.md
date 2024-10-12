# LineItemAssignedTargetingOption

Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_option** | [**AssignedTargetingOption**](AssignedTargetingOption.md) |  | [optional] 
**line_item_id** | **str** | The ID of the line item the assigned targeting option is assigned to. | [optional] 

## Example

```python
from openapi_client.models.line_item_assigned_targeting_option import LineItemAssignedTargetingOption

# TODO update the JSON string below
json = "{}"
# create an instance of LineItemAssignedTargetingOption from a JSON string
line_item_assigned_targeting_option_instance = LineItemAssignedTargetingOption.from_json(json)
# print the JSON string representation of the object
print(LineItemAssignedTargetingOption.to_json())

# convert the object into a dict
line_item_assigned_targeting_option_dict = line_item_assigned_targeting_option_instance.to_dict()
# create an instance of LineItemAssignedTargetingOption from a dict
line_item_assigned_targeting_option_from_dict = LineItemAssignedTargetingOption.from_dict(line_item_assigned_targeting_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



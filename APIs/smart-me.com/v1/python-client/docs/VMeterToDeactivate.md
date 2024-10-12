# VMeterToDeactivate

Deactivates a virtual Meter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Virtual meter to deactivate | [optional] 

## Example

```python
from openapi_client.models.v_meter_to_deactivate import VMeterToDeactivate

# TODO update the JSON string below
json = "{}"
# create an instance of VMeterToDeactivate from a JSON string
v_meter_to_deactivate_instance = VMeterToDeactivate.from_json(json)
# print the JSON string representation of the object
print(VMeterToDeactivate.to_json())

# convert the object into a dict
v_meter_to_deactivate_dict = v_meter_to_deactivate_instance.to_dict()
# create an instance of VMeterToDeactivate from a dict
v_meter_to_deactivate_from_dict = VMeterToDeactivate.from_dict(v_meter_to_deactivate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



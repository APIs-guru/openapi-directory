# VMeterToActivate

Actives a virtual Meter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial_number** | **str** | The Serialnumber of the Meter to activate. | [optional] 

## Example

```python
from openapi_client.models.v_meter_to_activate import VMeterToActivate

# TODO update the JSON string below
json = "{}"
# create an instance of VMeterToActivate from a JSON string
v_meter_to_activate_instance = VMeterToActivate.from_json(json)
# print the JSON string representation of the object
print(VMeterToActivate.to_json())

# convert the object into a dict
v_meter_to_activate_dict = v_meter_to_activate_instance.to_dict()
# create an instance of VMeterToActivate from a dict
v_meter_to_activate_from_dict = VMeterToActivate.from_dict(v_meter_to_activate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



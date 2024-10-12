# VMwareCbtResyncInput

VMwareCbt specific resync input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_cbt_reset** | **str** | A value indicating whether CBT is to be reset. | 

## Example

```python
from openapi_client.models.v_mware_cbt_resync_input import VMwareCbtResyncInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtResyncInput from a JSON string
v_mware_cbt_resync_input_instance = VMwareCbtResyncInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtResyncInput.to_json())

# convert the object into a dict
v_mware_cbt_resync_input_dict = v_mware_cbt_resync_input_instance.to_dict()
# create an instance of VMwareCbtResyncInput from a dict
v_mware_cbt_resync_input_from_dict = VMwareCbtResyncInput.from_dict(v_mware_cbt_resync_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



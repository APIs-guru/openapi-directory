# VMwareCbtMigrateInput

VMwareCbt specific migrate input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**perform_shutdown** | **str** | A value indicating whether VM is to be shutdown. | 

## Example

```python
from openapi_client.models.v_mware_cbt_migrate_input import VMwareCbtMigrateInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtMigrateInput from a JSON string
v_mware_cbt_migrate_input_instance = VMwareCbtMigrateInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtMigrateInput.to_json())

# convert the object into a dict
v_mware_cbt_migrate_input_dict = v_mware_cbt_migrate_input_instance.to_dict()
# create an instance of VMwareCbtMigrateInput from a dict
v_mware_cbt_migrate_input_from_dict = VMwareCbtMigrateInput.from_dict(v_mware_cbt_migrate_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



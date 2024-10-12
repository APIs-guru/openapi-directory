# VMwareCbtTestMigrateInput

VMwareCbt specific test migrate input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_id** | **str** | The test network Id. | 
**recovery_point_id** | **str** | The recovery point Id. | 

## Example

```python
from openapi_client.models.v_mware_cbt_test_migrate_input import VMwareCbtTestMigrateInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtTestMigrateInput from a JSON string
v_mware_cbt_test_migrate_input_instance = VMwareCbtTestMigrateInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtTestMigrateInput.to_json())

# convert the object into a dict
v_mware_cbt_test_migrate_input_dict = v_mware_cbt_test_migrate_input_instance.to_dict()
# create an instance of VMwareCbtTestMigrateInput from a dict
v_mware_cbt_test_migrate_input_from_dict = VMwareCbtTestMigrateInput.from_dict(v_mware_cbt_test_migrate_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BareMetalAdminDrainingMachine

BareMetalAdminDrainingMachine represents the machines that are currently draining.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_ip** | **str** | Draining machine IP address. | [optional] 
**pod_count** | **int** | The count of pods yet to drain. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_draining_machine import BareMetalAdminDrainingMachine

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminDrainingMachine from a JSON string
bare_metal_admin_draining_machine_instance = BareMetalAdminDrainingMachine.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminDrainingMachine.to_json())

# convert the object into a dict
bare_metal_admin_draining_machine_dict = bare_metal_admin_draining_machine_instance.to_dict()
# create an instance of BareMetalAdminDrainingMachine from a dict
bare_metal_admin_draining_machine_from_dict = BareMetalAdminDrainingMachine.from_dict(bare_metal_admin_draining_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



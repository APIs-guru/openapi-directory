# AutomaticRepairsPolicy

Specifies the configuration parameters for automatic repairs on the virtual machine scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false. | [optional] 
**grace_period** | **str** | The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 30 minutes (PT30M), which is also the default value. | [optional] 

## Example

```python
from openapi_client.models.automatic_repairs_policy import AutomaticRepairsPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutomaticRepairsPolicy from a JSON string
automatic_repairs_policy_instance = AutomaticRepairsPolicy.from_json(json)
# print the JSON string representation of the object
print(AutomaticRepairsPolicy.to_json())

# convert the object into a dict
automatic_repairs_policy_dict = automatic_repairs_policy_instance.to_dict()
# create an instance of AutomaticRepairsPolicy from a dict
automatic_repairs_policy_from_dict = AutomaticRepairsPolicy.from_dict(automatic_repairs_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



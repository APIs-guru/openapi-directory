# InstanceSelection

Defines machines types and a rank to which the machines types belong.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_types** | **List[str]** | Optional. Full machine-type names, e.g. \&quot;n1-standard-16\&quot;. | [optional] 
**rank** | **int** | Optional. Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference. | [optional] 

## Example

```python
from openapi_client.models.instance_selection import InstanceSelection

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceSelection from a JSON string
instance_selection_instance = InstanceSelection.from_json(json)
# print the JSON string representation of the object
print(InstanceSelection.to_json())

# convert the object into a dict
instance_selection_dict = instance_selection_instance.to_dict()
# create an instance of InstanceSelection from a dict
instance_selection_from_dict = InstanceSelection.from_dict(instance_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# InconsistentVmDetails

This class stores the monitoring details for consistency check of inconsistent Protected Entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_name** | **str** | The Cloud name. | [optional] 
**details** | **List[str]** | The list of details regarding state of the Protected Entity in SRS and On prem. | [optional] 
**error_ids** | **List[str]** | The list of error ids. | [optional] 
**vm_name** | **str** | The Vm name. | [optional] 

## Example

```python
from openapi_client.models.inconsistent_vm_details import InconsistentVmDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InconsistentVmDetails from a JSON string
inconsistent_vm_details_instance = InconsistentVmDetails.from_json(json)
# print the JSON string representation of the object
print(InconsistentVmDetails.to_json())

# convert the object into a dict
inconsistent_vm_details_dict = inconsistent_vm_details_instance.to_dict()
# create an instance of InconsistentVmDetails from a dict
inconsistent_vm_details_from_dict = InconsistentVmDetails.from_dict(inconsistent_vm_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



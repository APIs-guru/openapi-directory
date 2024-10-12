# ConsistencyCheckTaskDetails

This class contains monitoring details of all the inconsistent Protected Entities in Vmm.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_details** | [**List[InconsistentVmDetails]**](InconsistentVmDetails.md) | The list of inconsistent Vm details. | [optional] 

## Example

```python
from openapi_client.models.consistency_check_task_details import ConsistencyCheckTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ConsistencyCheckTaskDetails from a JSON string
consistency_check_task_details_instance = ConsistencyCheckTaskDetails.from_json(json)
# print the JSON string representation of the object
print(ConsistencyCheckTaskDetails.to_json())

# convert the object into a dict
consistency_check_task_details_dict = consistency_check_task_details_instance.to_dict()
# create an instance of ConsistencyCheckTaskDetails from a dict
consistency_check_task_details_from_dict = ConsistencyCheckTaskDetails.from_dict(consistency_check_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



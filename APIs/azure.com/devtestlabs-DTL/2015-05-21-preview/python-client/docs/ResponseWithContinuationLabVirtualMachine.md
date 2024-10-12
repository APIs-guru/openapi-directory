# ResponseWithContinuationLabVirtualMachine

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[LabVirtualMachine]**](LabVirtualMachine.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_lab_virtual_machine import ResponseWithContinuationLabVirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationLabVirtualMachine from a JSON string
response_with_continuation_lab_virtual_machine_instance = ResponseWithContinuationLabVirtualMachine.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationLabVirtualMachine.to_json())

# convert the object into a dict
response_with_continuation_lab_virtual_machine_dict = response_with_continuation_lab_virtual_machine_instance.to_dict()
# create an instance of ResponseWithContinuationLabVirtualMachine from a dict
response_with_continuation_lab_virtual_machine_from_dict = ResponseWithContinuationLabVirtualMachine.from_dict(response_with_continuation_lab_virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



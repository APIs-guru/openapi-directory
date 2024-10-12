# SetInstanceMachineTypeRequest

Request for setting instance machine type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_type** | **str** | Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types). | [optional] 

## Example

```python
from openapi_client.models.set_instance_machine_type_request import SetInstanceMachineTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetInstanceMachineTypeRequest from a JSON string
set_instance_machine_type_request_instance = SetInstanceMachineTypeRequest.from_json(json)
# print the JSON string representation of the object
print(SetInstanceMachineTypeRequest.to_json())

# convert the object into a dict
set_instance_machine_type_request_dict = set_instance_machine_type_request_instance.to_dict()
# create an instance of SetInstanceMachineTypeRequest from a dict
set_instance_machine_type_request_from_dict = SetInstanceMachineTypeRequest.from_dict(set_instance_machine_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



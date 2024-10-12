# DomainJoinMachineRequest

DomainJoinMachineRequest is the request message for DomainJoinMachine method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force** | **bool** | Optional. force if True, forces domain join even if the computer account already exists. | [optional] 
**ou_name** | **str** | Optional. OU name where the VM needs to be domain joined | [optional] 
**vm_id_token** | **str** | Required. Full instance id token of compute engine VM to verify instance identity. More about this: https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature | [optional] 

## Example

```python
from openapi_client.models.domain_join_machine_request import DomainJoinMachineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DomainJoinMachineRequest from a JSON string
domain_join_machine_request_instance = DomainJoinMachineRequest.from_json(json)
# print the JSON string representation of the object
print(DomainJoinMachineRequest.to_json())

# convert the object into a dict
domain_join_machine_request_dict = domain_join_machine_request_instance.to_dict()
# create an instance of DomainJoinMachineRequest from a dict
domain_join_machine_request_from_dict = DomainJoinMachineRequest.from_dict(domain_join_machine_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



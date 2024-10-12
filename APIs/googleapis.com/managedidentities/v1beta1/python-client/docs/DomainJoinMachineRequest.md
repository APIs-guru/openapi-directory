# DomainJoinMachineRequest

DomainJoinMachineRequest is the request message for DomainJoinMachine method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force** | **bool** | Optional. force if True, forces domain join even if the computer account already exists. | [optional] 
**ou_name** | **str** | Optional. OU name to which the VM needs to be domain joined. If the field is not provided, the VM is joined to the default OU which is created. The default OU for the domain join api is created as GCE Instances under the Cloud OU. Example - OU&#x3D;GCE Instances,OU&#x3D;Cloud,DC&#x3D;ad,DC&#x3D;test,DC&#x3D;com If the field is provided, then the custom OU is searched for under GCE Instances OU. Example - if ou_name&#x3D;test_ou then the VM is domain joined to the following OU: OU&#x3D;test_ou,OU&#x3D;GCE Instances,OU&#x3D;Cloud,DC&#x3D;ad,DC&#x3D;test,DC&#x3D;com if present. If OU is not present under GCE Instances, then error is returned. | [optional] 
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



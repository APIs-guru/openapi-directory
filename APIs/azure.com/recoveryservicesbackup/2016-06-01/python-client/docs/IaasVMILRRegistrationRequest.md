# IaasVMILRRegistrationRequest

Restore files or folders from a backup copy, or recovery point, of an IaaS (or Azure) VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initiator_name** | **str** | The iSCSI initiator name. | [optional] 
**recovery_point_id** | **str** | The ID of the IaaS VM recovery point used to restore the files or folders. | [optional] 
**renew_existing_registration** | **bool** | Whether to renew the existing registration with the iSCSI server. | [optional] 
**virtual_machine_id** | **str** | The fully qualified Resource Manager ID of the VM used to restore the files or folders. | [optional] 

## Example

```python
from openapi_client.models.iaas_vmilr_registration_request import IaasVMILRRegistrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IaasVMILRRegistrationRequest from a JSON string
iaas_vmilr_registration_request_instance = IaasVMILRRegistrationRequest.from_json(json)
# print the JSON string representation of the object
print(IaasVMILRRegistrationRequest.to_json())

# convert the object into a dict
iaas_vmilr_registration_request_dict = iaas_vmilr_registration_request_instance.to_dict()
# create an instance of IaasVMILRRegistrationRequest from a dict
iaas_vmilr_registration_request_from_dict = IaasVMILRRegistrationRequest.from_dict(iaas_vmilr_registration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



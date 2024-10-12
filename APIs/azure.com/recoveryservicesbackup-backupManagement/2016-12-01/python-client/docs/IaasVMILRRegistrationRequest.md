# IaasVMILRRegistrationRequest

Restore files/folders from a backup copy of IaaS VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initiator_name** | **str** | iSCSI initiator name. | [optional] 
**recovery_point_id** | **str** | ID of the IaaS VM backup copy from where the files/folders have to be restored. | [optional] 
**renew_existing_registration** | **bool** | Whether to renew existing registration with the iSCSI server. | [optional] 
**virtual_machine_id** | **str** | Fully qualified ARM ID of the virtual machine whose the files / folders have to be restored. | [optional] 

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



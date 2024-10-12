# IaaSVMProtectableItem

This Azure VM workload-specific (also known as IaaS VM workload-specific) backup item can be backed up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**virtual_machine_id** | **str** | The fully qualified Resource Manager ID of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.iaa_svm_protectable_item import IaaSVMProtectableItem

# TODO update the JSON string below
json = "{}"
# create an instance of IaaSVMProtectableItem from a JSON string
iaa_svm_protectable_item_instance = IaaSVMProtectableItem.from_json(json)
# print the JSON string representation of the object
print(IaaSVMProtectableItem.to_json())

# convert the object into a dict
iaa_svm_protectable_item_dict = iaa_svm_protectable_item_instance.to_dict()
# create an instance of IaaSVMProtectableItem from a dict
iaa_svm_protectable_item_from_dict = IaaSVMProtectableItem.from_dict(iaa_svm_protectable_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



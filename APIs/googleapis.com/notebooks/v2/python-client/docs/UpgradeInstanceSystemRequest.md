# UpgradeInstanceSystemRequest

Request for upgrading a notebook instance from within the VM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_id** | **str** | Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.upgrade_instance_system_request import UpgradeInstanceSystemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeInstanceSystemRequest from a JSON string
upgrade_instance_system_request_instance = UpgradeInstanceSystemRequest.from_json(json)
# print the JSON string representation of the object
print(UpgradeInstanceSystemRequest.to_json())

# convert the object into a dict
upgrade_instance_system_request_dict = upgrade_instance_system_request_instance.to_dict()
# create an instance of UpgradeInstanceSystemRequest from a dict
upgrade_instance_system_request_from_dict = UpgradeInstanceSystemRequest.from_dict(upgrade_instance_system_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UpgradeInstanceInternalRequest

Request for upgrading a notebook instance from within the VM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. | [optional] 
**vm_id** | **str** | Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.upgrade_instance_internal_request import UpgradeInstanceInternalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeInstanceInternalRequest from a JSON string
upgrade_instance_internal_request_instance = UpgradeInstanceInternalRequest.from_json(json)
# print the JSON string representation of the object
print(UpgradeInstanceInternalRequest.to_json())

# convert the object into a dict
upgrade_instance_internal_request_dict = upgrade_instance_internal_request_instance.to_dict()
# create an instance of UpgradeInstanceInternalRequest from a dict
upgrade_instance_internal_request_from_dict = UpgradeInstanceInternalRequest.from_dict(upgrade_instance_internal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



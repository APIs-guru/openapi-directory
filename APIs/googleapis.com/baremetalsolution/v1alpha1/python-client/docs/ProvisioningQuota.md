# ProvisioningQuota

A provisioning quota for a given project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_quota** | [**InstanceQuota**](InstanceQuota.md) |  | [optional] 

## Example

```python
from openapi_client.models.provisioning_quota import ProvisioningQuota

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningQuota from a JSON string
provisioning_quota_instance = ProvisioningQuota.from_json(json)
# print the JSON string representation of the object
print(ProvisioningQuota.to_json())

# convert the object into a dict
provisioning_quota_dict = provisioning_quota_instance.to_dict()
# create an instance of ProvisioningQuota from a dict
provisioning_quota_from_dict = ProvisioningQuota.from_dict(provisioning_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



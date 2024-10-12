# InstanceQuota

A resource budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_machine_count** | **int** | Number of machines than can be created for the given location and instance_type. | [optional] 
**gcp_service** | **str** | The gcp service of the provisioning quota. | [optional] 
**instance_type** | **str** | Instance type. Deprecated: use gcp_service. | [optional] 
**location** | **str** | Location where the quota applies. | [optional] 
**name** | **str** | Output only. The name of the instance quota. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_quota import InstanceQuota

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceQuota from a JSON string
instance_quota_instance = InstanceQuota.from_json(json)
# print the JSON string representation of the object
print(InstanceQuota.to_json())

# convert the object into a dict
instance_quota_dict = instance_quota_instance.to_dict()
# create an instance of InstanceQuota from a dict
instance_quota_from_dict = InstanceQuota.from_dict(instance_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Instance

A Filestore instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_gb** | **str** | The storage capacity of the instance in gigabytes (GB &#x3D; 1024^3 bytes). This capacity can be increased up to &#x60;max_capacity_gb&#x60; GB in multipliers of &#x60;capacity_step_size_gb&#x60; GB. | [optional] 
**capacity_step_size_gb** | **str** | Output only. The increase/decrease capacity step size. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the instance was created. | [optional] [readonly] 
**description** | **str** | The description of the instance (2048 characters or less). | [optional] 
**directory_services** | [**DirectoryServicesConfig**](DirectoryServicesConfig.md) |  | [optional] 
**etag** | **str** | Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other. | [optional] 
**file_shares** | [**List[FileShareConfig]**](FileShareConfig.md) | File system shares on the instance. For this version, only a single file share is supported. | [optional] 
**kms_key_name** | **str** | KMS key name used for data encryption. | [optional] 
**labels** | **Dict[str, str]** | Resource labels to represent user provided metadata. | [optional] 
**max_capacity_gb** | **str** | Output only. The max capacity of the instance. | [optional] [readonly] 
**max_share_count** | **str** | The max number of shares allowed. | [optional] 
**multi_share_enabled** | **bool** | Indicates whether this instance uses a multi-share configuration with which it can have more than one file-share or none at all. File-shares are added, updated and removed through the separate file-share APIs. | [optional] 
**name** | **str** | Output only. The resource name of the instance, in the format &#x60;projects/{project_id}/locations/{location_id}/instances/{instance_id}&#x60;. | [optional] [readonly] 
**networks** | [**List[NetworkConfig]**](NetworkConfig.md) | VPC networks to which the instance is connected. For this version, only a single network is supported. | [optional] 
**protocol** | **str** | Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: &#x60;NFS_V3&#x60;. | [optional] 
**satisfies_pzi** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**state** | **str** | Output only. The instance state. | [optional] [readonly] 
**status_message** | **str** | Output only. Additional information about the instance state, if available. | [optional] [readonly] 
**suspension_reasons** | **List[str]** | Output only. Field indicates all the reasons the instance is in \&quot;SUSPENDED\&quot; state. | [optional] [readonly] 
**tier** | **str** | The service tier of the instance. | [optional] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



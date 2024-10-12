# Instance

A Filestore instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the instance was created. | [optional] [readonly] 
**description** | **str** | The description of the instance (2048 characters or less). | [optional] 
**etag** | **str** | Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other. | [optional] 
**file_shares** | [**List[FileShareConfig]**](FileShareConfig.md) | File system shares on the instance. For this version, only a single file share is supported. | [optional] 
**kms_key_name** | **str** | KMS key name used for data encryption. | [optional] 
**labels** | **Dict[str, str]** | Resource labels to represent user provided metadata. | [optional] 
**name** | **str** | Output only. The resource name of the instance, in the format &#x60;projects/{project}/locations/{location}/instances/{instance}&#x60;. | [optional] [readonly] 
**networks** | [**List[NetworkConfig]**](NetworkConfig.md) | VPC networks to which the instance is connected. For this version, only a single network is supported. | [optional] 
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



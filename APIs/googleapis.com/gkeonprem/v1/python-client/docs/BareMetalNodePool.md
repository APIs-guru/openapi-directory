# BareMetalNodePool

Resource that represents a bare metal node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations on the bare metal node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**create_time** | **str** | Output only. The time at which this bare metal node pool was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. The time at which this bare metal node pool was deleted. If the resource is not deleted, this must be empty | [optional] [readonly] 
**display_name** | **str** | The display name for the bare metal node pool. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. | [optional] 
**name** | **str** | Immutable. The bare metal node pool resource name. | [optional] 
**node_pool_config** | [**BareMetalNodePoolConfig**](BareMetalNodePoolConfig.md) |  | [optional] 
**reconciling** | **bool** | Output only. If set, there are currently changes in flight to the bare metal node pool. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the bare metal node pool. | [optional] [readonly] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**uid** | **str** | Output only. The unique identifier of the bare metal node pool. | [optional] [readonly] 
**update_time** | **str** | Output only. The time at which this bare metal node pool was last updated. | [optional] [readonly] 
**upgrade_policy** | [**BareMetalNodePoolUpgradePolicy**](BareMetalNodePoolUpgradePolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_node_pool import BareMetalNodePool

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalNodePool from a JSON string
bare_metal_node_pool_instance = BareMetalNodePool.from_json(json)
# print the JSON string representation of the object
print(BareMetalNodePool.to_json())

# convert the object into a dict
bare_metal_node_pool_dict = bare_metal_node_pool_instance.to_dict()
# create an instance of BareMetalNodePool from a dict
bare_metal_node_pool_from_dict = BareMetalNodePool.from_dict(bare_metal_node_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



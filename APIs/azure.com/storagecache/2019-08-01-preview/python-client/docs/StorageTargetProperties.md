# StorageTargetProperties

Properties of the storage target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clfs** | [**ClfsTarget**](ClfsTarget.md) |  | [optional] 
**junctions** | [**List[NamespaceJunction]**](NamespaceJunction.md) | List of cache namespace to target namespace associations. | [optional] 
**nfs3** | [**Nfs3Target**](Nfs3Target.md) |  | [optional] 
**provisioning_state** | **str** | ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property | [optional] 
**target_type** | **str** | Type for storage target. | [optional] 
**unknown** | [**UnknownTarget**](UnknownTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_target_properties import StorageTargetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageTargetProperties from a JSON string
storage_target_properties_instance = StorageTargetProperties.from_json(json)
# print the JSON string representation of the object
print(StorageTargetProperties.to_json())

# convert the object into a dict
storage_target_properties_dict = storage_target_properties_instance.to_dict()
# create an instance of StorageTargetProperties from a dict
storage_target_properties_from_dict = StorageTargetProperties.from_dict(storage_target_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



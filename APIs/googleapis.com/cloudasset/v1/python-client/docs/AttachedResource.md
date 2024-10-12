# AttachedResource

Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | The type of this attached resource. Example: &#x60;osconfig.googleapis.com/Inventory&#x60; You can find the supported attached asset types of each resource in this table: &#x60;https://cloud.google.com/asset-inventory/docs/supported-asset-types&#x60; | [optional] 
**versioned_resources** | [**List[VersionedResource]**](VersionedResource.md) | Versioned resource representations of this attached resource. This is repeated because there could be multiple versions of the attached resource representations during version migration. | [optional] 

## Example

```python
from openapi_client.models.attached_resource import AttachedResource

# TODO update the JSON string below
json = "{}"
# create an instance of AttachedResource from a JSON string
attached_resource_instance = AttachedResource.from_json(json)
# print the JSON string representation of the object
print(AttachedResource.to_json())

# convert the object into a dict
attached_resource_dict = attached_resource_instance.to_dict()
# create an instance of AttachedResource from a dict
attached_resource_from_dict = AttachedResource.from_dict(attached_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



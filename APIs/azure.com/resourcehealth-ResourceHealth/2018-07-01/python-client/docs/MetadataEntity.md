# MetadataEntity

The metadata entity contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MetadataEntityProperties**](MetadataEntityProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metadata_entity import MetadataEntity

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataEntity from a JSON string
metadata_entity_instance = MetadataEntity.from_json(json)
# print the JSON string representation of the object
print(MetadataEntity.to_json())

# convert the object into a dict
metadata_entity_dict = metadata_entity_instance.to_dict()
# create an instance of MetadataEntity from a dict
metadata_entity_from_dict = MetadataEntity.from_dict(metadata_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



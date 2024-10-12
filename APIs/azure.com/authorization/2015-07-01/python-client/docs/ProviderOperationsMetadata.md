# ProviderOperationsMetadata

Provider Operations metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The provider display name. | [optional] 
**id** | **str** | The provider id. | [optional] 
**name** | **str** | The provider name. | [optional] 
**operations** | [**List[ProviderOperation]**](ProviderOperation.md) | The provider operations. | [optional] 
**resource_types** | [**List[ResourceType]**](ResourceType.md) | The provider resource types | [optional] 
**type** | **str** | The provider type. | [optional] 

## Example

```python
from openapi_client.models.provider_operations_metadata import ProviderOperationsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderOperationsMetadata from a JSON string
provider_operations_metadata_instance = ProviderOperationsMetadata.from_json(json)
# print the JSON string representation of the object
print(ProviderOperationsMetadata.to_json())

# convert the object into a dict
provider_operations_metadata_dict = provider_operations_metadata_instance.to_dict()
# create an instance of ProviderOperationsMetadata from a dict
provider_operations_metadata_from_dict = ProviderOperationsMetadata.from_dict(provider_operations_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



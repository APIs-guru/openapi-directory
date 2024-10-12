# ResourceHealthMetadataCollection

Collection of resource health metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ResourceHealthMetadata]**](ResourceHealthMetadata.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.resource_health_metadata_collection import ResourceHealthMetadataCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealthMetadataCollection from a JSON string
resource_health_metadata_collection_instance = ResourceHealthMetadataCollection.from_json(json)
# print the JSON string representation of the object
print(ResourceHealthMetadataCollection.to_json())

# convert the object into a dict
resource_health_metadata_collection_dict = resource_health_metadata_collection_instance.to_dict()
# create an instance of ResourceHealthMetadataCollection from a dict
resource_health_metadata_collection_from_dict = ResourceHealthMetadataCollection.from_dict(resource_health_metadata_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



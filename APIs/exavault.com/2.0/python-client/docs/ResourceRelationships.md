# ResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_file** | [**ResourceRelationshipsDirectFile**](ResourceRelationshipsDirectFile.md) |  | [optional] 
**notifications** | [**List[ResourceRelationshipsNotificationsInner]**](ResourceRelationshipsNotificationsInner.md) |  | [optional] 
**parent_resource** | [**ResourceRelationshipsParentResource**](ResourceRelationshipsParentResource.md) |  | [optional] 
**share** | [**ResourceRelationshipsShare**](ResourceRelationshipsShare.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_relationships import ResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRelationships from a JSON string
resource_relationships_instance = ResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(ResourceRelationships.to_json())

# convert the object into a dict
resource_relationships_dict = resource_relationships_instance.to_dict()
# create an instance of ResourceRelationships from a dict
resource_relationships_from_dict = ResourceRelationships.from_dict(resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



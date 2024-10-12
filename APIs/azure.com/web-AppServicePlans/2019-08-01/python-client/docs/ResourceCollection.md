# ResourceCollection

Collection of resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | **List[str]** | Collection of resources. | 

## Example

```python
from openapi_client.models.resource_collection import ResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCollection from a JSON string
resource_collection_instance = ResourceCollection.from_json(json)
# print the JSON string representation of the object
print(ResourceCollection.to_json())

# convert the object into a dict
resource_collection_dict = resource_collection_instance.to_dict()
# create an instance of ResourceCollection from a dict
resource_collection_from_dict = ResourceCollection.from_dict(resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



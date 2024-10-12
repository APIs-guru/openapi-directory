# ComponentsCollection

Model for collection of components.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to the next set of results. | [optional] [readonly] 
**value** | [**List[Component]**](Component.md) | Collection of components. | [optional] [readonly] 

## Example

```python
from openapi_client.models.components_collection import ComponentsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentsCollection from a JSON string
components_collection_instance = ComponentsCollection.from_json(json)
# print the JSON string representation of the object
print(ComponentsCollection.to_json())

# convert the object into a dict
components_collection_dict = components_collection_instance.to_dict()
# create an instance of ComponentsCollection from a dict
components_collection_from_dict = ComponentsCollection.from_dict(components_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



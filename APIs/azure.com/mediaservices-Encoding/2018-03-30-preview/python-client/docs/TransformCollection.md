# TransformCollection

A collection of Transform items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[Transform]**](Transform.md) | A collection of Transform items. | [optional] 

## Example

```python
from openapi_client.models.transform_collection import TransformCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TransformCollection from a JSON string
transform_collection_instance = TransformCollection.from_json(json)
# print the JSON string representation of the object
print(TransformCollection.to_json())

# convert the object into a dict
transform_collection_dict = transform_collection_instance.to_dict()
# create an instance of TransformCollection from a dict
transform_collection_from_dict = TransformCollection.from_dict(transform_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



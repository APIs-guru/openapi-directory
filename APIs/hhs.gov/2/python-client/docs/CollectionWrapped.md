# CollectionWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Collection]**](Collection.md) |  | [optional] 

## Example

```python
from openapi_client.models.collection_wrapped import CollectionWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionWrapped from a JSON string
collection_wrapped_instance = CollectionWrapped.from_json(json)
# print the JSON string representation of the object
print(CollectionWrapped.to_json())

# convert the object into a dict
collection_wrapped_dict = collection_wrapped_instance.to_dict()
# create an instance of CollectionWrapped from a dict
collection_wrapped_from_dict = CollectionWrapped.from_dict(collection_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConsortiumCollection

Collection of the consortium payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Consortium]**](Consortium.md) | Gets or sets the collection of consortiums. | [optional] 

## Example

```python
from openapi_client.models.consortium_collection import ConsortiumCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ConsortiumCollection from a JSON string
consortium_collection_instance = ConsortiumCollection.from_json(json)
# print the JSON string representation of the object
print(ConsortiumCollection.to_json())

# convert the object into a dict
consortium_collection_dict = consortium_collection_instance.to_dict()
# create an instance of ConsortiumCollection from a dict
consortium_collection_from_dict = ConsortiumCollection.from_dict(consortium_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CollectionCreation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privacy** | [**CollectionPrivacy**](CollectionPrivacy.md) |  | 
**title** | **str** | The title of the collection | 

## Example

```python
from openapi_client.models.collection_creation import CollectionCreation

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionCreation from a JSON string
collection_creation_instance = CollectionCreation.from_json(json)
# print the JSON string representation of the object
print(CollectionCreation.to_json())

# convert the object into a dict
collection_creation_dict = collection_creation_instance.to_dict()
# create an instance of CollectionCreation from a dict
collection_creation_from_dict = CollectionCreation.from_dict(collection_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



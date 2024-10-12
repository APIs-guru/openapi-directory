# SourcesCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Source]**](Source.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.sources_collection import SourcesCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SourcesCollection from a JSON string
sources_collection_instance = SourcesCollection.from_json(json)
# print the JSON string representation of the object
print(SourcesCollection.to_json())

# convert the object into a dict
sources_collection_dict = sources_collection_instance.to_dict()
# create an instance of SourcesCollection from a dict
sources_collection_from_dict = SourcesCollection.from_dict(sources_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



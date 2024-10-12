# CollectionMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.collection_metadata import CollectionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionMetadata from a JSON string
collection_metadata_instance = CollectionMetadata.from_json(json)
# print the JSON string representation of the object
print(CollectionMetadata.to_json())

# convert the object into a dict
collection_metadata_dict = collection_metadata_instance.to_dict()
# create an instance of CollectionMetadata from a dict
collection_metadata_from_dict = CollectionMetadata.from_dict(collection_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CollectionTag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | 
**name** | **str** | The name of the tag. | [optional] [readonly] 

## Example

```python
from openapi_client.models.collection_tag import CollectionTag

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionTag from a JSON string
collection_tag_instance = CollectionTag.from_json(json)
# print the JSON string representation of the object
print(CollectionTag.to_json())

# convert the object into a dict
collection_tag_dict = collection_tag_instance.to_dict()
# create an instance of CollectionTag from a dict
collection_tag_from_dict = CollectionTag.from_dict(collection_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



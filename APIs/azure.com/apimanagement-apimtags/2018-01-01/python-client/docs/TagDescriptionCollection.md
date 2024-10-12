# TagDescriptionCollection

Paged TagDescription list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[TagDescriptionContract]**](TagDescriptionContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.tag_description_collection import TagDescriptionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionCollection from a JSON string
tag_description_collection_instance = TagDescriptionCollection.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionCollection.to_json())

# convert the object into a dict
tag_description_collection_dict = tag_description_collection_instance.to_dict()
# create an instance of TagDescriptionCollection from a dict
tag_description_collection_from_dict = TagDescriptionCollection.from_dict(tag_description_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



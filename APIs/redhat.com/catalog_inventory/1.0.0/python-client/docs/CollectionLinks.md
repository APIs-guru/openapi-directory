# CollectionLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **str** |  | [optional] 
**last** | **str** |  | [optional] 
**next** | **str** |  | [optional] 
**prev** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.collection_links import CollectionLinks

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionLinks from a JSON string
collection_links_instance = CollectionLinks.from_json(json)
# print the JSON string representation of the object
print(CollectionLinks.to_json())

# convert the object into a dict
collection_links_dict = collection_links_instance.to_dict()
# create an instance of CollectionLinks from a dict
collection_links_from_dict = CollectionLinks.from_dict(collection_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



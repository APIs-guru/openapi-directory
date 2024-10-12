# CollectionResponseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last** | **str** |  | [optional] 
**next** | **str** |  | [optional] 
**prev** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.collection_response_links import CollectionResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionResponseLinks from a JSON string
collection_response_links_instance = CollectionResponseLinks.from_json(json)
# print the JSON string representation of the object
print(CollectionResponseLinks.to_json())

# convert the object into a dict
collection_response_links_dict = collection_response_links_instance.to_dict()
# create an instance of CollectionResponseLinks from a dict
collection_response_links_from_dict = CollectionResponseLinks.from_dict(collection_response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



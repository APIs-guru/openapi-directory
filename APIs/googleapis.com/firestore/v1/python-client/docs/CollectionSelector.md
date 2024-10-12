# CollectionSelector

A selection of a collection, such as `messages as m1`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_descendants** | **bool** | When false, selects only collections that are immediate children of the &#x60;parent&#x60; specified in the containing &#x60;RunQueryRequest&#x60;. When true, selects all descendant collections. | [optional] 
**collection_id** | **str** | The collection ID. When set, selects only collections with this ID. | [optional] 

## Example

```python
from openapi_client.models.collection_selector import CollectionSelector

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionSelector from a JSON string
collection_selector_instance = CollectionSelector.from_json(json)
# print the JSON string representation of the object
print(CollectionSelector.to_json())

# convert the object into a dict
collection_selector_dict = collection_selector_instance.to_dict()
# create an instance of CollectionSelector from a dict
collection_selector_from_dict = CollectionSelector.from_dict(collection_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



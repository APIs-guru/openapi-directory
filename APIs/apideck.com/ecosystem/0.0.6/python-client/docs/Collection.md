# Collection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_background_color** | **str** |  | [optional] 
**card_background_image** | [**File**](File.md) |  | [optional] 
**card_columns** | **int** |  | [optional] 
**card_style** | **str** |  | [optional] 
**count** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**hidden_from_homepage** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**logo** | [**File**](File.md) |  | [optional] 
**name** | **str** |  | 
**sequence** | **int** |  | [optional] 
**show_max_items_homepage** | **int** |  | [optional] 
**slug** | **str** |  | 
**translations** | [**List[Translation]**](Translation.md) |  | [optional] 
**visible** | **bool** |  | 

## Example

```python
from openapi_client.models.collection import Collection

# TODO update the JSON string below
json = "{}"
# create an instance of Collection from a JSON string
collection_instance = Collection.from_json(json)
# print the JSON string representation of the object
print(Collection.to_json())

# convert the object into a dict
collection_dict = collection_instance.to_dict()
# create an instance of Collection from a dict
collection_from_dict = Collection.from_dict(collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



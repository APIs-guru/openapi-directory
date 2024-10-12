# TestItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featured_part** | **bool** |  | [optional] 
**gaia** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**snippet** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.test_item import TestItem

# TODO update the JSON string below
json = "{}"
# create an instance of TestItem from a JSON string
test_item_instance = TestItem.from_json(json)
# print the JSON string representation of the object
print(TestItem.to_json())

# convert the object into a dict
test_item_dict = test_item_instance.to_dict()
# create an instance of TestItem from a dict
test_item_from_dict = TestItem.from_dict(test_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



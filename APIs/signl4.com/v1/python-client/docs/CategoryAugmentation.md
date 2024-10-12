# CategoryAugmentation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | [**CategoryAugmentationType**](CategoryAugmentationType.md) |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.category_augmentation import CategoryAugmentation

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryAugmentation from a JSON string
category_augmentation_instance = CategoryAugmentation.from_json(json)
# print the JSON string representation of the object
print(CategoryAugmentation.to_json())

# convert the object into a dict
category_augmentation_dict = category_augmentation_instance.to_dict()
# create an instance of CategoryAugmentation from a dict
category_augmentation_from_dict = CategoryAugmentation.from_dict(category_augmentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



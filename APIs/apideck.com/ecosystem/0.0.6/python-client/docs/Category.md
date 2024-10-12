# Category


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**listing_description_text_template** | **str** |  | [optional] 
**listing_features_text_template** | **str** |  | [optional] 
**listing_pricing_text_template** | **str** |  | [optional] 
**logo** | [**Logo**](Logo.md) |  | [optional] 
**name** | **str** |  | 
**slug** | **str** |  | 
**translations** | [**List[Translation]**](Translation.md) |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.category import Category

# TODO update the JSON string below
json = "{}"
# create an instance of Category from a JSON string
category_instance = Category.from_json(json)
# print the JSON string representation of the object
print(Category.to_json())

# convert the object into a dict
category_dict = category_instance.to_dict()
# create an instance of Category from a dict
category_from_dict = Category.from_dict(category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Category


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**avail** | **bool** |  | [optional] 
**created_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**images** | [**List[Image]**](Image.md) |  | [optional] 
**keywords** | **str** |  | [optional] 
**meta_description** | **str** |  | [optional] 
**meta_title** | **str** |  | [optional] 
**modified_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**name** | **str** |  | [optional] 
**parent_id** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**seo_url** | **str** |  | [optional] 
**short_description** | **str** |  | [optional] 
**sort_order** | **int** |  | [optional] 
**stores_ids** | **List[str]** |  | [optional] 

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



# Categories

The categories in a Lighthouse run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | [**LighthouseCategoryV5**](LighthouseCategoryV5.md) |  | [optional] 
**best_practices** | [**LighthouseCategoryV5**](LighthouseCategoryV5.md) |  | [optional] 
**performance** | [**LighthouseCategoryV5**](LighthouseCategoryV5.md) |  | [optional] 
**pwa** | [**LighthouseCategoryV5**](LighthouseCategoryV5.md) |  | [optional] 
**seo** | [**LighthouseCategoryV5**](LighthouseCategoryV5.md) |  | [optional] 

## Example

```python
from openapi_client.models.categories import Categories

# TODO update the JSON string below
json = "{}"
# create an instance of Categories from a JSON string
categories_instance = Categories.from_json(json)
# print the JSON string representation of the object
print(Categories.to_json())

# convert the object into a dict
categories_dict = categories_instance.to_dict()
# create an instance of Categories from a dict
categories_from_dict = Categories.from_dict(categories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



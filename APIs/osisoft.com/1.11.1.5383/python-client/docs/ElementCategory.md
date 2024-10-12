# ElementCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**ElementCategoryLinks**](ElementCategoryLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.element_category import ElementCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ElementCategory from a JSON string
element_category_instance = ElementCategory.from_json(json)
# print the JSON string representation of the object
print(ElementCategory.to_json())

# convert the object into a dict
element_category_dict = element_category_instance.to_dict()
# create an instance of ElementCategory from a dict
element_category_from_dict = ElementCategory.from_dict(element_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



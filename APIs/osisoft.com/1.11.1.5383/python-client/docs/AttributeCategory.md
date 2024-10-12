# AttributeCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**AttributeCategoryLinks**](AttributeCategoryLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_category import AttributeCategory

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeCategory from a JSON string
attribute_category_instance = AttributeCategory.from_json(json)
# print the JSON string representation of the object
print(AttributeCategory.to_json())

# convert the object into a dict
attribute_category_dict = attribute_category_instance.to_dict()
# create an instance of AttributeCategory from a dict
attribute_category_from_dict = AttributeCategory.from_dict(attribute_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



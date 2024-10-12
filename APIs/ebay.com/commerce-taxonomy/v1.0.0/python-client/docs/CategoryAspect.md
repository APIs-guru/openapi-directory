# CategoryAspect


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspects** | [**List[Aspect]**](Aspect.md) | A list of aspect metadata that is used to describe the items in a particular leaf category. | [optional] 
**category** | [**Category**](Category.md) |  | [optional] 

## Example

```python
from openapi_client.models.category_aspect import CategoryAspect

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryAspect from a JSON string
category_aspect_instance = CategoryAspect.from_json(json)
# print the JSON string representation of the object
print(CategoryAspect.to_json())

# convert the object into a dict
category_aspect_dict = category_aspect_instance.to_dict()
# create an instance of CategoryAspect from a dict
category_aspect_from_dict = CategoryAspect.from_dict(category_aspect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



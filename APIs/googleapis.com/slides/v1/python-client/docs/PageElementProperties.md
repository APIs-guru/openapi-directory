# PageElementProperties

Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_object_id** | **str** | The object ID of the page where the element is located. | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**transform** | [**AffineTransform**](AffineTransform.md) |  | [optional] 

## Example

```python
from openapi_client.models.page_element_properties import PageElementProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PageElementProperties from a JSON string
page_element_properties_instance = PageElementProperties.from_json(json)
# print the JSON string representation of the object
print(PageElementProperties.to_json())

# convert the object into a dict
page_element_properties_dict = page_element_properties_instance.to_dict()
# create an instance of PageElementProperties from a dict
page_element_properties_from_dict = PageElementProperties.from_dict(page_element_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



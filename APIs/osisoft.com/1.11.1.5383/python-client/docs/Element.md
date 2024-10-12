# Element


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_names** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**errors** | [**List[PropertyError]**](PropertyError.md) |  | [optional] 
**extended_properties** | [**Dict[str, Value]**](Value.md) |  | [optional] 
**has_children** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**ElementLinks**](ElementLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**paths** | **List[str]** |  | [optional] 
**template_name** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.element import Element

# TODO update the JSON string below
json = "{}"
# create an instance of Element from a JSON string
element_instance = Element.from_json(json)
# print the JSON string representation of the object
print(Element.to_json())

# convert the object into a dict
element_dict = element_instance.to_dict()
# create an instance of Element from a dict
element_from_dict = Element.from_dict(element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



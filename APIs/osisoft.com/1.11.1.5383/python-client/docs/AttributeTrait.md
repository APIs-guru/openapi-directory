# AttributeTrait


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviation** | **str** |  | [optional] 
**allow_child_attributes** | **bool** |  | [optional] 
**allow_duplicates** | **bool** |  | [optional] 
**is_allowed_on_root_attribute** | **bool** |  | [optional] 
**is_type_inherited** | **bool** |  | [optional] 
**is_uom_inherited** | **bool** |  | [optional] 
**links** | [**AttributeTraitLinks**](AttributeTraitLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**require_numeric** | **bool** |  | [optional] 
**require_string** | **bool** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.attribute_trait import AttributeTrait

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeTrait from a JSON string
attribute_trait_instance = AttributeTrait.from_json(json)
# print the JSON string representation of the object
print(AttributeTrait.to_json())

# convert the object into a dict
attribute_trait_dict = attribute_trait_instance.to_dict()
# create an instance of AttributeTrait from a dict
attribute_trait_from_dict = AttributeTrait.from_dict(attribute_trait_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



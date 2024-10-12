# CustomAttribute

A message that represents custom attributes. Exactly one of `value` or `groupValues` must be provided. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per merchant, with total size of 102.4kB.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_values** | [**List[CustomAttribute]**](CustomAttribute.md) | Subattributes within this attribute group. Exactly one of value or groupValues must be provided. | [optional] 
**name** | **str** | The name of the attribute. Underscores will be replaced by spaces upon insertion. | [optional] 
**value** | **str** | The value of the attribute. | [optional] 

## Example

```python
from openapi_client.models.custom_attribute import CustomAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAttribute from a JSON string
custom_attribute_instance = CustomAttribute.from_json(json)
# print the JSON string representation of the object
print(CustomAttribute.to_json())

# convert the object into a dict
custom_attribute_dict = custom_attribute_instance.to_dict()
# create an instance of CustomAttribute from a dict
custom_attribute_from_dict = CustomAttribute.from_dict(custom_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AspectValue

This type contains a valid value for an aspect, along with any constraints on the occurrence of that value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | The localized value of this aspect. Note: This value is always localized for the specified marketplace. | [optional] 
**value_constraints** | [**List[ValueConstraint]**](ValueConstraint.md) | Not returned if the value of the localizedValue field can always be selected for this aspect of the specified category. Contains a list of the dependencies that identify when the value of the localizedValue field is available for the current aspect. Each dependency specifies the values of another aspect of the same category (a control aspect), for which the current value of the current aspect can also be selected by the seller. Example: A shirt is available in three sizes and three colors, but only the Small and Medium sizes come in Green. Thus for the Color aspect, the value Green is constrained by its dependency on Size (the control aspect). Only when the Size aspect value is Small or Medium, can the Color aspect value of Green be selected by the seller. | [optional] 

## Example

```python
from openapi_client.models.aspect_value import AspectValue

# TODO update the JSON string below
json = "{}"
# create an instance of AspectValue from a JSON string
aspect_value_instance = AspectValue.from_json(json)
# print the JSON string representation of the object
print(AspectValue.to_json())

# convert the object into a dict
aspect_value_dict = aspect_value_instance.to_dict()
# create an instance of AspectValue from a dict
aspect_value_from_dict = AspectValue.from_dict(aspect_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



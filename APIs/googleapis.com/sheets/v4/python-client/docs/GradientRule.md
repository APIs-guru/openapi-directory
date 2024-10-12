# GradientRule

A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxpoint** | [**InterpolationPoint**](InterpolationPoint.md) |  | [optional] 
**midpoint** | [**InterpolationPoint**](InterpolationPoint.md) |  | [optional] 
**minpoint** | [**InterpolationPoint**](InterpolationPoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.gradient_rule import GradientRule

# TODO update the JSON string below
json = "{}"
# create an instance of GradientRule from a JSON string
gradient_rule_instance = GradientRule.from_json(json)
# print the JSON string representation of the object
print(GradientRule.to_json())

# convert the object into a dict
gradient_rule_dict = gradient_rule_instance.to_dict()
# create an instance of GradientRule from a dict
gradient_rule_from_dict = GradientRule.from_dict(gradient_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CategoricalVariable

Categorical variable represents signal that needs to be analyzed based on the count or duration of occurrence of limited set of defined values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[TimeSeriesAggregateCategory]**](TimeSeriesAggregateCategory.md) |  | [optional] 
**default_category** | [**TimeSeriesDefaultCategory**](TimeSeriesDefaultCategory.md) |  | [optional] 
**interpolation** | [**Interpolation**](Interpolation.md) |  | [optional] 
**value** | [**Tsx**](Tsx.md) |  | [optional] 

## Example

```python
from openapi_client.models.categorical_variable import CategoricalVariable

# TODO update the JSON string below
json = "{}"
# create an instance of CategoricalVariable from a JSON string
categorical_variable_instance = CategoricalVariable.from_json(json)
# print the JSON string representation of the object
print(CategoricalVariable.to_json())

# convert the object into a dict
categorical_variable_dict = categorical_variable_instance.to_dict()
# create an instance of CategoricalVariable from a dict
categorical_variable_from_dict = CategoricalVariable.from_dict(categorical_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



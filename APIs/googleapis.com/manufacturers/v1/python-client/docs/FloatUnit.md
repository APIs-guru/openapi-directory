# FloatUnit

Combination of float amount and unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | amount. | [optional] 
**unit** | **str** | unit. | [optional] 

## Example

```python
from openapi_client.models.float_unit import FloatUnit

# TODO update the JSON string below
json = "{}"
# create an instance of FloatUnit from a JSON string
float_unit_instance = FloatUnit.from_json(json)
# print the JSON string representation of the object
print(FloatUnit.to_json())

# convert the object into a dict
float_unit_dict = float_unit_instance.to_dict()
# create an instance of FloatUnit from a dict
float_unit_from_dict = FloatUnit.from_dict(float_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



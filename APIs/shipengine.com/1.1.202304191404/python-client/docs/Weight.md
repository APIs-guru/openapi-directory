# Weight

The weight of a package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | [**WeightUnit**](WeightUnit.md) |  | 
**value** | **float** | The weight, in the specified unit | 

## Example

```python
from openapi_client.models.weight import Weight

# TODO update the JSON string below
json = "{}"
# create an instance of Weight from a JSON string
weight_instance = Weight.from_json(json)
# print the JSON string representation of the object
print(Weight.to_json())

# convert the object into a dict
weight_dict = weight_instance.to_dict()
# create an instance of Weight from a dict
weight_from_dict = Weight.from_dict(weight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



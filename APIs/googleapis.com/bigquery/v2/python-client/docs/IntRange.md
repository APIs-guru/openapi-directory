# IntRange

Range of an int hyperparameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **str** | Max value of the int parameter. | [optional] 
**min** | **str** | Min value of the int parameter. | [optional] 

## Example

```python
from openapi_client.models.int_range import IntRange

# TODO update the JSON string below
json = "{}"
# create an instance of IntRange from a JSON string
int_range_instance = IntRange.from_json(json)
# print the JSON string representation of the object
print(IntRange.to_json())

# convert the object into a dict
int_range_dict = int_range_instance.to_dict()
# create an instance of IntRange from a dict
int_range_from_dict = IntRange.from_dict(int_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



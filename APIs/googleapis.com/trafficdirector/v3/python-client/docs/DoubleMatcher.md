# DoubleMatcher

Specifies the way to match a double value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact** | **float** | If specified, the input double value must be equal to the value specified here. | [optional] 
**range** | [**DoubleRange**](DoubleRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.double_matcher import DoubleMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleMatcher from a JSON string
double_matcher_instance = DoubleMatcher.from_json(json)
# print the JSON string representation of the object
print(DoubleMatcher.to_json())

# convert the object into a dict
double_matcher_dict = double_matcher_instance.to_dict()
# create an instance of DoubleMatcher from a dict
double_matcher_from_dict = DoubleMatcher.from_dict(double_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



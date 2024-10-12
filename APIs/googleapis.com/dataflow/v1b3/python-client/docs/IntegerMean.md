# IntegerMean

A representation of an integer mean metric contribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**SplitInt64**](SplitInt64.md) |  | [optional] 
**sum** | [**SplitInt64**](SplitInt64.md) |  | [optional] 

## Example

```python
from openapi_client.models.integer_mean import IntegerMean

# TODO update the JSON string below
json = "{}"
# create an instance of IntegerMean from a JSON string
integer_mean_instance = IntegerMean.from_json(json)
# print the JSON string representation of the object
print(IntegerMean.to_json())

# convert the object into a dict
integer_mean_dict = integer_mean_instance.to_dict()
# create an instance of IntegerMean from a dict
integer_mean_from_dict = IntegerMean.from_dict(integer_mean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



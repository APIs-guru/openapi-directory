# Duration

A pair consisting of length of time and the unit of time measured. It is the atomic unit from which all duration literals are composed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**magnitude** | **int** |  | [optional] 
**type** | **str** | Type of AST node | [optional] 
**unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.duration import Duration

# TODO update the JSON string below
json = "{}"
# create an instance of Duration from a JSON string
duration_instance = Duration.from_json(json)
# print the JSON string representation of the object
print(Duration.to_json())

# convert the object into a dict
duration_dict = duration_instance.to_dict()
# create an instance of Duration from a dict
duration_from_dict = Duration.from_dict(duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



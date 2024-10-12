# DurationLiteral

Represents the elapsed time between two instants as an int64 nanosecond count with syntax of golang's time.Duration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**values** | [**List[Duration]**](Duration.md) | Duration values | [optional] 

## Example

```python
from openapi_client.models.duration_literal import DurationLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of DurationLiteral from a JSON string
duration_literal_instance = DurationLiteral.from_json(json)
# print the JSON string representation of the object
print(DurationLiteral.to_json())

# convert the object into a dict
duration_literal_dict = duration_literal_instance.to_dict()
# create an instance of DurationLiteral from a dict
duration_literal_from_dict = DurationLiteral.from_dict(duration_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



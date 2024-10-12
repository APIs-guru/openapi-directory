# DateTimeLiteral

Represents an instant in time with nanosecond precision using the syntax of golang's RFC3339 Nanosecond variant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**value** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.date_time_literal import DateTimeLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeLiteral from a JSON string
date_time_literal_instance = DateTimeLiteral.from_json(json)
# print the JSON string representation of the object
print(DateTimeLiteral.to_json())

# convert the object into a dict
date_time_literal_dict = date_time_literal_instance.to_dict()
# create an instance of DateTimeLiteral from a dict
date_time_literal_from_dict = DateTimeLiteral.from_dict(date_time_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



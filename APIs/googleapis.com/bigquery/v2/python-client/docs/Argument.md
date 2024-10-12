# Argument

Input/output argument of a function or a stored procedure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument_kind** | **str** | Optional. Defaults to FIXED_TYPE. | [optional] 
**data_type** | [**StandardSqlDataType**](StandardSqlDataType.md) |  | [optional] 
**is_aggregate** | **bool** | Optional. Whether the argument is an aggregate function parameter. Must be Unset for routine types other than AGGREGATE_FUNCTION. For AGGREGATE_FUNCTION, if set to false, it is equivalent to adding \&quot;NOT AGGREGATE\&quot; clause in DDL; Otherwise, it is equivalent to omitting \&quot;NOT AGGREGATE\&quot; clause in DDL. | [optional] 
**mode** | **str** | Optional. Specifies whether the argument is input or output. Can be set for procedures only. | [optional] 
**name** | **str** | Optional. The name of this argument. Can be absent for function return argument. | [optional] 

## Example

```python
from openapi_client.models.argument import Argument

# TODO update the JSON string below
json = "{}"
# create an instance of Argument from a JSON string
argument_instance = Argument.from_json(json)
# print the JSON string representation of the object
print(Argument.to_json())

# convert the object into a dict
argument_dict = argument_instance.to_dict()
# create an instance of Argument from a dict
argument_from_dict = Argument.from_dict(argument_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



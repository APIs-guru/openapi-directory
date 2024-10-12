# ValueDelta

The value of the delta.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_type** | **str** | The operation type. | [optional] 
**value** | **str** | The value of the delta. | [optional] 

## Example

```python
from openapi_client.models.value_delta import ValueDelta

# TODO update the JSON string below
json = "{}"
# create an instance of ValueDelta from a JSON string
value_delta_instance = ValueDelta.from_json(json)
# print the JSON string representation of the object
print(ValueDelta.to_json())

# convert the object into a dict
value_delta_dict = value_delta_instance.to_dict()
# create an instance of ValueDelta from a dict
value_delta_from_dict = ValueDelta.from_dict(value_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AttributeDelta

The delta attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_valued** | **bool** | Indicates if the attribute delta is multivalued or not. | [optional] 
**name** | **str** | The name of the attribute delta. | [optional] 
**operation_type** | **str** | The attribute delta operation type. | [optional] 
**value_type** | **str** | The value type. | [optional] 
**values** | [**List[ValueDelta]**](ValueDelta.md) | The delta values. | [optional] 

## Example

```python
from openapi_client.models.attribute_delta import AttributeDelta

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeDelta from a JSON string
attribute_delta_instance = AttributeDelta.from_json(json)
# print the JSON string representation of the object
print(AttributeDelta.to_json())

# convert the object into a dict
attribute_delta_dict = attribute_delta_instance.to_dict()
# create an instance of AttributeDelta from a dict
attribute_delta_from_dict = AttributeDelta.from_dict(attribute_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



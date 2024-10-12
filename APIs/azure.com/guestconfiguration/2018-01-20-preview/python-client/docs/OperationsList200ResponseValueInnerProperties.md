# OperationsList200ResponseValueInnerProperties

Provider, Resource, Operation and description values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **str** | Service provider: Microsoft.GuestConfiguration | [optional] 

## Example

```python
from openapi_client.models.operations_list200_response_value_inner_properties import OperationsList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsList200ResponseValueInnerProperties from a JSON string
operations_list200_response_value_inner_properties_instance = OperationsList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(OperationsList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
operations_list200_response_value_inner_properties_dict = operations_list200_response_value_inner_properties_instance.to_dict()
# create an instance of OperationsList200ResponseValueInnerProperties from a dict
operations_list200_response_value_inner_properties_from_dict = OperationsList200ResponseValueInnerProperties.from_dict(operations_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



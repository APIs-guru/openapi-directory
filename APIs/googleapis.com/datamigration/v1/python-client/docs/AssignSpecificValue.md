# AssignSpecificValue

Set to a specific value (value is converted to fit the target data type)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Required. Specific value to be assigned | [optional] 

## Example

```python
from openapi_client.models.assign_specific_value import AssignSpecificValue

# TODO update the JSON string below
json = "{}"
# create an instance of AssignSpecificValue from a JSON string
assign_specific_value_instance = AssignSpecificValue.from_json(json)
# print the JSON string representation of the object
print(AssignSpecificValue.to_json())

# convert the object into a dict
assign_specific_value_dict = assign_specific_value_instance.to_dict()
# create an instance of AssignSpecificValue from a dict
assign_specific_value_from_dict = AssignSpecificValue.from_dict(assign_specific_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



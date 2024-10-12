# ValueValidation

Validation based on a list of allowed values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Required. List of allowed values for the parameter. | [optional] 

## Example

```python
from openapi_client.models.value_validation import ValueValidation

# TODO update the JSON string below
json = "{}"
# create an instance of ValueValidation from a JSON string
value_validation_instance = ValueValidation.from_json(json)
# print the JSON string representation of the object
print(ValueValidation.to_json())

# convert the object into a dict
value_validation_dict = value_validation_instance.to_dict()
# create an instance of ValueValidation from a dict
value_validation_from_dict = ValueValidation.from_dict(value_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



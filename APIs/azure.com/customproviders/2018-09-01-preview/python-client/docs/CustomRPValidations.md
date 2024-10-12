# CustomRPValidations

A validation to apply on custom resource provider requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**specification** | **str** | A link to the validation specification. The specification must be hosted on raw.githubusercontent.com. | 
**validation_type** | **str** | The type of validation to run against a matching request. | [optional] 

## Example

```python
from openapi_client.models.custom_rp_validations import CustomRPValidations

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRPValidations from a JSON string
custom_rp_validations_instance = CustomRPValidations.from_json(json)
# print the JSON string representation of the object
print(CustomRPValidations.to_json())

# convert the object into a dict
custom_rp_validations_dict = custom_rp_validations_instance.to_dict()
# create an instance of CustomRPValidations from a dict
custom_rp_validations_from_dict = CustomRPValidations.from_dict(custom_rp_validations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



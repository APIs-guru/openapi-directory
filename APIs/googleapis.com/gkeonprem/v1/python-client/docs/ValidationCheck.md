# ValidationCheck

ValidationCheck represents the result of preflight check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option** | **str** | Options used for the validation check | [optional] 
**scenario** | **str** | Output only. The scenario when the preflight checks were run. | [optional] [readonly] 
**status** | [**ValidationCheckStatus**](ValidationCheckStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.validation_check import ValidationCheck

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationCheck from a JSON string
validation_check_instance = ValidationCheck.from_json(json)
# print the JSON string representation of the object
print(ValidationCheck.to_json())

# convert the object into a dict
validation_check_dict = validation_check_instance.to_dict()
# create an instance of ValidationCheck from a dict
validation_check_from_dict = ValidationCheck.from_dict(validation_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



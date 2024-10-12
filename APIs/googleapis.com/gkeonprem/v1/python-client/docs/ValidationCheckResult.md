# ValidationCheckResult

ValidationCheckResult defines the details about the validation check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the validation. | [optional] 
**description** | **str** | The description of the validation check. | [optional] 
**details** | **str** | Detailed failure information, which might be unformatted. | [optional] 
**reason** | **str** | A human-readable message of the check failure. | [optional] 
**state** | **str** | The validation check state. | [optional] 

## Example

```python
from openapi_client.models.validation_check_result import ValidationCheckResult

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationCheckResult from a JSON string
validation_check_result_instance = ValidationCheckResult.from_json(json)
# print the JSON string representation of the object
print(ValidationCheckResult.to_json())

# convert the object into a dict
validation_check_result_dict = validation_check_result_instance.to_dict()
# create an instance of ValidationCheckResult from a dict
validation_check_result_from_dict = ValidationCheckResult.from_dict(validation_check_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



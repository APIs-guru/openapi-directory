# AutomationValidationStatus

The security automation model state property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_valid** | **bool** | Indicates whether the model is valid or not. | [optional] 
**message** | **str** | The validation message. | [optional] 

## Example

```python
from openapi_client.models.automation_validation_status import AutomationValidationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationValidationStatus from a JSON string
automation_validation_status_instance = AutomationValidationStatus.from_json(json)
# print the JSON string representation of the object
print(AutomationValidationStatus.to_json())

# convert the object into a dict
automation_validation_status_dict = automation_validation_status_instance.to_dict()
# create an instance of AutomationValidationStatus from a dict
automation_validation_status_from_dict = AutomationValidationStatus.from_dict(automation_validation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



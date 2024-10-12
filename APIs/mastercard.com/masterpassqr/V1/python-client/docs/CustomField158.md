# CustomField158

Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40 | [optional] 
**value** | **str** | Value to be displayed in the reconciliation report. Details- 1-40 | [optional] 

## Example

```python
from openapi_client.models.custom_field158 import CustomField158

# TODO update the JSON string below
json = "{}"
# create an instance of CustomField158 from a JSON string
custom_field158_instance = CustomField158.from_json(json)
# print the JSON string representation of the object
print(CustomField158.to_json())

# convert the object into a dict
custom_field158_dict = custom_field158_instance.to_dict()
# create an instance of CustomField158 from a dict
custom_field158_from_dict = CustomField158.from_dict(custom_field158_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



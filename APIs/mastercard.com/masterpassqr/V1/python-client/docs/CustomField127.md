# CustomField127

Contains custom field names and values to appear in the reconciliation report for this transfer. This could be a list of multiple values. These should match with the information during onboarding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name to be displayed in the reconciliation report for this transfer. This value will appear as a header in the column name of the report. The fields that can be used have to be defined during the onboarding process. Details- 1-40 | 
**value** | **str** | Value to be displayed in the reconciliation report for this transfer. Details- 1-40 | 

## Example

```python
from openapi_client.models.custom_field127 import CustomField127

# TODO update the JSON string below
json = "{}"
# create an instance of CustomField127 from a JSON string
custom_field127_instance = CustomField127.from_json(json)
# print the JSON string representation of the object
print(CustomField127.to_json())

# convert the object into a dict
custom_field127_dict = custom_field127_instance.to_dict()
# create an instance of CustomField127 from a dict
custom_field127_from_dict = CustomField127.from_dict(custom_field127_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



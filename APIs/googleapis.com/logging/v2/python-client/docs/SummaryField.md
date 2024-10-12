# SummaryField

A field from the LogEntry that is added to the summary line (https://cloud.google.com/logging/docs/view/logs-explorer-interface#add-summary-fields) for a query in the Logs Explorer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | Optional. The field from the LogEntry to include in the summary line, for example resource.type or jsonPayload.name. | [optional] 

## Example

```python
from openapi_client.models.summary_field import SummaryField

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryField from a JSON string
summary_field_instance = SummaryField.from_json(json)
# print the JSON string representation of the object
print(SummaryField.to_json())

# convert the object into a dict
summary_field_dict = summary_field_instance.to_dict()
# create an instance of SummaryField from a dict
summary_field_from_dict = SummaryField.from_dict(summary_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



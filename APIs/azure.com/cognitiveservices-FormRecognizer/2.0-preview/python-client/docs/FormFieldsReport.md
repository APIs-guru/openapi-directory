# FormFieldsReport

Report for a custom model training field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy** | **float** | Estimated extraction accuracy for this field. | 
**field_name** | **str** | Training field name. | 

## Example

```python
from openapi_client.models.form_fields_report import FormFieldsReport

# TODO update the JSON string below
json = "{}"
# create an instance of FormFieldsReport from a JSON string
form_fields_report_instance = FormFieldsReport.from_json(json)
# print the JSON string representation of the object
print(FormFieldsReport.to_json())

# convert the object into a dict
form_fields_report_dict = form_fields_report_instance.to_dict()
# create an instance of FormFieldsReport from a dict
form_fields_report_from_dict = FormFieldsReport.from_dict(form_fields_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



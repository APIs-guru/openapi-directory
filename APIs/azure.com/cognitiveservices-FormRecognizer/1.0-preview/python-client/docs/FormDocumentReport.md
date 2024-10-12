# FormDocumentReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_name** | **str** | Reference to the data that the report is for. | [optional] 
**errors** | **List[str]** | List of errors per page. | [optional] 
**pages** | **int** | Total number of pages trained on. | [optional] 
**status** | **str** | Status of the training operation. | [optional] 

## Example

```python
from openapi_client.models.form_document_report import FormDocumentReport

# TODO update the JSON string below
json = "{}"
# create an instance of FormDocumentReport from a JSON string
form_document_report_instance = FormDocumentReport.from_json(json)
# print the JSON string representation of the object
print(FormDocumentReport.to_json())

# convert the object into a dict
form_document_report_dict = form_document_report_instance.to_dict()
# create an instance of FormDocumentReport from a dict
form_document_report_from_dict = FormDocumentReport.from_dict(form_document_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



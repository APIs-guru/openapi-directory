# TrainingDocumentInfo

Report for a custom model training document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_name** | **str** | Training document name. | 
**errors** | [**List[ErrorInformation]**](ErrorInformation.md) | List of errors. | 
**pages** | **int** | Total number of pages trained. | 
**status** | **str** | Status of the training operation. | 

## Example

```python
from openapi_client.models.training_document_info import TrainingDocumentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TrainingDocumentInfo from a JSON string
training_document_info_instance = TrainingDocumentInfo.from_json(json)
# print the JSON string representation of the object
print(TrainingDocumentInfo.to_json())

# convert the object into a dict
training_document_info_dict = training_document_info_instance.to_dict()
# create an instance of TrainingDocumentInfo from a dict
training_document_info_from_dict = TrainingDocumentInfo.from_dict(training_document_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



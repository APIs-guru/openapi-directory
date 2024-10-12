# GoogleCloudDialogflowV2ValidationResult

Represents the output of agent validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_errors** | [**List[GoogleCloudDialogflowV2ValidationError]**](GoogleCloudDialogflowV2ValidationError.md) | Contains all validation errors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_validation_result import GoogleCloudDialogflowV2ValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ValidationResult from a JSON string
google_cloud_dialogflow_v2_validation_result_instance = GoogleCloudDialogflowV2ValidationResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ValidationResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_validation_result_dict = google_cloud_dialogflow_v2_validation_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ValidationResult from a dict
google_cloud_dialogflow_v2_validation_result_from_dict = GoogleCloudDialogflowV2ValidationResult.from_dict(google_cloud_dialogflow_v2_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudDialogflowCxV3TextInput

Represents the natural language text to be processed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | Required. The UTF-8 encoded natural language text to be processed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_text_input import GoogleCloudDialogflowCxV3TextInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TextInput from a JSON string
google_cloud_dialogflow_cx_v3_text_input_instance = GoogleCloudDialogflowCxV3TextInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TextInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_text_input_dict = google_cloud_dialogflow_cx_v3_text_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TextInput from a dict
google_cloud_dialogflow_cx_v3_text_input_from_dict = GoogleCloudDialogflowCxV3TextInput.from_dict(google_cloud_dialogflow_cx_v3_text_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudDialogflowV2beta1TextInput

Represents the natural language text to be processed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Required. The language of this conversational query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. | [optional] 
**text** | **str** | Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters for virtual agent interactions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_text_input import GoogleCloudDialogflowV2beta1TextInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1TextInput from a JSON string
google_cloud_dialogflow_v2beta1_text_input_instance = GoogleCloudDialogflowV2beta1TextInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1TextInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_text_input_dict = google_cloud_dialogflow_v2beta1_text_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1TextInput from a dict
google_cloud_dialogflow_v2beta1_text_input_from_dict = GoogleCloudDialogflowV2beta1TextInput.from_dict(google_cloud_dialogflow_v2beta1_text_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



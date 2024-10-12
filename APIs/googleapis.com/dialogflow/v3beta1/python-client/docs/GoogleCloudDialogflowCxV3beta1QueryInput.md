# GoogleCloudDialogflowCxV3beta1QueryInput

Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | [**GoogleCloudDialogflowCxV3beta1AudioInput**](GoogleCloudDialogflowCxV3beta1AudioInput.md) |  | [optional] 
**dtmf** | [**GoogleCloudDialogflowCxV3beta1DtmfInput**](GoogleCloudDialogflowCxV3beta1DtmfInput.md) |  | [optional] 
**event** | [**GoogleCloudDialogflowCxV3beta1EventInput**](GoogleCloudDialogflowCxV3beta1EventInput.md) |  | [optional] 
**intent** | [**GoogleCloudDialogflowCxV3beta1IntentInput**](GoogleCloudDialogflowCxV3beta1IntentInput.md) |  | [optional] 
**language_code** | **str** | Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. | [optional] 
**text** | [**GoogleCloudDialogflowCxV3beta1TextInput**](GoogleCloudDialogflowCxV3beta1TextInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_query_input import GoogleCloudDialogflowCxV3beta1QueryInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1QueryInput from a JSON string
google_cloud_dialogflow_cx_v3beta1_query_input_instance = GoogleCloudDialogflowCxV3beta1QueryInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1QueryInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_query_input_dict = google_cloud_dialogflow_cx_v3beta1_query_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1QueryInput from a dict
google_cloud_dialogflow_cx_v3beta1_query_input_from_dict = GoogleCloudDialogflowCxV3beta1QueryInput.from_dict(google_cloud_dialogflow_cx_v3beta1_query_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudDialogflowCxV3beta1Generator

Generators contain prompt to be sent to the LLM model to generate text. The prompt can contain parameters which will be resolved before calling the model. It can optionally contain banned phrases to ensure the model responses are safe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The human-readable name of the generator, unique within the agent. The prompt contains pre-defined parameters such as $conversation, $last-user-utterance, etc. populated by Dialogflow. It can also contain custom placeholders which will be resolved during fulfillment. | [optional] 
**name** | **str** | The unique identifier of the generator. Must be set for the Generators.UpdateGenerator method. Generators.CreateGenerate populates the name automatically. Format: &#x60;projects//locations//agents//generators/&#x60;. | [optional] 
**placeholders** | [**List[GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder]**](GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder.md) | Optional. List of custom placeholders in the prompt text. | [optional] 
**prompt_text** | [**GoogleCloudDialogflowCxV3beta1Phrase**](GoogleCloudDialogflowCxV3beta1Phrase.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_generator import GoogleCloudDialogflowCxV3beta1Generator

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Generator from a JSON string
google_cloud_dialogflow_cx_v3beta1_generator_instance = GoogleCloudDialogflowCxV3beta1Generator.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Generator.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_generator_dict = google_cloud_dialogflow_cx_v3beta1_generator_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Generator from a dict
google_cloud_dialogflow_cx_v3beta1_generator_from_dict = GoogleCloudDialogflowCxV3beta1Generator.from_dict(google_cloud_dialogflow_cx_v3beta1_generator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



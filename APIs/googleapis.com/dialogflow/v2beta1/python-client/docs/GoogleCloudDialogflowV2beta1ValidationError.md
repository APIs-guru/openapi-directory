# GoogleCloudDialogflowV2beta1ValidationError

Represents a single validation error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | **List[str]** | The names of the entries that the error is associated with. Format: - &#x60;projects//agent&#x60;, if the error is associated with the entire agent. - &#x60;projects//agent/intents/&#x60;, if the error is associated with certain intents. - &#x60;projects//agent/intents//trainingPhrases/&#x60;, if the error is associated with certain intent training phrases. - &#x60;projects//agent/intents//parameters/&#x60;, if the error is associated with certain intent parameters. - &#x60;projects//agent/entities/&#x60;, if the error is associated with certain entities. | [optional] 
**error_message** | **str** | The detailed error message. | [optional] 
**severity** | **str** | The severity of the error. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_validation_error import GoogleCloudDialogflowV2beta1ValidationError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ValidationError from a JSON string
google_cloud_dialogflow_v2beta1_validation_error_instance = GoogleCloudDialogflowV2beta1ValidationError.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ValidationError.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_validation_error_dict = google_cloud_dialogflow_v2beta1_validation_error_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ValidationError from a dict
google_cloud_dialogflow_v2beta1_validation_error_from_dict = GoogleCloudDialogflowV2beta1ValidationError.from_dict(google_cloud_dialogflow_v2beta1_validation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



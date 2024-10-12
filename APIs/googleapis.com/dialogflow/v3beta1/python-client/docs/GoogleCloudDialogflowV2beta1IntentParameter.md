# GoogleCloudDialogflowV2beta1IntentParameter

Represents intent parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | Optional. The default value to use when the &#x60;value&#x60; yields an empty result. Default values can be extracted from contexts by using the following syntax: &#x60;#context_name.parameter_name&#x60;. | [optional] 
**display_name** | **str** | Required. The name of the parameter. | [optional] 
**entity_type_display_name** | **str** | Optional. The name of the entity type, prefixed with &#x60;@&#x60;, that describes values of the parameter. If the parameter is required, this must be provided. | [optional] 
**is_list** | **bool** | Optional. Indicates whether the parameter represents a list of values. | [optional] 
**mandatory** | **bool** | Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value. | [optional] 
**name** | **str** | The unique identifier of this parameter. | [optional] 
**prompts** | **List[str]** | Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter. | [optional] 
**value** | **str** | Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as &#x60;$parameter_name&#x60;, - an original parameter value defined as &#x60;$parameter_name.original&#x60;, - a parameter value from some context defined as &#x60;#context_name.parameter_name&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_parameter import GoogleCloudDialogflowV2beta1IntentParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentParameter from a JSON string
google_cloud_dialogflow_v2beta1_intent_parameter_instance = GoogleCloudDialogflowV2beta1IntentParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentParameter.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_parameter_dict = google_cloud_dialogflow_v2beta1_intent_parameter_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentParameter from a dict
google_cloud_dialogflow_v2beta1_intent_parameter_from_dict = GoogleCloudDialogflowV2beta1IntentParameter.from_dict(google_cloud_dialogflow_v2beta1_intent_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



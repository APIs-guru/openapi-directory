# GoogleCloudDialogflowCxV3IntentParameter

Represents an intent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** | **str** | Required. The entity type of the parameter. Format: &#x60;projects/-/locations/-/agents/-/entityTypes/&#x60; for system entity types (for example, &#x60;projects/-/locations/-/agents/-/entityTypes/sys.date&#x60;), or &#x60;projects//locations//agents//entityTypes/&#x60; for developer entity types. | [optional] 
**id** | **str** | Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts. | [optional] 
**is_list** | **bool** | Indicates whether the parameter represents a list of values. | [optional] 
**redact** | **bool** | Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_intent_parameter import GoogleCloudDialogflowCxV3IntentParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3IntentParameter from a JSON string
google_cloud_dialogflow_cx_v3_intent_parameter_instance = GoogleCloudDialogflowCxV3IntentParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3IntentParameter.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_intent_parameter_dict = google_cloud_dialogflow_cx_v3_intent_parameter_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3IntentParameter from a dict
google_cloud_dialogflow_cx_v3_intent_parameter_from_dict = GoogleCloudDialogflowCxV3IntentParameter.from_dict(google_cloud_dialogflow_cx_v3_intent_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



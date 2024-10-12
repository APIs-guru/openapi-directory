# GoogleCloudDialogflowCxV3FormParameter

Represents a form parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_settings** | [**GoogleCloudDialogflowCxV3AdvancedSettings**](GoogleCloudDialogflowCxV3AdvancedSettings.md) |  | [optional] 
**default_value** | **object** | The default value of an optional parameter. If the parameter is required, the default value will be ignored. | [optional] 
**display_name** | **str** | Required. The human-readable name of the parameter, unique within the form. | [optional] 
**entity_type** | **str** | Required. The entity type of the parameter. Format: &#x60;projects/-/locations/-/agents/-/entityTypes/&#x60; for system entity types (for example, &#x60;projects/-/locations/-/agents/-/entityTypes/sys.date&#x60;), or &#x60;projects//locations//agents//entityTypes/&#x60; for developer entity types. | [optional] 
**fill_behavior** | [**GoogleCloudDialogflowCxV3FormParameterFillBehavior**](GoogleCloudDialogflowCxV3FormParameterFillBehavior.md) |  | [optional] 
**is_list** | **bool** | Indicates whether the parameter represents a list of values. | [optional] 
**redact** | **bool** | Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. | [optional] 
**required** | **bool** | Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_form_parameter import GoogleCloudDialogflowCxV3FormParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3FormParameter from a JSON string
google_cloud_dialogflow_cx_v3_form_parameter_instance = GoogleCloudDialogflowCxV3FormParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3FormParameter.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_form_parameter_dict = google_cloud_dialogflow_cx_v3_form_parameter_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3FormParameter from a dict
google_cloud_dialogflow_cx_v3_form_parameter_from_dict = GoogleCloudDialogflowCxV3FormParameter.from_dict(google_cloud_dialogflow_cx_v3_form_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



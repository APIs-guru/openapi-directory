# GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo

Represents parameter information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook. | [optional] 
**just_collected** | **bool** | Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn. | [optional] 
**required** | **bool** | Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. | [optional] 
**state** | **str** | Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored. | [optional] 
**value** | **object** | Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_page_info_form_info_parameter_info import GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo from a JSON string
google_cloud_dialogflow_cx_v3_page_info_form_info_parameter_info_instance = GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_page_info_form_info_parameter_info_dict = google_cloud_dialogflow_cx_v3_page_info_form_info_parameter_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo from a dict
google_cloud_dialogflow_cx_v3_page_info_form_info_parameter_info_from_dict = GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo.from_dict(google_cloud_dialogflow_cx_v3_page_info_form_info_parameter_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



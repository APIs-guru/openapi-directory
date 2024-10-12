# GoogleCloudDialogflowCxV3PageInfoFormInfo

Represents form information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_info** | [**List[GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo]**](GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo.md) | Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_page_info_form_info import GoogleCloudDialogflowCxV3PageInfoFormInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3PageInfoFormInfo from a JSON string
google_cloud_dialogflow_cx_v3_page_info_form_info_instance = GoogleCloudDialogflowCxV3PageInfoFormInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3PageInfoFormInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_page_info_form_info_dict = google_cloud_dialogflow_cx_v3_page_info_form_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3PageInfoFormInfo from a dict
google_cloud_dialogflow_cx_v3_page_info_form_info_from_dict = GoogleCloudDialogflowCxV3PageInfoFormInfo.from_dict(google_cloud_dialogflow_cx_v3_page_info_form_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



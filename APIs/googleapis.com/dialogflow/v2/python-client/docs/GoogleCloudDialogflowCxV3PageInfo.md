# GoogleCloudDialogflowCxV3PageInfo

Represents page information communicated to and from the webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **str** | Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 
**display_name** | **str** | Always present for WebhookRequest. Ignored for WebhookResponse. The display name of the current page. | [optional] 
**form_info** | [**GoogleCloudDialogflowCxV3PageInfoFormInfo**](GoogleCloudDialogflowCxV3PageInfoFormInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_page_info import GoogleCloudDialogflowCxV3PageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3PageInfo from a JSON string
google_cloud_dialogflow_cx_v3_page_info_instance = GoogleCloudDialogflowCxV3PageInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3PageInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_page_info_dict = google_cloud_dialogflow_cx_v3_page_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3PageInfo from a dict
google_cloud_dialogflow_cx_v3_page_info_from_dict = GoogleCloudDialogflowCxV3PageInfo.from_dict(google_cloud_dialogflow_cx_v3_page_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



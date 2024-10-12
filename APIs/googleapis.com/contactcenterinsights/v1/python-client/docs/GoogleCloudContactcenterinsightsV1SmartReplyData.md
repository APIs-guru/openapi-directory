# GoogleCloudContactcenterinsightsV1SmartReplyData

Agent Assist Smart Reply data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_score** | **float** | The system&#39;s confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**metadata** | **Dict[str, str]** | Map that contains metadata about the Smart Reply and the document from which it originates. | [optional] 
**query_record** | **str** | The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} | [optional] 
**reply** | **str** | The content of the reply. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_smart_reply_data import GoogleCloudContactcenterinsightsV1SmartReplyData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1SmartReplyData from a JSON string
google_cloud_contactcenterinsights_v1_smart_reply_data_instance = GoogleCloudContactcenterinsightsV1SmartReplyData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1SmartReplyData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_smart_reply_data_dict = google_cloud_contactcenterinsights_v1_smart_reply_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1SmartReplyData from a dict
google_cloud_contactcenterinsights_v1_smart_reply_data_from_dict = GoogleCloudContactcenterinsightsV1SmartReplyData.from_dict(google_cloud_contactcenterinsights_v1_smart_reply_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



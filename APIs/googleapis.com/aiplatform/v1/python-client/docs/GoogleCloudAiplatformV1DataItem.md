# GoogleCloudAiplatformV1DataItem

A piece of data in a Dataset. Could be an image, a video, a document or plain text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this DataItem was created. | [optional] [readonly] 
**etag** | **str** | Optional. Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your DataItems. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one DataItem(System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**name** | **str** | Output only. The resource name of the DataItem. | [optional] [readonly] 
**payload** | **object** | Required. The data that the DataItem represents (for example, an image or a text snippet). The schema of the payload is stored in the parent Dataset&#39;s metadata schema&#39;s dataItemSchemaUri field. | [optional] 
**update_time** | **str** | Output only. Timestamp when this DataItem was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_data_item import GoogleCloudAiplatformV1DataItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DataItem from a JSON string
google_cloud_aiplatform_v1_data_item_instance = GoogleCloudAiplatformV1DataItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DataItem.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_data_item_dict = google_cloud_aiplatform_v1_data_item_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DataItem from a dict
google_cloud_aiplatform_v1_data_item_from_dict = GoogleCloudAiplatformV1DataItem.from_dict(google_cloud_aiplatform_v1_data_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



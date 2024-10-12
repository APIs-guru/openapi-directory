# GoogleCloudAiplatformV1DataItemView

A container for a single DataItem and Annotations on it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[GoogleCloudAiplatformV1Annotation]**](GoogleCloudAiplatformV1Annotation.md) | The Annotations on the DataItem. If too many Annotations should be returned for the DataItem, this field will be truncated per annotations_limit in request. If it was, then the has_truncated_annotations will be set to true. | [optional] 
**data_item** | [**GoogleCloudAiplatformV1DataItem**](GoogleCloudAiplatformV1DataItem.md) |  | [optional] 
**has_truncated_annotations** | **bool** | True if and only if the Annotations field has been truncated. It happens if more Annotations for this DataItem met the request&#39;s annotation_filter than are allowed to be returned by annotations_limit. Note that if Annotations field is not being returned due to field mask, then this field will not be set to true no matter how many Annotations are there. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_data_item_view import GoogleCloudAiplatformV1DataItemView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DataItemView from a JSON string
google_cloud_aiplatform_v1_data_item_view_instance = GoogleCloudAiplatformV1DataItemView.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DataItemView.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_data_item_view_dict = google_cloud_aiplatform_v1_data_item_view_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DataItemView from a dict
google_cloud_aiplatform_v1_data_item_view_from_dict = GoogleCloudAiplatformV1DataItemView.from_dict(google_cloud_aiplatform_v1_data_item_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



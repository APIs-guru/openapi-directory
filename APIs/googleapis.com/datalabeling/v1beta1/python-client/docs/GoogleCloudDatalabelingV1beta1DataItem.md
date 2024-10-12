# GoogleCloudDatalabelingV1beta1DataItem

DataItem is a piece of data, without annotation. For example, an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_payload** | [**GoogleCloudDatalabelingV1beta1ImagePayload**](GoogleCloudDatalabelingV1beta1ImagePayload.md) |  | [optional] 
**name** | **str** | Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} | [optional] 
**text_payload** | [**GoogleCloudDatalabelingV1beta1TextPayload**](GoogleCloudDatalabelingV1beta1TextPayload.md) |  | [optional] 
**video_payload** | [**GoogleCloudDatalabelingV1beta1VideoPayload**](GoogleCloudDatalabelingV1beta1VideoPayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_data_item import GoogleCloudDatalabelingV1beta1DataItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1DataItem from a JSON string
google_cloud_datalabeling_v1beta1_data_item_instance = GoogleCloudDatalabelingV1beta1DataItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1DataItem.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_data_item_dict = google_cloud_datalabeling_v1beta1_data_item_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1DataItem from a dict
google_cloud_datalabeling_v1beta1_data_item_from_dict = GoogleCloudDatalabelingV1beta1DataItem.from_dict(google_cloud_datalabeling_v1beta1_data_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



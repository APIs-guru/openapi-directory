# GoogleCloudDatalabelingV1beta1GcsFolderDestination

Export folder destination of the data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_folder_uri** | **str** | Required. Cloud Storage directory to export data to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_gcs_folder_destination import GoogleCloudDatalabelingV1beta1GcsFolderDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1GcsFolderDestination from a JSON string
google_cloud_datalabeling_v1beta1_gcs_folder_destination_instance = GoogleCloudDatalabelingV1beta1GcsFolderDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1GcsFolderDestination.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_gcs_folder_destination_dict = google_cloud_datalabeling_v1beta1_gcs_folder_destination_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1GcsFolderDestination from a dict
google_cloud_datalabeling_v1beta1_gcs_folder_destination_from_dict = GoogleCloudDatalabelingV1beta1GcsFolderDestination.from_dict(google_cloud_datalabeling_v1beta1_gcs_folder_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



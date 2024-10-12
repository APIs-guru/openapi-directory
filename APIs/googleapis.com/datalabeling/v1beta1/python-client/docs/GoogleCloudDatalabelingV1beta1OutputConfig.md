# GoogleCloudDatalabelingV1beta1OutputConfig

The configuration of output data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GoogleCloudDatalabelingV1beta1GcsDestination**](GoogleCloudDatalabelingV1beta1GcsDestination.md) |  | [optional] 
**gcs_folder_destination** | [**GoogleCloudDatalabelingV1beta1GcsFolderDestination**](GoogleCloudDatalabelingV1beta1GcsFolderDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_output_config import GoogleCloudDatalabelingV1beta1OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1OutputConfig from a JSON string
google_cloud_datalabeling_v1beta1_output_config_instance = GoogleCloudDatalabelingV1beta1OutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1OutputConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_output_config_dict = google_cloud_datalabeling_v1beta1_output_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1OutputConfig from a dict
google_cloud_datalabeling_v1beta1_output_config_from_dict = GoogleCloudDatalabelingV1beta1OutputConfig.from_dict(google_cloud_datalabeling_v1beta1_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



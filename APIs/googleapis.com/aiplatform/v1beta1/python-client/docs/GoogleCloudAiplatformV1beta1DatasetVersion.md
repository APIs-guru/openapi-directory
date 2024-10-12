# GoogleCloudAiplatformV1beta1DatasetVersion

Describes the dataset version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_dataset_name** | **str** | Output only. Name of the associated BigQuery dataset. | [optional] [readonly] 
**create_time** | **str** | Output only. Timestamp when this DatasetVersion was created. | [optional] [readonly] 
**display_name** | **str** | The user-defined name of the DatasetVersion. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**metadata** | **object** | Required. Additional information about the DatasetVersion. | [optional] 
**name** | **str** | Output only. The resource name of the DatasetVersion. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this DatasetVersion was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_dataset_version import GoogleCloudAiplatformV1beta1DatasetVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DatasetVersion from a JSON string
google_cloud_aiplatform_v1beta1_dataset_version_instance = GoogleCloudAiplatformV1beta1DatasetVersion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DatasetVersion.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_dataset_version_dict = google_cloud_aiplatform_v1beta1_dataset_version_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DatasetVersion from a dict
google_cloud_aiplatform_v1beta1_dataset_version_from_dict = GoogleCloudAiplatformV1beta1DatasetVersion.from_dict(google_cloud_aiplatform_v1beta1_dataset_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



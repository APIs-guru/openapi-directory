# GoogleCloudAiplatformV1FileData

URI based data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_uri** | **str** | Required. URI. | [optional] 
**mime_type** | **str** | Required. The IANA standard MIME type of the source data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_file_data import GoogleCloudAiplatformV1FileData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FileData from a JSON string
google_cloud_aiplatform_v1_file_data_instance = GoogleCloudAiplatformV1FileData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FileData.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_file_data_dict = google_cloud_aiplatform_v1_file_data_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FileData from a dict
google_cloud_aiplatform_v1_file_data_from_dict = GoogleCloudAiplatformV1FileData.from_dict(google_cloud_aiplatform_v1_file_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



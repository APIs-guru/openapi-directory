# GoogleCloudAiplatformV1ModelSourceInfo

Detail description of the source information of the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy** | **bool** | If this Model is copy of another Model. If true then source_type pertains to the original. | [optional] 
**source_type** | **str** | Type of the model source. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_source_info import GoogleCloudAiplatformV1ModelSourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelSourceInfo from a JSON string
google_cloud_aiplatform_v1_model_source_info_instance = GoogleCloudAiplatformV1ModelSourceInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelSourceInfo.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_source_info_dict = google_cloud_aiplatform_v1_model_source_info_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelSourceInfo from a dict
google_cloud_aiplatform_v1_model_source_info_from_dict = GoogleCloudAiplatformV1ModelSourceInfo.from_dict(google_cloud_aiplatform_v1_model_source_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



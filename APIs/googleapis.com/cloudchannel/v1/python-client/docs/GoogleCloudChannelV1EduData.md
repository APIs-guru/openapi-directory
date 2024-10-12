# GoogleCloudChannelV1EduData

Required Edu Attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**institute_size** | **str** | Size of the institute. | [optional] 
**institute_type** | **str** | Designated institute type of customer. | [optional] 
**website** | **str** | Web address for the edu customer&#39;s institution. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_edu_data import GoogleCloudChannelV1EduData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1EduData from a JSON string
google_cloud_channel_v1_edu_data_instance = GoogleCloudChannelV1EduData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1EduData.to_json())

# convert the object into a dict
google_cloud_channel_v1_edu_data_dict = google_cloud_channel_v1_edu_data_instance.to_dict()
# create an instance of GoogleCloudChannelV1EduData from a dict
google_cloud_channel_v1_edu_data_from_dict = GoogleCloudChannelV1EduData.from_dict(google_cloud_channel_v1_edu_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



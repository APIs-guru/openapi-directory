# GoogleCloudApigeeV1ProfileConfig

ProfileConfig defines a set of categories and policies which will be used to compute security score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[GoogleCloudApigeeV1ProfileConfigCategory]**](GoogleCloudApigeeV1ProfileConfigCategory.md) | List of categories of profile config. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_profile_config import GoogleCloudApigeeV1ProfileConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ProfileConfig from a JSON string
google_cloud_apigee_v1_profile_config_instance = GoogleCloudApigeeV1ProfileConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ProfileConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_profile_config_dict = google_cloud_apigee_v1_profile_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ProfileConfig from a dict
google_cloud_apigee_v1_profile_config_from_dict = GoogleCloudApigeeV1ProfileConfig.from_dict(google_cloud_apigee_v1_profile_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



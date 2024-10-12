# GoogleCloudApigeeV1ConfigVersion

Version of the API proxy configuration schema. Currently, only 4.0 is supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major_version** | **int** | Major version of the API proxy configuration schema. | [optional] 
**minor_version** | **int** | Minor version of the API proxy configuration schema. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_config_version import GoogleCloudApigeeV1ConfigVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ConfigVersion from a JSON string
google_cloud_apigee_v1_config_version_instance = GoogleCloudApigeeV1ConfigVersion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ConfigVersion.to_json())

# convert the object into a dict
google_cloud_apigee_v1_config_version_dict = google_cloud_apigee_v1_config_version_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ConfigVersion from a dict
google_cloud_apigee_v1_config_version_from_dict = GoogleCloudApigeeV1ConfigVersion.from_dict(google_cloud_apigee_v1_config_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



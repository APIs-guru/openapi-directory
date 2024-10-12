# GoogleCloudApigeeV1ApiSecurityConfig

Configurations of the API Security add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Flag that specifies whether the API security add-on is enabled. | [optional] 
**expires_at** | **str** | Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_security_config import GoogleCloudApigeeV1ApiSecurityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiSecurityConfig from a JSON string
google_cloud_apigee_v1_api_security_config_instance = GoogleCloudApigeeV1ApiSecurityConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiSecurityConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_security_config_dict = google_cloud_apigee_v1_api_security_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiSecurityConfig from a dict
google_cloud_apigee_v1_api_security_config_from_dict = GoogleCloudApigeeV1ApiSecurityConfig.from_dict(google_cloud_apigee_v1_api_security_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



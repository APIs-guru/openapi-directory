# GoogleCloudApigeeV1RuntimeApiSecurityConfig

Runtime configuration for the API Security add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If the API Security is enabled or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_runtime_api_security_config import GoogleCloudApigeeV1RuntimeApiSecurityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RuntimeApiSecurityConfig from a JSON string
google_cloud_apigee_v1_runtime_api_security_config_instance = GoogleCloudApigeeV1RuntimeApiSecurityConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RuntimeApiSecurityConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_runtime_api_security_config_dict = google_cloud_apigee_v1_runtime_api_security_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RuntimeApiSecurityConfig from a dict
google_cloud_apigee_v1_runtime_api_security_config_from_dict = GoogleCloudApigeeV1RuntimeApiSecurityConfig.from_dict(google_cloud_apigee_v1_runtime_api_security_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



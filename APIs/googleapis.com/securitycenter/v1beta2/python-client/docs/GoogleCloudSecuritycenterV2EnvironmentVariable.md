# GoogleCloudSecuritycenterV2EnvironmentVariable

A name-value pair representing an environment variable used in an operating system process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Environment variable name as a JSON encoded string. | [optional] 
**val** | **str** | Environment variable value as a JSON encoded string. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_environment_variable import GoogleCloudSecuritycenterV2EnvironmentVariable

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2EnvironmentVariable from a JSON string
google_cloud_securitycenter_v2_environment_variable_instance = GoogleCloudSecuritycenterV2EnvironmentVariable.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2EnvironmentVariable.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_environment_variable_dict = google_cloud_securitycenter_v2_environment_variable_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2EnvironmentVariable from a dict
google_cloud_securitycenter_v2_environment_variable_from_dict = GoogleCloudSecuritycenterV2EnvironmentVariable.from_dict(google_cloud_securitycenter_v2_environment_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudApigeeV1SecurityProfileEnvironment

Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attach_time** | **str** | Output only. Time at which environment was attached to the security profile. | [optional] [readonly] 
**environment** | **str** | Output only. Name of the environment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_profile_environment import GoogleCloudApigeeV1SecurityProfileEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityProfileEnvironment from a JSON string
google_cloud_apigee_v1_security_profile_environment_instance = GoogleCloudApigeeV1SecurityProfileEnvironment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityProfileEnvironment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_profile_environment_dict = google_cloud_apigee_v1_security_profile_environment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityProfileEnvironment from a dict
google_cloud_apigee_v1_security_profile_environment_from_dict = GoogleCloudApigeeV1SecurityProfileEnvironment.from_dict(google_cloud_apigee_v1_security_profile_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation

Represents a SecurityProfileEnvironmentAssociation resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attach_time** | **str** | Output only. The time when environment was attached to the security profile. | [optional] [readonly] 
**name** | **str** | Immutable. Name of the environment that the profile is attached to. | [optional] 
**security_profile_revision_id** | **str** | DEPRECATED: DO NOT USE Revision ID of the security profile. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_profile_environment_association import GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation from a JSON string
google_cloud_apigee_v1_security_profile_environment_association_instance = GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_profile_environment_association_dict = google_cloud_apigee_v1_security_profile_environment_association_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation from a dict
google_cloud_apigee_v1_security_profile_environment_association_from_dict = GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation.from_dict(google_cloud_apigee_v1_security_profile_environment_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudApigeeV1EnvironmentGroupAttachment

EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an environment group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Output only. The time at which the environment group attachment was created as milliseconds since epoch. | [optional] [readonly] 
**environment** | **str** | Required. ID of the attached environment. | [optional] 
**environment_group_id** | **str** | Output only. ID of the environment group. | [optional] [readonly] 
**name** | **str** | ID of the environment group attachment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_environment_group_attachment import GoogleCloudApigeeV1EnvironmentGroupAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1EnvironmentGroupAttachment from a JSON string
google_cloud_apigee_v1_environment_group_attachment_instance = GoogleCloudApigeeV1EnvironmentGroupAttachment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1EnvironmentGroupAttachment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_environment_group_attachment_dict = google_cloud_apigee_v1_environment_group_attachment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1EnvironmentGroupAttachment from a dict
google_cloud_apigee_v1_environment_group_attachment_from_dict = GoogleCloudApigeeV1EnvironmentGroupAttachment.from_dict(google_cloud_apigee_v1_environment_group_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



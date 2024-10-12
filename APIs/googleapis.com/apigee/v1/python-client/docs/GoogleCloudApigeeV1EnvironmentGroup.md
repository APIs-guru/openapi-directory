# GoogleCloudApigeeV1EnvironmentGroup

EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Output only. The time at which the environment group was created as milliseconds since epoch. | [optional] [readonly] 
**hostnames** | **List[str]** | Required. Host names for this environment group. | [optional] 
**last_modified_at** | **str** | Output only. The time at which the environment group was last updated as milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | ID of the environment group. | [optional] 
**state** | **str** | Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_environment_group import GoogleCloudApigeeV1EnvironmentGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1EnvironmentGroup from a JSON string
google_cloud_apigee_v1_environment_group_instance = GoogleCloudApigeeV1EnvironmentGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1EnvironmentGroup.to_json())

# convert the object into a dict
google_cloud_apigee_v1_environment_group_dict = google_cloud_apigee_v1_environment_group_instance.to_dict()
# create an instance of GoogleCloudApigeeV1EnvironmentGroup from a dict
google_cloud_apigee_v1_environment_group_from_dict = GoogleCloudApigeeV1EnvironmentGroup.from_dict(google_cloud_apigee_v1_environment_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



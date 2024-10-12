# GoogleCloudApigeeV1ListEnvironmentGroupsResponse

Response for ListEnvironmentGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_groups** | [**List[GoogleCloudApigeeV1EnvironmentGroup]**](GoogleCloudApigeeV1EnvironmentGroup.md) | EnvironmentGroups in the specified organization. | [optional] 
**next_page_token** | **str** | Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_environment_groups_response import GoogleCloudApigeeV1ListEnvironmentGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListEnvironmentGroupsResponse from a JSON string
google_cloud_apigee_v1_list_environment_groups_response_instance = GoogleCloudApigeeV1ListEnvironmentGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListEnvironmentGroupsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_environment_groups_response_dict = google_cloud_apigee_v1_list_environment_groups_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListEnvironmentGroupsResponse from a dict
google_cloud_apigee_v1_list_environment_groups_response_from_dict = GoogleCloudApigeeV1ListEnvironmentGroupsResponse.from_dict(google_cloud_apigee_v1_list_environment_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



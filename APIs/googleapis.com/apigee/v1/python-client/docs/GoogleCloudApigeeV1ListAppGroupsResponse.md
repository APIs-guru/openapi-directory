# GoogleCloudApigeeV1ListAppGroupsResponse

ListAppGroupsResponse contains the 0 or more AppGroups, along with the optional page token and the total count of apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_groups** | [**List[GoogleCloudApigeeV1AppGroup]**](GoogleCloudApigeeV1AppGroup.md) | List of AppGroups. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;next_page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**total_size** | **int** | Total count of AppGroups. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_app_groups_response import GoogleCloudApigeeV1ListAppGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListAppGroupsResponse from a JSON string
google_cloud_apigee_v1_list_app_groups_response_instance = GoogleCloudApigeeV1ListAppGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListAppGroupsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_app_groups_response_dict = google_cloud_apigee_v1_list_app_groups_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListAppGroupsResponse from a dict
google_cloud_apigee_v1_list_app_groups_response_from_dict = GoogleCloudApigeeV1ListAppGroupsResponse.from_dict(google_cloud_apigee_v1_list_app_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



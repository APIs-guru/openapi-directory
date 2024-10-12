# GoogleCloudApigeeV1AppGroup

AppGroup contains the request/response fields representing the logical grouping of apps. Note that appgroup_id, create_time and update_time cannot be changed by the user, and gets updated by the system. The name and the organization once provided cannot be edited subsequently.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_group_id** | **str** | Output only. Internal identifier that cannot be edited | [optional] [readonly] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | A list of attributes | [optional] 
**channel_id** | **str** | channel identifier identifies the owner maintaing this grouping. | [optional] 
**channel_uri** | **str** | A reference to the associated storefront/marketplace. | [optional] 
**created_at** | **str** | Output only. Created time as milliseconds since epoch. | [optional] [readonly] 
**display_name** | **str** | app group name displayed in the UI | [optional] 
**last_modified_at** | **str** | Output only. Modified time as milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\\-$ %. | [optional] 
**organization** | **str** | Immutable. the org the app group is created | [optional] 
**status** | **str** | Valid values are &#x60;active&#x60; or &#x60;inactive&#x60;. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as &#x60;active&#x60; or &#x60;inactive&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_app_group import GoogleCloudApigeeV1AppGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AppGroup from a JSON string
google_cloud_apigee_v1_app_group_instance = GoogleCloudApigeeV1AppGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AppGroup.to_json())

# convert the object into a dict
google_cloud_apigee_v1_app_group_dict = google_cloud_apigee_v1_app_group_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AppGroup from a dict
google_cloud_apigee_v1_app_group_from_dict = GoogleCloudApigeeV1AppGroup.from_dict(google_cloud_apigee_v1_app_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



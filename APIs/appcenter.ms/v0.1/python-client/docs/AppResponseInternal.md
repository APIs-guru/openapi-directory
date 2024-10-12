# AppResponseInternal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the app | [optional] 
**display_name** | **str** | The display name of the app | 
**icon_source** | **str** | The string representation of the source of the app&#39;s icon | [optional] 
**icon_url** | **str** | The string representation of the URL pointing to the app&#39;s icon | [optional] 
**id** | **str** | The unique ID (UUID) of the app | 
**name** | **str** | The name of the app used in URLs | 
**os** | **str** | The OS the app will be running on | 
**owner** | **object** | The information about the app&#39;s owner | 
**release_type** | **str** | A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase | [optional] 
**app_secret** | **str** | A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics | 
**azure_subscription** | **object** |  | [optional] 
**created_at** | **str** | The created date of this app | [optional] 
**member_permissions** | **List[str]** | The permissions of the calling user | [optional] 
**origin** | **str** | The creation origin of this app | 
**platform** | **str** | The platform of the app | 
**updated_at** | **str** | The last updated date of this app | [optional] 
**cutover_from_hockeyapp_at** | **str** | The cutover date of this app | [optional] 
**feature_flags** | **List[str]** | The feature flags that are enabled for this app | [optional] 
**repositories** | [**List[AppResponseInternalAllOfRepositories]**](AppResponseInternalAllOfRepositories.md) | The repositories associated with this app | [optional] 
**user_permissions** | [**AppResponseInternalAllOfUserPermissions**](AppResponseInternalAllOfUserPermissions.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_response_internal import AppResponseInternal

# TODO update the JSON string below
json = "{}"
# create an instance of AppResponseInternal from a JSON string
app_response_internal_instance = AppResponseInternal.from_json(json)
# print the JSON string representation of the object
print(AppResponseInternal.to_json())

# convert the object into a dict
app_response_internal_dict = app_response_internal_instance.to_dict()
# create an instance of AppResponseInternal from a dict
app_response_internal_from_dict = AppResponseInternal.from_dict(app_response_internal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



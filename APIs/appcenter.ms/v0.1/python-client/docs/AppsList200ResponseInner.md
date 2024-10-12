# AppsList200ResponseInner


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
**owner** | [**AppsList200ResponseInnerAllOfOwner**](AppsList200ResponseInnerAllOfOwner.md) |  | 
**release_type** | **str** | A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase | [optional] 
**app_secret** | **str** | A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics | 
**azure_subscription** | [**AppsList200ResponseInnerAllOfAzureSubscription**](AppsList200ResponseInnerAllOfAzureSubscription.md) |  | [optional] 
**created_at** | **str** | The created date of this app | [optional] 
**member_permissions** | **List[str]** | The permissions of the calling user | [optional] 
**origin** | **str** | The creation origin of this app | 
**platform** | **str** | The platform of the app | 
**updated_at** | **str** | The last updated date of this app | [optional] 

## Example

```python
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppsList200ResponseInner from a JSON string
apps_list200_response_inner_instance = AppsList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(AppsList200ResponseInner.to_json())

# convert the object into a dict
apps_list200_response_inner_dict = apps_list200_response_inner_instance.to_dict()
# create an instance of AppsList200ResponseInner from a dict
apps_list200_response_inner_from_dict = AppsList200ResponseInner.from_dict(apps_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



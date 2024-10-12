# GoogleAdsSearchads360V0ResourcesUserList

A user list. This is a list of users a customer may target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Output only. Id of the user list. | [optional] [readonly] 
**name** | **str** | Name of this user list. Depending on its access_reason, the user list name may not be unique (for example, if access_reason&#x3D;SHARED) | [optional] 
**resource_name** | **str** | Immutable. The resource name of the user list. User list resource names have the form: &#x60;customers/{customer_id}/userLists/{user_list_id}&#x60; | [optional] 
**type** | **str** | Output only. Type of this list. This field is read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_user_list import GoogleAdsSearchads360V0ResourcesUserList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesUserList from a JSON string
google_ads_searchads360_v0_resources_user_list_instance = GoogleAdsSearchads360V0ResourcesUserList.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesUserList.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_user_list_dict = google_ads_searchads360_v0_resources_user_list_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesUserList from a dict
google_ads_searchads360_v0_resources_user_list_from_dict = GoogleAdsSearchads360V0ResourcesUserList.from_dict(google_ads_searchads360_v0_resources_user_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



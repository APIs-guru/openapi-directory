# LocationState

Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_delete** | **bool** | Output only. Indicates whether the location can be deleted using the Google My Business API. | [optional] 
**can_have_food_menus** | **bool** | Output only. Indicates if the listing is eligible for food menu. | [optional] [readonly] 
**can_modify_service_list** | **bool** | Output only. Indicates if the listing can modify a ServiceList. | [optional] [readonly] 
**can_operate_health_data** | **bool** | Output only. Indicates whether the location can operate on Health data. | [optional] [readonly] 
**can_operate_lodging_data** | **bool** | Output only. Indicates whether the location can operate on Lodging data. | [optional] [readonly] 
**can_update** | **bool** | Output only. Indicates whether the location can be updated. | [optional] 
**has_pending_edits** | **bool** | Output only. Indicates whether any of this Location&#39;s properties are in the edit pending state. | [optional] 
**has_pending_verification** | **bool** | Output only. Indicates whether the location has pending verification requests. | [optional] 
**is_disabled** | **bool** | Output only. Indicates whether the location is disabled. | [optional] 
**is_disconnected** | **bool** | Output only. Indicates whether the location is disconnected from a place on Google Maps. | [optional] 
**is_duplicate** | **bool** | Output only. Indicates whether the location is a duplicate of another location. | [optional] 
**is_google_updated** | **bool** | Output only. Indicates whether the place ID associated with this location has updates. | [optional] 
**is_local_post_api_disabled** | **bool** | Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location. | [optional] 
**is_pending_review** | **bool** | Output only. Indicates whether the review of the location is pending. | [optional] 
**is_published** | **bool** | Output only. Indicates whether the location is published. | [optional] 
**is_suspended** | **bool** | Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145). | [optional] 
**is_verified** | **bool** | Output only. Indicates whether the location is verified. | [optional] 
**needs_reverification** | **bool** | Output only. Indicates whether the location requires reverification. | [optional] 

## Example

```python
from openapi_client.models.location_state import LocationState

# TODO update the JSON string below
json = "{}"
# create an instance of LocationState from a JSON string
location_state_instance = LocationState.from_json(json)
# print the JSON string representation of the object
print(LocationState.to_json())

# convert the object into a dict
location_state_dict = location_state_instance.to_dict()
# create an instance of LocationState from a dict
location_state_from_dict = LocationState.from_dict(location_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



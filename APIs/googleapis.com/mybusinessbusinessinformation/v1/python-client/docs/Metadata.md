# Metadata

Additional non-user-editable information about the location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_delete** | **bool** | Output only. Indicates whether the location can be deleted using the API. | [optional] [readonly] 
**can_have_business_calls** | **bool** | Output only. Indicates if the listing is eligible for business calls. | [optional] [readonly] 
**can_have_food_menus** | **bool** | Output only. Indicates if the listing is eligible for food menu. | [optional] [readonly] 
**can_modify_service_list** | **bool** | Output only. Indicates if the listing can modify the service list. | [optional] [readonly] 
**can_operate_health_data** | **bool** | Output only. Indicates whether the location can operate on Health data. | [optional] [readonly] 
**can_operate_local_post** | **bool** | Output only. Indicates if the listing can manage local posts. | [optional] [readonly] 
**can_operate_lodging_data** | **bool** | Output only. Indicates whether the location can operate on Lodging data. | [optional] [readonly] 
**duplicate_location** | **str** | Output only. The location resource that this location duplicates. | [optional] [readonly] 
**has_google_updated** | **bool** | Output only. Indicates whether the place ID associated with this location has updates that need to be updated or rejected by the client. If this boolean is set, you should call the &#x60;getGoogleUpdated&#x60; method to lookup information that&#39;s needs to be verified. | [optional] [readonly] 
**has_pending_edits** | **bool** | Output only. Indicates whether any of this Location&#39;s properties are in the edit pending state. | [optional] [readonly] 
**has_voice_of_merchant** | **bool** | Output only. Indicates if the listing has Voice of Merchant. If this boolean is false, you should call the locations.getVoiceOfMerchantState API to get details as to why they do not have Voice of Merchant. | [optional] [readonly] 
**maps_uri** | **str** | Output only. A link to the location on Maps. | [optional] [readonly] 
**new_review_uri** | **str** | Output only. A link to the page on Google Search where a customer can leave a review for the location. | [optional] [readonly] 
**place_id** | **str** | Output only. If this locationappears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. This field can be set during Create calls, but not for Update. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metadata import Metadata

# TODO update the JSON string below
json = "{}"
# create an instance of Metadata from a JSON string
metadata_instance = Metadata.from_json(json)
# print the JSON string representation of the object
print(Metadata.to_json())

# convert the object into a dict
metadata_dict = metadata_instance.to_dict()
# create an instance of Metadata from a dict
metadata_from_dict = Metadata.from_dict(metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



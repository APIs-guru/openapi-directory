# ProfileRef

JSON template for a linked view (profile).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this view (profile) belongs. | [optional] 
**href** | **str** | Link for this view (profile). | [optional] 
**id** | **str** | View (Profile) ID. | [optional] 
**internal_web_property_id** | **str** | Internal ID for the web property to which this view (profile) belongs. | [optional] 
**kind** | **str** | Analytics view (profile) reference. | [optional] [default to 'analytics#profileRef']
**name** | **str** | Name of this view (profile). | [optional] 
**web_property_id** | **str** | Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. | [optional] 

## Example

```python
from openapi_client.models.profile_ref import ProfileRef

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileRef from a JSON string
profile_ref_instance = ProfileRef.from_json(json)
# print the JSON string representation of the object
print(ProfileRef.to_json())

# convert the object into a dict
profile_ref_dict = profile_ref_instance.to_dict()
# create an instance of ProfileRef from a dict
profile_ref_from_dict = ProfileRef.from_dict(profile_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



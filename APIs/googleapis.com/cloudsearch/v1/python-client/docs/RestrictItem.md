# RestrictItem

Information relevant only to a restrict entry. NextId: 12

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_follow_up_restrict** | [**DriveFollowUpRestrict**](DriveFollowUpRestrict.md) |  | [optional] 
**drive_location_restrict** | [**DriveLocationRestrict**](DriveLocationRestrict.md) |  | [optional] 
**drive_mime_type_restrict** | [**DriveMimeTypeRestrict**](DriveMimeTypeRestrict.md) |  | [optional] 
**drive_time_span_restrict** | [**DriveTimeSpanRestrict**](DriveTimeSpanRestrict.md) |  | [optional] 
**search_operator** | **str** | The search restrict (e.g. \&quot;after:2017-09-11 before:2017-09-12\&quot;). | [optional] 

## Example

```python
from openapi_client.models.restrict_item import RestrictItem

# TODO update the JSON string below
json = "{}"
# create an instance of RestrictItem from a JSON string
restrict_item_instance = RestrictItem.from_json(json)
# print the JSON string representation of the object
print(RestrictItem.to_json())

# convert the object into a dict
restrict_item_dict = restrict_item_instance.to_dict()
# create an instance of RestrictItem from a dict
restrict_item_from_dict = RestrictItem.from_dict(restrict_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MembershipsDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessible_levels** | **List[str]** | Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase. | [optional] 
**highest_accessible_level** | **str** | Id of the highest level that the user has access to at the moment. | [optional] 
**highest_accessible_level_display_name** | **str** | Display name for the highest level that the user has access to at the moment. | [optional] 
**memberships_duration** | [**MembershipsDuration**](MembershipsDuration.md) |  | [optional] 
**memberships_duration_at_levels** | [**List[MembershipsDurationAtLevel]**](MembershipsDurationAtLevel.md) | Data about memberships duration on particular pricing levels. | [optional] 

## Example

```python
from openapi_client.models.memberships_details import MembershipsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipsDetails from a JSON string
memberships_details_instance = MembershipsDetails.from_json(json)
# print the JSON string representation of the object
print(MembershipsDetails.to_json())

# convert the object into a dict
memberships_details_dict = memberships_details_instance.to_dict()
# create an instance of MembershipsDetails from a dict
memberships_details_from_dict = MembershipsDetails.from_dict(memberships_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AudienceGroupAssignedTargetingOptionDetails

Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_first_and_third_party_audience_group** | [**FirstAndThirdPartyAudienceGroup**](FirstAndThirdPartyAudienceGroup.md) |  | [optional] 
**excluded_google_audience_group** | [**GoogleAudienceGroup**](GoogleAudienceGroup.md) |  | [optional] 
**included_combined_audience_group** | [**CombinedAudienceGroup**](CombinedAudienceGroup.md) |  | [optional] 
**included_custom_list_group** | [**CustomListGroup**](CustomListGroup.md) |  | [optional] 
**included_first_and_third_party_audience_groups** | [**List[FirstAndThirdPartyAudienceGroup]**](FirstAndThirdPartyAudienceGroup.md) | The first and third party audience ids and recencies of included first and third party audience groups. Each first and third party audience group contains first and third party audience ids only. The relation between each first and third party audience group is INTERSECTION, and the result is UNION&#39;ed with other audience groups. Repeated groups with same settings will be ignored. | [optional] 
**included_google_audience_group** | [**GoogleAudienceGroup**](GoogleAudienceGroup.md) |  | [optional] 

## Example

```python
from openapi_client.models.audience_group_assigned_targeting_option_details import AudienceGroupAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceGroupAssignedTargetingOptionDetails from a JSON string
audience_group_assigned_targeting_option_details_instance = AudienceGroupAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AudienceGroupAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
audience_group_assigned_targeting_option_details_dict = audience_group_assigned_targeting_option_details_instance.to_dict()
# create an instance of AudienceGroupAssignedTargetingOptionDetails from a dict
audience_group_assigned_targeting_option_details_from_dict = AudienceGroupAssignedTargetingOptionDetails.from_dict(audience_group_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



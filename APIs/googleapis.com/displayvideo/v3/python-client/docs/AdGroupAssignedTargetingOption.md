# AdGroupAssignedTargetingOption

Wrapper object associating an AssignedTargetingOption resource and the ad group it is assigned to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | The ID of the ad group the assigned targeting option is assigned to. | [optional] 
**assigned_targeting_option** | [**AssignedTargetingOption**](AssignedTargetingOption.md) |  | [optional] 

## Example

```python
from openapi_client.models.ad_group_assigned_targeting_option import AdGroupAssignedTargetingOption

# TODO update the JSON string below
json = "{}"
# create an instance of AdGroupAssignedTargetingOption from a JSON string
ad_group_assigned_targeting_option_instance = AdGroupAssignedTargetingOption.from_json(json)
# print the JSON string representation of the object
print(AdGroupAssignedTargetingOption.to_json())

# convert the object into a dict
ad_group_assigned_targeting_option_dict = ad_group_assigned_targeting_option_instance.to_dict()
# create an instance of AdGroupAssignedTargetingOption from a dict
ad_group_assigned_targeting_option_from_dict = AdGroupAssignedTargetingOption.from_dict(ad_group_assigned_targeting_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



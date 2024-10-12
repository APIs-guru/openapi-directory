# UserRewardedContentAssignedTargetingOptionDetails

User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60;. | [optional] 
**user_rewarded_content** | **str** | Output only. User rewarded content status for video ads. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_rewarded_content_assigned_targeting_option_details import UserRewardedContentAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UserRewardedContentAssignedTargetingOptionDetails from a JSON string
user_rewarded_content_assigned_targeting_option_details_instance = UserRewardedContentAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(UserRewardedContentAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
user_rewarded_content_assigned_targeting_option_details_dict = user_rewarded_content_assigned_targeting_option_details_instance.to_dict()
# create an instance of UserRewardedContentAssignedTargetingOptionDetails from a dict
user_rewarded_content_assigned_targeting_option_details_from_dict = UserRewardedContentAssignedTargetingOptionDetails.from_dict(user_rewarded_content_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



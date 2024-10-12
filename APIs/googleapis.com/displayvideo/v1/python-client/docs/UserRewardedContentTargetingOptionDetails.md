# UserRewardedContentTargetingOptionDetails

Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_rewarded_content** | **str** | Output only. User rewarded content status for video ads. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_rewarded_content_targeting_option_details import UserRewardedContentTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UserRewardedContentTargetingOptionDetails from a JSON string
user_rewarded_content_targeting_option_details_instance = UserRewardedContentTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(UserRewardedContentTargetingOptionDetails.to_json())

# convert the object into a dict
user_rewarded_content_targeting_option_details_dict = user_rewarded_content_targeting_option_details_instance.to_dict()
# create an instance of UserRewardedContentTargetingOptionDetails from a dict
user_rewarded_content_targeting_option_details_from_dict = UserRewardedContentTargetingOptionDetails.from_dict(user_rewarded_content_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



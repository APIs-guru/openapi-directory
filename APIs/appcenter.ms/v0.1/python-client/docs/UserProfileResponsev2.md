# UserProfileResponsev2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_role** | **str** | The new admin_role | [optional] 
**avatar_url** | **str** | The avatar URL of the user | [optional] 
**can_change_password** | **bool** | User is required to send an old password in order to change the password. | [optional] 
**created_at** | **str** | The created date of the user | [optional] 
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**feature_flags** | **List[str]** | The feature flags that are enabled for this user | [optional] 
**id** | **str** | The unique id (UUID) of the user | 
**name** | **str** | The unique name that is used to identify the user. | 
**next_nps_survey_date** | **str** | The date in the future when the user should be checked again for NPS eligibility | [optional] 
**origin** | **str** | The creation origin of this user | 
**session_hash** | **str** | The session hash of the user | [optional] 
**settings** | **object** | The user&#39;s settings | [optional] 

## Example

```python
from openapi_client.models.user_profile_responsev2 import UserProfileResponsev2

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileResponsev2 from a JSON string
user_profile_responsev2_instance = UserProfileResponsev2.from_json(json)
# print the JSON string representation of the object
print(UserProfileResponsev2.to_json())

# convert the object into a dict
user_profile_responsev2_dict = user_profile_responsev2_instance.to_dict()
# create an instance of UserProfileResponsev2 from a dict
user_profile_responsev2_from_dict = UserProfileResponsev2.from_dict(user_profile_responsev2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



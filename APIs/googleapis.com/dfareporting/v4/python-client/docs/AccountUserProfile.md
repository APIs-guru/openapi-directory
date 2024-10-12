# AccountUserProfile

AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of the user profile. This is a read-only field that can be left blank. | [optional] 
**active** | **bool** | Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable. | [optional] 
**advertiser_filter** | [**ObjectFilter**](ObjectFilter.md) |  | [optional] 
**campaign_filter** | [**ObjectFilter**](ObjectFilter.md) |  | [optional] 
**comments** | **str** | Comments for this user profile. | [optional] 
**email** | **str** | Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion. | [optional] 
**id** | **str** | ID of the user profile. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#accountUserProfile\&quot;. | [optional] 
**locale** | **str** | Locale of the user profile. This is a required field. Acceptable values are: - \&quot;cs\&quot; (Czech) - \&quot;de\&quot; (German) - \&quot;en\&quot; (English) - \&quot;en-GB\&quot; (English United Kingdom) - \&quot;es\&quot; (Spanish) - \&quot;fr\&quot; (French) - \&quot;it\&quot; (Italian) - \&quot;ja\&quot; (Japanese) - \&quot;ko\&quot; (Korean) - \&quot;pl\&quot; (Polish) - \&quot;pt-BR\&quot; (Portuguese Brazil) - \&quot;ru\&quot; (Russian) - \&quot;sv\&quot; (Swedish) - \&quot;tr\&quot; (Turkish) - \&quot;zh-CN\&quot; (Chinese Simplified) - \&quot;zh-TW\&quot; (Chinese Traditional)  | [optional] 
**name** | **str** | Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: \&quot;&amp;;&lt;&gt;\&quot;#%,\&quot;. | [optional] 
**site_filter** | [**ObjectFilter**](ObjectFilter.md) |  | [optional] 
**subaccount_id** | **str** | Subaccount ID of the user profile. This is a read-only field that can be left blank. | [optional] 
**trafficker_type** | **str** | Trafficker type of this user profile. This is a read-only field. | [optional] 
**user_access_type** | **str** | User type of the user profile. This is a read-only field that can be left blank. | [optional] 
**user_role_filter** | [**ObjectFilter**](ObjectFilter.md) |  | [optional] 
**user_role_id** | **str** | User role ID of the user profile. This is a required field. | [optional] 

## Example

```python
from openapi_client.models.account_user_profile import AccountUserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AccountUserProfile from a JSON string
account_user_profile_instance = AccountUserProfile.from_json(json)
# print the JSON string representation of the object
print(AccountUserProfile.to_json())

# convert the object into a dict
account_user_profile_dict = account_user_profile_instance.to_dict()
# create an instance of AccountUserProfile from a dict
account_user_profile_from_dict = AccountUserProfile.from_dict(account_user_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



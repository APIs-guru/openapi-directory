# AccountUserProfilesListResponse

Account User Profile List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_user_profiles** | [**List[AccountUserProfile]**](AccountUserProfile.md) | Account user profile collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#accountUserProfilesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.account_user_profiles_list_response import AccountUserProfilesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountUserProfilesListResponse from a JSON string
account_user_profiles_list_response_instance = AccountUserProfilesListResponse.from_json(json)
# print the JSON string representation of the object
print(AccountUserProfilesListResponse.to_json())

# convert the object into a dict
account_user_profiles_list_response_dict = account_user_profiles_list_response_instance.to_dict()
# create an instance of AccountUserProfilesListResponse from a dict
account_user_profiles_list_response_from_dict = AccountUserProfilesListResponse.from_dict(account_user_profiles_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



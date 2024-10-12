# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** |  | [optional] 
**all_emails** | **List[str]** |  | [optional] 
**analytics_id** | **str** |  | [optional] 
**avatar_url** | **str** |  | [optional] 
**basic_email_prefs** | **str** |  | [optional] 
**bitbucket** | **int** |  | [optional] 
**bitbucket_authorized** | **bool** |  | [optional] 
**containers** | **int** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**days_left_in_trial** | **int** |  | [optional] 
**dev_admin** | **bool** |  | [optional] 
**enrolled_betas** | **List[str]** |  | [optional] 
**github_id** | **int** |  | [optional] 
**github_oauth_scopes** | **List[str]** |  | [optional] 
**gravatar_id** | **int** |  | [optional] 
**heroku_api_key** | **str** |  | [optional] 
**in_beta_program** | **bool** |  | [optional] 
**login** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_prefs** | **object** |  | [optional] 
**parallelism** | **int** |  | [optional] 
**plan** | **str** |  | [optional] 
**projects** | **object** |  | [optional] 
**pusher_id** | **str** |  | [optional] 
**selected_email** | **str** |  | [optional] 
**sign_in_count** | **int** |  | [optional] 
**trial_end** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



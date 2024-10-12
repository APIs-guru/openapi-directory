# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_me** | **str** |  | [optional] 
**accept_rate** | **int** |  | [optional] 
**account_id** | **int** |  | [optional] 
**age** | **int** |  | [optional] 
**answer_count** | **int** |  | [optional] 
**badge_counts** | [**AnswersInnerLastEditorBadgeCounts**](AnswersInnerLastEditorBadgeCounts.md) |  | [optional] 
**creation_date** | **int** |  | [optional] 
**display_name** | **str** |  | [optional] 
**down_vote_count** | **int** |  | [optional] 
**is_employee** | **bool** |  | [optional] 
**last_access_date** | **int** |  | [optional] 
**last_modified_date** | **int** |  | [optional] 
**link** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**profile_image** | **str** |  | [optional] 
**question_count** | **int** |  | [optional] 
**reputation** | **int** |  | [optional] 
**reputation_change_day** | **int** |  | [optional] 
**reputation_change_month** | **int** |  | [optional] 
**reputation_change_quarter** | **int** |  | [optional] 
**reputation_change_week** | **int** |  | [optional] 
**reputation_change_year** | **int** |  | [optional] 
**timed_penalty_date** | **int** |  | [optional] 
**up_vote_count** | **int** |  | [optional] 
**user_id** | **int** |  | [optional] 
**user_type** | **str** |  | [optional] 
**view_count** | **int** |  | [optional] 
**website_url** | **str** |  | [optional] 

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



# UserPublic

Public User details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bio** | **str** | User&#39;s biography | [optional] 
**cover_picture** | **str** | Cover picture (backgroud) for the profile | [optional] 
**followers_count** | **int** | Number of followers the user have | [optional] 
**following_count** | **int** | Number of people the user follow | [optional] 
**instruments** | **List[str]** | An array of the instrument identifiers. The format of the strings is &#x60;{instrument-group}.{instrument-id}&#x60;.  | [optional] 
**liked_scores_count** | **int** | Number of the scores liked by the user | [optional] 
**owned_public_scores_count** | **int** | Number of public scores the user have | [optional] 
**profile_theme** | **str** | Theme (background) for the profile | [optional] 
**registration_date** | **datetime** | Date the user signed up | [optional] 

## Example

```python
from openapi_client.models.user_public import UserPublic

# TODO update the JSON string below
json = "{}"
# create an instance of UserPublic from a JSON string
user_public_instance = UserPublic.from_json(json)
# print the JSON string representation of the object
print(UserPublic.to_json())

# convert the object into a dict
user_public_dict = user_public_instance.to_dict()
# create an instance of UserPublic from a dict
user_public_from_dict = UserPublic.from_dict(user_public_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



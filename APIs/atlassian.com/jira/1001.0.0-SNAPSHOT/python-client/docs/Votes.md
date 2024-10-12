# Votes

The details of votes on an issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_voted** | **bool** | Whether the user making this request has voted on the issue. | [optional] [readonly] 
**var_self** | **str** | The URL of these issue vote details. | [optional] [readonly] 
**voters** | [**List[User]**](User.md) | List of the users who have voted on this issue. An empty list is returned when the calling user doesn&#39;t have the *View voters and watchers* project permission. | [optional] [readonly] 
**votes** | **int** | The number of votes on the issue. | [optional] [readonly] 

## Example

```python
from openapi_client.models.votes import Votes

# TODO update the JSON string below
json = "{}"
# create an instance of Votes from a JSON string
votes_instance = Votes.from_json(json)
# print the JSON string representation of the object
print(Votes.to_json())

# convert the object into a dict
votes_dict = votes_instance.to_dict()
# create an instance of Votes from a dict
votes_from_dict = Votes.from_dict(votes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# NetworkUsersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **int** |  | [optional] 
**answer_count** | **int** |  | [optional] 
**badge_counts** | [**AnswersInnerLastEditorBadgeCounts**](AnswersInnerLastEditorBadgeCounts.md) |  | [optional] 
**creation_date** | **int** |  | [optional] 
**last_access_date** | **int** |  | [optional] 
**question_count** | **int** |  | [optional] 
**reputation** | **int** |  | [optional] 
**site_name** | **str** |  | [optional] 
**site_url** | **str** |  | [optional] 
**top_answers** | **List[object]** |  | [optional] 
**top_questions** | **List[object]** |  | [optional] 
**user_id** | **int** |  | [optional] 
**user_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.network_users_inner import NetworkUsersInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUsersInner from a JSON string
network_users_inner_instance = NetworkUsersInner.from_json(json)
# print the JSON string representation of the object
print(NetworkUsersInner.to_json())

# convert the object into a dict
network_users_inner_dict = network_users_inner_instance.to_dict()
# create an instance of NetworkUsersInner from a dict
network_users_inner_from_dict = NetworkUsersInner.from_dict(network_users_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



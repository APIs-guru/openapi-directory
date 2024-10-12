# ChangedWorklogs

List of changed worklogs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_page** | **bool** |  | [optional] 
**next_page** | **str** | The URL of the next list of changed worklogs. | [optional] [readonly] 
**var_self** | **str** | The URL of this changed worklogs list. | [optional] [readonly] 
**since** | **int** | The datetime of the first worklog item in the list. | [optional] [readonly] 
**until** | **int** | The datetime of the last worklog item in the list. | [optional] [readonly] 
**values** | [**List[ChangedWorklog]**](ChangedWorklog.md) | Changed worklog list. | [optional] [readonly] 

## Example

```python
from openapi_client.models.changed_worklogs import ChangedWorklogs

# TODO update the JSON string below
json = "{}"
# create an instance of ChangedWorklogs from a JSON string
changed_worklogs_instance = ChangedWorklogs.from_json(json)
# print the JSON string representation of the object
print(ChangedWorklogs.to_json())

# convert the object into a dict
changed_worklogs_dict = changed_worklogs_instance.to_dict()
# create an instance of ChangedWorklogs from a dict
changed_worklogs_from_dict = ChangedWorklogs.from_dict(changed_worklogs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



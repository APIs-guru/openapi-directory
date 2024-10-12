# FollowerDatabaseListResult

The list Kusto database principals operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[FollowerDatabaseDefinition]**](FollowerDatabaseDefinition.md) | The list of follower database result. | [optional] 

## Example

```python
from openapi_client.models.follower_database_list_result import FollowerDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FollowerDatabaseListResult from a JSON string
follower_database_list_result_instance = FollowerDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(FollowerDatabaseListResult.to_json())

# convert the object into a dict
follower_database_list_result_dict = follower_database_list_result_instance.to_dict()
# create an instance of FollowerDatabaseListResult from a dict
follower_database_list_result_from_dict = FollowerDatabaseListResult.from_dict(follower_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



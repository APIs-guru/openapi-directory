# UserAssignedIdentitiesListResult

Values returned by the List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The url to get the next page of results, if any. | [optional] 
**value** | [**List[Identity]**](Identity.md) | The collection of userAssignedIdentities returned by the listing operation. | [optional] 

## Example

```python
from openapi_client.models.user_assigned_identities_list_result import UserAssignedIdentitiesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of UserAssignedIdentitiesListResult from a JSON string
user_assigned_identities_list_result_instance = UserAssignedIdentitiesListResult.from_json(json)
# print the JSON string representation of the object
print(UserAssignedIdentitiesListResult.to_json())

# convert the object into a dict
user_assigned_identities_list_result_dict = user_assigned_identities_list_result_instance.to_dict()
# create an instance of UserAssignedIdentitiesListResult from a dict
user_assigned_identities_list_result_from_dict = UserAssignedIdentitiesListResult.from_dict(user_assigned_identities_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RemoveHeldAccountsResponse

Response for batch delete held accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statuses** | [**List[Status]**](Status.md) | A list of statuses for the deleted accounts. Results have the same order as the request. | [optional] 

## Example

```python
from openapi_client.models.remove_held_accounts_response import RemoveHeldAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveHeldAccountsResponse from a JSON string
remove_held_accounts_response_instance = RemoveHeldAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(RemoveHeldAccountsResponse.to_json())

# convert the object into a dict
remove_held_accounts_response_dict = remove_held_accounts_response_instance.to_dict()
# create an instance of RemoveHeldAccountsResponse from a dict
remove_held_accounts_response_from_dict = RemoveHeldAccountsResponse.from_dict(remove_held_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



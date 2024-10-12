# AddHeldAccountsResponse

Response for batch create held accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[AddHeldAccountResult]**](AddHeldAccountResult.md) | The list of responses, in the same order as the batch request. | [optional] 

## Example

```python
from openapi_client.models.add_held_accounts_response import AddHeldAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddHeldAccountsResponse from a JSON string
add_held_accounts_response_instance = AddHeldAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(AddHeldAccountsResponse.to_json())

# convert the object into a dict
add_held_accounts_response_dict = add_held_accounts_response_instance.to_dict()
# create an instance of AddHeldAccountsResponse from a dict
add_held_accounts_response_from_dict = AddHeldAccountsResponse.from_dict(add_held_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



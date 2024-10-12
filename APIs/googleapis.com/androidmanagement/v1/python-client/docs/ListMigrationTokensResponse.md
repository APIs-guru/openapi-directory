# ListMigrationTokensResponse

Response to a request to list migration tokens for a given enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_tokens** | [**List[MigrationToken]**](MigrationToken.md) | The migration tokens from the specified enterprise. | [optional] 
**next_page_token** | **str** | A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_migration_tokens_response import ListMigrationTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMigrationTokensResponse from a JSON string
list_migration_tokens_response_instance = ListMigrationTokensResponse.from_json(json)
# print the JSON string representation of the object
print(ListMigrationTokensResponse.to_json())

# convert the object into a dict
list_migration_tokens_response_dict = list_migration_tokens_response_instance.to_dict()
# create an instance of ListMigrationTokensResponse from a dict
list_migration_tokens_response_from_dict = ListMigrationTokensResponse.from_dict(list_migration_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



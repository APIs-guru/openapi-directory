# DeletedSecretListResult

The deleted secret list result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of deleted secrets. | [optional] [readonly] 
**value** | [**List[DeletedSecretItem]**](DeletedSecretItem.md) | A response message containing a list of the deleted secrets in the vault along with a link to the next page of deleted secrets | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_secret_list_result import DeletedSecretListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSecretListResult from a JSON string
deleted_secret_list_result_instance = DeletedSecretListResult.from_json(json)
# print the JSON string representation of the object
print(DeletedSecretListResult.to_json())

# convert the object into a dict
deleted_secret_list_result_dict = deleted_secret_list_result_instance.to_dict()
# create an instance of DeletedSecretListResult from a dict
deleted_secret_list_result_from_dict = DeletedSecretListResult.from_dict(deleted_secret_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



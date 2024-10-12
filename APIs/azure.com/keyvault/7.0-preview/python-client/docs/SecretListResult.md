# SecretListResult

The secret list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of secrets. | [optional] [readonly] 
**value** | [**List[SecretItem]**](SecretItem.md) | A response message containing a list of secrets in the key vault along with a link to the next page of secrets. | [optional] [readonly] 

## Example

```python
from openapi_client.models.secret_list_result import SecretListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SecretListResult from a JSON string
secret_list_result_instance = SecretListResult.from_json(json)
# print the JSON string representation of the object
print(SecretListResult.to_json())

# convert the object into a dict
secret_list_result_dict = secret_list_result_instance.to_dict()
# create an instance of SecretListResult from a dict
secret_list_result_from_dict = SecretListResult.from_dict(secret_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



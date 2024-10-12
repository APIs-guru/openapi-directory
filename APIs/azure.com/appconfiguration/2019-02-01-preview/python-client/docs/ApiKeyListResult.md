# ApiKeyListResult

The result of a request to list API keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[ApiKey]**](ApiKey.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.api_key_list_result import ApiKeyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyListResult from a JSON string
api_key_list_result_instance = ApiKeyListResult.from_json(json)
# print the JSON string representation of the object
print(ApiKeyListResult.to_json())

# convert the object into a dict
api_key_list_result_dict = api_key_list_result_instance.to_dict()
# create an instance of ApiKeyListResult from a dict
api_key_list_result_from_dict = ApiKeyListResult.from_dict(api_key_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



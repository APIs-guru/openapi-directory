# ListSasTokensResult

The SAS response that contains the storage account, container and associated SAS token for connection use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[SasTokenInfo]**](SasTokenInfo.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_sas_tokens_result import ListSasTokensResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListSasTokensResult from a JSON string
list_sas_tokens_result_instance = ListSasTokensResult.from_json(json)
# print the JSON string representation of the object
print(ListSasTokensResult.to_json())

# convert the object into a dict
list_sas_tokens_result_dict = list_sas_tokens_result_instance.to_dict()
# create an instance of ListSasTokensResult from a dict
list_sas_tokens_result_from_dict = ListSasTokensResult.from_dict(list_sas_tokens_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



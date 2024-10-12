# ListCryptoKeysResponse

Response message for KeyManagementService.ListCryptoKeys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_keys** | [**List[CryptoKey]**](CryptoKey.md) | The list of CryptoKeys. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results. | [optional] 
**total_size** | **int** | The total number of CryptoKeys that matched the query. | [optional] 

## Example

```python
from openapi_client.models.list_crypto_keys_response import ListCryptoKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCryptoKeysResponse from a JSON string
list_crypto_keys_response_instance = ListCryptoKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListCryptoKeysResponse.to_json())

# convert the object into a dict
list_crypto_keys_response_dict = list_crypto_keys_response_instance.to_dict()
# create an instance of ListCryptoKeysResponse from a dict
list_crypto_keys_response_from_dict = ListCryptoKeysResponse.from_dict(list_crypto_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



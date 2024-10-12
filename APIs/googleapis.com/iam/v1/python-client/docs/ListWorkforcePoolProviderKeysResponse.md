# ListWorkforcePoolProviderKeysResponse

Response message for ListWorkforcePoolProviderKeys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**workforce_pool_provider_keys** | [**List[WorkforcePoolProviderKey]**](WorkforcePoolProviderKey.md) | A list of WorkforcePoolProviderKeys. | [optional] 

## Example

```python
from openapi_client.models.list_workforce_pool_provider_keys_response import ListWorkforcePoolProviderKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkforcePoolProviderKeysResponse from a JSON string
list_workforce_pool_provider_keys_response_instance = ListWorkforcePoolProviderKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkforcePoolProviderKeysResponse.to_json())

# convert the object into a dict
list_workforce_pool_provider_keys_response_dict = list_workforce_pool_provider_keys_response_instance.to_dict()
# create an instance of ListWorkforcePoolProviderKeysResponse from a dict
list_workforce_pool_provider_keys_response_from_dict = ListWorkforcePoolProviderKeysResponse.from_dict(list_workforce_pool_provider_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



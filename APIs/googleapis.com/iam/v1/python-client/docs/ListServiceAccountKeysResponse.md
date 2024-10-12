# ListServiceAccountKeysResponse

The service account keys list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[ServiceAccountKey]**](ServiceAccountKey.md) | The public keys for the service account. | [optional] 

## Example

```python
from openapi_client.models.list_service_account_keys_response import ListServiceAccountKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceAccountKeysResponse from a JSON string
list_service_account_keys_response_instance = ListServiceAccountKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceAccountKeysResponse.to_json())

# convert the object into a dict
list_service_account_keys_response_dict = list_service_account_keys_response_instance.to_dict()
# create an instance of ListServiceAccountKeysResponse from a dict
list_service_account_keys_response_from_dict = ListServiceAccountKeysResponse.from_dict(list_service_account_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



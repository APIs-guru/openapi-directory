# ListSigningKeysResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SigningKey]**](SigningKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_signing_keys_response import ListSigningKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSigningKeysResponse from a JSON string
list_signing_keys_response_instance = ListSigningKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListSigningKeysResponse.to_json())

# convert the object into a dict
list_signing_keys_response_dict = list_signing_keys_response_instance.to_dict()
# create an instance of ListSigningKeysResponse from a dict
list_signing_keys_response_from_dict = ListSigningKeysResponse.from_dict(list_signing_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



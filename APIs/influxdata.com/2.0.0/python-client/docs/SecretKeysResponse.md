# SecretKeysResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | **List[str]** |  | [optional] 
**links** | [**SecretKeysResponseAllOfLinks**](SecretKeysResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.secret_keys_response import SecretKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SecretKeysResponse from a JSON string
secret_keys_response_instance = SecretKeysResponse.from_json(json)
# print the JSON string representation of the object
print(SecretKeysResponse.to_json())

# convert the object into a dict
secret_keys_response_dict = secret_keys_response_instance.to_dict()
# create an instance of SecretKeysResponse from a dict
secret_keys_response_from_dict = SecretKeysResponse.from_dict(secret_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



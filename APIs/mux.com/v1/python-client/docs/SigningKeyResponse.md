# SigningKeyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**SigningKey**](SigningKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.signing_key_response import SigningKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SigningKeyResponse from a JSON string
signing_key_response_instance = SigningKeyResponse.from_json(json)
# print the JSON string representation of the object
print(SigningKeyResponse.to_json())

# convert the object into a dict
signing_key_response_dict = signing_key_response_instance.to_dict()
# create an instance of SigningKeyResponse from a dict
signing_key_response_from_dict = SigningKeyResponse.from_dict(signing_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



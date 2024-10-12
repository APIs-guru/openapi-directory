# DecodeIntegrityTokenResponse

Response containing the decoded integrity payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_payload_external** | [**TokenPayloadExternal**](TokenPayloadExternal.md) |  | [optional] 

## Example

```python
from openapi_client.models.decode_integrity_token_response import DecodeIntegrityTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DecodeIntegrityTokenResponse from a JSON string
decode_integrity_token_response_instance = DecodeIntegrityTokenResponse.from_json(json)
# print the JSON string representation of the object
print(DecodeIntegrityTokenResponse.to_json())

# convert the object into a dict
decode_integrity_token_response_dict = decode_integrity_token_response_instance.to_dict()
# create an instance of DecodeIntegrityTokenResponse from a dict
decode_integrity_token_response_from_dict = DecodeIntegrityTokenResponse.from_dict(decode_integrity_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



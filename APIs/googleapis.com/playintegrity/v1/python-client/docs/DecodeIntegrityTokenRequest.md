# DecodeIntegrityTokenRequest

Request to decode the integrity token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrity_token** | **str** | Encoded integrity token. | [optional] 

## Example

```python
from openapi_client.models.decode_integrity_token_request import DecodeIntegrityTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DecodeIntegrityTokenRequest from a JSON string
decode_integrity_token_request_instance = DecodeIntegrityTokenRequest.from_json(json)
# print the JSON string representation of the object
print(DecodeIntegrityTokenRequest.to_json())

# convert the object into a dict
decode_integrity_token_request_dict = decode_integrity_token_request_instance.to_dict()
# create an instance of DecodeIntegrityTokenRequest from a dict
decode_integrity_token_request_from_dict = DecodeIntegrityTokenRequest.from_dict(decode_integrity_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



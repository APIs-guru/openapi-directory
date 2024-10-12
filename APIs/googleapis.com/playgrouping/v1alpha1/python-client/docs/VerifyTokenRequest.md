# VerifyTokenRequest

Request message for VerifyToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persona** | **str** | Required. Persona represented by the token. Format: personas/{persona} | [optional] 

## Example

```python
from openapi_client.models.verify_token_request import VerifyTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyTokenRequest from a JSON string
verify_token_request_instance = VerifyTokenRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyTokenRequest.to_json())

# convert the object into a dict
verify_token_request_dict = verify_token_request_instance.to_dict()
# create an instance of VerifyTokenRequest from a dict
verify_token_request_from_dict = VerifyTokenRequest.from_dict(verify_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



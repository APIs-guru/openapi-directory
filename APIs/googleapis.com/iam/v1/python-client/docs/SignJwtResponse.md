# SignJwtResponse

Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the JWT. | [optional] 
**signed_jwt** | **str** | Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed JWT. | [optional] 

## Example

```python
from openapi_client.models.sign_jwt_response import SignJwtResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SignJwtResponse from a JSON string
sign_jwt_response_instance = SignJwtResponse.from_json(json)
# print the JSON string representation of the object
print(SignJwtResponse.to_json())

# convert the object into a dict
sign_jwt_response_dict = sign_jwt_response_instance.to_dict()
# create an instance of SignJwtResponse from a dict
sign_jwt_response_from_dict = SignJwtResponse.from_dict(sign_jwt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



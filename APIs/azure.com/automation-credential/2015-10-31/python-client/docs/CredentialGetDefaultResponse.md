# CredentialGetDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.credential_get_default_response import CredentialGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialGetDefaultResponse from a JSON string
credential_get_default_response_instance = CredentialGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(CredentialGetDefaultResponse.to_json())

# convert the object into a dict
credential_get_default_response_dict = credential_get_default_response_instance.to_dict()
# create an instance of CredentialGetDefaultResponse from a dict
credential_get_default_response_from_dict = CredentialGetDefaultResponse.from_dict(credential_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



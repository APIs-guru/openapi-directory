# CredentialResult

The credential result response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the credential. | [optional] [readonly] 
**value** | **bytearray** | Base64-encoded Kubernetes configuration file. | [optional] [readonly] 

## Example

```python
from openapi_client.models.credential_result import CredentialResult

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialResult from a JSON string
credential_result_instance = CredentialResult.from_json(json)
# print the JSON string representation of the object
print(CredentialResult.to_json())

# convert the object into a dict
credential_result_dict = credential_result_instance.to_dict()
# create an instance of CredentialResult from a dict
credential_result_from_dict = CredentialResult.from_dict(credential_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ImportSshPublicKeyResponse

A response message for importing an SSH public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Detailed information about import results. | [optional] 
**login_profile** | [**LoginProfile**](LoginProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_ssh_public_key_response import ImportSshPublicKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportSshPublicKeyResponse from a JSON string
import_ssh_public_key_response_instance = ImportSshPublicKeyResponse.from_json(json)
# print the JSON string representation of the object
print(ImportSshPublicKeyResponse.to_json())

# convert the object into a dict
import_ssh_public_key_response_dict = import_ssh_public_key_response_instance.to_dict()
# create an instance of ImportSshPublicKeyResponse from a dict
import_ssh_public_key_response_from_dict = ImportSshPublicKeyResponse.from_dict(import_ssh_public_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



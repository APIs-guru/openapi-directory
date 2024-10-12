# SecretPatchParameters

Parameters for patching a secret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecretPatchProperties**](SecretPatchProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags that will be assigned to the secret.  | [optional] 

## Example

```python
from openapi_client.models.secret_patch_parameters import SecretPatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecretPatchParameters from a JSON string
secret_patch_parameters_instance = SecretPatchParameters.from_json(json)
# print the JSON string representation of the object
print(SecretPatchParameters.to_json())

# convert the object into a dict
secret_patch_parameters_dict = secret_patch_parameters_instance.to_dict()
# create an instance of SecretPatchParameters from a dict
secret_patch_parameters_from_dict = SecretPatchParameters.from_dict(secret_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RestoreOptions

Properties for restore options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decryption_cert_base64** | **str** | The certificate file raw data in Base64 string. This should be the .pfx file with the private key. | [optional] 
**decryption_cert_password** | **str** | The password for the decryption certificate. | [optional] 
**role_name** | **str** | The Azure Stack role name for restore, set it to empty for all infrastructure role | [optional] 

## Example

```python
from openapi_client.models.restore_options import RestoreOptions

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreOptions from a JSON string
restore_options_instance = RestoreOptions.from_json(json)
# print the JSON string representation of the object
print(RestoreOptions.to_json())

# convert the object into a dict
restore_options_dict = restore_options_instance.to_dict()
# create an instance of RestoreOptions from a dict
restore_options_from_dict = RestoreOptions.from_dict(restore_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SecretPatchProperties

Properties of the secret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | The content type of the secret. | [optional] 
**value** | **str** | The value of the secret. | [optional] 

## Example

```python
from openapi_client.models.secret_patch_properties import SecretPatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecretPatchProperties from a JSON string
secret_patch_properties_instance = SecretPatchProperties.from_json(json)
# print the JSON string representation of the object
print(SecretPatchProperties.to_json())

# convert the object into a dict
secret_patch_properties_dict = secret_patch_properties_instance.to_dict()
# create an instance of SecretPatchProperties from a dict
secret_patch_properties_from_dict = SecretPatchProperties.from_dict(secret_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



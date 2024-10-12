# SecretKeySelector

SecretKeySelector selects a key of a Secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. A Cloud Secret Manager secret version. Must be &#39;latest&#39; for the latest version, an integer for a specific version, or a version alias. The key of the secret to select from. Must be a valid secret key. | [optional] 
**local_object_reference** | [**LocalObjectReference**](LocalObjectReference.md) |  | [optional] 
**name** | **str** | The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod&#39;s namespace to select from. | [optional] 
**optional** | **bool** | Specify whether the Secret or its key must be defined. | [optional] 

## Example

```python
from openapi_client.models.secret_key_selector import SecretKeySelector

# TODO update the JSON string below
json = "{}"
# create an instance of SecretKeySelector from a JSON string
secret_key_selector_instance = SecretKeySelector.from_json(json)
# print the JSON string representation of the object
print(SecretKeySelector.to_json())

# convert the object into a dict
secret_key_selector_dict = secret_key_selector_instance.to_dict()
# create an instance of SecretKeySelector from a dict
secret_key_selector_from_dict = SecretKeySelector.from_dict(secret_key_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



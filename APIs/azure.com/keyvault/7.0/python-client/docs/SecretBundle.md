# SecretBundle

A secret consisting of a value, id and its attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | The content type of the secret. | [optional] 
**id** | **str** | The secret id. | [optional] 
**kid** | **str** | If this is a secret backing a KV certificate, then this field specifies the corresponding key backing the KV certificate. | [optional] [readonly] 
**managed** | **bool** | True if the secret&#39;s lifetime is managed by key vault. If this is a secret backing a certificate, then managed will be true. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**value** | **str** | The secret value. | [optional] 

## Example

```python
from openapi_client.models.secret_bundle import SecretBundle

# TODO update the JSON string below
json = "{}"
# create an instance of SecretBundle from a JSON string
secret_bundle_instance = SecretBundle.from_json(json)
# print the JSON string representation of the object
print(SecretBundle.to_json())

# convert the object into a dict
secret_bundle_dict = secret_bundle_instance.to_dict()
# create an instance of SecretBundle from a dict
secret_bundle_from_dict = SecretBundle.from_dict(secret_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



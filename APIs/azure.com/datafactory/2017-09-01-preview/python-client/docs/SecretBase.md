# SecretBase

The base definition of a secret type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of the secret. | 

## Example

```python
from openapi_client.models.secret_base import SecretBase

# TODO update the JSON string below
json = "{}"
# create an instance of SecretBase from a JSON string
secret_base_instance = SecretBase.from_json(json)
# print the JSON string representation of the object
print(SecretBase.to_json())

# convert the object into a dict
secret_base_dict = secret_base_instance.to_dict()
# create an instance of SecretBase from a dict
secret_base_from_dict = SecretBase.from_dict(secret_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



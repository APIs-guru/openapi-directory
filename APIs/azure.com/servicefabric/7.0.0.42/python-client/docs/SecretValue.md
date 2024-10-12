# SecretValue

This type represents the unencrypted value of the secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The actual value of the secret. | [optional] 

## Example

```python
from openapi_client.models.secret_value import SecretValue

# TODO update the JSON string below
json = "{}"
# create an instance of SecretValue from a JSON string
secret_value_instance = SecretValue.from_json(json)
# print the JSON string representation of the object
print(SecretValue.to_json())

# convert the object into a dict
secret_value_dict = secret_value_instance.to_dict()
# create an instance of SecretValue from a dict
secret_value_from_dict = SecretValue.from_dict(secret_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



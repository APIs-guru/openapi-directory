# SecretValueProperties

This type describes properties of secret value resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The actual value of the secret. | [optional] 

## Example

```python
from openapi_client.models.secret_value_properties import SecretValueProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecretValueProperties from a JSON string
secret_value_properties_instance = SecretValueProperties.from_json(json)
# print the JSON string representation of the object
print(SecretValueProperties.to_json())

# convert the object into a dict
secret_value_properties_dict = secret_value_properties_instance.to_dict()
# create an instance of SecretValueProperties from a dict
secret_value_properties_from_dict = SecretValueProperties.from_dict(secret_value_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



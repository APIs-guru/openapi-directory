# SecretPropertiesFragment

Properties of a secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The value of the secret for secret creation. | [optional] 

## Example

```python
from openapi_client.models.secret_properties_fragment import SecretPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of SecretPropertiesFragment from a JSON string
secret_properties_fragment_instance = SecretPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(SecretPropertiesFragment.to_json())

# convert the object into a dict
secret_properties_fragment_dict = secret_properties_fragment_instance.to_dict()
# create an instance of SecretPropertiesFragment from a dict
secret_properties_fragment_from_dict = SecretPropertiesFragment.from_dict(secret_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



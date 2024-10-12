# SecretProperties

Properties of a secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 
**value** | **str** | The value of the secret for secret creation. | [optional] 

## Example

```python
from openapi_client.models.secret_properties import SecretProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProperties from a JSON string
secret_properties_instance = SecretProperties.from_json(json)
# print the JSON string representation of the object
print(SecretProperties.to_json())

# convert the object into a dict
secret_properties_dict = secret_properties_instance.to_dict()
# create an instance of SecretProperties from a dict
secret_properties_from_dict = SecretProperties.from_dict(secret_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



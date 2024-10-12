# SecretValueResourceProperties

This type describes properties of a secret value resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | State of the resource. | [optional] [readonly] 
**value** | **str** | The actual value of the secret. | [optional] 

## Example

```python
from openapi_client.models.secret_value_resource_properties import SecretValueResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecretValueResourceProperties from a JSON string
secret_value_resource_properties_instance = SecretValueResourceProperties.from_json(json)
# print the JSON string representation of the object
print(SecretValueResourceProperties.to_json())

# convert the object into a dict
secret_value_resource_properties_dict = secret_value_resource_properties_instance.to_dict()
# create an instance of SecretValueResourceProperties from a dict
secret_value_resource_properties_from_dict = SecretValueResourceProperties.from_dict(secret_value_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



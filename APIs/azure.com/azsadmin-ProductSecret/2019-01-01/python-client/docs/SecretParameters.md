# SecretParameters

Parameters required for creating/updating a product secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password as a secure string. | [optional] 
**pfx_file_name** | **str** | The pfx certificate file location. | [optional] 
**pfx_password** | **str** | The pfx certificate file password as a secure string. | [optional] 
**secret_value** | **str** | The secret value in a secure string format. | [optional] 
**symmetric_key** | **str** | The symmetric key as a secure string. | [optional] 

## Example

```python
from openapi_client.models.secret_parameters import SecretParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecretParameters from a JSON string
secret_parameters_instance = SecretParameters.from_json(json)
# print the JSON string representation of the object
print(SecretParameters.to_json())

# convert the object into a dict
secret_parameters_dict = secret_parameters_instance.to_dict()
# create an instance of SecretParameters from a dict
secret_parameters_from_dict = SecretParameters.from_dict(secret_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



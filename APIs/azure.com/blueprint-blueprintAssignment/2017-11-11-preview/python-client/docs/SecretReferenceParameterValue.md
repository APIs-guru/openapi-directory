# SecretReferenceParameterValue

The reference to a secret, if the parameter should be protected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | [**SecretValueReference**](SecretValueReference.md) |  | 
**description** | **str** | Optional property, just to establish ParameterValueBase as a BaseClass. | [optional] 

## Example

```python
from openapi_client.models.secret_reference_parameter_value import SecretReferenceParameterValue

# TODO update the JSON string below
json = "{}"
# create an instance of SecretReferenceParameterValue from a JSON string
secret_reference_parameter_value_instance = SecretReferenceParameterValue.from_json(json)
# print the JSON string representation of the object
print(SecretReferenceParameterValue.to_json())

# convert the object into a dict
secret_reference_parameter_value_dict = secret_reference_parameter_value_instance.to_dict()
# create an instance of SecretReferenceParameterValue from a dict
secret_reference_parameter_value_from_dict = SecretReferenceParameterValue.from_dict(secret_reference_parameter_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



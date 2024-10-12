# CustomDomainParameters

The customDomain JSON object required for custom domain creation or update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CustomDomainPropertiesParameters**](CustomDomainPropertiesParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_domain_parameters import CustomDomainParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomainParameters from a JSON string
custom_domain_parameters_instance = CustomDomainParameters.from_json(json)
# print the JSON string representation of the object
print(CustomDomainParameters.to_json())

# convert the object into a dict
custom_domain_parameters_dict = custom_domain_parameters_instance.to_dict()
# create an instance of CustomDomainParameters from a dict
custom_domain_parameters_from_dict = CustomDomainParameters.from_dict(custom_domain_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



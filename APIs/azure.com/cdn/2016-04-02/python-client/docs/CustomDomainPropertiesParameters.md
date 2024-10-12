# CustomDomainPropertiesParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | The host name of the custom domain. Must be a domain name. | 

## Example

```python
from openapi_client.models.custom_domain_properties_parameters import CustomDomainPropertiesParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomainPropertiesParameters from a JSON string
custom_domain_properties_parameters_instance = CustomDomainPropertiesParameters.from_json(json)
# print the JSON string representation of the object
print(CustomDomainPropertiesParameters.to_json())

# convert the object into a dict
custom_domain_properties_parameters_dict = custom_domain_properties_parameters_instance.to_dict()
# create an instance of CustomDomainPropertiesParameters from a dict
custom_domain_properties_parameters_from_dict = CustomDomainPropertiesParameters.from_dict(custom_domain_properties_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



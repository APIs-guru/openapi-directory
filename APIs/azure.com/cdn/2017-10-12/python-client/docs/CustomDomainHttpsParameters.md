# CustomDomainHttpsParameters

The JSON object that contains the properties to secure a custom domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_source** | **str** | Defines the source of the SSL certificate. | 
**protocol_type** | **str** | Defines the TLS extension protocol that is used for secure delivery. | 

## Example

```python
from openapi_client.models.custom_domain_https_parameters import CustomDomainHttpsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomainHttpsParameters from a JSON string
custom_domain_https_parameters_instance = CustomDomainHttpsParameters.from_json(json)
# print the JSON string representation of the object
print(CustomDomainHttpsParameters.to_json())

# convert the object into a dict
custom_domain_https_parameters_dict = custom_domain_https_parameters_instance.to_dict()
# create an instance of CustomDomainHttpsParameters from a dict
custom_domain_https_parameters_from_dict = CustomDomainHttpsParameters.from_dict(custom_domain_https_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



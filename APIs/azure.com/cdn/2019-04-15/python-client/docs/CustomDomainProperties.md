# CustomDomainProperties

The JSON object that contains the properties of the custom domain to create.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_https_parameters** | [**CustomDomainHttpsParameters**](CustomDomainHttpsParameters.md) |  | [optional] 
**custom_https_provisioning_state** | **str** | Provisioning status of Custom Https of the custom domain. | [optional] [readonly] 
**custom_https_provisioning_substate** | **str** | Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. | [optional] [readonly] 
**host_name** | **str** | The host name of the custom domain. Must be a domain name. | 
**provisioning_state** | **str** | Provisioning status of the custom domain. | [optional] [readonly] 
**resource_state** | **str** | Resource status of the custom domain. | [optional] [readonly] 
**validation_data** | **str** | Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China. | [optional] 

## Example

```python
from openapi_client.models.custom_domain_properties import CustomDomainProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomainProperties from a JSON string
custom_domain_properties_instance = CustomDomainProperties.from_json(json)
# print the JSON string representation of the object
print(CustomDomainProperties.to_json())

# convert the object into a dict
custom_domain_properties_dict = custom_domain_properties_instance.to_dict()
# create an instance of CustomDomainProperties from a dict
custom_domain_properties_from_dict = CustomDomainProperties.from_dict(custom_domain_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



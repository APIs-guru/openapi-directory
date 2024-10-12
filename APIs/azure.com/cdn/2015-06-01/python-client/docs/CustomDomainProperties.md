# CustomDomainProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | The host name of the custom domain. Must be a domain name. | 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**resource_state** | **str** | Resource status of the custom domain. | [optional] [readonly] 

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



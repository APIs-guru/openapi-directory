# BastionHostPropertiesFormat

Properties of the Bastion Host.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_name** | **str** | FQDN for the endpoint on which bastion host is accessible. | [optional] 
**ip_configurations** | [**List[BastionHostIPConfiguration]**](BastionHostIPConfiguration.md) | IP configuration of the Bastion Host resource. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bastion_host_properties_format import BastionHostPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHostPropertiesFormat from a JSON string
bastion_host_properties_format_instance = BastionHostPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(BastionHostPropertiesFormat.to_json())

# convert the object into a dict
bastion_host_properties_format_dict = bastion_host_properties_format_instance.to_dict()
# create an instance of BastionHostPropertiesFormat from a dict
bastion_host_properties_format_from_dict = BastionHostPropertiesFormat.from_dict(bastion_host_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



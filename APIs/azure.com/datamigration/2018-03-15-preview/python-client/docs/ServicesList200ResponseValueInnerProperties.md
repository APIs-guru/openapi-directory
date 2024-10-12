# ServicesList200ResponseValueInnerProperties

Properties of the Data Migration service instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The resource&#39;s provisioning state | [optional] [readonly] 
**public_key** | **str** | The public key of the service, used to encrypt secrets sent to the service | [optional] 
**virtual_subnet_id** | **str** | The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined | 

## Example

```python
from openapi_client.models.services_list200_response_value_inner_properties import ServicesList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesList200ResponseValueInnerProperties from a JSON string
services_list200_response_value_inner_properties_instance = ServicesList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ServicesList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
services_list200_response_value_inner_properties_dict = services_list200_response_value_inner_properties_instance.to_dict()
# create an instance of ServicesList200ResponseValueInnerProperties from a dict
services_list200_response_value_inner_properties_from_dict = ServicesList200ResponseValueInnerProperties.from_dict(services_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



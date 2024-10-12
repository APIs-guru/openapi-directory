# EndpointPropertiesSubnetsInner

Subnet first address, scope, and/or last address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **str** | First address in the subnet. | [optional] 
**last** | **str** | Last address in the subnet. | [optional] 
**scope** | **int** | Block size (number of leading bits in the subnet mask). | [optional] 

## Example

```python
from openapi_client.models.endpoint_properties_subnets_inner import EndpointPropertiesSubnetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPropertiesSubnetsInner from a JSON string
endpoint_properties_subnets_inner_instance = EndpointPropertiesSubnetsInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPropertiesSubnetsInner.to_json())

# convert the object into a dict
endpoint_properties_subnets_inner_dict = endpoint_properties_subnets_inner_instance.to_dict()
# create an instance of EndpointPropertiesSubnetsInner from a dict
endpoint_properties_subnets_inner_from_dict = EndpointPropertiesSubnetsInner.from_dict(endpoint_properties_subnets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



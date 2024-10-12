# CombineOrganizationNetworks200ResponseResultingNetwork

Network after the combination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_string** | **str** | Enrollment string for the network | [optional] 
**id** | **str** | Network ID | [optional] 
**is_bound_to_config_template** | **bool** | If the network is bound to a config template | [optional] 
**name** | **str** | Network name | [optional] 
**notes** | **str** | Notes for the network | [optional] 
**organization_id** | **str** | Organization ID | [optional] 
**product_types** | **List[str]** | List of the product types that the network supports | [optional] 
**tags** | **List[str]** | Network tags | [optional] 
**time_zone** | **str** | Timezone of the network | [optional] 
**url** | **str** | URL to the network Dashboard UI | [optional] 

## Example

```python
from openapi_client.models.combine_organization_networks200_response_resulting_network import CombineOrganizationNetworks200ResponseResultingNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of CombineOrganizationNetworks200ResponseResultingNetwork from a JSON string
combine_organization_networks200_response_resulting_network_instance = CombineOrganizationNetworks200ResponseResultingNetwork.from_json(json)
# print the JSON string representation of the object
print(CombineOrganizationNetworks200ResponseResultingNetwork.to_json())

# convert the object into a dict
combine_organization_networks200_response_resulting_network_dict = combine_organization_networks200_response_resulting_network_instance.to_dict()
# create an instance of CombineOrganizationNetworks200ResponseResultingNetwork from a dict
combine_organization_networks200_response_resulting_network_from_dict = CombineOrganizationNetworks200ResponseResultingNetwork.from_dict(combine_organization_networks200_response_resulting_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



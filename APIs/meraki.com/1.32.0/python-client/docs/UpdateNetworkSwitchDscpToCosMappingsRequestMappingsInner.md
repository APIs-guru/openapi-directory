# UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cos** | **int** | The actual layer-2 CoS queue the DSCP value is mapped to. These are not bits set on outgoing frames. Value can be in the range of 0 to 5 inclusive. | 
**dscp** | **int** | The Differentiated Services Code Point (DSCP) tag in the IP header that will be mapped to a particular Class-of-Service (CoS) queue. Value can be in the range of 0 to 63 inclusive. | 
**title** | **str** | Label for the mapping (optional). | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_dscp_to_cos_mappings_request_mappings_inner import UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner from a JSON string
update_network_switch_dscp_to_cos_mappings_request_mappings_inner_instance = UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner.to_json())

# convert the object into a dict
update_network_switch_dscp_to_cos_mappings_request_mappings_inner_dict = update_network_switch_dscp_to_cos_mappings_request_mappings_inner_instance.to_dict()
# create an instance of UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner from a dict
update_network_switch_dscp_to_cos_mappings_request_mappings_inner_from_dict = UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner.from_dict(update_network_switch_dscp_to_cos_mappings_request_mappings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



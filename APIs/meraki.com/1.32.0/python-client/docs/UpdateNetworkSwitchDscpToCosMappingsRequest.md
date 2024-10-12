# UpdateNetworkSwitchDscpToCosMappingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappings** | [**List[UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner]**](UpdateNetworkSwitchDscpToCosMappingsRequestMappingsInner.md) | An array of DSCP to CoS mappings. An empty array will reset the mappings to default. | 

## Example

```python
from openapi_client.models.update_network_switch_dscp_to_cos_mappings_request import UpdateNetworkSwitchDscpToCosMappingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchDscpToCosMappingsRequest from a JSON string
update_network_switch_dscp_to_cos_mappings_request_instance = UpdateNetworkSwitchDscpToCosMappingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchDscpToCosMappingsRequest.to_json())

# convert the object into a dict
update_network_switch_dscp_to_cos_mappings_request_dict = update_network_switch_dscp_to_cos_mappings_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchDscpToCosMappingsRequest from a dict
update_network_switch_dscp_to_cos_mappings_request_from_dict = UpdateNetworkSwitchDscpToCosMappingsRequest.from_dict(update_network_switch_dscp_to_cos_mappings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



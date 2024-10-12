# UpdateNetworkSwitchLinkAggregationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**switch_ports** | [**List[CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner]**](CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner.md) | Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported. | [optional] 
**switch_profile_ports** | [**List[CreateNetworkSwitchLinkAggregationRequestSwitchProfilePortsInner]**](CreateNetworkSwitchLinkAggregationRequestSwitchProfilePortsInner.md) | Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_link_aggregation_request import UpdateNetworkSwitchLinkAggregationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchLinkAggregationRequest from a JSON string
update_network_switch_link_aggregation_request_instance = UpdateNetworkSwitchLinkAggregationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchLinkAggregationRequest.to_json())

# convert the object into a dict
update_network_switch_link_aggregation_request_dict = update_network_switch_link_aggregation_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchLinkAggregationRequest from a dict
update_network_switch_link_aggregation_request_from_dict = UpdateNetworkSwitchLinkAggregationRequest.from_dict(update_network_switch_link_aggregation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



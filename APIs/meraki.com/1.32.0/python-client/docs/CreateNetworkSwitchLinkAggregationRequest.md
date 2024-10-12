# CreateNetworkSwitchLinkAggregationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**switch_ports** | [**List[CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner]**](CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner.md) | Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported. | [optional] 
**switch_profile_ports** | [**List[CreateNetworkSwitchLinkAggregationRequestSwitchProfilePortsInner]**](CreateNetworkSwitchLinkAggregationRequestSwitchProfilePortsInner.md) | Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported. | [optional] 

## Example

```python
from openapi_client.models.create_network_switch_link_aggregation_request import CreateNetworkSwitchLinkAggregationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchLinkAggregationRequest from a JSON string
create_network_switch_link_aggregation_request_instance = CreateNetworkSwitchLinkAggregationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchLinkAggregationRequest.to_json())

# convert the object into a dict
create_network_switch_link_aggregation_request_dict = create_network_switch_link_aggregation_request_instance.to_dict()
# create an instance of CreateNetworkSwitchLinkAggregationRequest from a dict
create_network_switch_link_aggregation_request_from_dict = CreateNetworkSwitchLinkAggregationRequest.from_dict(create_network_switch_link_aggregation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CrowdStrikeAgent

Properties of the CrowdStrike agent installed on a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** | The Agent ID of the Crowdstrike agent. | [optional] 
**customer_id** | **str** | The Customer ID to which the agent belongs to. | [optional] 

## Example

```python
from openapi_client.models.crowd_strike_agent import CrowdStrikeAgent

# TODO update the JSON string below
json = "{}"
# create an instance of CrowdStrikeAgent from a JSON string
crowd_strike_agent_instance = CrowdStrikeAgent.from_json(json)
# print the JSON string representation of the object
print(CrowdStrikeAgent.to_json())

# convert the object into a dict
crowd_strike_agent_dict = crowd_strike_agent_instance.to_dict()
# create an instance of CrowdStrikeAgent from a dict
crowd_strike_agent_from_dict = CrowdStrikeAgent.from_dict(crowd_strike_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



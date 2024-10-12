# InMageAgentDetails

The details of the InMage agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_expiry_date** | **datetime** | Agent expiry date. | [optional] 
**agent_update_status** | **str** | A value indicating whether installed agent needs to be updated. | [optional] 
**agent_version** | **str** | The agent version. | [optional] 
**post_update_reboot_status** | **str** | A value indicating whether reboot is required after update is applied. | [optional] 

## Example

```python
from openapi_client.models.in_mage_agent_details import InMageAgentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAgentDetails from a JSON string
in_mage_agent_details_instance = InMageAgentDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAgentDetails.to_json())

# convert the object into a dict
in_mage_agent_details_dict = in_mage_agent_details_instance.to_dict()
# create an instance of InMageAgentDetails from a dict
in_mage_agent_details_from_dict = InMageAgentDetails.from_dict(in_mage_agent_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



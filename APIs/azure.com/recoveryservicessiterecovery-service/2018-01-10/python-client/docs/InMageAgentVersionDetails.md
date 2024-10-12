# InMageAgentVersionDetails

InMage agent version details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_date** | **datetime** | Version expiry date. | [optional] 
**post_update_reboot_status** | **str** | A value indicating whether reboot is required after update is applied. | [optional] 
**status** | **str** | A value indicating whether security update required. | [optional] 
**version** | **str** | The agent version. | [optional] 

## Example

```python
from openapi_client.models.in_mage_agent_version_details import InMageAgentVersionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAgentVersionDetails from a JSON string
in_mage_agent_version_details_instance = InMageAgentVersionDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAgentVersionDetails.to_json())

# convert the object into a dict
in_mage_agent_version_details_dict = in_mage_agent_version_details_instance.to_dict()
# create an instance of InMageAgentVersionDetails from a dict
in_mage_agent_version_details_from_dict = InMageAgentVersionDetails.from_dict(in_mage_agent_version_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



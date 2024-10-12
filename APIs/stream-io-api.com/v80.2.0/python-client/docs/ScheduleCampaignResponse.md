# ScheduleCampaignResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**Campaign**](Campaign.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.schedule_campaign_response import ScheduleCampaignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCampaignResponse from a JSON string
schedule_campaign_response_instance = ScheduleCampaignResponse.from_json(json)
# print the JSON string representation of the object
print(ScheduleCampaignResponse.to_json())

# convert the object into a dict
schedule_campaign_response_dict = schedule_campaign_response_instance.to_dict()
# create an instance of ScheduleCampaignResponse from a dict
schedule_campaign_response_from_dict = ScheduleCampaignResponse.from_dict(schedule_campaign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ScheduleCampaignRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_for** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.schedule_campaign_request import ScheduleCampaignRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCampaignRequest from a JSON string
schedule_campaign_request_instance = ScheduleCampaignRequest.from_json(json)
# print the JSON string representation of the object
print(ScheduleCampaignRequest.to_json())

# convert the object into a dict
schedule_campaign_request_dict = schedule_campaign_request_instance.to_dict()
# create an instance of ScheduleCampaignRequest from a dict
schedule_campaign_request_from_dict = ScheduleCampaignRequest.from_dict(schedule_campaign_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



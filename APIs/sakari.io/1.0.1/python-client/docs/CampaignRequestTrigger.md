# CampaignRequestTrigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Campaign type specifies how it sources contacts and what event triggers its execution  Sort order   * &#x60;M&#x60; - Manual   * &#x60;S&#x60; - Scheduled   * &#x60;FU&#x60; - File Upload  | [optional] 

## Example

```python
from openapi_client.models.campaign_request_trigger import CampaignRequestTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignRequestTrigger from a JSON string
campaign_request_trigger_instance = CampaignRequestTrigger.from_json(json)
# print the JSON string representation of the object
print(CampaignRequestTrigger.to_json())

# convert the object into a dict
campaign_request_trigger_dict = campaign_request_trigger_instance.to_dict()
# create an instance of CampaignRequestTrigger from a dict
campaign_request_trigger_from_dict = CampaignRequestTrigger.from_dict(campaign_request_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



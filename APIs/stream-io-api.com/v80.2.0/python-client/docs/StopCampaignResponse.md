# StopCampaignResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**Campaign**](Campaign.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.stop_campaign_response import StopCampaignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StopCampaignResponse from a JSON string
stop_campaign_response_instance = StopCampaignResponse.from_json(json)
# print the JSON string representation of the object
print(StopCampaignResponse.to_json())

# convert the object into a dict
stop_campaign_response_dict = stop_campaign_response_instance.to_dict()
# create an instance of StopCampaignResponse from a dict
stop_campaign_response_from_dict = StopCampaignResponse.from_dict(stop_campaign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



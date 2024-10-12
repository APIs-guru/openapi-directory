# UpdateCampaignResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**Campaign**](Campaign.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.update_campaign_response import UpdateCampaignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCampaignResponse from a JSON string
update_campaign_response_instance = UpdateCampaignResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCampaignResponse.to_json())

# convert the object into a dict
update_campaign_response_dict = update_campaign_response_instance.to_dict()
# create an instance of UpdateCampaignResponse from a dict
update_campaign_response_from_dict = UpdateCampaignResponse.from_dict(update_campaign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



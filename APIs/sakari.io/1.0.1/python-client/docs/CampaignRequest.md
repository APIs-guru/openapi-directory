# CampaignRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**CampaignRequestFilters**](CampaignRequestFilters.md) |  | [optional] 
**template** | **str** |  | [optional] 
**trigger** | [**CampaignRequestTrigger**](CampaignRequestTrigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.campaign_request import CampaignRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignRequest from a JSON string
campaign_request_instance = CampaignRequest.from_json(json)
# print the JSON string representation of the object
print(CampaignRequest.to_json())

# convert the object into a dict
campaign_request_dict = campaign_request_instance.to_dict()
# create an instance of CampaignRequest from a dict
campaign_request_from_dict = CampaignRequest.from_dict(campaign_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



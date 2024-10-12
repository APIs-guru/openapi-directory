# CampaignWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Campaign]**](Campaign.md) |  | [optional] 

## Example

```python
from openapi_client.models.campaign_wrapped import CampaignWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignWrapped from a JSON string
campaign_wrapped_instance = CampaignWrapped.from_json(json)
# print the JSON string representation of the object
print(CampaignWrapped.to_json())

# convert the object into a dict
campaign_wrapped_dict = campaign_wrapped_instance.to_dict()
# create an instance of CampaignWrapped from a dict
campaign_wrapped_from_dict = CampaignWrapped.from_dict(campaign_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



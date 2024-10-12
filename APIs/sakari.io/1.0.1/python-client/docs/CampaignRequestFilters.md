# CampaignRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** |  | [optional] 
**contacts** | **List[str]** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.campaign_request_filters import CampaignRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignRequestFilters from a JSON string
campaign_request_filters_instance = CampaignRequestFilters.from_json(json)
# print the JSON string representation of the object
print(CampaignRequestFilters.to_json())

# convert the object into a dict
campaign_request_filters_dict = campaign_request_filters_instance.to_dict()
# create an instance of CampaignRequestFilters from a dict
campaign_request_filters_from_dict = CampaignRequestFilters.from_dict(campaign_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CampaignSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** |  | [optional] 
**fields** | [**List[CampaignSortField]**](CampaignSortField.md) |  | 

## Example

```python
from openapi_client.models.campaign_sort import CampaignSort

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignSort from a JSON string
campaign_sort_instance = CampaignSort.from_json(json)
# print the JSON string representation of the object
print(CampaignSort.to_json())

# convert the object into a dict
campaign_sort_dict = campaign_sort_instance.to_dict()
# create an instance of CampaignSort from a dict
campaign_sort_from_dict = CampaignSort.from_dict(campaign_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



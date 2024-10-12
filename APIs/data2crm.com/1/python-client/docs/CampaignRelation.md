# CampaignRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**CampaignEntityRelation**](CampaignEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.campaign_relation import CampaignRelation

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignRelation from a JSON string
campaign_relation_instance = CampaignRelation.from_json(json)
# print the JSON string representation of the object
print(CampaignRelation.to_json())

# convert the object into a dict
campaign_relation_dict = campaign_relation_instance.to_dict()
# create an instance of CampaignRelation from a dict
campaign_relation_from_dict = CampaignRelation.from_dict(campaign_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



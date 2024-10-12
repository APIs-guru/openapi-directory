# CampaignEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_cost** | **float** | Actual Cost | [optional] 
**budgeted_cost** | **float** | Budgeted Cost | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**description** | **str** | Description | [optional] 
**ended_at** | **datetime** | Ended At | [optional] 
**expected_end_at** | **datetime** | Expected End At | [optional] 
**expected_response** | **float** | Expected Response | [optional] 
**expected_revenue** | **float** | Expected Revenue | [optional] 
**expected_start_at** | **datetime** | Expected Start At | [optional] 
**id** | **str** | Campaign Identifier | [optional] 
**is_active** | **bool** | Is Active | [optional] 
**name** | **str** | Name | [optional] 
**numbers_sent** | **int** | Numbers Sent | [optional] 
**objective** | **str** | Objective | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**started_at** | **datetime** | Started At | [optional] 
**status** | **str** | Status | [optional] 
**type** | **str** | Type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.campaign_entity import CampaignEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignEntity from a JSON string
campaign_entity_instance = CampaignEntity.from_json(json)
# print the JSON string representation of the object
print(CampaignEntity.to_json())

# convert the object into a dict
campaign_entity_dict = campaign_entity_instance.to_dict()
# create an instance of CampaignEntity from a dict
campaign_entity_from_dict = CampaignEntity.from_dict(campaign_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EnterpriseTopazSidekickRankingParams

Ranking params.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_ms** | **str** | The end-time that this object will expect to occur. If the type is marked as FIXED, then this end-time will persist after bidding. If the type is marked as FLEXIBLE, this field is NOT expected to be filled and will be filled in after it has won a bid. Expected to be set when type is set to FIXED. | [optional] 
**priority** | **str** | The priority to determine between objects that have the same start_time_ms The lower-value of priority &#x3D;&#x3D; ranked higher. Max-priority &#x3D; 0. Expected to be set for all types. | [optional] 
**score** | **float** | The score of the card to be used to break priority-ties | [optional] 
**span_ms** | **str** | The span that this card will take in the stream Expected to be set when type is set to FLEXIBLE. | [optional] 
**start_time_ms** | **str** | The start-time that this object will bid-for If the type is marked as FIXED, then this start-time will persist after bidding. If the type is marked as FLEXIBLE, then it will occur at the given time or sometime after the requested time. Expected to be set for all types. | [optional] 
**type** | **str** | The packing type of this object. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_ranking_params import EnterpriseTopazSidekickRankingParams

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickRankingParams from a JSON string
enterprise_topaz_sidekick_ranking_params_instance = EnterpriseTopazSidekickRankingParams.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickRankingParams.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_ranking_params_dict = enterprise_topaz_sidekick_ranking_params_instance.to_dict()
# create an instance of EnterpriseTopazSidekickRankingParams from a dict
enterprise_topaz_sidekick_ranking_params_from_dict = EnterpriseTopazSidekickRankingParams.from_dict(enterprise_topaz_sidekick_ranking_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



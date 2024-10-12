# V1ScoringsConsolidatedDaily200ResponseResultInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceleration_score** | **float** |  | [optional] 
**app_id** | **str** |  | [optional] 
**braking_score** | **float** |  | [optional] 
**company_id** | **str** |  | [optional] 
**cornering_score** | **float** |  | [optional] 
**device_token** | **str** |  | [optional] 
**distracted_score** | **float** |  | [optional] 
**instance_id** | **str** |  | [optional] 
**overall_score** | **float** |  | [optional] 
**report_date** | **str** |  | [optional] 
**speeding_score** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.v1_scorings_consolidated_daily200_response_result_inner import V1ScoringsConsolidatedDaily200ResponseResultInner

# TODO update the JSON string below
json = "{}"
# create an instance of V1ScoringsConsolidatedDaily200ResponseResultInner from a JSON string
v1_scorings_consolidated_daily200_response_result_inner_instance = V1ScoringsConsolidatedDaily200ResponseResultInner.from_json(json)
# print the JSON string representation of the object
print(V1ScoringsConsolidatedDaily200ResponseResultInner.to_json())

# convert the object into a dict
v1_scorings_consolidated_daily200_response_result_inner_dict = v1_scorings_consolidated_daily200_response_result_inner_instance.to_dict()
# create an instance of V1ScoringsConsolidatedDaily200ResponseResultInner from a dict
v1_scorings_consolidated_daily200_response_result_inner_from_dict = V1ScoringsConsolidatedDaily200ResponseResultInner.from_dict(v1_scorings_consolidated_daily200_response_result_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



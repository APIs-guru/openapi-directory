# UserSafeScoringAccumulatedValueV1ScoringsIndividual200ResponseResult


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
**speeding_score** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.user_safe_scoring_accumulated_value_v1_scorings_individual200_response_result import UserSafeScoringAccumulatedValueV1ScoringsIndividual200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of UserSafeScoringAccumulatedValueV1ScoringsIndividual200ResponseResult from a JSON string
user_safe_scoring_accumulated_value_v1_scorings_individual200_response_result_instance = UserSafeScoringAccumulatedValueV1ScoringsIndividual200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(UserSafeScoringAccumulatedValueV1ScoringsIndividual200ResponseResult.to_json())

# convert the object into a dict
user_safe_scoring_accumulated_value_v1_scorings_individual200_response_result_dict = user_safe_scoring_accumulated_value_v1_scorings_individual200_response_result_instance.to_dict()
# create an instance of UserSafeScoringAccumulatedValueV1ScoringsIndividual200ResponseResult from a dict
user_safe_scoring_accumulated_value_v1_scorings_individual200_response_result_from_dict = UserSafeScoringAccumulatedValueV1ScoringsIndividual200ResponseResult.from_dict(user_safe_scoring_accumulated_value_v1_scorings_individual200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



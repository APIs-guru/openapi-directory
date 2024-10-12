# RecommendedActionSessionsOperationStatus

Recommendation action session operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Operation identifier. | [optional] 
**start_time** | **datetime** | Operation start time. | [optional] 
**status** | **str** | Operation status. | [optional] 

## Example

```python
from openapi_client.models.recommended_action_sessions_operation_status import RecommendedActionSessionsOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedActionSessionsOperationStatus from a JSON string
recommended_action_sessions_operation_status_instance = RecommendedActionSessionsOperationStatus.from_json(json)
# print the JSON string representation of the object
print(RecommendedActionSessionsOperationStatus.to_json())

# convert the object into a dict
recommended_action_sessions_operation_status_dict = recommended_action_sessions_operation_status_instance.to_dict()
# create an instance of RecommendedActionSessionsOperationStatus from a dict
recommended_action_sessions_operation_status_from_dict = RecommendedActionSessionsOperationStatus.from_dict(recommended_action_sessions_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



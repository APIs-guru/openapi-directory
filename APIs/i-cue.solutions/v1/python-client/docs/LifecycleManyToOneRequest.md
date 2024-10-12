# LifecycleManyToOneRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PlanningLevelDataDto]**](PlanningLevelDataDto.md) |  | [optional] 
**planning_level_id** | **str** |  | 
**ratios** | **List[float]** |  | [optional] 

## Example

```python
from openapi_client.models.lifecycle_many_to_one_request import LifecycleManyToOneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LifecycleManyToOneRequest from a JSON string
lifecycle_many_to_one_request_instance = LifecycleManyToOneRequest.from_json(json)
# print the JSON string representation of the object
print(LifecycleManyToOneRequest.to_json())

# convert the object into a dict
lifecycle_many_to_one_request_dict = lifecycle_many_to_one_request_instance.to_dict()
# create an instance of LifecycleManyToOneRequest from a dict
lifecycle_many_to_one_request_from_dict = LifecycleManyToOneRequest.from_dict(lifecycle_many_to_one_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



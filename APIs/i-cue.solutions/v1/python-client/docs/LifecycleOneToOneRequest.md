# LifecycleOneToOneRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PlanningLevelDataDto**](PlanningLevelDataDto.md) |  | [optional] 
**planning_level_id** | **str** |  | 
**ratio** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.lifecycle_one_to_one_request import LifecycleOneToOneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LifecycleOneToOneRequest from a JSON string
lifecycle_one_to_one_request_instance = LifecycleOneToOneRequest.from_json(json)
# print the JSON string representation of the object
print(LifecycleOneToOneRequest.to_json())

# convert the object into a dict
lifecycle_one_to_one_request_dict = lifecycle_one_to_one_request_instance.to_dict()
# create an instance of LifecycleOneToOneRequest from a dict
lifecycle_one_to_one_request_from_dict = LifecycleOneToOneRequest.from_dict(lifecycle_one_to_one_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



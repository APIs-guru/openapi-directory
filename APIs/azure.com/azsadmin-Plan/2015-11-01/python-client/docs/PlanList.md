# PlanList

List of plans

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[Plan]**](Plan.md) | Array of plans. | [optional] 

## Example

```python
from openapi_client.models.plan_list import PlanList

# TODO update the JSON string below
json = "{}"
# create an instance of PlanList from a JSON string
plan_list_instance = PlanList.from_json(json)
# print the JSON string representation of the object
print(PlanList.to_json())

# convert the object into a dict
plan_list_dict = plan_list_instance.to_dict()
# create an instance of PlanList from a dict
plan_list_from_dict = PlanList.from_dict(plan_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



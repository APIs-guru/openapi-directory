# QueryPlan

Contains an ordered list of nodes appearing in the query plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_nodes** | [**List[PlanNode]**](PlanNode.md) | The nodes in the query plan. Plan nodes are returned in pre-order starting with the plan root. Each PlanNode&#39;s &#x60;id&#x60; corresponds to its index in &#x60;plan_nodes&#x60;. | [optional] 
**query_advice** | [**QueryAdvisorResult**](QueryAdvisorResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_plan import QueryPlan

# TODO update the JSON string below
json = "{}"
# create an instance of QueryPlan from a JSON string
query_plan_instance = QueryPlan.from_json(json)
# print the JSON string representation of the object
print(QueryPlan.to_json())

# convert the object into a dict
query_plan_dict = query_plan_instance.to_dict()
# create an instance of QueryPlan from a dict
query_plan_from_dict = QueryPlan.from_dict(query_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



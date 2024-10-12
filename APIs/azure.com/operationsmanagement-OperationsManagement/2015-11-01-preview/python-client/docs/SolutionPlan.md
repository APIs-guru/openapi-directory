# SolutionPlan

Plan for solution object supported by the OperationsManagement resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | name of the solution to be created. For Microsoft published solution it should be in the format of solutionType(workspaceName). SolutionType part is case sensitive. For third party solution, it can be anything. | [optional] 
**product** | **str** | name of the solution to enabled/add. For Microsoft published gallery solution it should be in the format of OMSGallery/&lt;solutionType&gt;. This is case sensitive | [optional] 
**promotion_code** | **str** | promotionCode, Not really used now, can you left as empty | [optional] 
**publisher** | **str** | Publisher name. For gallery solution, it is Microsoft. | [optional] 

## Example

```python
from openapi_client.models.solution_plan import SolutionPlan

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionPlan from a JSON string
solution_plan_instance = SolutionPlan.from_json(json)
# print the JSON string representation of the object
print(SolutionPlan.to_json())

# convert the object into a dict
solution_plan_dict = solution_plan_instance.to_dict()
# create an instance of SolutionPlan from a dict
solution_plan_from_dict = SolutionPlan.from_dict(solution_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



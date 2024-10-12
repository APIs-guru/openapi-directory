# Solution

Only available if status field indicates `finished`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_time** | **int** | Overall completion time in seconds, i.e. the sum of each routes/drivers operation time. | [optional] 
**costs** | **int** |  | [optional] 
**distance** | **int** | Overall distance travelled in meter, i.e. the sum of each route&#39;s transport distance | [optional] 
**max_operation_time** | **int** | Operation time of longest route in seconds. | [optional] 
**no_unassigned** | **int** | Number of jobs that could not be assigned to final solution. | [optional] 
**no_vehicles** | **int** | Number of employed vehicles. | [optional] 
**preparation_time** | **int** | Overall preparation time in seconds. | [optional] 
**routes** | [**List[Route]**](Route.md) | An array of routes | [optional] 
**service_duration** | **int** | Overall service time in seconds. | [optional] 
**time** | **int** | Use &#x60;transport_time&#x60; instead. | [optional] 
**transport_time** | **int** | Overall time travelled in seconds, i.e. the sum of each route&#39;s transport time. | [optional] 
**unassigned** | [**SolutionUnassigned**](SolutionUnassigned.md) |  | [optional] 
**waiting_time** | **int** | Overall waiting time in seconds. | [optional] 

## Example

```python
from openapi_client.models.solution import Solution

# TODO update the JSON string below
json = "{}"
# create an instance of Solution from a JSON string
solution_instance = Solution.from_json(json)
# print the JSON string representation of the object
print(Solution.to_json())

# convert the object into a dict
solution_dict = solution_instance.to_dict()
# create an instance of Solution from a dict
solution_from_dict = Solution.from_dict(solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



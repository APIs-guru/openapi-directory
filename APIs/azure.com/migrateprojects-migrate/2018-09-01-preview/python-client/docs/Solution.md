# Solution

Solution REST Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the ETAG for optimistic concurrency control. | [optional] 
**id** | **str** | Gets the relative URL to get to this REST resource. | [optional] [readonly] 
**name** | **str** | Gets the name of this REST resource. | [optional] [readonly] 
**properties** | [**SolutionProperties**](SolutionProperties.md) |  | [optional] 
**type** | **str** | Gets the type of this REST resource. | [optional] [readonly] 

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



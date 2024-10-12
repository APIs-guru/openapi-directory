# SolutionUnassigned


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breaks** | **List[str]** | An array of ids of unassigned breaks | [optional] 
**details** | [**List[Detail]**](Detail.md) | An array of details, i.e. reason for unassigned services or shipments | [optional] 
**services** | **List[str]** | An array of ids of unassigned services | [optional] 
**shipments** | **List[str]** | An array of ids of unassigned shipments | [optional] 

## Example

```python
from openapi_client.models.solution_unassigned import SolutionUnassigned

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionUnassigned from a JSON string
solution_unassigned_instance = SolutionUnassigned.from_json(json)
# print the JSON string representation of the object
print(SolutionUnassigned.to_json())

# convert the object into a dict
solution_unassigned_dict = solution_unassigned_instance.to_dict()
# create an instance of SolutionUnassigned from a dict
solution_unassigned_from_dict = SolutionUnassigned.from_dict(solution_unassigned_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



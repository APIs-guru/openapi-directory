# UWPSolution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurations** | **List[str]** | The possible configurations detected for the UWP solution | 
**path** | **str** | The path to the UWP solution | 

## Example

```python
from openapi_client.models.uwp_solution import UWPSolution

# TODO update the JSON string below
json = "{}"
# create an instance of UWPSolution from a JSON string
uwp_solution_instance = UWPSolution.from_json(json)
# print the JSON string representation of the object
print(UWPSolution.to_json())

# convert the object into a dict
uwp_solution_dict = uwp_solution_instance.to_dict()
# create an instance of UWPSolution from a dict
uwp_solution_from_dict = UWPSolution.from_dict(uwp_solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



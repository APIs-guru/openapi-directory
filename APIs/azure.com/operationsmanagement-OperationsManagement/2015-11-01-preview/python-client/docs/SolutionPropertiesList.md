# SolutionPropertiesList

the list of solution response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Solution]**](Solution.md) | List of solution properties within the subscription. | [optional] 

## Example

```python
from openapi_client.models.solution_properties_list import SolutionPropertiesList

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionPropertiesList from a JSON string
solution_properties_list_instance = SolutionPropertiesList.from_json(json)
# print the JSON string representation of the object
print(SolutionPropertiesList.to_json())

# convert the object into a dict
solution_properties_list_dict = solution_properties_list_instance.to_dict()
# create an instance of SolutionPropertiesList from a dict
solution_properties_list_from_dict = SolutionPropertiesList.from_dict(solution_properties_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



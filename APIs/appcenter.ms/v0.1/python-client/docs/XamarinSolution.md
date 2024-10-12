# XamarinSolution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurations** | **List[str]** | Solution configurations | 
**default_configuration** | **str** | Solution default configuration | [optional] 
**path** | **str** | Path to solution | 

## Example

```python
from openapi_client.models.xamarin_solution import XamarinSolution

# TODO update the JSON string below
json = "{}"
# create an instance of XamarinSolution from a JSON string
xamarin_solution_instance = XamarinSolution.from_json(json)
# print the JSON string representation of the object
print(XamarinSolution.to_json())

# convert the object into a dict
xamarin_solution_dict = xamarin_solution_instance.to_dict()
# create an instance of XamarinSolution from a dict
xamarin_solution_from_dict = XamarinSolution.from_dict(xamarin_solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



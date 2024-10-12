# SolutionConfig

Class representing the config for the solution in the migrate project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_sas_uri** | **str** | Gets or sets the publisher sas uri for the solution. | [optional] 

## Example

```python
from openapi_client.models.solution_config import SolutionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionConfig from a JSON string
solution_config_instance = SolutionConfig.from_json(json)
# print the JSON string representation of the object
print(SolutionConfig.to_json())

# convert the object into a dict
solution_config_dict = solution_config_instance.to_dict()
# create an instance of SolutionConfig from a dict
solution_config_from_dict = SolutionConfig.from_dict(solution_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



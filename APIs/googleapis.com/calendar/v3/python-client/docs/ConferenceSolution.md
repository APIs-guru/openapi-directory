# ConferenceSolution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon_uri** | **str** | The user-visible icon for this solution. | [optional] 
**key** | [**ConferenceSolutionKey**](ConferenceSolutionKey.md) |  | [optional] 
**name** | **str** | The user-visible name of this solution. Not localized. | [optional] 

## Example

```python
from openapi_client.models.conference_solution import ConferenceSolution

# TODO update the JSON string below
json = "{}"
# create an instance of ConferenceSolution from a JSON string
conference_solution_instance = ConferenceSolution.from_json(json)
# print the JSON string representation of the object
print(ConferenceSolution.to_json())

# convert the object into a dict
conference_solution_dict = conference_solution_instance.to_dict()
# create an instance of ConferenceSolution from a dict
conference_solution_from_dict = ConferenceSolution.from_dict(conference_solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



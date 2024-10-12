# ProblemClassificationsListResult

Collection of ProblemClassification resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ProblemClassification]**](ProblemClassification.md) | List of ProblemClassification resources | [optional] 

## Example

```python
from openapi_client.models.problem_classifications_list_result import ProblemClassificationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProblemClassificationsListResult from a JSON string
problem_classifications_list_result_instance = ProblemClassificationsListResult.from_json(json)
# print the JSON string representation of the object
print(ProblemClassificationsListResult.to_json())

# convert the object into a dict
problem_classifications_list_result_dict = problem_classifications_list_result_instance.to_dict()
# create an instance of ProblemClassificationsListResult from a dict
problem_classifications_list_result_from_dict = ProblemClassificationsListResult.from_dict(problem_classifications_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



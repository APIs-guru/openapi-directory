# ProblemClassification

ProblemClassification resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**properties** | [**ProblemClassificationProperties**](ProblemClassificationProperties.md) |  | [optional] 
**type** | **str** | Type of the resource &#39;Microsoft.Support/problemClassification&#39; | [optional] [readonly] 

## Example

```python
from openapi_client.models.problem_classification import ProblemClassification

# TODO update the JSON string below
json = "{}"
# create an instance of ProblemClassification from a JSON string
problem_classification_instance = ProblemClassification.from_json(json)
# print the JSON string representation of the object
print(ProblemClassification.to_json())

# convert the object into a dict
problem_classification_dict = problem_classification_instance.to_dict()
# create an instance of ProblemClassification from a dict
problem_classification_from_dict = ProblemClassification.from_dict(problem_classification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



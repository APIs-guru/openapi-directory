# ProblemClassificationProperties

Details about a problem classification available for an Azure service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Localized name of problem classification. | [optional] 

## Example

```python
from openapi_client.models.problem_classification_properties import ProblemClassificationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProblemClassificationProperties from a JSON string
problem_classification_properties_instance = ProblemClassificationProperties.from_json(json)
# print the JSON string representation of the object
print(ProblemClassificationProperties.to_json())

# convert the object into a dict
problem_classification_properties_dict = problem_classification_properties_instance.to_dict()
# create an instance of ProblemClassificationProperties from a dict
problem_classification_properties_from_dict = ProblemClassificationProperties.from_dict(problem_classification_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



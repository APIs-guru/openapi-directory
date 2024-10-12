# AssessmentOptions

Assessment options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of an assessment options. | [optional] [readonly] 
**name** | **str** | Unique name of an assessment options. | [optional] [readonly] 
**properties** | [**AssessmentOptionsProperties**](AssessmentOptionsProperties.md) |  | 

## Example

```python
from openapi_client.models.assessment_options import AssessmentOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentOptions from a JSON string
assessment_options_instance = AssessmentOptions.from_json(json)
# print the JSON string representation of the object
print(AssessmentOptions.to_json())

# convert the object into a dict
assessment_options_dict = assessment_options_instance.to_dict()
# create an instance of AssessmentOptions from a dict
assessment_options_from_dict = AssessmentOptions.from_dict(assessment_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



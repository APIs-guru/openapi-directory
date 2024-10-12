# ScaleQuestion

A scale question. The user has a range of numeric values to choose from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **int** | Required. The highest possible value for the scale. | [optional] 
**high_label** | **str** | The label to display describing the highest point on the scale. | [optional] 
**low** | **int** | Required. The lowest possible value for the scale. | [optional] 
**low_label** | **str** | The label to display describing the lowest point on the scale. | [optional] 

## Example

```python
from openapi_client.models.scale_question import ScaleQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleQuestion from a JSON string
scale_question_instance = ScaleQuestion.from_json(json)
# print the JSON string representation of the object
print(ScaleQuestion.to_json())

# convert the object into a dict
scale_question_dict = scale_question_instance.to_dict()
# create an instance of ScaleQuestion from a dict
scale_question_from_dict = ScaleQuestion.from_dict(scale_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



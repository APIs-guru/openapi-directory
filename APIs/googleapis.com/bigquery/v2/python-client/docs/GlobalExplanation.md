# GlobalExplanation

Global explanations containing the top most important features after training.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_label** | **str** | Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order. | [optional] 
**explanations** | [**List[Explanation]**](Explanation.md) | A list of the top global explanations. Sorted by absolute value of attribution in descending order. | [optional] 

## Example

```python
from openapi_client.models.global_explanation import GlobalExplanation

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalExplanation from a JSON string
global_explanation_instance = GlobalExplanation.from_json(json)
# print the JSON string representation of the object
print(GlobalExplanation.to_json())

# convert the object into a dict
global_explanation_dict = global_explanation_instance.to_dict()
# create an instance of GlobalExplanation from a dict
global_explanation_from_dict = GlobalExplanation.from_dict(global_explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



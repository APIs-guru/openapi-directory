# RestrictionEvaluation

The evaluated state of this restriction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Output only. The current state of the restriction | [optional] [readonly] 

## Example

```python
from openapi_client.models.restriction_evaluation import RestrictionEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of RestrictionEvaluation from a JSON string
restriction_evaluation_instance = RestrictionEvaluation.from_json(json)
# print the JSON string representation of the object
print(RestrictionEvaluation.to_json())

# convert the object into a dict
restriction_evaluation_dict = restriction_evaluation_instance.to_dict()
# create an instance of RestrictionEvaluation from a dict
restriction_evaluation_from_dict = RestrictionEvaluation.from_dict(restriction_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# IfNotExistsEvaluationDetails

Evaluation details of IfNotExists effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | ID of the last evaluated resource for IfNotExists effect. | [optional] 
**total_resources** | **int** | Total number of resources to which the existence condition is applicable. | [optional] 

## Example

```python
from openapi_client.models.if_not_exists_evaluation_details import IfNotExistsEvaluationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IfNotExistsEvaluationDetails from a JSON string
if_not_exists_evaluation_details_instance = IfNotExistsEvaluationDetails.from_json(json)
# print the JSON string representation of the object
print(IfNotExistsEvaluationDetails.to_json())

# convert the object into a dict
if_not_exists_evaluation_details_dict = if_not_exists_evaluation_details_instance.to_dict()
# create an instance of IfNotExistsEvaluationDetails from a dict
if_not_exists_evaluation_details_from_dict = IfNotExistsEvaluationDetails.from_dict(if_not_exists_evaluation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



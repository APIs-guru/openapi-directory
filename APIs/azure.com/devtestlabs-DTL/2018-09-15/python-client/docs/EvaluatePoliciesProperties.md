# EvaluatePoliciesProperties

Properties for evaluating a policy set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fact_data** | **str** | The fact data. | [optional] 
**fact_name** | **str** | The fact name. | [optional] 
**user_object_id** | **str** | The user for which policies will be evaluated | [optional] 
**value_offset** | **str** | The value offset. | [optional] 

## Example

```python
from openapi_client.models.evaluate_policies_properties import EvaluatePoliciesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluatePoliciesProperties from a JSON string
evaluate_policies_properties_instance = EvaluatePoliciesProperties.from_json(json)
# print the JSON string representation of the object
print(EvaluatePoliciesProperties.to_json())

# convert the object into a dict
evaluate_policies_properties_dict = evaluate_policies_properties_instance.to_dict()
# create an instance of EvaluatePoliciesProperties from a dict
evaluate_policies_properties_from_dict = EvaluatePoliciesProperties.from_dict(evaluate_policies_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PolicyProperties

Properties of a Policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the policy. | [optional] 
**evaluator_type** | **str** | The evaluator type of the policy. | [optional] 
**fact_data** | **str** | The fact data of the policy. | [optional] 
**fact_name** | **str** | The fact name of the policy. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**status** | **str** | The status of the policy. | [optional] 
**threshold** | **str** | The threshold of the policy. | [optional] 

## Example

```python
from openapi_client.models.policy_properties import PolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyProperties from a JSON string
policy_properties_instance = PolicyProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyProperties.to_json())

# convert the object into a dict
policy_properties_dict = policy_properties_instance.to_dict()
# create an instance of PolicyProperties from a dict
policy_properties_from_dict = PolicyProperties.from_dict(policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



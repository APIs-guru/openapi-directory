# Condition

A condition to be met.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iam** | **str** | Trusted attributes supplied by the IAM system. | [optional] 
**op** | **str** | An operator to apply the subject with. | [optional] 
**svc** | **str** | Trusted attributes discharged by the service. | [optional] 
**sys** | **str** | Trusted attributes supplied by any service that owns resources and uses the IAM system for access control. | [optional] 
**values** | **List[str]** | The objects of the condition. | [optional] 

## Example

```python
from openapi_client.models.condition import Condition

# TODO update the JSON string below
json = "{}"
# create an instance of Condition from a JSON string
condition_instance = Condition.from_json(json)
# print the JSON string representation of the object
print(Condition.to_json())

# convert the object into a dict
condition_dict = condition_instance.to_dict()
# create an instance of Condition from a dict
condition_from_dict = Condition.from_dict(condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



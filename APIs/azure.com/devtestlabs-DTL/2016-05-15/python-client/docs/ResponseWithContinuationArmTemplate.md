# ResponseWithContinuationArmTemplate

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[ArmTemplate]**](ArmTemplate.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_arm_template import ResponseWithContinuationArmTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationArmTemplate from a JSON string
response_with_continuation_arm_template_instance = ResponseWithContinuationArmTemplate.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationArmTemplate.to_json())

# convert the object into a dict
response_with_continuation_arm_template_dict = response_with_continuation_arm_template_instance.to_dict()
# create an instance of ResponseWithContinuationArmTemplate from a dict
response_with_continuation_arm_template_from_dict = ResponseWithContinuationArmTemplate.from_dict(response_with_continuation_arm_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



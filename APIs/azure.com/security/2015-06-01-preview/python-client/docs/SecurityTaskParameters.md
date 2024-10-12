# SecurityTaskParameters

Changing set of properties, depending on the task type that is derived from the name field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the task type | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_task_parameters import SecurityTaskParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityTaskParameters from a JSON string
security_task_parameters_instance = SecurityTaskParameters.from_json(json)
# print the JSON string representation of the object
print(SecurityTaskParameters.to_json())

# convert the object into a dict
security_task_parameters_dict = security_task_parameters_instance.to_dict()
# create an instance of SecurityTaskParameters from a dict
security_task_parameters_from_dict = SecurityTaskParameters.from_dict(security_task_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



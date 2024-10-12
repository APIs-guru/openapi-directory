# SecurityTask

Security task that we recommend to do in order to strengthen security

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecurityTaskProperties**](SecurityTaskProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_task import SecurityTask

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityTask from a JSON string
security_task_instance = SecurityTask.from_json(json)
# print the JSON string representation of the object
print(SecurityTask.to_json())

# convert the object into a dict
security_task_dict = security_task_instance.to_dict()
# create an instance of SecurityTask from a dict
security_task_from_dict = SecurityTask.from_dict(security_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



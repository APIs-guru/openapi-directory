# SecurityTaskList

List of security task recommendations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[SecurityTask]**](SecurityTask.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_task_list import SecurityTaskList

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityTaskList from a JSON string
security_task_list_instance = SecurityTaskList.from_json(json)
# print the JSON string representation of the object
print(SecurityTaskList.to_json())

# convert the object into a dict
security_task_list_dict = security_task_list_instance.to_dict()
# create an instance of SecurityTaskList from a dict
security_task_list_from_dict = SecurityTaskList.from_dict(security_task_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



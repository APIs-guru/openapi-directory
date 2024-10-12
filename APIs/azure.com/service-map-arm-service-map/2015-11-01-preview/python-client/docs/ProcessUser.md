# ProcessUser

Describes the user under which a process is running.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_domain** | **str** | Domain name for the user. | [optional] 
**user_name** | **str** | User name under which the process is running. | [optional] 

## Example

```python
from openapi_client.models.process_user import ProcessUser

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessUser from a JSON string
process_user_instance = ProcessUser.from_json(json)
# print the JSON string representation of the object
print(ProcessUser.to_json())

# convert the object into a dict
process_user_dict = process_user_instance.to_dict()
# create an instance of ProcessUser from a dict
process_user_from_dict = ProcessUser.from_dict(process_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



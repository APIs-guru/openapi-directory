# InMemoryUser

A user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the user | 
**metadata** | **Dict[str, str]** | Metadata of the user | 
**name** | **str** | Name of the user | 
**password** | **str** | Password of the user (BCrypt hash) | 

## Example

```python
from openapi_client.models.in_memory_user import InMemoryUser

# TODO update the JSON string below
json = "{}"
# create an instance of InMemoryUser from a JSON string
in_memory_user_instance = InMemoryUser.from_json(json)
# print the JSON string representation of the object
print(InMemoryUser.to_json())

# convert the object into a dict
in_memory_user_dict = in_memory_user_instance.to_dict()
# create an instance of InMemoryUser from a dict
in_memory_user_from_dict = InMemoryUser.from_dict(in_memory_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



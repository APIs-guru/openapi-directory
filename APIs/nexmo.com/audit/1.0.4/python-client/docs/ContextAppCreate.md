# ContextAppCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | UUID of the app that was created | [optional] 
**created** | [**ContextAppCreateCreated**](ContextAppCreateCreated.md) |  | [optional] 

## Example

```python
from openapi_client.models.context_app_create import ContextAppCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ContextAppCreate from a JSON string
context_app_create_instance = ContextAppCreate.from_json(json)
# print the JSON string representation of the object
print(ContextAppCreate.to_json())

# convert the object into a dict
context_app_create_dict = context_app_create_instance.to_dict()
# create an instance of ContextAppCreate from a dict
context_app_create_from_dict = ContextAppCreate.from_dict(context_app_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



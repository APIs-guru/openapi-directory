# ContextAppCreateCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Which account the app is associated with | [optional] 
**answer_url** | [**CallbackUrl**](CallbackUrl.md) |  | [optional] 
**app_id** | **str** | UUID of the app that was created | [optional] 
**event_url** | [**CallbackUrl**](CallbackUrl.md) |  | [optional] 
**name** | **str** | The name of the application created | [optional] 
**type** | **str** | The type of application created | [optional] 

## Example

```python
from openapi_client.models.context_app_create_created import ContextAppCreateCreated

# TODO update the JSON string below
json = "{}"
# create an instance of ContextAppCreateCreated from a JSON string
context_app_create_created_instance = ContextAppCreateCreated.from_json(json)
# print the JSON string representation of the object
print(ContextAppCreateCreated.to_json())

# convert the object into a dict
context_app_create_created_dict = context_app_create_created_instance.to_dict()
# create an instance of ContextAppCreateCreated from a dict
context_app_create_created_from_dict = ContextAppCreateCreated.from_dict(context_app_create_created_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



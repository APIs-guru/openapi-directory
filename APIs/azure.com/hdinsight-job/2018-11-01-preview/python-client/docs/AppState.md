# AppState

The State of the application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The State of the application. | [optional] 

## Example

```python
from openapi_client.models.app_state import AppState

# TODO update the JSON string below
json = "{}"
# create an instance of AppState from a JSON string
app_state_instance = AppState.from_json(json)
# print the JSON string representation of the object
print(AppState.to_json())

# convert the object into a dict
app_state_dict = app_state_instance.to_dict()
# create an instance of AppState from a dict
app_state_from_dict = AppState.from_dict(app_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



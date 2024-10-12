# AppContext

Output only. The app type the restriction applies to for mobile device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_types** | **List[str]** | The app types this restriction applies to. | [optional] 

## Example

```python
from openapi_client.models.app_context import AppContext

# TODO update the JSON string below
json = "{}"
# create an instance of AppContext from a JSON string
app_context_instance = AppContext.from_json(json)
# print the JSON string representation of the object
print(AppContext.to_json())

# convert the object into a dict
app_context_dict = app_context_instance.to_dict()
# create an instance of AppContext from a dict
app_context_from_dict = AppContext.from_dict(app_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



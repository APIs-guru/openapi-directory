# AppEdit

An app edit. The resource for EditsService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time_seconds** | **str** | Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use. | [optional] [readonly] 
**id** | **str** | Output only. Identifier of the edit. Can be used in subsequent API calls. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_edit import AppEdit

# TODO update the JSON string below
json = "{}"
# create an instance of AppEdit from a JSON string
app_edit_instance = AppEdit.from_json(json)
# print the JSON string representation of the object
print(AppEdit.to_json())

# convert the object into a dict
app_edit_dict = app_edit_instance.to_dict()
# create an instance of AppEdit from a dict
app_edit_from_dict = AppEdit.from_dict(app_edit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



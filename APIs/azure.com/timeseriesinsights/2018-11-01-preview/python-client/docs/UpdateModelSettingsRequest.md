# UpdateModelSettingsRequest

Request to update model settings. One of \"name\" or \"defaultTypeId\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_type_id** | **str** | Default type id of the model that new instances will automatically belong to. | [optional] 
**name** | **str** | Model display name which is shown in the UX and mutable by the user. Initial value is \&quot;DefaultModel\&quot;. | [optional] 

## Example

```python
from openapi_client.models.update_model_settings_request import UpdateModelSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateModelSettingsRequest from a JSON string
update_model_settings_request_instance = UpdateModelSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateModelSettingsRequest.to_json())

# convert the object into a dict
update_model_settings_request_dict = update_model_settings_request_instance.to_dict()
# create an instance of UpdateModelSettingsRequest from a dict
update_model_settings_request_from_dict = UpdateModelSettingsRequest.from_dict(update_model_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



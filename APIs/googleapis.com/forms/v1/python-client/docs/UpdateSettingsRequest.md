# UpdateSettingsRequest

Update Form's FormSettings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**FormSettings**](FormSettings.md) |  | [optional] 
**update_mask** | **str** | Required. Only values named in this mask are changed. At least one field must be specified. The root &#x60;settings&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for updating every field. | [optional] 

## Example

```python
from openapi_client.models.update_settings_request import UpdateSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSettingsRequest from a JSON string
update_settings_request_instance = UpdateSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSettingsRequest.to_json())

# convert the object into a dict
update_settings_request_dict = update_settings_request_instance.to_dict()
# create an instance of UpdateSettingsRequest from a dict
update_settings_request_from_dict = UpdateSettingsRequest.from_dict(update_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



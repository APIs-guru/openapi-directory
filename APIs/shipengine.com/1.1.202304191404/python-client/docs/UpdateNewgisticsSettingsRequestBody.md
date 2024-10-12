# UpdateNewgisticsSettingsRequestBody

A newgistics account settings request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_barcode_with_order_number** | **bool** |  | [optional] 
**receive_email_on_manifest_processing** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.update_newgistics_settings_request_body import UpdateNewgisticsSettingsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNewgisticsSettingsRequestBody from a JSON string
update_newgistics_settings_request_body_instance = UpdateNewgisticsSettingsRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateNewgisticsSettingsRequestBody.to_json())

# convert the object into a dict
update_newgistics_settings_request_body_dict = update_newgistics_settings_request_body_instance.to_dict()
# create an instance of UpdateNewgisticsSettingsRequestBody from a dict
update_newgistics_settings_request_body_from_dict = UpdateNewgisticsSettingsRequestBody.from_dict(update_newgistics_settings_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



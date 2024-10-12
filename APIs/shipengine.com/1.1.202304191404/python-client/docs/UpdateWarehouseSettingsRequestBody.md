# UpdateWarehouseSettingsRequestBody

An update warehouse settings request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_default** | **bool** | The default property on the warehouse. | [optional] 

## Example

```python
from openapi_client.models.update_warehouse_settings_request_body import UpdateWarehouseSettingsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWarehouseSettingsRequestBody from a JSON string
update_warehouse_settings_request_body_instance = UpdateWarehouseSettingsRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateWarehouseSettingsRequestBody.to_json())

# convert the object into a dict
update_warehouse_settings_request_body_dict = update_warehouse_settings_request_body_instance.to_dict()
# create an instance of UpdateWarehouseSettingsRequestBody from a dict
update_warehouse_settings_request_body_from_dict = UpdateWarehouseSettingsRequestBody.from_dict(update_warehouse_settings_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



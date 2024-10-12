# InsertCheckoutSettingsRequest

Request message for the `InsertCheckoutSettings` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri_settings** | [**UrlSettings**](UrlSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.insert_checkout_settings_request import InsertCheckoutSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertCheckoutSettingsRequest from a JSON string
insert_checkout_settings_request_instance = InsertCheckoutSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(InsertCheckoutSettingsRequest.to_json())

# convert the object into a dict
insert_checkout_settings_request_dict = insert_checkout_settings_request_instance.to_dict()
# create an instance of InsertCheckoutSettingsRequest from a dict
insert_checkout_settings_request_from_dict = InsertCheckoutSettingsRequest.from_dict(insert_checkout_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



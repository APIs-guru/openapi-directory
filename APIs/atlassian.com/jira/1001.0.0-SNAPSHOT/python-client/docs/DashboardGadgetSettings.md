# DashboardGadgetSettings

Details of the settings for a dashboard gadget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | The color of the gadget. Should be one of &#x60;blue&#x60;, &#x60;red&#x60;, &#x60;yellow&#x60;, &#x60;green&#x60;, &#x60;cyan&#x60;, &#x60;purple&#x60;, &#x60;gray&#x60;, or &#x60;white&#x60;. | [optional] 
**ignore_uri_and_module_key_validation** | **bool** | Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn&#39;t installed. | [optional] 
**module_key** | **str** | The module key of the gadget type. Can&#39;t be provided with &#x60;uri&#x60;. | [optional] 
**position** | [**DashboardGadgetPosition**](DashboardGadgetPosition.md) | The position of the gadget. When the gadget is placed into the position, other gadgets in the same column are moved down to accommodate it. | [optional] 
**title** | **str** | The title of the gadget. | [optional] 
**uri** | **str** | The URI of the gadget type. Can&#39;t be provided with &#x60;moduleKey&#x60;. | [optional] 

## Example

```python
from openapi_client.models.dashboard_gadget_settings import DashboardGadgetSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardGadgetSettings from a JSON string
dashboard_gadget_settings_instance = DashboardGadgetSettings.from_json(json)
# print the JSON string representation of the object
print(DashboardGadgetSettings.to_json())

# convert the object into a dict
dashboard_gadget_settings_dict = dashboard_gadget_settings_instance.to_dict()
# create an instance of DashboardGadgetSettings from a dict
dashboard_gadget_settings_from_dict = DashboardGadgetSettings.from_dict(dashboard_gadget_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



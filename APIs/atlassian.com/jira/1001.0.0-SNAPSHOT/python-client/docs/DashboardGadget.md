# DashboardGadget

Details of a gadget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | The color of the gadget. Should be one of &#x60;blue&#x60;, &#x60;red&#x60;, &#x60;yellow&#x60;, &#x60;green&#x60;, &#x60;cyan&#x60;, &#x60;purple&#x60;, &#x60;gray&#x60;, or &#x60;white&#x60;. | [readonly] 
**id** | **int** | The ID of the gadget instance. | [readonly] 
**module_key** | **str** | The module key of the gadget type. | [optional] [readonly] 
**position** | [**DashboardGadgetPosition**](DashboardGadgetPosition.md) | The position of the gadget. | [readonly] 
**title** | **str** | The title of the gadget. | [readonly] 
**uri** | **str** | The URI of the gadget type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dashboard_gadget import DashboardGadget

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardGadget from a JSON string
dashboard_gadget_instance = DashboardGadget.from_json(json)
# print the JSON string representation of the object
print(DashboardGadget.to_json())

# convert the object into a dict
dashboard_gadget_dict = dashboard_gadget_instance.to_dict()
# create an instance of DashboardGadget from a dict
dashboard_gadget_from_dict = DashboardGadget.from_dict(dashboard_gadget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



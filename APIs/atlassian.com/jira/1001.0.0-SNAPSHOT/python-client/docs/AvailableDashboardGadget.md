# AvailableDashboardGadget

The details of the available dashboard gadget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module_key** | **str** | The module key of the gadget type. | [optional] [readonly] 
**title** | **str** | The title of the gadget. | [readonly] 
**uri** | **str** | The URI of the gadget type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.available_dashboard_gadget import AvailableDashboardGadget

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableDashboardGadget from a JSON string
available_dashboard_gadget_instance = AvailableDashboardGadget.from_json(json)
# print the JSON string representation of the object
print(AvailableDashboardGadget.to_json())

# convert the object into a dict
available_dashboard_gadget_dict = available_dashboard_gadget_instance.to_dict()
# create an instance of AvailableDashboardGadget from a dict
available_dashboard_gadget_from_dict = AvailableDashboardGadget.from_dict(available_dashboard_gadget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



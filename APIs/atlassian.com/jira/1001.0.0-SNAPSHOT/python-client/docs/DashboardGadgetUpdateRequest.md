# DashboardGadgetUpdateRequest

The details of the gadget to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | The color of the gadget. Should be one of &#x60;blue&#x60;, &#x60;red&#x60;, &#x60;yellow&#x60;, &#x60;green&#x60;, &#x60;cyan&#x60;, &#x60;purple&#x60;, &#x60;gray&#x60;, or &#x60;white&#x60;. | [optional] 
**position** | [**DashboardGadgetPosition**](DashboardGadgetPosition.md) | The position of the gadget. | [optional] 
**title** | **str** | The title of the gadget. | [optional] 

## Example

```python
from openapi_client.models.dashboard_gadget_update_request import DashboardGadgetUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardGadgetUpdateRequest from a JSON string
dashboard_gadget_update_request_instance = DashboardGadgetUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(DashboardGadgetUpdateRequest.to_json())

# convert the object into a dict
dashboard_gadget_update_request_dict = dashboard_gadget_update_request_instance.to_dict()
# create an instance of DashboardGadgetUpdateRequest from a dict
dashboard_gadget_update_request_from_dict = DashboardGadgetUpdateRequest.from_dict(dashboard_gadget_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



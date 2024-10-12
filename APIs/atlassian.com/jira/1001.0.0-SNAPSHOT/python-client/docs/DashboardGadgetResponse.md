# DashboardGadgetResponse

The list of gadgets on the dashboard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gadgets** | [**List[DashboardGadget]**](DashboardGadget.md) | The list of gadgets. | [readonly] 

## Example

```python
from openapi_client.models.dashboard_gadget_response import DashboardGadgetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardGadgetResponse from a JSON string
dashboard_gadget_response_instance = DashboardGadgetResponse.from_json(json)
# print the JSON string representation of the object
print(DashboardGadgetResponse.to_json())

# convert the object into a dict
dashboard_gadget_response_dict = dashboard_gadget_response_instance.to_dict()
# create an instance of DashboardGadgetResponse from a dict
dashboard_gadget_response_from_dict = DashboardGadgetResponse.from_dict(dashboard_gadget_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



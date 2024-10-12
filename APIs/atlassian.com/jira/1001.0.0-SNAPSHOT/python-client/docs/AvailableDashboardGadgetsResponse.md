# AvailableDashboardGadgetsResponse

The list of available gadgets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gadgets** | [**List[AvailableDashboardGadget]**](AvailableDashboardGadget.md) | The list of available gadgets. | [readonly] 

## Example

```python
from openapi_client.models.available_dashboard_gadgets_response import AvailableDashboardGadgetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableDashboardGadgetsResponse from a JSON string
available_dashboard_gadgets_response_instance = AvailableDashboardGadgetsResponse.from_json(json)
# print the JSON string representation of the object
print(AvailableDashboardGadgetsResponse.to_json())

# convert the object into a dict
available_dashboard_gadgets_response_dict = available_dashboard_gadgets_response_instance.to_dict()
# create an instance of AvailableDashboardGadgetsResponse from a dict
available_dashboard_gadgets_response_from_dict = AvailableDashboardGadgetsResponse.from_dict(available_dashboard_gadgets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



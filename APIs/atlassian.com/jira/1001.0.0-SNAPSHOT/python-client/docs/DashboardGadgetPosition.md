# DashboardGadgetPosition

Details of a gadget position.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**the_column_position_of_the_gadget_** | **int** |  | 
**the_row_position_of_the_gadget_** | **int** |  | 

## Example

```python
from openapi_client.models.dashboard_gadget_position import DashboardGadgetPosition

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardGadgetPosition from a JSON string
dashboard_gadget_position_instance = DashboardGadgetPosition.from_json(json)
# print the JSON string representation of the object
print(DashboardGadgetPosition.to_json())

# convert the object into a dict
dashboard_gadget_position_dict = dashboard_gadget_position_instance.to_dict()
# create an instance of DashboardGadgetPosition from a dict
dashboard_gadget_position_from_dict = DashboardGadgetPosition.from_dict(dashboard_gadget_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BillbeeInterfacesOrderHistoryEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**employee_name** | **str** |  | [optional] 
**event_type_name** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**type_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_order_history_entry import BillbeeInterfacesOrderHistoryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesOrderHistoryEntry from a JSON string
billbee_interfaces_order_history_entry_instance = BillbeeInterfacesOrderHistoryEntry.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesOrderHistoryEntry.to_json())

# convert the object into a dict
billbee_interfaces_order_history_entry_dict = billbee_interfaces_order_history_entry_instance.to_dict()
# create an instance of BillbeeInterfacesOrderHistoryEntry from a dict
billbee_interfaces_order_history_entry_from_dict = BillbeeInterfacesOrderHistoryEntry.from_dict(billbee_interfaces_order_history_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PickupWindow

The desired time range for the package pickup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | 
**start_at** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | 

## Example

```python
from openapi_client.models.pickup_window import PickupWindow

# TODO update the JSON string below
json = "{}"
# create an instance of PickupWindow from a JSON string
pickup_window_instance = PickupWindow.from_json(json)
# print the JSON string representation of the object
print(PickupWindow.to_json())

# convert the object into a dict
pickup_window_dict = pickup_window_instance.to_dict()
# create an instance of PickupWindow from a dict
pickup_window_from_dict = PickupWindow.from_dict(pickup_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



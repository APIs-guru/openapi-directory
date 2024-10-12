# PickupWindows


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] 
**start_at** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] 

## Example

```python
from openapi_client.models.pickup_windows import PickupWindows

# TODO update the JSON string below
json = "{}"
# create an instance of PickupWindows from a JSON string
pickup_windows_instance = PickupWindows.from_json(json)
# print the JSON string representation of the object
print(PickupWindows.to_json())

# convert the object into a dict
pickup_windows_dict = pickup_windows_instance.to_dict()
# create an instance of PickupWindows from a dict
pickup_windows_from_dict = PickupWindows.from_dict(pickup_windows_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



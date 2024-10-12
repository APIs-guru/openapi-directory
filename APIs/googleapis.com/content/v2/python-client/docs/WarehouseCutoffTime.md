# WarehouseCutoffTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hour** | **int** | Required. Hour (24-hour clock) of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse. | [optional] 
**minute** | **int** | Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse. | [optional] 

## Example

```python
from openapi_client.models.warehouse_cutoff_time import WarehouseCutoffTime

# TODO update the JSON string below
json = "{}"
# create an instance of WarehouseCutoffTime from a JSON string
warehouse_cutoff_time_instance = WarehouseCutoffTime.from_json(json)
# print the JSON string representation of the object
print(WarehouseCutoffTime.to_json())

# convert the object into a dict
warehouse_cutoff_time_dict = warehouse_cutoff_time_instance.to_dict()
# create an instance of WarehouseCutoffTime from a dict
warehouse_cutoff_time_from_dict = WarehouseCutoffTime.from_dict(warehouse_cutoff_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



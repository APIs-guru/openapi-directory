# VehHistoryData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[VehHistory]**](VehHistory.md) |  | 
**vin** | **str** |  | 

## Example

```python
from openapi_client.models.veh_history_data import VehHistoryData

# TODO update the JSON string below
json = "{}"
# create an instance of VehHistoryData from a JSON string
veh_history_data_instance = VehHistoryData.from_json(json)
# print the JSON string representation of the object
print(VehHistoryData.to_json())

# convert the object into a dict
veh_history_data_dict = veh_history_data_instance.to_dict()
# create an instance of VehHistoryData from a dict
veh_history_data_from_dict = VehHistoryData.from_dict(veh_history_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



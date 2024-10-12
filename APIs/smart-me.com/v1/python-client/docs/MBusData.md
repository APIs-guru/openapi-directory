# MBusData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | The Date of the M-BUS Telegram Readout (in UTC). If this is null the Server Time is used. | [optional] 
**telegram** | **str** | The M-BUS Telegram as Hex string.               Example: 68 1F 1F 68 08 02 72 78 56 34 12 24 40 01 07 55 00 00 00 03 13 15 31 00 DA 02 3B 13 01 8B 60 04 37 18 02 18 16 | [optional] 

## Example

```python
from openapi_client.models.m_bus_data import MBusData

# TODO update the JSON string below
json = "{}"
# create an instance of MBusData from a JSON string
m_bus_data_instance = MBusData.from_json(json)
# print the JSON string representation of the object
print(MBusData.to_json())

# convert the object into a dict
m_bus_data_dict = m_bus_data_instance.to_dict()
# create an instance of MBusData from a dict
m_bus_data_from_dict = MBusData.from_dict(m_bus_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



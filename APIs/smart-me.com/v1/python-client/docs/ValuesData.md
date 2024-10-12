# ValuesData

API Container for a Meter Value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | The Date of the Value | [optional] 
**device_id** | **str** | The ID of the device | [optional] 
**values** | [**List[ValueData]**](ValueData.md) | All values | [optional] 

## Example

```python
from openapi_client.models.values_data import ValuesData

# TODO update the JSON string below
json = "{}"
# create an instance of ValuesData from a JSON string
values_data_instance = ValuesData.from_json(json)
# print the JSON string representation of the object
print(ValuesData.to_json())

# convert the object into a dict
values_data_dict = values_data_instance.to_dict()
# create an instance of ValuesData from a dict
values_data_from_dict = ValuesData.from_dict(values_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



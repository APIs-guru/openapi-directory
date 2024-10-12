# CurrentBillDataSolarInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **float** | Solar rate from bill | [optional] 
**value** | **float** | Solar value from bill | [optional] 

## Example

```python
from openapi_client.models.current_bill_data_solar_inner import CurrentBillDataSolarInner

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentBillDataSolarInner from a JSON string
current_bill_data_solar_inner_instance = CurrentBillDataSolarInner.from_json(json)
# print the JSON string representation of the object
print(CurrentBillDataSolarInner.to_json())

# convert the object into a dict
current_bill_data_solar_inner_dict = current_bill_data_solar_inner_instance.to_dict()
# create an instance of CurrentBillDataSolarInner from a dict
current_bill_data_solar_inner_from_dict = CurrentBillDataSolarInner.from_dict(current_bill_data_solar_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



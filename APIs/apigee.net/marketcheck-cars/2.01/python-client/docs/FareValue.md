# FareValue

Fare value of a car

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_days_to_sold_local** | **int** | Average days to sold of car around given postal code &amp; radius | [optional] 
**avg_days_to_sold_national** | **int** | Average days to sold of car for all available listings | [optional] 
**fmv_local** | **int** | Fare value calculated for all available listing around given postal code &amp; radius | [optional] 
**fmv_national** | **int** | Fare value calculated for all available listing | [optional] 

## Example

```python
from openapi_client.models.fare_value import FareValue

# TODO update the JSON string below
json = "{}"
# create an instance of FareValue from a JSON string
fare_value_instance = FareValue.from_json(json)
# print the JSON string representation of the object
print(FareValue.to_json())

# convert the object into a dict
fare_value_dict = fare_value_instance.to_dict()
# create an instance of FareValue from a dict
fare_value_from_dict = FareValue.from_dict(fare_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



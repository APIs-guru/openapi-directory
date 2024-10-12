# RatesInformation

A rates information resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | When the rate was created | [optional] 
**errors** | [**List[Error]**](Error.md) |  | [optional] 
**invalid_rates** | [**List[Rate]**](Rate.md) | An array of invalid shipment rates | [optional] [readonly] [default to []]
**rate_request_id** | **str** | A string that uniquely identifies the rate request | [optional] [readonly] 
**rates** | [**List[Rate]**](Rate.md) | An array of shipment rates | [optional] [readonly] 
**shipment_id** | **str** | A string that uniquely identifies the shipment | [optional] [readonly] 
**status** | [**RateResponseStatus**](RateResponseStatus.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.rates_information import RatesInformation

# TODO update the JSON string below
json = "{}"
# create an instance of RatesInformation from a JSON string
rates_information_instance = RatesInformation.from_json(json)
# print the JSON string representation of the object
print(RatesInformation.to_json())

# convert the object into a dict
rates_information_dict = rates_information_instance.to_dict()
# create an instance of RatesInformation from a dict
rates_information_from_dict = RatesInformation.from_dict(rates_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



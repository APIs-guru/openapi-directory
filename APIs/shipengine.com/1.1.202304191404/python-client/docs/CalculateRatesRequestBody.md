# CalculateRatesRequestBody

A rate shipment request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_options** | [**RateRequestBody**](RateRequestBody.md) | The rate options | [optional] 

## Example

```python
from openapi_client.models.calculate_rates_request_body import CalculateRatesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CalculateRatesRequestBody from a JSON string
calculate_rates_request_body_instance = CalculateRatesRequestBody.from_json(json)
# print the JSON string representation of the object
print(CalculateRatesRequestBody.to_json())

# convert the object into a dict
calculate_rates_request_body_dict = calculate_rates_request_body_instance.to_dict()
# create an instance of CalculateRatesRequestBody from a dict
calculate_rates_request_body_from_dict = CalculateRatesRequestBody.from_dict(calculate_rates_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



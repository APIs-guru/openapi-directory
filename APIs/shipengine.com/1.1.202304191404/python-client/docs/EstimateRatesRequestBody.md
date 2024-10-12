# EstimateRatesRequestBody

A rate estimate request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_residential_indicator** | [**AddressResidentialIndicator**](AddressResidentialIndicator.md) |  | [optional] 
**confirmation** | [**DeliveryConfirmation**](DeliveryConfirmation.md) |  | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) | The dimensions of the package | [optional] 
**from_city_locality** | **str** | from postal code | 
**from_country_code** | **str** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | 
**from_postal_code** | **str** | postal code | 
**from_state_province** | **str** | From state province | 
**ship_date** | **datetime** | ship date | 
**to_city_locality** | **str** | The city locality the package is being shipped to | 
**to_country_code** | **str** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | 
**to_postal_code** | **str** | postal code | 
**to_state_province** | **str** | To state province | 
**weight** | [**Weight**](Weight.md) | The weight of the package | 

## Example

```python
from openapi_client.models.estimate_rates_request_body import EstimateRatesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of EstimateRatesRequestBody from a JSON string
estimate_rates_request_body_instance = EstimateRatesRequestBody.from_json(json)
# print the JSON string representation of the object
print(EstimateRatesRequestBody.to_json())

# convert the object into a dict
estimate_rates_request_body_dict = estimate_rates_request_body_instance.to_dict()
# create an instance of EstimateRatesRequestBody from a dict
estimate_rates_request_body_from_dict = EstimateRatesRequestBody.from_dict(estimate_rates_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



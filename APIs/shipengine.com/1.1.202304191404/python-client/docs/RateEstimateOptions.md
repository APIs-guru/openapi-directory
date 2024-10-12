# RateEstimateOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_residential_indicator** | [**AddressResidentialIndicator**](AddressResidentialIndicator.md) |  | [optional] 
**confirmation** | [**DeliveryConfirmation**](DeliveryConfirmation.md) |  | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) | The dimensions of the package | [optional] 
**from_city_locality** | **str** | from postal code | [optional] 
**from_country_code** | **str** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [optional] 
**from_postal_code** | **str** | postal code | [optional] 
**from_state_province** | **str** | From state province | [optional] 
**ship_date** | **datetime** | ship date | [optional] 
**to_city_locality** | **str** | The city locality the package is being shipped to | [optional] 
**to_country_code** | **str** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [optional] 
**to_postal_code** | **str** | postal code | [optional] 
**to_state_province** | **str** | To state province | [optional] 
**weight** | [**Weight**](Weight.md) | The weight of the package | [optional] 

## Example

```python
from openapi_client.models.rate_estimate_options import RateEstimateOptions

# TODO update the JSON string below
json = "{}"
# create an instance of RateEstimateOptions from a JSON string
rate_estimate_options_instance = RateEstimateOptions.from_json(json)
# print the JSON string representation of the object
print(RateEstimateOptions.to_json())

# convert the object into a dict
rate_estimate_options_dict = rate_estimate_options_instance.to_dict()
# create an instance of RateEstimateOptions from a dict
rate_estimate_options_from_dict = RateEstimateOptions.from_dict(rate_estimate_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



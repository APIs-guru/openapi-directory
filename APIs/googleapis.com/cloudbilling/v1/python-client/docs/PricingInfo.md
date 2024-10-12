# PricingInfo

Represents the pricing information for a SKU at a single point of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_info** | [**AggregationInfo**](AggregationInfo.md) |  | [optional] 
**currency_conversion_rate** | **float** | Conversion rate used for currency conversion, from USD to the currency specified in the request. This includes any surcharge collected for billing in non USD currency. If a currency is not specified in the request this defaults to 1.0. Example: USD * currency_conversion_rate &#x3D; JPY | [optional] 
**effective_time** | **str** | The timestamp from which this pricing was effective within the requested time range. This is guaranteed to be greater than or equal to the start_time field in the request and less than the end_time field in the request. If a time range was not specified in the request this field will be equivalent to a time within the last 12 hours, indicating the latest pricing info. | [optional] 
**pricing_expression** | [**PricingExpression**](PricingExpression.md) |  | [optional] 
**summary** | **str** | An optional human readable summary of the pricing information, has a maximum length of 256 characters. | [optional] 

## Example

```python
from openapi_client.models.pricing_info import PricingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PricingInfo from a JSON string
pricing_info_instance = PricingInfo.from_json(json)
# print the JSON string representation of the object
print(PricingInfo.to_json())

# convert the object into a dict
pricing_info_dict = pricing_info_instance.to_dict()
# create an instance of PricingInfo from a dict
pricing_info_from_dict = PricingInfo.from_dict(pricing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



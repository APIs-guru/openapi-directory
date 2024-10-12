# GetRateByIdResponseBody

A rate response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_code** | **str** | carrier code | [readonly] 
**carrier_delivery_days** | **str** | The carrier delivery days | [optional] [readonly] 
**carrier_friendly_name** | **str** | carrier friendly name | [readonly] 
**carrier_id** | **str** | A string that uniquely identifies the carrier | [readonly] 
**carrier_nickname** | **str** | carrier nickname | [readonly] 
**confirmation_amount** | [**MonetaryValue**](MonetaryValue.md) | The confirmation amount | [readonly] 
**delivery_days** | **int** | The number of days estimated for delivery, this will show the _actual_ delivery time if for example, the package gets shipped on a Friday  | [optional] [readonly] 
**error_messages** | **List[str]** | The error messages | [readonly] 
**estimated_delivery_date** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date, but not a specific time.  The value _may_ contain a time component, but it will be set to &#x60;00:00:00&#x60; UTC by ShipEngine.  | [optional] [readonly] 
**guaranteed_service** | **bool** | Indicates if the rate is guaranteed. | [readonly] 
**insurance_amount** | [**MonetaryValue**](MonetaryValue.md) | The insurance amount | [readonly] 
**negotiated_rate** | **bool** | Indicates if the rates been negotiated | [readonly] 
**other_amount** | [**MonetaryValue**](MonetaryValue.md) | Any other charges associated with this rate | [readonly] 
**package_type** | **str** | package type that this rate was estimated for | [readonly] 
**rate_id** | **str** | A string that uniquely identifies the rate | [readonly] 
**rate_type** | [**RateType**](RateType.md) |  | [readonly] 
**service_code** | **str** | service code for the rate | [readonly] 
**service_type** | **str** | service type | [readonly] 
**ship_date** | **datetime** | ship date | [optional] [readonly] 
**shipping_amount** | [**MonetaryValue**](MonetaryValue.md) | The shipping amount | [readonly] 
**tax_amount** | [**MonetaryValue**](MonetaryValue.md) | Tariff and additional taxes associated with an international shipment. | [optional] [readonly] 
**trackable** | **bool** | Indicates if rate is trackable | [readonly] 
**validation_status** | [**ValidationStatus**](ValidationStatus.md) |  | [readonly] 
**warning_messages** | **List[str]** | The warning messages | [readonly] 
**zone** | **int** | Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of custom zones that vary depending upon the ship_to and ship_from location  | [readonly] 

## Example

```python
from openapi_client.models.get_rate_by_id_response_body import GetRateByIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateByIdResponseBody from a JSON string
get_rate_by_id_response_body_instance = GetRateByIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetRateByIdResponseBody.to_json())

# convert the object into a dict
get_rate_by_id_response_body_dict = get_rate_by_id_response_body_instance.to_dict()
# create an instance of GetRateByIdResponseBody from a dict
get_rate_by_id_response_body_from_dict = GetRateByIdResponseBody.from_dict(get_rate_by_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PriceAccuracyRow

A price accuracy row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult_occupancy** | **int** | The number of adults in the occupancy details of the validation query. | [optional] 
**affects_score** | **bool** | True if this row affects the placement of a price. This field has been renamed to “Affects placement” in Hotel Center. | [optional] 
**cached_price_record** | [**PriceRecord**](PriceRecord.md) |  | [optional] 
**checkin_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**child_occupancy** | **int** | The number of children in the occupancy details of the validation query. | [optional] 
**correction_time** | **str** | Time at which an incorrect price is updated to a correct price. | [optional] 
**device_type** | **str** | The user&#39;s device type. | [optional] 
**fetched_price_record** | [**PriceRecord**](PriceRecord.md) |  | [optional] 
**final_domain** | **str** | The domain of the final page from which prices are read. | [optional] 
**hotel** | **str** | Partner-defined hotel ID. | [optional] 
**hotel_country_code** | **str** | The country of the hotel (based on address). | [optional] 
**length_of_stay_days** | **int** | Length of stay. | [optional] 
**mismatch_reason** | **str** | The reason why the fetched price didn&#39;t match the cached price. | [optional] 
**rate_rule_id** | **str** | The rate rule of the advertised price for non-public rates. | [optional] 
**signal_source** | **str** | Source of the price accuracy signal. | [optional] 
**url** | **str** | Initial URL visited on the partner website. | [optional] 
**user_region_code** | **str** | The user&#39;s region. | [optional] 

## Example

```python
from openapi_client.models.price_accuracy_row import PriceAccuracyRow

# TODO update the JSON string below
json = "{}"
# create an instance of PriceAccuracyRow from a JSON string
price_accuracy_row_instance = PriceAccuracyRow.from_json(json)
# print the JSON string representation of the object
print(PriceAccuracyRow.to_json())

# convert the object into a dict
price_accuracy_row_dict = price_accuracy_row_instance.to_dict()
# create an instance of PriceAccuracyRow from a dict
price_accuracy_row_from_dict = PriceAccuracyRow.from_dict(price_accuracy_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



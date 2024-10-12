# BillingRate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Billing currency code in ISO 4217 format. | [optional] 
**end_date** | **str** | End date of this billing rate. | [optional] 
**id** | **str** | ID of this billing rate. | [optional] 
**name** | **str** | Name of this billing rate. This must be less than 256 characters long. | [optional] 
**rate_in_micros** | **str** | Flat rate in micros of this billing rate. This cannot co-exist with tiered rate. | [optional] 
**start_date** | **str** | Start date of this billing rate. | [optional] 
**tiered_rates** | [**List[BillingRateTieredRate]**](BillingRateTieredRate.md) | Tiered rate of this billing rate. This cannot co-exist with flat rate. | [optional] 
**type** | **str** | Type of this billing rate. | [optional] 
**unit_of_measure** | **str** | Unit of measure for this billing rate. | [optional] 

## Example

```python
from openapi_client.models.billing_rate import BillingRate

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRate from a JSON string
billing_rate_instance = BillingRate.from_json(json)
# print the JSON string representation of the object
print(BillingRate.to_json())

# convert the object into a dict
billing_rate_dict = billing_rate_instance.to_dict()
# create an instance of BillingRate from a dict
billing_rate_from_dict = BillingRate.from_dict(billing_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



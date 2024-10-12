# BillingMeterCollection

Collection of Billing Meters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[BillingMeter]**](BillingMeter.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.billing_meter_collection import BillingMeterCollection

# TODO update the JSON string below
json = "{}"
# create an instance of BillingMeterCollection from a JSON string
billing_meter_collection_instance = BillingMeterCollection.from_json(json)
# print the JSON string representation of the object
print(BillingMeterCollection.to_json())

# convert the object into a dict
billing_meter_collection_dict = billing_meter_collection_instance.to_dict()
# create an instance of BillingMeterCollection from a dict
billing_meter_collection_from_dict = BillingMeterCollection.from_dict(billing_meter_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



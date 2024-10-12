# BillingMeter

App Service billing entity that contains information about meter which the Azure billing system utilizes to charge users for services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | BillingMeter resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_meter import BillingMeter

# TODO update the JSON string below
json = "{}"
# create an instance of BillingMeter from a JSON string
billing_meter_instance = BillingMeter.from_json(json)
# print the JSON string representation of the object
print(BillingMeter.to_json())

# convert the object into a dict
billing_meter_dict = billing_meter_instance.to_dict()
# create an instance of BillingMeter from a dict
billing_meter_from_dict = BillingMeter.from_dict(billing_meter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BillingMeters

The billing meters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter** | **str** | The HDInsight meter guid. | [optional] 
**meter_parameter** | **str** | The virtual machine sizes. | [optional] 
**unit** | **str** | The unit of meter, VMHours or CoreHours. | [optional] 

## Example

```python
from openapi_client.models.billing_meters import BillingMeters

# TODO update the JSON string below
json = "{}"
# create an instance of BillingMeters from a JSON string
billing_meters_instance = BillingMeters.from_json(json)
# print the JSON string representation of the object
print(BillingMeters.to_json())

# convert the object into a dict
billing_meters_dict = billing_meters_instance.to_dict()
# create an instance of BillingMeters from a dict
billing_meters_from_dict = BillingMeters.from_dict(billing_meters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



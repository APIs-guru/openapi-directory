# DiskBillingMeters

The disk billing meters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_rp_meter** | **str** | The managed disk meter guid. | [optional] 
**sku** | **str** | The managed disk billing sku, P30 or S30. | [optional] 
**tier** | **str** | The managed disk billing tier, Standard or Premium. | [optional] 

## Example

```python
from openapi_client.models.disk_billing_meters import DiskBillingMeters

# TODO update the JSON string below
json = "{}"
# create an instance of DiskBillingMeters from a JSON string
disk_billing_meters_instance = DiskBillingMeters.from_json(json)
# print the JSON string representation of the object
print(DiskBillingMeters.to_json())

# convert the object into a dict
disk_billing_meters_dict = disk_billing_meters_instance.to_dict()
# create an instance of DiskBillingMeters from a dict
disk_billing_meters_from_dict = DiskBillingMeters.from_dict(disk_billing_meters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



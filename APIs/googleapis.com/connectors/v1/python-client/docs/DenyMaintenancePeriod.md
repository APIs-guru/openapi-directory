# DenyMaintenancePeriod

DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.deny_maintenance_period import DenyMaintenancePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of DenyMaintenancePeriod from a JSON string
deny_maintenance_period_instance = DenyMaintenancePeriod.from_json(json)
# print the JSON string representation of the object
print(DenyMaintenancePeriod.to_json())

# convert the object into a dict
deny_maintenance_period_dict = deny_maintenance_period_instance.to_dict()
# create an instance of DenyMaintenancePeriod from a dict
deny_maintenance_period_from_dict = DenyMaintenancePeriod.from_dict(deny_maintenance_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



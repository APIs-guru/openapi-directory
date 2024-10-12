# DenyMaintenancePeriod

Deny maintenance Periods. This specifies a date range during when all CSA rollout will be denied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | \&quot;deny maintenance period\&quot; end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 | [optional] 
**start_date** | **str** | \&quot;deny maintenance period\&quot; start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 | [optional] 
**time** | **str** | Time in UTC when the \&quot;deny maintenance period\&quot; starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00 | [optional] 

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



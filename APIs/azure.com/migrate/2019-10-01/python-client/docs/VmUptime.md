# VmUptime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_per_month** | **float** | Number of days in a month for VM uptime. | [optional] 
**hours_per_day** | **float** | Number of hours per day for VM uptime. | [optional] 

## Example

```python
from openapi_client.models.vm_uptime import VmUptime

# TODO update the JSON string below
json = "{}"
# create an instance of VmUptime from a JSON string
vm_uptime_instance = VmUptime.from_json(json)
# print the JSON string representation of the object
print(VmUptime.to_json())

# convert the object into a dict
vm_uptime_dict = vm_uptime_instance.to_dict()
# create an instance of VmUptime from a dict
vm_uptime_from_dict = VmUptime.from_dict(vm_uptime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



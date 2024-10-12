# SapMonitor

SAP monitor info on Azure (ARM properties and SAP monitor properties)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SapMonitorProperties**](SapMonitorProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sap_monitor import SapMonitor

# TODO update the JSON string below
json = "{}"
# create an instance of SapMonitor from a JSON string
sap_monitor_instance = SapMonitor.from_json(json)
# print the JSON string representation of the object
print(SapMonitor.to_json())

# convert the object into a dict
sap_monitor_dict = sap_monitor_instance.to_dict()
# create an instance of SapMonitor from a dict
sap_monitor_from_dict = SapMonitor.from_dict(sap_monitor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



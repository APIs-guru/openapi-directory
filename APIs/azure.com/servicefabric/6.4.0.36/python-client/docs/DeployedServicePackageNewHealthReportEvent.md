# DeployedServicePackageNewHealthReportEvent

Deployed Service Health Report Created event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of report. | 
**health_state** | **str** | Describes the property health state. | 
**node_name** | **str** | The name of a Service Fabric node. | 
**var_property** | **str** | Describes the property. | 
**remove_when_expired** | **bool** | Indicates the removal when it expires. | 
**sequence_number** | **int** | Sequence number of report. | 
**service_manifest_name** | **str** | Service manifest name. | 
**service_package_activation_id** | **str** | Id of Service package activation. | 
**service_package_instance_id** | **int** | Id of Service package instance. | 
**source_id** | **str** | Id of report source. | 
**source_utc_timestamp** | **datetime** | Source time. | 
**time_to_live_ms** | **int** | Time to live in milli-seconds. | 

## Example

```python
from openapi_client.models.deployed_service_package_new_health_report_event import DeployedServicePackageNewHealthReportEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageNewHealthReportEvent from a JSON string
deployed_service_package_new_health_report_event_instance = DeployedServicePackageNewHealthReportEvent.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageNewHealthReportEvent.to_json())

# convert the object into a dict
deployed_service_package_new_health_report_event_dict = deployed_service_package_new_health_report_event_instance.to_dict()
# create an instance of DeployedServicePackageNewHealthReportEvent from a dict
deployed_service_package_new_health_report_event_from_dict = DeployedServicePackageNewHealthReportEvent.from_dict(deployed_service_package_new_health_report_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



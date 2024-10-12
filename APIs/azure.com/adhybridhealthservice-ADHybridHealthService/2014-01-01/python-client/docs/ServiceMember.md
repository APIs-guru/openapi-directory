# ServiceMember

The server properties for a given service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_alerts** | **int** | The total number of alerts that are currently active for the server. | [optional] 
**additional_information** | **str** | The additional information, if any, for the server. | [optional] 
**created_date** | **datetime** | The date time , in UTC, when the server was onboarded to Azure Active Directory Connect Health. | [optional] 
**dimensions** | **object** | The server specific configuration related dimensions. | [optional] 
**disabled** | **bool** | Indicates if the server is disabled or not.  | [optional] 
**disabled_reason** | **int** | The reason for disabling the server. | [optional] 
**installed_qfes** | **object** | The list of installed QFEs for the server. | [optional] 
**last_disabled** | **datetime** | The date and time , in UTC, when the server was last disabled. | [optional] 
**last_reboot** | **datetime** | The date and time, in UTC, when the server was last rebooted. | [optional] 
**last_server_reported_monitoring_level_change** | **datetime** | The date and time, in UTC, when the server&#39;s data monitoring configuration was last changed. | [optional] 
**last_updated** | **datetime** | The date and time, in UTC, when the server properties were last updated. | [optional] 
**machine_id** | **str** | The id of the machine. | [optional] 
**machine_name** | **str** | The name of the server. | [optional] 
**monitoring_configurations_computed** | **object** | The monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health. | [optional] 
**monitoring_configurations_customized** | **object** | The customized monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health. | [optional] 
**os_name** | **str** | The name of the operating system installed in the machine. | [optional] 
**os_version** | **str** | The version of the operating system installed in the machine. | [optional] 
**properties** | **object** | Server specific properties. | [optional] 
**recommended_qfes** | **object** | The list of recommended hotfixes for the server. | [optional] 
**resolved_alerts** | **int** | The total count of alerts that are resolved for this server. | [optional] 
**role** | **str** | The service role that is being monitored in the server. | [optional] 
**server_reported_monitoring_level** | **str** | The monitoring level reported by the server. | [optional] 
**service_id** | **str** | The service id to whom this server belongs. | [optional] 
**service_member_id** | **str** | The id of the server. | [optional] 
**status** | **str** | The health status of the server. | [optional] 
**tenant_id** | **str** | The tenant id to whom this server belongs. | [optional] 

## Example

```python
from openapi_client.models.service_member import ServiceMember

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMember from a JSON string
service_member_instance = ServiceMember.from_json(json)
# print the JSON string representation of the object
print(ServiceMember.to_json())

# convert the object into a dict
service_member_dict = service_member_instance.to_dict()
# create an instance of ServiceMember from a dict
service_member_from_dict = ServiceMember.from_dict(service_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



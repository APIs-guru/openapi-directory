# AddsServiceMember

The server details for ADDS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_alerts** | **int** | The total number of alerts that are currently active for the server. | [optional] 
**additional_information** | **str** | The additional information, if any, for the server. | [optional] 
**adds_roles** | **List[str]** | The list of ADDS roles. | [optional] 
**created_date** | **datetime** | The date time , in UTC, when the server was onboarded to Azure Active Directory Connect Health. | [optional] 
**dc_types** | **List[str]** | The list of domain controller types. | [optional] 
**dimensions** | [**List[Item]**](Item.md) | The server specific configuration related dimensions. | [optional] 
**disabled** | **bool** | Indicates if the server is disabled or not.  | [optional] 
**disabled_reason** | **int** | The reason for disabling the server. | [optional] 
**domain_name** | **str** | The domain name. | [optional] 
**gc_reachable** | **bool** | Indicates if the global catalog for this domain is reachable or not. | [optional] 
**installed_qfes** | [**List[Hotfix]**](Hotfix.md) | The list of installed QFEs for the server. | [optional] 
**is_advertising** | **bool** | Indicates if the Dc is advertising or not. | [optional] 
**last_disabled** | **datetime** | The date and time , in UTC, when the server was last disabled. | [optional] 
**last_reboot** | **datetime** | The date and time, in UTC, when the server was last rebooted. | [optional] 
**last_server_reported_monitoring_level_change** | **datetime** | The date and time, in UTC, when the server&#39;s data monitoring configuration was last changed. | [optional] 
**last_updated** | **datetime** | The date and time, in UTC, when the server properties were last updated. | [optional] 
**machine_id** | **str** | The id of the machine. | [optional] 
**machine_name** | **str** | The name of the server. | [optional] 
**monitoring_configurations_computed** | [**List[Item]**](Item.md) | The monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health. | [optional] 
**monitoring_configurations_customized** | [**List[Item]**](Item.md) | The customized monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health. | [optional] 
**os_name** | **str** | The name of the operating system installed in the machine. | [optional] 
**os_version** | **str** | The version of the operating system installed in the machine. | [optional] 
**pdc_reachable** | **bool** | Indicates if the primary domain controller is reachable or not. | [optional] 
**properties** | [**List[Item]**](Item.md) | Server specific properties. | [optional] 
**recommended_qfes** | [**List[Hotfix]**](Hotfix.md) | The list of recommended hotfixes for the server. | [optional] 
**resolved_alerts** | **int** | The total count of alerts that are resolved for this server. | [optional] 
**role** | **str** | The service role that is being monitored in the server. | [optional] 
**server_reported_monitoring_level** | **str** | The monitoring level reported by the server. | [optional] 
**service_id** | **str** | The service id to whom this server belongs. | [optional] 
**service_member_id** | **str** | The id of the server. | [optional] 
**site_name** | **str** | The site name. | [optional] 
**status** | **str** | The health status of the server. | [optional] 
**sysvol_state** | **bool** | Indicates if the SYSVOL state is healthy or not. | [optional] 
**tenant_id** | **str** | The tenant id to whom this server belongs. | [optional] 

## Example

```python
from openapi_client.models.adds_service_member import AddsServiceMember

# TODO update the JSON string below
json = "{}"
# create an instance of AddsServiceMember from a JSON string
adds_service_member_instance = AddsServiceMember.from_json(json)
# print the JSON string representation of the object
print(AddsServiceMember.to_json())

# convert the object into a dict
adds_service_member_dict = adds_service_member_instance.to_dict()
# create an instance of AddsServiceMember from a dict
adds_service_member_from_dict = AddsServiceMember.from_dict(adds_service_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



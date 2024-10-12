# ServiceProperties

The service properties for a given service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_alerts** | **int** | The count of alerts that are currently active for the service. | [optional] 
**additional_information** | **str** | The additional information related to the service. | [optional] 
**created_date** | **datetime** | The date and time, in UTC, when the service was onboarded to Azure Active Directory Connect Health. | [optional] 
**custom_notification_emails** | **List[str]** | The list of additional emails that are configured to receive notifications about the service. | [optional] 
**disabled** | **bool** | Indicates if the service is disabled or not. | [optional] 
**display_name** | **str** | The display name of the service. | [optional] 
**health** | **str** | The health of the service. | [optional] 
**id** | **str** | The id of the service. | [optional] 
**last_disabled** | **datetime** | The date and time, in UTC, when the service was last disabled. | [optional] 
**last_updated** | **datetime** | The date or time , in UTC, when the service properties were last updated. | [optional] 
**monitoring_configurations_computed** | **object** | The monitoring configuration of the service which determines what activities are monitored by Azure Active Directory Connect Health. | [optional] 
**monitoring_configurations_customized** | **object** | The customized monitoring configuration of the service which determines what activities are monitored by Azure Active Directory Connect Health. | [optional] 
**notification_email_enabled** | **bool** | Indicates if email notification is enabled or not. | [optional] 
**notification_email_enabled_for_global_admins** | **bool** | Indicates if email notification is enabled for global administrators of the tenant. | [optional] 
**notification_emails** | **List[str]** | The list of emails to whom service notifications will be sent. | [optional] 
**notification_emails_enabled_for_global_admins** | **bool** | Indicates if email notification is enabled for global administrators of the tenant. | [optional] 
**original_disabled_state** | **bool** | Gets the original disable state. | [optional] 
**resolved_alerts** | **int** | The total count of alerts that has been resolved for the service. | [optional] 
**service_id** | **str** | The id of the service. | [optional] 
**service_name** | **str** | The name of the service. | [optional] 
**signature** | **str** | The signature of the service. | [optional] 
**simple_properties** | **object** | List of service specific configuration properties. | [optional] 
**tenant_id** | **str** | The id of the tenant to which the service is registered to. | [optional] 
**type** | **str** | The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. | [optional] 

## Example

```python
from openapi_client.models.service_properties import ServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProperties from a JSON string
service_properties_instance = ServiceProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceProperties.to_json())

# convert the object into a dict
service_properties_dict = service_properties_instance.to_dict()
# create an instance of ServiceProperties from a dict
service_properties_from_dict = ServiceProperties.from_dict(service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



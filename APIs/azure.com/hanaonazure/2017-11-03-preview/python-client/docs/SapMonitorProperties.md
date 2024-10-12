# SapMonitorProperties

Describes the properties of a SAP monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_customer_analytics** | **bool** | The value indicating whether to send analytics to Microsoft | [optional] 
**hana_db_credentials_msi_id** | **str** | MSI ID passed by customer which has access to customer&#39;s KeyVault and to be assigned to the Collector VM. | [optional] 
**hana_db_name** | **str** | Database name of the HANA instance. | [optional] 
**hana_db_password** | **str** | Database password of the HANA instance. | [optional] 
**hana_db_password_key_vault_url** | **str** | KeyVault URL link to the password for the HANA database. | [optional] 
**hana_db_sql_port** | **int** | Database port of the HANA instance. | [optional] 
**hana_db_username** | **str** | Database username of the HANA instance. | [optional] 
**hana_hostname** | **str** | Hostname of the HANA instance. | [optional] 
**hana_subnet** | **str** | Specifies the SAP monitor unique ID. | [optional] 
**key_vault_id** | **str** | Key Vault ID containing customer&#39;s HANA credentials. | [optional] 
**log_analytics_workspace_arm_id** | **str** | The ARM ID of the Log Analytics Workspace that is used for monitoring | [optional] 
**log_analytics_workspace_id** | **str** | The workspace ID of the log analytics workspace to be used for monitoring | [optional] 
**log_analytics_workspace_shared_key** | **str** | The shared key of the log analytics workspace that is used for monitoring | [optional] 
**managed_resource_group_name** | **str** | The name of the resource group the SAP Monitor resources get deployed into. | [optional] [readonly] 
**provisioning_state** | **str** | State of provisioning of the HanaInstance | [optional] [readonly] 

## Example

```python
from openapi_client.models.sap_monitor_properties import SapMonitorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SapMonitorProperties from a JSON string
sap_monitor_properties_instance = SapMonitorProperties.from_json(json)
# print the JSON string representation of the object
print(SapMonitorProperties.to_json())

# convert the object into a dict
sap_monitor_properties_dict = sap_monitor_properties_instance.to_dict()
# create an instance of SapMonitorProperties from a dict
sap_monitor_properties_from_dict = SapMonitorProperties.from_dict(sap_monitor_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



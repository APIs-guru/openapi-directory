# SecurityAlertPolicyProperties

Properties of a security alert policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_alerts** | **List[str]** | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly | [optional] 
**email_account_admins** | **bool** | Specifies that the alert is sent to the account administrators. | [optional] 
**email_addresses** | **List[str]** | Specifies an array of e-mail addresses to which the alert is sent. | [optional] 
**retention_days** | **int** | Specifies the number of days to keep in the Threat Detection audit logs. | [optional] 
**state** | **str** | Specifies the state of the policy, whether it is enabled or disabled. | 
**storage_account_access_key** | **str** | Specifies the identifier key of the Threat Detection audit storage account. | [optional] 
**storage_endpoint** | **str** | Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | [optional] 

## Example

```python
from openapi_client.models.security_alert_policy_properties import SecurityAlertPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityAlertPolicyProperties from a JSON string
security_alert_policy_properties_instance = SecurityAlertPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(SecurityAlertPolicyProperties.to_json())

# convert the object into a dict
security_alert_policy_properties_dict = security_alert_policy_properties_instance.to_dict()
# create an instance of SecurityAlertPolicyProperties from a dict
security_alert_policy_properties_from_dict = SecurityAlertPolicyProperties.from_dict(security_alert_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



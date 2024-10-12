# ManagedServerSecurityAlertPolicy

A managed server security alert policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecurityAlertPolicyProperties**](SecurityAlertPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_server_security_alert_policy import ManagedServerSecurityAlertPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedServerSecurityAlertPolicy from a JSON string
managed_server_security_alert_policy_instance = ManagedServerSecurityAlertPolicy.from_json(json)
# print the JSON string representation of the object
print(ManagedServerSecurityAlertPolicy.to_json())

# convert the object into a dict
managed_server_security_alert_policy_dict = managed_server_security_alert_policy_instance.to_dict()
# create an instance of ManagedServerSecurityAlertPolicy from a dict
managed_server_security_alert_policy_from_dict = ManagedServerSecurityAlertPolicy.from_dict(managed_server_security_alert_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



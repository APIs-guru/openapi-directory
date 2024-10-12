# ServerSecurityAlertPolicy

A server security alert policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecurityAlertPolicyProperties**](SecurityAlertPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_security_alert_policy import ServerSecurityAlertPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServerSecurityAlertPolicy from a JSON string
server_security_alert_policy_instance = ServerSecurityAlertPolicy.from_json(json)
# print the JSON string representation of the object
print(ServerSecurityAlertPolicy.to_json())

# convert the object into a dict
server_security_alert_policy_dict = server_security_alert_policy_instance.to_dict()
# create an instance of ServerSecurityAlertPolicy from a dict
server_security_alert_policy_from_dict = ServerSecurityAlertPolicy.from_dict(server_security_alert_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



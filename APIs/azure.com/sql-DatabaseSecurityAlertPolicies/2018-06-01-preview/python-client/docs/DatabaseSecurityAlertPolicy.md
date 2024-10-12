# DatabaseSecurityAlertPolicy

A database security alert policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecurityAlertPolicyProperties**](SecurityAlertPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_security_alert_policy import DatabaseSecurityAlertPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseSecurityAlertPolicy from a JSON string
database_security_alert_policy_instance = DatabaseSecurityAlertPolicy.from_json(json)
# print the JSON string representation of the object
print(DatabaseSecurityAlertPolicy.to_json())

# convert the object into a dict
database_security_alert_policy_dict = database_security_alert_policy_instance.to_dict()
# create an instance of DatabaseSecurityAlertPolicy from a dict
database_security_alert_policy_from_dict = DatabaseSecurityAlertPolicy.from_dict(database_security_alert_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



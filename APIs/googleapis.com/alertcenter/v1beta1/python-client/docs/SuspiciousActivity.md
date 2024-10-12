# SuspiciousActivity

A mobile suspicious activity alert. Derived from audit logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user this alert was created for. | [optional] 
**events** | [**List[SuspiciousActivitySecurityDetail]**](SuspiciousActivitySecurityDetail.md) | Required. The list of security events. | [optional] 

## Example

```python
from openapi_client.models.suspicious_activity import SuspiciousActivity

# TODO update the JSON string below
json = "{}"
# create an instance of SuspiciousActivity from a JSON string
suspicious_activity_instance = SuspiciousActivity.from_json(json)
# print the JSON string representation of the object
print(SuspiciousActivity.to_json())

# convert the object into a dict
suspicious_activity_dict = suspicious_activity_instance.to_dict()
# create an instance of SuspiciousActivity from a dict
suspicious_activity_from_dict = SuspiciousActivity.from_dict(suspicious_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



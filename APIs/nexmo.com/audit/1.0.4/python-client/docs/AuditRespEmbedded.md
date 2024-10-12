# AuditRespEmbedded

Container containing the `events` array.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[AuditEvent]**](AuditEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.audit_resp_embedded import AuditRespEmbedded

# TODO update the JSON string below
json = "{}"
# create an instance of AuditRespEmbedded from a JSON string
audit_resp_embedded_instance = AuditRespEmbedded.from_json(json)
# print the JSON string representation of the object
print(AuditRespEmbedded.to_json())

# convert the object into a dict
audit_resp_embedded_dict = audit_resp_embedded_instance.to_dict()
# create an instance of AuditRespEmbedded from a dict
audit_resp_embedded_from_dict = AuditRespEmbedded.from_dict(audit_resp_embedded_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



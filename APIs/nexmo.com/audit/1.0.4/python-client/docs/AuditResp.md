# AuditResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**AuditRespEmbedded**](AuditRespEmbedded.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 
**page** | [**PaginationData**](PaginationData.md) |  | [optional] 

## Example

```python
from openapi_client.models.audit_resp import AuditResp

# TODO update the JSON string below
json = "{}"
# create an instance of AuditResp from a JSON string
audit_resp_instance = AuditResp.from_json(json)
# print the JSON string representation of the object
print(AuditResp.to_json())

# convert the object into a dict
audit_resp_dict = audit_resp_instance.to_dict()
# create an instance of AuditResp from a dict
audit_resp_from_dict = AuditResp.from_dict(audit_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



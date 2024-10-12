# QueryAuditableServicesResponse

A response containing a list of auditable services for a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | [**List[AuditableService]**](AuditableService.md) | The auditable services for a resource. | [optional] 

## Example

```python
from openapi_client.models.query_auditable_services_response import QueryAuditableServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAuditableServicesResponse from a JSON string
query_auditable_services_response_instance = QueryAuditableServicesResponse.from_json(json)
# print the JSON string representation of the object
print(QueryAuditableServicesResponse.to_json())

# convert the object into a dict
query_auditable_services_response_dict = query_auditable_services_response_instance.to_dict()
# create an instance of QueryAuditableServicesResponse from a dict
query_auditable_services_response_from_dict = QueryAuditableServicesResponse.from_dict(query_auditable_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



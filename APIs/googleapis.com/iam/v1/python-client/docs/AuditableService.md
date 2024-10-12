# AuditableService

Contains information about an auditable service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Public name of the service. For example, the service name for Cloud IAM is &#39;iam.googleapis.com&#39;. | [optional] 

## Example

```python
from openapi_client.models.auditable_service import AuditableService

# TODO update the JSON string below
json = "{}"
# create an instance of AuditableService from a JSON string
auditable_service_instance = AuditableService.from_json(json)
# print the JSON string representation of the object
print(AuditableService.to_json())

# convert the object into a dict
auditable_service_dict = auditable_service_instance.to_dict()
# create an instance of AuditableService from a dict
auditable_service_from_dict = AuditableService.from_dict(auditable_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



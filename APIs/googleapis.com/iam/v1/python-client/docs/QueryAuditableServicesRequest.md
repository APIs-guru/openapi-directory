# QueryAuditableServicesRequest

A request to get the list of auditable services for a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_resource_name** | **str** | Required. The full resource name to query from the list of auditable services. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id &#x60;my-project&#x60; will be named &#x60;//cloudresourcemanager.googleapis.com/projects/my-project&#x60;. | [optional] 

## Example

```python
from openapi_client.models.query_auditable_services_request import QueryAuditableServicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAuditableServicesRequest from a JSON string
query_auditable_services_request_instance = QueryAuditableServicesRequest.from_json(json)
# print the JSON string representation of the object
print(QueryAuditableServicesRequest.to_json())

# convert the object into a dict
query_auditable_services_request_dict = query_auditable_services_request_instance.to_dict()
# create an instance of QueryAuditableServicesRequest from a dict
query_auditable_services_request_from_dict = QueryAuditableServicesRequest.from_dict(query_auditable_services_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



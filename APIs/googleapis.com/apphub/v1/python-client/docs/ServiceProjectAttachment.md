# ServiceProjectAttachment

ServiceProjectAttachment represents an attachment from a service project to a host project. Service projects contain the underlying cloud infrastructure resources, and expose these resources to the host project through a ServiceProjectAttachment. With the attachments, the host project can provide an aggregated view of resources across all service projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Create time. | [optional] [readonly] 
**name** | **str** | Identifier. The resource name of a ServiceProjectAttachment. Format: \&quot;projects/{host-project-id}/locations/global/serviceProjectAttachments/{service-project-id}.\&quot; | [optional] 
**service_project** | **str** | Required. Immutable. Service project name in the format: \&quot;projects/abc\&quot; or \&quot;projects/123\&quot;. As input, project name with either project id or number are accepted. As output, this field will contain project number. | [optional] 
**state** | **str** | Output only. ServiceProjectAttachment state. | [optional] [readonly] 
**uid** | **str** | Output only. A globally unique identifier (in UUID4 format) for the &#x60;ServiceProjectAttachment&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_project_attachment import ServiceProjectAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProjectAttachment from a JSON string
service_project_attachment_instance = ServiceProjectAttachment.from_json(json)
# print the JSON string representation of the object
print(ServiceProjectAttachment.to_json())

# convert the object into a dict
service_project_attachment_dict = service_project_attachment_instance.to_dict()
# create an instance of ServiceProjectAttachment from a dict
service_project_attachment_from_dict = ServiceProjectAttachment.from_dict(service_project_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



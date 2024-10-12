# Project

A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time. | [optional] [readonly] 
**delete_time** | **str** | Output only. The time at which this resource was requested for deletion. | [optional] [readonly] 
**display_name** | **str** | Optional. A user-assigned display name of the project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: &#x60;My Project&#x60; | [optional] 
**etag** | **str** | Output only. A checksum computed by the server based on the current value of the Project resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. The labels associated with this project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \\[a-z\\](\\[-a-z0-9\\]*\\[a-z0-9\\])?. Label values must be between 0 and 63 characters long and must conform to the regular expression (\\[a-z\\](\\[-a-z0-9\\]*\\[a-z0-9\\])?)?. No more than 64 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: &#x60;\&quot;myBusinessDimension\&quot; : \&quot;businessValue\&quot;&#x60; | [optional] 
**name** | **str** | Output only. The unique resource name of the project. It is an int64 generated number prefixed by \&quot;projects/\&quot;. Example: &#x60;projects/415104041262&#x60; | [optional] [readonly] 
**parent** | **str** | Optional. A reference to a parent Resource. eg., &#x60;organizations/123&#x60; or &#x60;folders/876&#x60;. | [optional] 
**project_id** | **str** | Immutable. The unique, user-assigned id of the project. It must be 6 to 30 lowercase ASCII letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: &#x60;tokyo-rain-123&#x60; | [optional] 
**state** | **str** | Output only. The project lifecycle state. | [optional] [readonly] 
**update_time** | **str** | Output only. The most recent time this resource was modified. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project import Project

# TODO update the JSON string below
json = "{}"
# create an instance of Project from a JSON string
project_instance = Project.from_json(json)
# print the JSON string representation of the object
print(Project.to_json())

# convert the object into a dict
project_dict = project_instance.to_dict()
# create an instance of Project from a dict
project_from_dict = Project.from_dict(project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



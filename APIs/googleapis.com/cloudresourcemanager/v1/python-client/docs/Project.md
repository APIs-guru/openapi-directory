# Project

A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Creation time. Read-only. | [optional] 
**labels** | **Dict[str, str]** | The labels associated with this Project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: a-z{0,62}. Label values must be between 0 and 63 characters long and must conform to the regular expression [a-z0-9_-]{0,63}. A label value can be empty. No more than 256 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: \&quot;environment\&quot; : \&quot;dev\&quot; Read-write. | [optional] 
**lifecycle_state** | **str** | The Project lifecycle state. Read-only. | [optional] 
**name** | **str** | The optional user-assigned display name of the Project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: &#x60;My Project&#x60; Read-write. | [optional] 
**parent** | [**ResourceId**](ResourceId.md) |  | [optional] 
**project_id** | **str** | The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: &#x60;tokyo-rain-123&#x60; Read-only after creation. | [optional] 
**project_number** | **str** | The number uniquely identifying the project. Example: &#x60;415104041262&#x60; Read-only. | [optional] 

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



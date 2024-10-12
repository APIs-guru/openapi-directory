# ListAllProjects200ResponseProjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**RetrieveASingleProject200ResponseAttributes**](RetrieveASingleProject200ResponseAttributes.md) |  | [optional] 
**branch** | **str** | The monitored branch (if available) | [optional] 
**browse_url** | **str** | URL with project overview | [optional] 
**created** | **str** | The date that the project was created on | [optional] 
**id** | **str** | The project identifier | [optional] 
**image_base_image** | **str** | For docker projects shows the base image | [optional] 
**image_cluster** | **str** | For Kubernetes projects shows the origin cluster name | [optional] 
**image_id** | **str** | For docker projects shows the ID of the image | [optional] 
**image_platform** | **str** | For docker projects shows the platform of the image | [optional] 
**image_tag** | **str** | For docker projects shows the tag of the image | [optional] 
**importing_user** | [**RetrieveASingleProject200ResponseImportingUser**](RetrieveASingleProject200ResponseImportingUser.md) |  | [optional] 
**is_monitored** | **bool** | Describes if a project is currently monitored or it is de-activated | [optional] 
**issue_counts_by_severity** | [**RetrieveASingleProject200ResponseIssueCountsBySeverity**](RetrieveASingleProject200ResponseIssueCountsBySeverity.md) |  | [optional] 
**last_tested_date** | **str** | The date on which the most recent test was conducted for this project | [optional] 
**name** | **str** |  | [optional] 
**origin** | **str** | The origin the project was added from | [optional] 
**owner** | **object** | The user who owns the project, null if not set  {     \&quot;id\&quot;: \&quot;e713cf94-bb02-4ea0-89d9-613cce0caed2\&quot;,     \&quot;name\&quot;: \&quot;example-user@snyk.io\&quot;,     \&quot;username\&quot;: \&quot;exampleUser\&quot;,     \&quot;email\&quot;: \&quot;example-user@snyk.io\&quot; } | [optional] 
**read_only** | **bool** | Whether the project is read-only | [optional] 
**remote_repo_url** | **str** | The project remote repository url. Only set for projects imported via the Snyk CLI tool. | [optional] 
**tags** | **List[object]** | List of applied tags | [optional] 
**target_reference** | **str** | The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image | [optional] 
**test_frequency** | **str** | The frequency of automated Snyk re-test. Can be &#39;daily&#39;, &#39;weekly or &#39;never&#39; | [optional] 
**total_dependencies** | **float** | Number of dependencies of the project | [optional] 
**type** | **str** | The package manager of the project | [optional] 

## Example

```python
from openapi_client.models.list_all_projects200_response_projects_inner import ListAllProjects200ResponseProjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjects200ResponseProjectsInner from a JSON string
list_all_projects200_response_projects_inner_instance = ListAllProjects200ResponseProjectsInner.from_json(json)
# print the JSON string representation of the object
print(ListAllProjects200ResponseProjectsInner.to_json())

# convert the object into a dict
list_all_projects200_response_projects_inner_dict = list_all_projects200_response_projects_inner_instance.to_dict()
# create an instance of ListAllProjects200ResponseProjectsInner from a dict
list_all_projects200_response_projects_inner_from_dict = ListAllProjects200ResponseProjectsInner.from_dict(list_all_projects200_response_projects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



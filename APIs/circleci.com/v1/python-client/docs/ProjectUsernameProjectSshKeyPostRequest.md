# ProjectUsernameProjectSshKeyPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **str** |  | [optional] 
**private_key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.project_username_project_ssh_key_post_request import ProjectUsernameProjectSshKeyPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectUsernameProjectSshKeyPostRequest from a JSON string
project_username_project_ssh_key_post_request_instance = ProjectUsernameProjectSshKeyPostRequest.from_json(json)
# print the JSON string representation of the object
print(ProjectUsernameProjectSshKeyPostRequest.to_json())

# convert the object into a dict
project_username_project_ssh_key_post_request_dict = project_username_project_ssh_key_post_request_instance.to_dict()
# create an instance of ProjectUsernameProjectSshKeyPostRequest from a dict
project_username_project_ssh_key_post_request_from_dict = ProjectUsernameProjectSshKeyPostRequest.from_dict(project_username_project_ssh_key_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



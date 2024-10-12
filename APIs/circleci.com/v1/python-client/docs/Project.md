# Project


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws** | [**Aws**](Aws.md) |  | [optional] 
**branches** | **object** |  | [optional] 
**campfire_notify_prefs** | **str** |  | [optional] 
**campfire_room** | **str** |  | [optional] 
**campfire_subdomain** | **str** |  | [optional] 
**campfire_token** | **str** |  | [optional] 
**compile** | **str** |  | [optional] 
**default_branch** | **str** |  | [optional] 
**dependencies** | **str** |  | [optional] 
**extra** | **str** |  | [optional] 
**feature_flags** | [**ProjectFeatureFlags**](ProjectFeatureFlags.md) |  | [optional] 
**flowdock_api_token** | **str** |  | [optional] 
**followed** | **bool** |  | [optional] 
**has_usable_key** | **bool** |  | [optional] 
**heroku_deploy_user** | **str** |  | [optional] 
**hipchat_api_token** | **str** |  | [optional] 
**hipchat_notify** | **str** |  | [optional] 
**hipchat_notify_prefs** | **str** |  | [optional] 
**hipchat_room** | **str** |  | [optional] 
**irc_channel** | **str** |  | [optional] 
**irc_keyword** | **str** |  | [optional] 
**irc_notify_prefs** | **str** |  | [optional] 
**irc_password** | **str** |  | [optional] 
**irc_server** | **str** |  | [optional] 
**irc_username** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**oss** | **bool** |  | [optional] 
**parallel** | **int** |  | [optional] 
**reponame** | **str** |  | [optional] 
**scopes** | [**List[Scope]**](Scope.md) |  | [optional] 
**setup** | **str** |  | [optional] 
**slack_api_token** | **str** |  | [optional] 
**slack_channel** | **str** |  | [optional] 
**slack_channel_override** | **str** |  | [optional] 
**slack_notify_prefs** | **str** |  | [optional] 
**slack_subdomain** | **str** |  | [optional] 
**slack_webhook_url** | **str** |  | [optional] 
**ssh_keys** | **List[str]** |  | [optional] 
**test** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**vcs_type** | **str** |  | [optional] 
**vcs_url** | **str** |  | [optional] 

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



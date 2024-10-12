# Repo

A repository (or repo) is a Git repository storing versioned source content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mirror_config** | [**MirrorConfig**](MirrorConfig.md) |  | [optional] 
**name** | **str** | Resource name of the repository, of the form &#x60;projects//repos/&#x60;. The repo name may contain slashes. eg, &#x60;projects/myproject/repos/name/with/slash&#x60; | [optional] 
**pubsub_configs** | [**Dict[str, PubsubConfig]**](PubsubConfig.md) | How this repository publishes a change in the repository through Cloud Pub/Sub. Keyed by the topic names. | [optional] 
**size** | **str** | The disk usage of the repo, in bytes. Read-only field. Size is only returned by GetRepo. | [optional] 
**url** | **str** | URL to clone the repository from Google Cloud Source Repositories. Read-only field. | [optional] 

## Example

```python
from openapi_client.models.repo import Repo

# TODO update the JSON string below
json = "{}"
# create an instance of Repo from a JSON string
repo_instance = Repo.from_json(json)
# print the JSON string representation of the object
print(Repo.to_json())

# convert the object into a dict
repo_dict = repo_instance.to_dict()
# create an instance of Repo from a dict
repo_from_dict = Repo.from_dict(repo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



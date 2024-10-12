# CloudRepoSourceContext

A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_context** | [**AliasContext**](AliasContext.md) |  | [optional] 
**alias_name** | **str** | The name of an alias (branch, tag, etc.). | [optional] 
**repo_id** | [**RepoId**](RepoId.md) |  | [optional] 
**revision_id** | **str** | A revision ID. | [optional] 

## Example

```python
from openapi_client.models.cloud_repo_source_context import CloudRepoSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRepoSourceContext from a JSON string
cloud_repo_source_context_instance = CloudRepoSourceContext.from_json(json)
# print the JSON string representation of the object
print(CloudRepoSourceContext.to_json())

# convert the object into a dict
cloud_repo_source_context_dict = cloud_repo_source_context_instance.to_dict()
# create an instance of CloudRepoSourceContext from a dict
cloud_repo_source_context_from_dict = CloudRepoSourceContext.from_dict(cloud_repo_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



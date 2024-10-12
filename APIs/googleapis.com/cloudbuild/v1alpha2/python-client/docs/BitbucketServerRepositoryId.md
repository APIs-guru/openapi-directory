# BitbucketServerRepositoryId

BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_key** | **str** | Required. Identifier for the project storing the repository. | [optional] 
**repo_slug** | **str** | Required. Identifier for the repository. | [optional] 
**webhook_id** | **int** | Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bitbucket_server_repository_id import BitbucketServerRepositoryId

# TODO update the JSON string below
json = "{}"
# create an instance of BitbucketServerRepositoryId from a JSON string
bitbucket_server_repository_id_instance = BitbucketServerRepositoryId.from_json(json)
# print the JSON string representation of the object
print(BitbucketServerRepositoryId.to_json())

# convert the object into a dict
bitbucket_server_repository_id_dict = bitbucket_server_repository_id_instance.to_dict()
# create an instance of BitbucketServerRepositoryId from a dict
bitbucket_server_repository_id_from_dict = BitbucketServerRepositoryId.from_dict(bitbucket_server_repository_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



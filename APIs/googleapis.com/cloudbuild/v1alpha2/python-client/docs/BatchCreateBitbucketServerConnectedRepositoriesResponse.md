# BatchCreateBitbucketServerConnectedRepositoriesResponse

Response of BatchCreateBitbucketServerConnectedRepositories RPC method including all successfully connected Bitbucket Server repositories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitbucket_server_connected_repositories** | [**List[BitbucketServerConnectedRepository]**](BitbucketServerConnectedRepository.md) | The connected Bitbucket Server repositories. | [optional] 

## Example

```python
from openapi_client.models.batch_create_bitbucket_server_connected_repositories_response import BatchCreateBitbucketServerConnectedRepositoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateBitbucketServerConnectedRepositoriesResponse from a JSON string
batch_create_bitbucket_server_connected_repositories_response_instance = BatchCreateBitbucketServerConnectedRepositoriesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateBitbucketServerConnectedRepositoriesResponse.to_json())

# convert the object into a dict
batch_create_bitbucket_server_connected_repositories_response_dict = batch_create_bitbucket_server_connected_repositories_response_instance.to_dict()
# create an instance of BatchCreateBitbucketServerConnectedRepositoriesResponse from a dict
batch_create_bitbucket_server_connected_repositories_response_from_dict = BatchCreateBitbucketServerConnectedRepositoriesResponse.from_dict(batch_create_bitbucket_server_connected_repositories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



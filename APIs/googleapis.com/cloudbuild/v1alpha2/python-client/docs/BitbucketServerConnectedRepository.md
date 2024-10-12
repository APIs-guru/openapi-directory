# BitbucketServerConnectedRepository

/ BitbucketServerConnectedRepository represents a connected Bitbucket Server / repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | The name of the &#x60;BitbucketServerConfig&#x60; that added connected repository. Format: &#x60;projects/{project}/locations/{location}/bitbucketServerConfigs/{config}&#x60; | [optional] 
**repo** | [**BitbucketServerRepositoryId**](BitbucketServerRepositoryId.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.bitbucket_server_connected_repository import BitbucketServerConnectedRepository

# TODO update the JSON string below
json = "{}"
# create an instance of BitbucketServerConnectedRepository from a JSON string
bitbucket_server_connected_repository_instance = BitbucketServerConnectedRepository.from_json(json)
# print the JSON string representation of the object
print(BitbucketServerConnectedRepository.to_json())

# convert the object into a dict
bitbucket_server_connected_repository_dict = bitbucket_server_connected_repository_instance.to_dict()
# create an instance of BitbucketServerConnectedRepository from a dict
bitbucket_server_connected_repository_from_dict = BitbucketServerConnectedRepository.from_dict(bitbucket_server_connected_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



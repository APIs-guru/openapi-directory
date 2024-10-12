# SyncRepoMetadata

Metadata of SyncRepo. This message is in the metadata field of Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the repo being synchronized. Values are of the form &#x60;projects//repos/&#x60;. | [optional] 
**start_time** | **str** | The time this operation is started. | [optional] 
**status_message** | **str** | The latest status message on syncing the repository. | [optional] 
**update_time** | **str** | The time this operation&#39;s status message is updated. | [optional] 

## Example

```python
from openapi_client.models.sync_repo_metadata import SyncRepoMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SyncRepoMetadata from a JSON string
sync_repo_metadata_instance = SyncRepoMetadata.from_json(json)
# print the JSON string representation of the object
print(SyncRepoMetadata.to_json())

# convert the object into a dict
sync_repo_metadata_dict = sync_repo_metadata_instance.to_dict()
# create an instance of SyncRepoMetadata from a dict
sync_repo_metadata_from_dict = SyncRepoMetadata.from_dict(sync_repo_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



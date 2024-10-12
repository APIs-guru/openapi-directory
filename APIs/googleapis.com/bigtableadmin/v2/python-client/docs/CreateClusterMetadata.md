# CreateClusterMetadata

The metadata for the Operation returned by CreateCluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finish_time** | **str** | The time at which the operation failed or was completed successfully. | [optional] 
**original_request** | [**CreateClusterRequest**](CreateClusterRequest.md) |  | [optional] 
**request_time** | **str** | The time at which the original request was received. | [optional] 
**tables** | [**Dict[str, TableProgress]**](TableProgress.md) | Keys: the full &#x60;name&#x60; of each table that existed in the instance when CreateCluster was first called, i.e. &#x60;projects//instances//tables/&#x60;. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one. Values: information on how much of a table&#39;s data has been copied to the newly-created cluster so far. | [optional] 

## Example

```python
from openapi_client.models.create_cluster_metadata import CreateClusterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateClusterMetadata from a JSON string
create_cluster_metadata_instance = CreateClusterMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateClusterMetadata.to_json())

# convert the object into a dict
create_cluster_metadata_dict = create_cluster_metadata_instance.to_dict()
# create an instance of CreateClusterMetadata from a dict
create_cluster_metadata_from_dict = CreateClusterMetadata.from_dict(create_cluster_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



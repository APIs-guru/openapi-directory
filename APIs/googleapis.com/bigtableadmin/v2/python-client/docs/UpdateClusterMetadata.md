# UpdateClusterMetadata

The metadata for the Operation returned by UpdateCluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finish_time** | **str** | The time at which the operation failed or was completed successfully. | [optional] 
**original_request** | [**Cluster**](Cluster.md) |  | [optional] 
**request_time** | **str** | The time at which the original request was received. | [optional] 

## Example

```python
from openapi_client.models.update_cluster_metadata import UpdateClusterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateClusterMetadata from a JSON string
update_cluster_metadata_instance = UpdateClusterMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateClusterMetadata.to_json())

# convert the object into a dict
update_cluster_metadata_dict = update_cluster_metadata_instance.to_dict()
# create an instance of UpdateClusterMetadata from a dict
update_cluster_metadata_from_dict = UpdateClusterMetadata.from_dict(update_cluster_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



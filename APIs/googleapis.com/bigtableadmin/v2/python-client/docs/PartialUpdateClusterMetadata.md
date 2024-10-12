# PartialUpdateClusterMetadata

The metadata for the Operation returned by PartialUpdateCluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finish_time** | **str** | The time at which the operation failed or was completed successfully. | [optional] 
**original_request** | [**PartialUpdateClusterRequest**](PartialUpdateClusterRequest.md) |  | [optional] 
**request_time** | **str** | The time at which the original request was received. | [optional] 

## Example

```python
from openapi_client.models.partial_update_cluster_metadata import PartialUpdateClusterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PartialUpdateClusterMetadata from a JSON string
partial_update_cluster_metadata_instance = PartialUpdateClusterMetadata.from_json(json)
# print the JSON string representation of the object
print(PartialUpdateClusterMetadata.to_json())

# convert the object into a dict
partial_update_cluster_metadata_dict = partial_update_cluster_metadata_instance.to_dict()
# create an instance of PartialUpdateClusterMetadata from a dict
partial_update_cluster_metadata_from_dict = PartialUpdateClusterMetadata.from_dict(partial_update_cluster_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



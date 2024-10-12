# ClusterSelector

A selector that chooses target cluster for jobs based on metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_labels** | **Dict[str, str]** | Required. The cluster labels. Cluster must have all labels to match. | [optional] 
**zone** | **str** | Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used. | [optional] 

## Example

```python
from openapi_client.models.cluster_selector import ClusterSelector

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterSelector from a JSON string
cluster_selector_instance = ClusterSelector.from_json(json)
# print the JSON string representation of the object
print(ClusterSelector.to_json())

# convert the object into a dict
cluster_selector_dict = cluster_selector_instance.to_dict()
# create an instance of ClusterSelector from a dict
cluster_selector_from_dict = ClusterSelector.from_dict(cluster_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



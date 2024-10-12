# UpdateClusterUpgrade

The description of the update cluster upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | [optional] 
**enable_delta_health_evaluations** | **bool** | The evaluations of the enable delta health | [optional] 
**update_description** | [**UpdateDescription**](UpdateDescription.md) |  | [optional] 
**upgrade_kind** | **str** | The kind of the upgrade | [optional] 

## Example

```python
from openapi_client.models.update_cluster_upgrade import UpdateClusterUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateClusterUpgrade from a JSON string
update_cluster_upgrade_instance = UpdateClusterUpgrade.from_json(json)
# print the JSON string representation of the object
print(UpdateClusterUpgrade.to_json())

# convert the object into a dict
update_cluster_upgrade_dict = update_cluster_upgrade_instance.to_dict()
# create an instance of UpdateClusterUpgrade from a dict
update_cluster_upgrade_from_dict = UpdateClusterUpgrade.from_dict(update_cluster_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



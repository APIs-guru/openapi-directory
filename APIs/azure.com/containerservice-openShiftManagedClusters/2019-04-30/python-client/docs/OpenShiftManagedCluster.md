# OpenShiftManagedCluster

OpenShift Managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 
**plan** | [**PurchasePlan**](PurchasePlan.md) |  | [optional] 
**properties** | [**OpenShiftManagedClusterProperties**](OpenShiftManagedClusterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.open_shift_managed_cluster import OpenShiftManagedCluster

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedCluster from a JSON string
open_shift_managed_cluster_instance = OpenShiftManagedCluster.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedCluster.to_json())

# convert the object into a dict
open_shift_managed_cluster_dict = open_shift_managed_cluster_instance.to_dict()
# create an instance of OpenShiftManagedCluster from a dict
open_shift_managed_cluster_from_dict = OpenShiftManagedCluster.from_dict(open_shift_managed_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



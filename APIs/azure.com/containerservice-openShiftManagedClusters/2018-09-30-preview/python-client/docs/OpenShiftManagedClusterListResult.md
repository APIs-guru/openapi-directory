# OpenShiftManagedClusterListResult

The response from the List OpenShift Managed Clusters operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of OpenShift managed cluster results. | [optional] [readonly] 
**value** | [**List[OpenShiftManagedCluster]**](OpenShiftManagedCluster.md) | The list of OpenShift managed clusters. | [optional] 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_list_result import OpenShiftManagedClusterListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterListResult from a JSON string
open_shift_managed_cluster_list_result_instance = OpenShiftManagedClusterListResult.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterListResult.to_json())

# convert the object into a dict
open_shift_managed_cluster_list_result_dict = open_shift_managed_cluster_list_result_instance.to_dict()
# create an instance of OpenShiftManagedClusterListResult from a dict
open_shift_managed_cluster_list_result_from_dict = OpenShiftManagedClusterListResult.from_dict(open_shift_managed_cluster_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



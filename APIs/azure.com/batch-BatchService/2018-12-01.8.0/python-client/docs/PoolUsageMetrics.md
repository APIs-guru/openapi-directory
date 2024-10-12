# PoolUsageMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** |  | 
**pool_id** | **str** |  | 
**start_time** | **datetime** |  | 
**total_core_hours** | **float** |  | 
**vm_size** | **str** | For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). | 

## Example

```python
from openapi_client.models.pool_usage_metrics import PoolUsageMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of PoolUsageMetrics from a JSON string
pool_usage_metrics_instance = PoolUsageMetrics.from_json(json)
# print the JSON string representation of the object
print(PoolUsageMetrics.to_json())

# convert the object into a dict
pool_usage_metrics_dict = pool_usage_metrics_instance.to_dict()
# create an instance of PoolUsageMetrics from a dict
pool_usage_metrics_from_dict = PoolUsageMetrics.from_dict(pool_usage_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



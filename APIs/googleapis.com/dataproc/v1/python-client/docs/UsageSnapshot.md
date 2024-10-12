# UsageSnapshot

The usage snapshot represents the resources consumed by a workload at a specified time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_type** | **str** | Optional. Accelerator type being used, if any | [optional] 
**milli_accelerator** | **str** | Optional. Milli (one-thousandth) accelerator. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) | [optional] 
**milli_dcu** | **str** | Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). | [optional] 
**milli_dcu_premium** | **str** | Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) charged at premium tier (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). | [optional] 
**shuffle_storage_gb** | **str** | Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) | [optional] 
**shuffle_storage_gb_premium** | **str** | Optional. Shuffle Storage in gigabytes (GB) charged at premium tier. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) | [optional] 
**snapshot_time** | **str** | Optional. The timestamp of the usage snapshot. | [optional] 

## Example

```python
from openapi_client.models.usage_snapshot import UsageSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of UsageSnapshot from a JSON string
usage_snapshot_instance = UsageSnapshot.from_json(json)
# print the JSON string representation of the object
print(UsageSnapshot.to_json())

# convert the object into a dict
usage_snapshot_dict = usage_snapshot_instance.to_dict()
# create an instance of UsageSnapshot from a dict
usage_snapshot_from_dict = UsageSnapshot.from_dict(usage_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



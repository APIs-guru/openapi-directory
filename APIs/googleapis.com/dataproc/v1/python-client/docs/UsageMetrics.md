# UsageMetrics

Usage metrics represent approximate total resources consumed by a workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_type** | **str** | Optional. Accelerator type being used, if any | [optional] 
**milli_accelerator_seconds** | **str** | Optional. Accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). | [optional] 
**milli_dcu_seconds** | **str** | Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). | [optional] 
**shuffle_storage_gb_seconds** | **str** | Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). | [optional] 

## Example

```python
from openapi_client.models.usage_metrics import UsageMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of UsageMetrics from a JSON string
usage_metrics_instance = UsageMetrics.from_json(json)
# print the JSON string representation of the object
print(UsageMetrics.to_json())

# convert the object into a dict
usage_metrics_dict = usage_metrics_instance.to_dict()
# create an instance of UsageMetrics from a dict
usage_metrics_from_dict = UsageMetrics.from_dict(usage_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



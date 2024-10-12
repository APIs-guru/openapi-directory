# TpuMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tpu_sec** | **str** | Required. Seconds of TPU usage, e.g. 3600. | [optional] 
**tpu_type** | **str** | Required. Type of TPU, e.g. TPU_V2, TPU_V3_POD. | [optional] 

## Example

```python
from openapi_client.models.tpu_metric import TpuMetric

# TODO update the JSON string below
json = "{}"
# create an instance of TpuMetric from a JSON string
tpu_metric_instance = TpuMetric.from_json(json)
# print the JSON string representation of the object
print(TpuMetric.to_json())

# convert the object into a dict
tpu_metric_dict = tpu_metric_instance.to_dict()
# create an instance of TpuMetric from a dict
tpu_metric_from_dict = TpuMetric.from_dict(tpu_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



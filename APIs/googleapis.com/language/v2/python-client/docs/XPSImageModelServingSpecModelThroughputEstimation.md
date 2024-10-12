# XPSImageModelServingSpecModelThroughputEstimation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_engine_accelerator_type** | **str** |  | [optional] 
**latency_in_milliseconds** | **float** | Estimated latency. | [optional] 
**node_qps** | **float** | The approximate qps a deployed node can serve. | [optional] 
**servomatic_partition_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.xps_image_model_serving_spec_model_throughput_estimation import XPSImageModelServingSpecModelThroughputEstimation

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageModelServingSpecModelThroughputEstimation from a JSON string
xps_image_model_serving_spec_model_throughput_estimation_instance = XPSImageModelServingSpecModelThroughputEstimation.from_json(json)
# print the JSON string representation of the object
print(XPSImageModelServingSpecModelThroughputEstimation.to_json())

# convert the object into a dict
xps_image_model_serving_spec_model_throughput_estimation_dict = xps_image_model_serving_spec_model_throughput_estimation_instance.to_dict()
# create an instance of XPSImageModelServingSpecModelThroughputEstimation from a dict
xps_image_model_serving_spec_model_throughput_estimation_from_dict = XPSImageModelServingSpecModelThroughputEstimation.from_dict(xps_image_model_serving_spec_model_throughput_estimation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



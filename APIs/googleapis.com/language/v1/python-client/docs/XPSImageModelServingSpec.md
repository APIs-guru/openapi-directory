# XPSImageModelServingSpec

Serving specification for image models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_throughput_estimation** | [**List[XPSImageModelServingSpecModelThroughputEstimation]**](XPSImageModelServingSpecModelThroughputEstimation.md) | Populate under uCAIP request scope. | [optional] 
**node_qps** | **float** | An estimated value of how much traffic a node can serve. Populated for AutoMl request only. | [optional] 
**tf_runtime_version** | **str** | ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list | [optional] 

## Example

```python
from openapi_client.models.xps_image_model_serving_spec import XPSImageModelServingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageModelServingSpec from a JSON string
xps_image_model_serving_spec_instance = XPSImageModelServingSpec.from_json(json)
# print the JSON string representation of the object
print(XPSImageModelServingSpec.to_json())

# convert the object into a dict
xps_image_model_serving_spec_dict = xps_image_model_serving_spec_instance.to_dict()
# create an instance of XPSImageModelServingSpec from a dict
xps_image_model_serving_spec_from_dict = XPSImageModelServingSpec.from_dict(xps_image_model_serving_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# XPSIntegratedGradientsAttribution

An attribution method that computes the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**step_count** | **int** | The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is within the desired error range. Valid range of its value is [1, 100], inclusively. | [optional] 

## Example

```python
from openapi_client.models.xps_integrated_gradients_attribution import XPSIntegratedGradientsAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of XPSIntegratedGradientsAttribution from a JSON string
xps_integrated_gradients_attribution_instance = XPSIntegratedGradientsAttribution.from_json(json)
# print the JSON string representation of the object
print(XPSIntegratedGradientsAttribution.to_json())

# convert the object into a dict
xps_integrated_gradients_attribution_dict = xps_integrated_gradients_attribution_instance.to_dict()
# create an instance of XPSIntegratedGradientsAttribution from a dict
xps_integrated_gradients_attribution_from_dict = XPSIntegratedGradientsAttribution.from_dict(xps_integrated_gradients_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



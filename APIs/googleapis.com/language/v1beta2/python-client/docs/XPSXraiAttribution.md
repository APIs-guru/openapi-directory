# XPSXraiAttribution

An explanation method that redistributes Integrated Gradients attributions to segmented regions, taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Only supports image Models (modality is IMAGE).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**step_count** | **int** | The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. Valid range of its value is [1, 100], inclusively. | [optional] 

## Example

```python
from openapi_client.models.xps_xrai_attribution import XPSXraiAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of XPSXraiAttribution from a JSON string
xps_xrai_attribution_instance = XPSXraiAttribution.from_json(json)
# print the JSON string representation of the object
print(XPSXraiAttribution.to_json())

# convert the object into a dict
xps_xrai_attribution_dict = xps_xrai_attribution_instance.to_dict()
# create an instance of XPSXraiAttribution from a dict
xps_xrai_attribution_from_dict = XPSXraiAttribution.from_dict(xps_xrai_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



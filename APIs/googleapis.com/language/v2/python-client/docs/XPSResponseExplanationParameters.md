# XPSResponseExplanationParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrated_gradients_attribution** | [**XPSIntegratedGradientsAttribution**](XPSIntegratedGradientsAttribution.md) |  | [optional] 
**xrai_attribution** | [**XPSXraiAttribution**](XPSXraiAttribution.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_response_explanation_parameters import XPSResponseExplanationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of XPSResponseExplanationParameters from a JSON string
xps_response_explanation_parameters_instance = XPSResponseExplanationParameters.from_json(json)
# print the JSON string representation of the object
print(XPSResponseExplanationParameters.to_json())

# convert the object into a dict
xps_response_explanation_parameters_dict = xps_response_explanation_parameters_instance.to_dict()
# create an instance of XPSResponseExplanationParameters from a dict
xps_response_explanation_parameters_from_dict = XPSResponseExplanationParameters.from_dict(xps_response_explanation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# XPSResponseExplanationSpec

Specification of Model explanation. Feature-based XAI in AutoML Vision ICN is deprecated, see b/288407203 for context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation_type** | **str** | Explanation type. For AutoML Image Classification models, possible values are: * &#x60;image-integrated-gradients&#x60; * &#x60;image-xrai&#x60; | [optional] 
**metadata** | [**XPSResponseExplanationMetadata**](XPSResponseExplanationMetadata.md) |  | [optional] 
**parameters** | [**XPSResponseExplanationParameters**](XPSResponseExplanationParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_response_explanation_spec import XPSResponseExplanationSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSResponseExplanationSpec from a JSON string
xps_response_explanation_spec_instance = XPSResponseExplanationSpec.from_json(json)
# print the JSON string representation of the object
print(XPSResponseExplanationSpec.to_json())

# convert the object into a dict
xps_response_explanation_spec_dict = xps_response_explanation_spec_instance.to_dict()
# create an instance of XPSResponseExplanationSpec from a dict
xps_response_explanation_spec_from_dict = XPSResponseExplanationSpec.from_dict(xps_response_explanation_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



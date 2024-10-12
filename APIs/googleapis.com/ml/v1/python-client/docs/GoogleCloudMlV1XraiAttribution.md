# GoogleCloudMlV1XraiAttribution

Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_integral_steps** | **int** | Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_xrai_attribution import GoogleCloudMlV1XraiAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1XraiAttribution from a JSON string
google_cloud_ml_v1_xrai_attribution_instance = GoogleCloudMlV1XraiAttribution.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1XraiAttribution.to_json())

# convert the object into a dict
google_cloud_ml_v1_xrai_attribution_dict = google_cloud_ml_v1_xrai_attribution_instance.to_dict()
# create an instance of GoogleCloudMlV1XraiAttribution from a dict
google_cloud_ml_v1_xrai_attribution_from_dict = GoogleCloudMlV1XraiAttribution.from_dict(google_cloud_ml_v1_xrai_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



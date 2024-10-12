# GoogleCloudMlV1IntegratedGradientsAttribution

Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_integral_steps** | **int** | Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_integrated_gradients_attribution import GoogleCloudMlV1IntegratedGradientsAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1IntegratedGradientsAttribution from a JSON string
google_cloud_ml_v1_integrated_gradients_attribution_instance = GoogleCloudMlV1IntegratedGradientsAttribution.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1IntegratedGradientsAttribution.to_json())

# convert the object into a dict
google_cloud_ml_v1_integrated_gradients_attribution_dict = google_cloud_ml_v1_integrated_gradients_attribution_instance.to_dict()
# create an instance of GoogleCloudMlV1IntegratedGradientsAttribution from a dict
google_cloud_ml_v1_integrated_gradients_attribution_from_dict = GoogleCloudMlV1IntegratedGradientsAttribution.from_dict(google_cloud_ml_v1_integrated_gradients_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



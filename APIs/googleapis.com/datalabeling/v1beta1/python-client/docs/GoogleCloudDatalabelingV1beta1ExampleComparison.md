# GoogleCloudDatalabelingV1beta1ExampleComparison

Example comparisons comparing ground truth output and predictions for a specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ground_truth_example** | [**GoogleCloudDatalabelingV1beta1Example**](GoogleCloudDatalabelingV1beta1Example.md) |  | [optional] 
**model_created_examples** | [**List[GoogleCloudDatalabelingV1beta1Example]**](GoogleCloudDatalabelingV1beta1Example.md) | Predictions by the model for the input. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_example_comparison import GoogleCloudDatalabelingV1beta1ExampleComparison

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ExampleComparison from a JSON string
google_cloud_datalabeling_v1beta1_example_comparison_instance = GoogleCloudDatalabelingV1beta1ExampleComparison.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ExampleComparison.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_example_comparison_dict = google_cloud_datalabeling_v1beta1_example_comparison_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ExampleComparison from a dict
google_cloud_datalabeling_v1beta1_example_comparison_from_dict = GoogleCloudDatalabelingV1beta1ExampleComparison.from_dict(google_cloud_datalabeling_v1beta1_example_comparison_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



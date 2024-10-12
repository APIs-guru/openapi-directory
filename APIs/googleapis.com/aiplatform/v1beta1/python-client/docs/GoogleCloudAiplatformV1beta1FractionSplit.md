# GoogleCloudAiplatformV1beta1FractionSplit

Assigns the input data to training, validation, and test sets as per the given fractions. Any of `training_fraction`, `validation_fraction` and `test_fraction` may optionally be provided, they must sum to up to 1. If the provided ones sum to less than 1, the remainder is assigned to sets as decided by Vertex AI. If none of the fractions are set, by default roughly 80% of data is used for training, 10% for validation, and 10% for test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_fraction** | **float** | The fraction of the input data that is to be used to evaluate the Model. | [optional] 
**training_fraction** | **float** | The fraction of the input data that is to be used to train the Model. | [optional] 
**validation_fraction** | **float** | The fraction of the input data that is to be used to validate the Model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_fraction_split import GoogleCloudAiplatformV1beta1FractionSplit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FractionSplit from a JSON string
google_cloud_aiplatform_v1beta1_fraction_split_instance = GoogleCloudAiplatformV1beta1FractionSplit.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FractionSplit.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_fraction_split_dict = google_cloud_aiplatform_v1beta1_fraction_split_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FractionSplit from a dict
google_cloud_aiplatform_v1beta1_fraction_split_from_dict = GoogleCloudAiplatformV1beta1FractionSplit.from_dict(google_cloud_aiplatform_v1beta1_fraction_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudAiplatformV1StratifiedSplit

Assigns input data to the training, validation, and test sets so that the distribution of values found in the categorical column (as specified by the `key` field) is mirrored within each split. The fraction values determine the relative sizes of the splits. For example, if the specified column has three values, with 50% of the rows having value \"A\", 25% value \"B\", and 25% value \"C\", and the split fractions are specified as 80/10/10, then the training set will constitute 80% of the training data, with about 50% of the training set rows having the value \"A\" for the specified column, about 25% having the value \"B\", and about 25% having the value \"C\". Only the top 500 occurring values are used; any values not in the top 500 values are randomly assigned to a split. If less than three rows contain a specific value, those rows are randomly assigned. Supported only for tabular Datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The key is a name of one of the Dataset&#39;s data columns. The key provided must be for a categorical column. | [optional] 
**test_fraction** | **float** | The fraction of the input data that is to be used to evaluate the Model. | [optional] 
**training_fraction** | **float** | The fraction of the input data that is to be used to train the Model. | [optional] 
**validation_fraction** | **float** | The fraction of the input data that is to be used to validate the Model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_stratified_split import GoogleCloudAiplatformV1StratifiedSplit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StratifiedSplit from a JSON string
google_cloud_aiplatform_v1_stratified_split_instance = GoogleCloudAiplatformV1StratifiedSplit.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StratifiedSplit.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_stratified_split_dict = google_cloud_aiplatform_v1_stratified_split_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StratifiedSplit from a dict
google_cloud_aiplatform_v1_stratified_split_from_dict = GoogleCloudAiplatformV1StratifiedSplit.from_dict(google_cloud_aiplatform_v1_stratified_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Dataset

A dataset that hosts the examples (sentence pairs) used for translation models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this dataset was created. | [optional] [readonly] 
**display_name** | **str** | The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. | [optional] 
**example_count** | **int** | Output only. The number of examples in the dataset. | [optional] [readonly] 
**name** | **str** | The resource name of the dataset, in form of &#x60;projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}&#x60; | [optional] 
**source_language_code** | **str** | The BCP-47 language code of the source language. | [optional] 
**target_language_code** | **str** | The BCP-47 language code of the target language. | [optional] 
**test_example_count** | **int** | Output only. Number of test examples (sentence pairs). | [optional] [readonly] 
**train_example_count** | **int** | Output only. Number of training examples (sentence pairs). | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this dataset was last updated. | [optional] [readonly] 
**validate_example_count** | **int** | Output only. Number of validation examples (sentence pairs). | [optional] [readonly] 

## Example

```python
from openapi_client.models.dataset import Dataset

# TODO update the JSON string below
json = "{}"
# create an instance of Dataset from a JSON string
dataset_instance = Dataset.from_json(json)
# print the JSON string representation of the object
print(Dataset.to_json())

# convert the object into a dict
dataset_dict = dataset_instance.to_dict()
# create an instance of Dataset from a dict
dataset_from_dict = Dataset.from_dict(dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



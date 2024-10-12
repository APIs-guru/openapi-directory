# AdaptiveMtDataset

An Adaptive MT Dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this dataset was created. | [optional] [readonly] 
**display_name** | **str** | The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. | [optional] 
**example_count** | **int** | The number of examples in the dataset. | [optional] 
**name** | **str** | Required. The resource name of the dataset, in form of &#x60;projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}&#x60; | [optional] 
**source_language_code** | **str** | The BCP-47 language code of the source language. | [optional] 
**target_language_code** | **str** | The BCP-47 language code of the target language. | [optional] 
**update_time** | **str** | Output only. Timestamp when this dataset was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.adaptive_mt_dataset import AdaptiveMtDataset

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveMtDataset from a JSON string
adaptive_mt_dataset_instance = AdaptiveMtDataset.from_json(json)
# print the JSON string representation of the object
print(AdaptiveMtDataset.to_json())

# convert the object into a dict
adaptive_mt_dataset_dict = adaptive_mt_dataset_instance.to_dict()
# create an instance of AdaptiveMtDataset from a dict
adaptive_mt_dataset_from_dict = AdaptiveMtDataset.from_dict(adaptive_mt_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



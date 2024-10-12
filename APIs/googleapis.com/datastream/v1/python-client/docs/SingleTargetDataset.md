# SingleTargetDataset

A single target dataset to which all data will be streamed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference. | [optional] 

## Example

```python
from openapi_client.models.single_target_dataset import SingleTargetDataset

# TODO update the JSON string below
json = "{}"
# create an instance of SingleTargetDataset from a JSON string
single_target_dataset_instance = SingleTargetDataset.from_json(json)
# print the JSON string representation of the object
print(SingleTargetDataset.to_json())

# convert the object into a dict
single_target_dataset_dict = single_target_dataset_instance.to_dict()
# create an instance of SingleTargetDataset from a dict
single_target_dataset_from_dict = SingleTargetDataset.from_dict(single_target_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



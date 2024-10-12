# BigQueryDataset

Describes a BigQuery dataset that was created by a link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Output only. The full resource name of the BigQuery dataset. The DATASET_ID will match the ID of the link, so the link must match the naming restrictions of BigQuery datasets (alphanumeric characters and underscores only).The dataset will have a resource path of \&quot;bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.big_query_dataset import BigQueryDataset

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryDataset from a JSON string
big_query_dataset_instance = BigQueryDataset.from_json(json)
# print the JSON string representation of the object
print(BigQueryDataset.to_json())

# convert the object into a dict
big_query_dataset_dict = big_query_dataset_instance.to_dict()
# create an instance of BigQueryDataset from a dict
big_query_dataset_from_dict = BigQueryDataset.from_dict(big_query_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



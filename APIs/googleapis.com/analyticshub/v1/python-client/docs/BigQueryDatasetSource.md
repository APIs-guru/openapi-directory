# BigQueryDatasetSource

A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Resource name of the dataset source for this listing. e.g. &#x60;projects/myproject/datasets/123&#x60; | [optional] 

## Example

```python
from openapi_client.models.big_query_dataset_source import BigQueryDatasetSource

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryDatasetSource from a JSON string
big_query_dataset_source_instance = BigQueryDatasetSource.from_json(json)
# print the JSON string representation of the object
print(BigQueryDatasetSource.to_json())

# convert the object into a dict
big_query_dataset_source_dict = big_query_dataset_source_instance.to_dict()
# create an instance of BigQueryDatasetSource from a dict
big_query_dataset_source_from_dict = BigQueryDatasetSource.from_dict(big_query_dataset_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



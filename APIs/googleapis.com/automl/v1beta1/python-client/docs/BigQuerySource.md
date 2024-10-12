# BigQuerySource

The BigQuery location for the input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_uri** | **str** | Required. BigQuery URI to a table, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId.bqDatasetId.bqTableId | [optional] 

## Example

```python
from openapi_client.models.big_query_source import BigQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of BigQuerySource from a JSON string
big_query_source_instance = BigQuerySource.from_json(json)
# print the JSON string representation of the object
print(BigQuerySource.to_json())

# convert the object into a dict
big_query_source_dict = big_query_source_instance.to_dict()
# create an instance of BigQuerySource from a dict
big_query_source_from_dict = BigQuerySource.from_dict(big_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



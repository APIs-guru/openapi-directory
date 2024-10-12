# QueryDatasetConfiguration

The configuration of dataset in the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | Array of column names to be included in the query. Any valid query column name is allowed. If not provided, then query includes all columns. | [optional] 

## Example

```python
from openapi_client.models.query_dataset_configuration import QueryDatasetConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDatasetConfiguration from a JSON string
query_dataset_configuration_instance = QueryDatasetConfiguration.from_json(json)
# print the JSON string representation of the object
print(QueryDatasetConfiguration.to_json())

# convert the object into a dict
query_dataset_configuration_dict = query_dataset_configuration_instance.to_dict()
# create an instance of QueryDatasetConfiguration from a dict
query_dataset_configuration_from_dict = QueryDatasetConfiguration.from_dict(query_dataset_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



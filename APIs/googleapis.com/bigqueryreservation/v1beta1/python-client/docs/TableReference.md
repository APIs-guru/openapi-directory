# TableReference

Fully qualified reference to BigQuery table. Internally stored as google.cloud.bi.v1.BqTableReference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | The ID of the dataset in the above project. | [optional] 
**project_id** | **str** | The assigned project ID of the project. | [optional] 
**table_id** | **str** | The ID of the table in the above dataset. | [optional] 

## Example

```python
from openapi_client.models.table_reference import TableReference

# TODO update the JSON string below
json = "{}"
# create an instance of TableReference from a JSON string
table_reference_instance = TableReference.from_json(json)
# print the JSON string representation of the object
print(TableReference.to_json())

# convert the object into a dict
table_reference_dict = table_reference_instance.to_dict()
# create an instance of TableReference from a dict
table_reference_from_dict = TableReference.from_dict(table_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



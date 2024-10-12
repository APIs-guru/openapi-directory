# XPSTablesDatasetMetadata

Metadata for a dataset used for AutoML Tables. Next ID: 6

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ml_use_column_id** | **int** | Id the column to split the table. | [optional] 
**primary_table_spec** | [**XPSTableSpec**](XPSTableSpec.md) |  | [optional] 
**target_column_correlations** | [**Dict[str, XPSCorrelationStats]**](XPSCorrelationStats.md) | (the column id : its CorrelationStats with target column). | [optional] 
**target_column_id** | **int** | Id of the primary table column that should be used as the training label. | [optional] 
**weight_column_id** | **int** | Id of the primary table column that should be used as the weight column. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_dataset_metadata import XPSTablesDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesDatasetMetadata from a JSON string
xps_tables_dataset_metadata_instance = XPSTablesDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSTablesDatasetMetadata.to_json())

# convert the object into a dict
xps_tables_dataset_metadata_dict = xps_tables_dataset_metadata_instance.to_dict()
# create an instance of XPSTablesDatasetMetadata from a dict
xps_tables_dataset_metadata_from_dict = XPSTablesDatasetMetadata.from_dict(xps_tables_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



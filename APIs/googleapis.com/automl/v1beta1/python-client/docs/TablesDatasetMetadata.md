# TablesDatasetMetadata

Metadata for a dataset used for AutoML Tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ml_use_column_spec_id** | **str** | column_spec_id of the primary table column which specifies a possible ML use of the row, i.e. the column will be used to split the rows into TRAIN, VALIDATE and TEST sets. Required type: STRING. This column, if set, must either have all of &#x60;TRAIN&#x60;, &#x60;VALIDATE&#x60;, &#x60;TEST&#x60; among its values, or only have &#x60;TEST&#x60;, &#x60;UNASSIGNED&#x60; values. In the latter case the rows with &#x60;UNASSIGNED&#x60; value will be assigned by AutoML. Note that if a given ml use distribution makes it impossible to create a \&quot;good\&quot; model, that call will error describing the issue. If both this column_spec_id and primary table&#39;s time_column_spec_id are not set, then all rows are treated as &#x60;UNASSIGNED&#x60;. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. | [optional] 
**primary_table_spec_id** | **str** | Output only. The table_spec_id of the primary table of this dataset. | [optional] 
**stats_update_time** | **str** | Output only. The most recent timestamp when target_column_correlations field and all descendant ColumnSpec.data_stats and ColumnSpec.top_correlated_columns fields were last (re-)generated. Any changes that happened to the dataset afterwards are not reflected in these fields values. The regeneration happens in the background on a best effort basis. | [optional] 
**target_column_correlations** | [**Dict[str, CorrelationStats]**](CorrelationStats.md) | Output only. Correlations between TablesDatasetMetadata.target_column_spec_id, and other columns of the TablesDatasetMetadataprimary_table. Only set if the target column is set. Mapping from other column spec id to its CorrelationStats with the target column. This field may be stale, see the stats_update_time field for for the timestamp at which these stats were last updated. | [optional] 
**target_column_spec_id** | **str** | column_spec_id of the primary table&#39;s column that should be used as the training &amp; prediction target. This column must be non-nullable and have one of following data types (otherwise model creation will error): * CATEGORY * FLOAT64 If the type is CATEGORY , only up to 100 unique values may exist in that column across all rows. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. | [optional] 
**weight_column_spec_id** | **str** | column_spec_id of the primary table&#39;s column that should be used as the weight column, i.e. the higher the value the more important the row will be during model training. Required type: FLOAT64. Allowed values: 0 to 10000, inclusive on both ends; 0 means the row is ignored for training. If not set all rows are assumed to have equal weight of 1. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. | [optional] 

## Example

```python
from openapi_client.models.tables_dataset_metadata import TablesDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TablesDatasetMetadata from a JSON string
tables_dataset_metadata_instance = TablesDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(TablesDatasetMetadata.to_json())

# convert the object into a dict
tables_dataset_metadata_dict = tables_dataset_metadata_instance.to_dict()
# create an instance of TablesDatasetMetadata from a dict
tables_dataset_metadata_from_dict = TablesDatasetMetadata.from_dict(tables_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



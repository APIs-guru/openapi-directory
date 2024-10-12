# JobStatistics2

Statistics for a query job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bi_engine_statistics** | [**BiEngineStatistics**](BiEngineStatistics.md) |  | [optional] 
**billing_tier** | **int** | Output only. Billing tier for the job. This is a BigQuery-specific concept which is not related to the Google Cloud notion of \&quot;free tier\&quot;. The value here is a measure of the query&#39;s resource consumption relative to the amount of data scanned. For on-demand queries, the limit is 100, and all queries within this limit are billed at the standard on-demand rates. On-demand queries that exceed this limit will fail with a billingTierLimitExceeded error. | [optional] [readonly] 
**cache_hit** | **bool** | Output only. Whether the query result was fetched from the query cache. | [optional] [readonly] 
**dcl_target_dataset** | [**DatasetReference**](DatasetReference.md) |  | [optional] 
**dcl_target_table** | [**TableReference**](TableReference.md) |  | [optional] 
**dcl_target_view** | [**TableReference**](TableReference.md) |  | [optional] 
**ddl_affected_row_access_policy_count** | **str** | Output only. The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries. | [optional] [readonly] 
**ddl_destination_table** | [**TableReference**](TableReference.md) |  | [optional] 
**ddl_operation_performed** | **str** | Output only. The DDL operation performed, possibly dependent on the pre-existence of the DDL target. | [optional] [readonly] 
**ddl_target_dataset** | [**DatasetReference**](DatasetReference.md) |  | [optional] 
**ddl_target_routine** | [**RoutineReference**](RoutineReference.md) |  | [optional] 
**ddl_target_row_access_policy** | [**RowAccessPolicyReference**](RowAccessPolicyReference.md) |  | [optional] 
**ddl_target_table** | [**TableReference**](TableReference.md) |  | [optional] 
**dml_stats** | [**DmlStatistics**](DmlStatistics.md) |  | [optional] 
**estimated_bytes_processed** | **str** | Output only. The original estimate of bytes processed for the job. | [optional] [readonly] 
**export_data_statistics** | [**ExportDataStatistics**](ExportDataStatistics.md) |  | [optional] 
**external_service_costs** | [**List[ExternalServiceCost]**](ExternalServiceCost.md) | Output only. Job cost breakdown as bigquery internal cost and external service costs. | [optional] [readonly] 
**load_query_statistics** | [**LoadQueryStatistics**](LoadQueryStatistics.md) |  | [optional] 
**materialized_view_statistics** | [**MaterializedViewStatistics**](MaterializedViewStatistics.md) |  | [optional] 
**metadata_cache_statistics** | [**MetadataCacheStatistics**](MetadataCacheStatistics.md) |  | [optional] 
**ml_statistics** | [**MlStatistics**](MlStatistics.md) |  | [optional] 
**model_training** | [**BigQueryModelTraining**](BigQueryModelTraining.md) |  | [optional] 
**model_training_current_iteration** | **int** | Deprecated. | [optional] 
**model_training_expected_total_iteration** | **str** | Deprecated. | [optional] 
**num_dml_affected_rows** | **str** | Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. | [optional] [readonly] 
**performance_insights** | [**PerformanceInsights**](PerformanceInsights.md) |  | [optional] 
**query_info** | [**QueryInfo**](QueryInfo.md) |  | [optional] 
**query_plan** | [**List[ExplainQueryStage]**](ExplainQueryStage.md) | Output only. Describes execution plan for the query. | [optional] [readonly] 
**referenced_routines** | [**List[RoutineReference]**](RoutineReference.md) | Output only. Referenced routines for the job. | [optional] [readonly] 
**referenced_tables** | [**List[TableReference]**](TableReference.md) | Output only. Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list. | [optional] [readonly] 
**reservation_usage** | [**List[JobStatisticsReservationUsageInner]**](JobStatisticsReservationUsageInner.md) | Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated. | [optional] [readonly] 
**var_schema** | [**TableSchema**](TableSchema.md) |  | [optional] 
**search_statistics** | [**SearchStatistics**](SearchStatistics.md) |  | [optional] 
**spark_statistics** | [**SparkStatistics**](SparkStatistics.md) |  | [optional] 
**statement_type** | **str** | Output only. The type of query statement, if valid. Possible values: * &#x60;SELECT&#x60;: [&#x60;SELECT&#x60;](/bigquery/docs/reference/standard-sql/query-syntax#select_list) statement. * &#x60;ASSERT&#x60;: [&#x60;ASSERT&#x60;](/bigquery/docs/reference/standard-sql/debugging-statements#assert) statement. * &#x60;INSERT&#x60;: [&#x60;INSERT&#x60;](/bigquery/docs/reference/standard-sql/dml-syntax#insert_statement) statement. * &#x60;UPDATE&#x60;: [&#x60;UPDATE&#x60;](/bigquery/docs/reference/standard-sql/query-syntax#update_statement) statement. * &#x60;DELETE&#x60;: [&#x60;DELETE&#x60;](/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * &#x60;MERGE&#x60;: [&#x60;MERGE&#x60;](/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * &#x60;CREATE_TABLE&#x60;: [&#x60;CREATE TABLE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_table_statement) statement, without &#x60;AS SELECT&#x60;. * &#x60;CREATE_TABLE_AS_SELECT&#x60;: [&#x60;CREATE TABLE AS SELECT&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#query_statement) statement. * &#x60;CREATE_VIEW&#x60;: [&#x60;CREATE VIEW&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_view_statement) statement. * &#x60;CREATE_MODEL&#x60;: [&#x60;CREATE MODEL&#x60;](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create#create_model_statement) statement. * &#x60;CREATE_MATERIALIZED_VIEW&#x60;: [&#x60;CREATE MATERIALIZED VIEW&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_materialized_view_statement) statement. * &#x60;CREATE_FUNCTION&#x60;: [&#x60;CREATE FUNCTION&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_function_statement) statement. * &#x60;CREATE_TABLE_FUNCTION&#x60;: [&#x60;CREATE TABLE FUNCTION&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_table_function_statement) statement. * &#x60;CREATE_PROCEDURE&#x60;: [&#x60;CREATE PROCEDURE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_procedure) statement. * &#x60;CREATE_ROW_ACCESS_POLICY&#x60;: [&#x60;CREATE ROW ACCESS POLICY&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_row_access_policy_statement) statement. * &#x60;CREATE_SCHEMA&#x60;: [&#x60;CREATE SCHEMA&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_schema_statement) statement. * &#x60;CREATE_SNAPSHOT_TABLE&#x60;: [&#x60;CREATE SNAPSHOT TABLE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_snapshot_table_statement) statement. * &#x60;CREATE_SEARCH_INDEX&#x60;: [&#x60;CREATE SEARCH INDEX&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_search_index_statement) statement. * &#x60;DROP_TABLE&#x60;: [&#x60;DROP TABLE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_statement) statement. * &#x60;DROP_EXTERNAL_TABLE&#x60;: [&#x60;DROP EXTERNAL TABLE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_external_table_statement) statement. * &#x60;DROP_VIEW&#x60;: [&#x60;DROP VIEW&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_view_statement) statement. * &#x60;DROP_MODEL&#x60;: [&#x60;DROP MODEL&#x60;](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-drop-model) statement. * &#x60;DROP_MATERIALIZED_VIEW&#x60;: [&#x60;DROP MATERIALIZED VIEW&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_materialized_view_statement) statement. * &#x60;DROP_FUNCTION&#x60; : [&#x60;DROP FUNCTION&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_function_statement) statement. * &#x60;DROP_TABLE_FUNCTION&#x60; : [&#x60;DROP TABLE FUNCTION&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_function) statement. * &#x60;DROP_PROCEDURE&#x60;: [&#x60;DROP PROCEDURE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_procedure_statement) statement. * &#x60;DROP_SEARCH_INDEX&#x60;: [&#x60;DROP SEARCH INDEX&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_search_index) statement. * &#x60;DROP_SCHEMA&#x60;: [&#x60;DROP SCHEMA&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_schema_statement) statement. * &#x60;DROP_SNAPSHOT_TABLE&#x60;: [&#x60;DROP SNAPSHOT TABLE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_snapshot_table_statement) statement. * &#x60;DROP_ROW_ACCESS_POLICY&#x60;: [&#x60;DROP [ALL] ROW ACCESS POLICY|POLICIES&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#drop_row_access_policy_statement) statement. * &#x60;ALTER_TABLE&#x60;: [&#x60;ALTER TABLE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#alter_table_set_options_statement) statement. * &#x60;ALTER_VIEW&#x60;: [&#x60;ALTER VIEW&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#alter_view_set_options_statement) statement. * &#x60;ALTER_MATERIALIZED_VIEW&#x60;: [&#x60;ALTER MATERIALIZED VIEW&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#alter_materialized_view_set_options_statement) statement. * &#x60;ALTER_SCHEMA&#x60;: [&#x60;ALTER SCHEMA&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#aalter_schema_set_options_statement) statement. * &#x60;SCRIPT&#x60;: [&#x60;SCRIPT&#x60;](/bigquery/docs/reference/standard-sql/procedural-language). * &#x60;TRUNCATE_TABLE&#x60;: [&#x60;TRUNCATE TABLE&#x60;](/bigquery/docs/reference/standard-sql/dml-syntax#truncate_table_statement) statement. * &#x60;CREATE_EXTERNAL_TABLE&#x60;: [&#x60;CREATE EXTERNAL TABLE&#x60;](/bigquery/docs/reference/standard-sql/data-definition-language#create_external_table_statement) statement. * &#x60;EXPORT_DATA&#x60;: [&#x60;EXPORT DATA&#x60;](/bigquery/docs/reference/standard-sql/other-statements#export_data_statement) statement. * &#x60;EXPORT_MODEL&#x60;: [&#x60;EXPORT MODEL&#x60;](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-export-model) statement. * &#x60;LOAD_DATA&#x60;: [&#x60;LOAD DATA&#x60;](/bigquery/docs/reference/standard-sql/other-statements#load_data_statement) statement. * &#x60;CALL&#x60;: [&#x60;CALL&#x60;](/bigquery/docs/reference/standard-sql/procedural-language#call) statement. | [optional] [readonly] 
**timeline** | [**List[QueryTimelineSample]**](QueryTimelineSample.md) | Output only. Describes a timeline of job execution. | [optional] [readonly] 
**total_bytes_billed** | **str** | Output only. If the project is configured to use on-demand pricing, then this field contains the total bytes billed for the job. If the project is configured to use flat-rate pricing, then you are not billed for bytes and this field is informational only. | [optional] [readonly] 
**total_bytes_processed** | **str** | Output only. Total bytes processed for the job. | [optional] [readonly] 
**total_bytes_processed_accuracy** | **str** | Output only. For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost. | [optional] [readonly] 
**total_partitions_processed** | **str** | Output only. Total number of partitions processed from all partitioned tables referenced in the job. | [optional] [readonly] 
**total_slot_ms** | **str** | Output only. Slot-milliseconds for the job. | [optional] [readonly] 
**transferred_bytes** | **str** | Output only. Total bytes transferred for cross-cloud queries such as Cross Cloud Transfer and CREATE TABLE AS SELECT (CTAS). | [optional] [readonly] 
**undeclared_query_parameters** | [**List[QueryParameter]**](QueryParameter.md) | Output only. GoogleSQL only: list of undeclared query parameters detected during a dry run validation. | [optional] [readonly] 
**vector_search_statistics** | [**VectorSearchStatistics**](VectorSearchStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_statistics2 import JobStatistics2

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatistics2 from a JSON string
job_statistics2_instance = JobStatistics2.from_json(json)
# print the JSON string representation of the object
print(JobStatistics2.to_json())

# convert the object into a dict
job_statistics2_dict = job_statistics2_instance.to_dict()
# create an instance of JobStatistics2 from a dict
job_statistics2_from_dict = JobStatistics2.from_dict(job_statistics2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



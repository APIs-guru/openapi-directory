# JobConfigurationTableCopy

JobConfigurationTableCopy configures a job that copies data from one table to another. For more information on copying tables, see [Copy a table](https://cloud.google.com/bigquery/docs/managing-tables#copy-table).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_disposition** | **str** | Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a &#39;notFound&#39; error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. | [optional] 
**destination_encryption_configuration** | [**EncryptionConfiguration**](EncryptionConfiguration.md) |  | [optional] 
**destination_expiration_time** | **str** | Optional. The time when the destination table expires. Expired tables will be deleted and their storage reclaimed. | [optional] 
**destination_table** | [**TableReference**](TableReference.md) |  | [optional] 
**operation_type** | **str** | Optional. Supported operation types in table copy job. | [optional] 
**source_table** | [**TableReference**](TableReference.md) |  | [optional] 
**source_tables** | [**List[TableReference]**](TableReference.md) | [Pick one] Source tables to copy. | [optional] 
**write_disposition** | **str** | Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema and table constraints from the source table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a &#39;duplicate&#39; error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. | [optional] 

## Example

```python
from openapi_client.models.job_configuration_table_copy import JobConfigurationTableCopy

# TODO update the JSON string below
json = "{}"
# create an instance of JobConfigurationTableCopy from a JSON string
job_configuration_table_copy_instance = JobConfigurationTableCopy.from_json(json)
# print the JSON string representation of the object
print(JobConfigurationTableCopy.to_json())

# convert the object into a dict
job_configuration_table_copy_dict = job_configuration_table_copy_instance.to_dict()
# create an instance of JobConfigurationTableCopy from a dict
job_configuration_table_copy_from_dict = JobConfigurationTableCopy.from_dict(job_configuration_table_copy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



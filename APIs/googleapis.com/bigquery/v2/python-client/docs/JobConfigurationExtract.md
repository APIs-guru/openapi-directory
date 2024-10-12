# JobConfigurationExtract

JobConfigurationExtract configures a job that exports data from a BigQuery table into Google Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression** | **str** | Optional. The compression type to use for exported files. Possible values include DEFLATE, GZIP, NONE, SNAPPY, and ZSTD. The default value is NONE. Not all compression formats are support for all file formats. DEFLATE is only supported for Avro. ZSTD is only supported for Parquet. Not applicable when extracting models. | [optional] 
**destination_format** | **str** | Optional. The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET, or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL. | [optional] 
**destination_uri** | **str** | [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written. | [optional] 
**destination_uris** | **List[str]** | [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. | [optional] 
**field_delimiter** | **str** | Optional. When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. Default is &#39;,&#39;. Not applicable when extracting models. | [optional] 
**model_extract_options** | [**ModelExtractOptions**](ModelExtractOptions.md) |  | [optional] 
**print_header** | **bool** | Optional. Whether to print out a header row in the results. Default is true. Not applicable when extracting models. | [optional] [default to True]
**source_model** | [**ModelReference**](ModelReference.md) |  | [optional] 
**source_table** | [**TableReference**](TableReference.md) |  | [optional] 
**use_avro_logical_types** | **bool** | Whether to use logical types when extracting to AVRO format. Not applicable when extracting models. | [optional] 

## Example

```python
from openapi_client.models.job_configuration_extract import JobConfigurationExtract

# TODO update the JSON string below
json = "{}"
# create an instance of JobConfigurationExtract from a JSON string
job_configuration_extract_instance = JobConfigurationExtract.from_json(json)
# print the JSON string representation of the object
print(JobConfigurationExtract.to_json())

# convert the object into a dict
job_configuration_extract_dict = job_configuration_extract_instance.to_dict()
# create an instance of JobConfigurationExtract from a dict
job_configuration_extract_from_dict = JobConfigurationExtract.from_dict(job_configuration_extract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



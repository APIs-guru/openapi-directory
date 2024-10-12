# PrestoJob

A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_tags** | **List[str]** | Optional. Presto client tags to attach to this query | [optional] 
**continue_on_failure** | **bool** | Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**output_format** | **str** | Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI | [optional] 
**query_file_uri** | **str** | The HCFS URI of the script that contains SQL queries. | [optional] 
**query_list** | [**QueryList**](QueryList.md) |  | [optional] 

## Example

```python
from openapi_client.models.presto_job import PrestoJob

# TODO update the JSON string below
json = "{}"
# create an instance of PrestoJob from a JSON string
presto_job_instance = PrestoJob.from_json(json)
# print the JSON string representation of the object
print(PrestoJob.to_json())

# convert the object into a dict
presto_job_dict = presto_job_instance.to_dict()
# create an instance of PrestoJob from a dict
presto_job_from_dict = PrestoJob.from_dict(presto_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TrinoJob

A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_tags** | **List[str]** | Optional. Trino client tags to attach to this query | [optional] 
**continue_on_failure** | **bool** | Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**output_format** | **str** | Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI | [optional] 
**query_file_uri** | **str** | The HCFS URI of the script that contains SQL queries. | [optional] 
**query_list** | [**QueryList**](QueryList.md) |  | [optional] 

## Example

```python
from openapi_client.models.trino_job import TrinoJob

# TODO update the JSON string below
json = "{}"
# create an instance of TrinoJob from a JSON string
trino_job_instance = TrinoJob.from_json(json)
# print the JSON string representation of the object
print(TrinoJob.to_json())

# convert the object into a dict
trino_job_dict = trino_job_instance.to_dict()
# create an instance of TrinoJob from a dict
trino_job_from_dict = TrinoJob.from_dict(trino_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



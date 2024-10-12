# PigJob

A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continue_on_failure** | **bool** | Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. | [optional] 
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code. | [optional] 
**query_file_uri** | **str** | The HCFS URI of the script that contains the Pig queries. | [optional] 
**query_list** | [**QueryList**](QueryList.md) |  | [optional] 
**script_variables** | **Dict[str, str]** | Optional. Mapping of query variable names to values (equivalent to the Pig command: name&#x3D;[value]). | [optional] 

## Example

```python
from openapi_client.models.pig_job import PigJob

# TODO update the JSON string below
json = "{}"
# create an instance of PigJob from a JSON string
pig_job_instance = PigJob.from_json(json)
# print the JSON string representation of the object
print(PigJob.to_json())

# convert the object into a dict
pig_job_dict = pig_job_instance.to_dict()
# create an instance of PigJob from a dict
pig_job_from_dict = PigJob.from_dict(pig_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



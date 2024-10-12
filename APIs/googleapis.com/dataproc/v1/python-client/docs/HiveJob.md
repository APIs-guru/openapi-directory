# HiveJob

A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continue_on_failure** | **bool** | Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. | [optional] 
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs. | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code. | [optional] 
**query_file_uri** | **str** | The HCFS URI of the script that contains Hive queries. | [optional] 
**query_list** | [**QueryList**](QueryList.md) |  | [optional] 
**script_variables** | **Dict[str, str]** | Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name&#x3D;\&quot;value\&quot;;). | [optional] 

## Example

```python
from openapi_client.models.hive_job import HiveJob

# TODO update the JSON string below
json = "{}"
# create an instance of HiveJob from a JSON string
hive_job_instance = HiveJob.from_json(json)
# print the JSON string representation of the object
print(HiveJob.to_json())

# convert the object into a dict
hive_job_dict = hive_job_instance.to_dict()
# create an instance of HiveJob from a dict
hive_job_from_dict = HiveJob.from_dict(hive_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



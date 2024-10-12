# HiveJobProperties

Hive job properties used when retrieving Hive jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executed_statement_count** | **int** | the number of statements that have been run based on the script | [optional] [readonly] 
**logs_location** | **str** | the Hive logs location | [optional] [readonly] 
**output_location** | **str** | the location of Hive job output files (both execution output and results) | [optional] [readonly] 
**statement_count** | **int** | the number of statements that will be run based on the script | [optional] [readonly] 

## Example

```python
from openapi_client.models.hive_job_properties import HiveJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HiveJobProperties from a JSON string
hive_job_properties_instance = HiveJobProperties.from_json(json)
# print the JSON string representation of the object
print(HiveJobProperties.to_json())

# convert the object into a dict
hive_job_properties_dict = hive_job_properties_instance.to_dict()
# create an instance of HiveJobProperties from a dict
hive_job_properties_from_dict = HiveJobProperties.from_dict(hive_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



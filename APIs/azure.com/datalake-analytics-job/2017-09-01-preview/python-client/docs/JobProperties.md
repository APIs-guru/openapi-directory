# JobProperties

The common Data Lake Analytics job properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runtime_version** | **str** | The runtime version of the Data Lake Analytics engine to use for the specific type of job being run. | [optional] 
**script** | **str** | The script to run. Please note that the maximum script size is 3 MB. | 
**type** | **str** | The job type of the current job (Hive, USql, or Scope (for internal use only)). | 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateJobProperties

The common Data Lake Analytics job properties for job submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runtime_version** | **str** | the runtime version of the Data Lake Analytics engine to use for the specific type of job being run. | [optional] 
**script** | **str** | the script to run. Please note that the maximum script size is 3 MB. | 
**type** | **str** | the job type of the current job (i.e. USql). | 

## Example

```python
from openapi_client.models.create_job_properties import CreateJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateJobProperties from a JSON string
create_job_properties_instance = CreateJobProperties.from_json(json)
# print the JSON string representation of the object
print(CreateJobProperties.to_json())

# convert the object into a dict
create_job_properties_dict = create_job_properties_instance.to_dict()
# create an instance of CreateJobProperties from a dict
create_job_properties_from_dict = CreateJobProperties.from_dict(create_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



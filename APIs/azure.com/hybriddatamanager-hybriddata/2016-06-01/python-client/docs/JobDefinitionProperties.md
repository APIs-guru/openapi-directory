# JobDefinitionProperties

Job Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_secrets** | [**List[CustomerSecret]**](CustomerSecret.md) | List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. | [optional] 
**data_service_input** | **object** | A generic json used differently by each data service type. | [optional] 
**data_sink_id** | **str** | Data Sink Id associated to the job definition. | 
**data_source_id** | **str** | Data Source Id associated to the job definition. | 
**last_modified_time** | **datetime** | Last modified time of the job definition. | [optional] 
**run_location** | **str** | This is the preferred geo location for the job to run. | [optional] 
**schedules** | [**List[Schedule]**](Schedule.md) | Schedule for running the job definition | [optional] 
**state** | **str** | State of the job definition. | 
**user_confirmation** | **str** | Enum to detect if user confirmation is required. If not passed will default to NotRequired. | [optional] [default to 'NotRequired']

## Example

```python
from openapi_client.models.job_definition_properties import JobDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobDefinitionProperties from a JSON string
job_definition_properties_instance = JobDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(JobDefinitionProperties.to_json())

# convert the object into a dict
job_definition_properties_dict = job_definition_properties_instance.to_dict()
# create an instance of JobDefinitionProperties from a dict
job_definition_properties_from_dict = JobDefinitionProperties.from_dict(job_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



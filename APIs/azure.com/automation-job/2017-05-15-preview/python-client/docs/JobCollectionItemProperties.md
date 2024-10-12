# JobCollectionItemProperties

Job collection item properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | The creation time of the job. | [optional] [readonly] 
**end_time** | **datetime** | The end time of the job. | [optional] [readonly] 
**job_id** | **str** | The id of the job. | [optional] [readonly] 
**last_modified_time** | **datetime** | The last modified time of the job. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of a resource. | [optional] [readonly] 
**run_on** | **str** | Specifies the runOn group name where the job was executed. | [optional] 
**runbook** | [**RunbookAssociationProperty**](RunbookAssociationProperty.md) |  | [optional] 
**start_time** | **datetime** | The start time of the job. | [optional] [readonly] 
**status** | **str** | The status of the job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_collection_item_properties import JobCollectionItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobCollectionItemProperties from a JSON string
job_collection_item_properties_instance = JobCollectionItemProperties.from_json(json)
# print the JSON string representation of the object
print(JobCollectionItemProperties.to_json())

# convert the object into a dict
job_collection_item_properties_dict = job_collection_item_properties_instance.to_dict()
# create an instance of JobCollectionItemProperties from a dict
job_collection_item_properties_from_dict = JobCollectionItemProperties.from_dict(job_collection_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



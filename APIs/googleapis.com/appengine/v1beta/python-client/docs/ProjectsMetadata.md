# ProjectsMetadata

ProjectsMetadata is the metadata CCFE stores about the all the relevant projects (tenant, consumer, producer).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_project_id** | **str** | The consumer project id. | [optional] 
**consumer_project_number** | **str** | The consumer project number. | [optional] 
**consumer_project_state** | **str** | The CCFE state of the consumer project. It is the same state that is communicated to the CLH during project events. Notice that this field is not set in the DB, it is only set in this proto when communicated to CLH in the side channel. | [optional] 
**p4_service_account** | **str** | The service account authorized to operate on the consumer project. Note: CCFE only propagates P4SA with default tag to CLH. | [optional] 
**producer_project_id** | **str** | The producer project id. | [optional] 
**producer_project_number** | **str** | The producer project number. | [optional] 
**tenant_project_id** | **str** | The tenant project id. | [optional] 
**tenant_project_number** | **str** | The tenant project number. | [optional] 

## Example

```python
from openapi_client.models.projects_metadata import ProjectsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsMetadata from a JSON string
projects_metadata_instance = ProjectsMetadata.from_json(json)
# print the JSON string representation of the object
print(ProjectsMetadata.to_json())

# convert the object into a dict
projects_metadata_dict = projects_metadata_instance.to_dict()
# create an instance of ProjectsMetadata from a dict
projects_metadata_from_dict = ProjectsMetadata.from_dict(projects_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



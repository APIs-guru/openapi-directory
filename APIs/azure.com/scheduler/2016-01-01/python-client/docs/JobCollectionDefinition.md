# JobCollectionDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets the job collection resource identifier. | [optional] [readonly] 
**location** | **str** | Gets or sets the storage account location. | [optional] 
**name** | **str** | Gets or sets the job collection resource name. | [optional] 
**properties** | [**JobCollectionProperties**](JobCollectionProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets the tags. | [optional] 
**type** | **str** | Gets the job collection resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_collection_definition import JobCollectionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of JobCollectionDefinition from a JSON string
job_collection_definition_instance = JobCollectionDefinition.from_json(json)
# print the JSON string representation of the object
print(JobCollectionDefinition.to_json())

# convert the object into a dict
job_collection_definition_dict = job_collection_definition_instance.to_dict()
# create an instance of JobCollectionDefinition from a dict
job_collection_definition_from_dict = JobCollectionDefinition.from_dict(job_collection_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SourceDefinitionRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker_image_tag** | **str** |  | 
**docker_repository** | **str** |  | 
**documentation_url** | **str** |  | [optional] 
**icon** | **str** |  | [optional] 
**name** | **str** |  | 
**protocol_version** | **str** | The Airbyte Protocol version supported by the connector | [optional] 
**release_date** | **date** | The date when this connector was first released, in yyyy-mm-dd format. | [optional] 
**release_stage** | [**ReleaseStage**](ReleaseStage.md) |  | [optional] 
**resource_requirements** | [**ActorDefinitionResourceRequirements**](ActorDefinitionResourceRequirements.md) |  | [optional] 
**source_definition_id** | **str** |  | 
**source_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.source_definition_read import SourceDefinitionRead

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDefinitionRead from a JSON string
source_definition_read_instance = SourceDefinitionRead.from_json(json)
# print the JSON string representation of the object
print(SourceDefinitionRead.to_json())

# convert the object into a dict
source_definition_read_dict = source_definition_read_instance.to_dict()
# create an instance of SourceDefinitionRead from a dict
source_definition_read_from_dict = SourceDefinitionRead.from_dict(source_definition_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DestinationDefinitionRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition_id** | **str** |  | 
**docker_image_tag** | **str** |  | 
**docker_repository** | **str** |  | 
**documentation_url** | **str** |  | 
**icon** | **str** |  | [optional] 
**name** | **str** |  | 
**normalization_config** | [**NormalizationDestinationDefinitionConfig**](NormalizationDestinationDefinitionConfig.md) |  | 
**protocol_version** | **str** | The Airbyte Protocol version supported by the connector | [optional] 
**release_date** | **date** | The date when this connector was first released, in yyyy-mm-dd format. | [optional] 
**release_stage** | [**ReleaseStage**](ReleaseStage.md) |  | [optional] 
**resource_requirements** | [**ActorDefinitionResourceRequirements**](ActorDefinitionResourceRequirements.md) |  | [optional] 
**supports_dbt** | **bool** | an optional flag indicating whether DBT is used in the normalization. If the flag value is NULL - DBT is not used. | 

## Example

```python
from openapi_client.models.destination_definition_read import DestinationDefinitionRead

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDefinitionRead from a JSON string
destination_definition_read_instance = DestinationDefinitionRead.from_json(json)
# print the JSON string representation of the object
print(DestinationDefinitionRead.to_json())

# convert the object into a dict
destination_definition_read_dict = destination_definition_read_instance.to_dict()
# create an instance of DestinationDefinitionRead from a dict
destination_definition_read_from_dict = DestinationDefinitionRead.from_dict(destination_definition_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



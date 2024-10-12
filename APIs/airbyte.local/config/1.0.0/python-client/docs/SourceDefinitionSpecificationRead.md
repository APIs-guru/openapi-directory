# SourceDefinitionSpecificationRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_auth** | [**AdvancedAuth**](AdvancedAuth.md) |  | [optional] 
**auth_specification** | [**AuthSpecification**](AuthSpecification.md) |  | [optional] 
**connection_specification** | **object** | The specification for what values are required to configure the sourceDefinition. | [optional] 
**documentation_url** | **str** |  | [optional] 
**job_info** | [**SynchronousJobRead**](SynchronousJobRead.md) |  | 
**source_definition_id** | **str** |  | 

## Example

```python
from openapi_client.models.source_definition_specification_read import SourceDefinitionSpecificationRead

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDefinitionSpecificationRead from a JSON string
source_definition_specification_read_instance = SourceDefinitionSpecificationRead.from_json(json)
# print the JSON string representation of the object
print(SourceDefinitionSpecificationRead.to_json())

# convert the object into a dict
source_definition_specification_read_dict = source_definition_specification_read_instance.to_dict()
# create an instance of SourceDefinitionSpecificationRead from a dict
source_definition_specification_read_from_dict = SourceDefinitionSpecificationRead.from_dict(source_definition_specification_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



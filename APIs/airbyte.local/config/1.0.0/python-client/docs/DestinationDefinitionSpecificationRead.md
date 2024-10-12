# DestinationDefinitionSpecificationRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_auth** | [**AdvancedAuth**](AdvancedAuth.md) |  | [optional] 
**auth_specification** | [**AuthSpecification**](AuthSpecification.md) |  | [optional] 
**connection_specification** | **object** | The specification for what values are required to configure the destinationDefinition. | [optional] 
**destination_definition_id** | **str** |  | 
**documentation_url** | **str** |  | [optional] 
**job_info** | [**SynchronousJobRead**](SynchronousJobRead.md) |  | 
**supported_destination_sync_modes** | [**List[DestinationSyncMode]**](DestinationSyncMode.md) |  | [optional] 

## Example

```python
from openapi_client.models.destination_definition_specification_read import DestinationDefinitionSpecificationRead

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDefinitionSpecificationRead from a JSON string
destination_definition_specification_read_instance = DestinationDefinitionSpecificationRead.from_json(json)
# print the JSON string representation of the object
print(DestinationDefinitionSpecificationRead.to_json())

# convert the object into a dict
destination_definition_specification_read_dict = destination_definition_specification_read_instance.to_dict()
# create an instance of DestinationDefinitionSpecificationRead from a dict
destination_definition_specification_read_from_dict = DestinationDefinitionSpecificationRead.from_dict(destination_definition_specification_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



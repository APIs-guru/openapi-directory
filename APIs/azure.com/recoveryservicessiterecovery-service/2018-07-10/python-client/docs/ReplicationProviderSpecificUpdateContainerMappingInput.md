# ReplicationProviderSpecificUpdateContainerMappingInput

Provider specific input for update pairing operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.replication_provider_specific_update_container_mapping_input import ReplicationProviderSpecificUpdateContainerMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProviderSpecificUpdateContainerMappingInput from a JSON string
replication_provider_specific_update_container_mapping_input_instance = ReplicationProviderSpecificUpdateContainerMappingInput.from_json(json)
# print the JSON string representation of the object
print(ReplicationProviderSpecificUpdateContainerMappingInput.to_json())

# convert the object into a dict
replication_provider_specific_update_container_mapping_input_dict = replication_provider_specific_update_container_mapping_input_instance.to_dict()
# create an instance of ReplicationProviderSpecificUpdateContainerMappingInput from a dict
replication_provider_specific_update_container_mapping_input_from_dict = ReplicationProviderSpecificUpdateContainerMappingInput.from_dict(replication_provider_specific_update_container_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


